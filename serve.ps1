# Serves this folder at http://localhost:8080  (run:  powershell -ExecutionPolicy Bypass -File serve.ps1)
param([int]$Port = 8080)
$root = $PSScriptRoot
$types = @{ '.html'='text/html; charset=utf-8'; '.css'='text/css; charset=utf-8'; '.js'='text/javascript; charset=utf-8';
            '.json'='application/json'; '.md'='text/plain; charset=utf-8'; '.sql'='text/plain; charset=utf-8';
            '.png'='image/png'; '.jpg'='image/jpeg'; '.jpeg'='image/jpeg'; '.webp'='image/webp'; '.svg'='image/svg+xml'; '.ico'='image/x-icon' }
$images = '.png', '.jpg', '.jpeg', '.webp', '.svg', '.ico'
$l = New-Object System.Net.HttpListener
$l.Prefixes.Add("http://localhost:$Port/")
$l.Start()
Write-Host "Serving $root at http://localhost:$Port/"
while ($l.IsListening) {
  $ctx = $l.GetContext()
  $req = $ctx.Request; $res = $ctx.Response
  try {
    $path = [Uri]::UnescapeDataString($req.Url.AbsolutePath).TrimStart('/')
    if ($path -eq '') { $path = 'index.html' }
    $file = [IO.Path]::GetFullPath((Join-Path $root $path))
    if ($file.StartsWith($root) -and (Test-Path $file -PathType Leaf)) {
      $info = Get-Item $file
      $ext = $info.Extension.ToLower()
      $etag = '"' + $info.Length.ToString('x') + '-' + $info.LastWriteTimeUtc.Ticks.ToString('x') + '"'
      $res.ContentType = $(if ($types[$ext]) { $types[$ext] } else { 'application/octet-stream' })
      $res.AddHeader('ETag', $etag)
      $res.AddHeader('Last-Modified', $info.LastWriteTimeUtc.ToString('R'))
      # Pictures: keep in the browser for 30 days. Pages/code: always check for a newer version (cheap 304 if unchanged).
      if ($images -contains $ext) { $res.AddHeader('Cache-Control', 'public, max-age=2592000') }
      else { $res.AddHeader('Cache-Control', 'no-cache') }
      if ($req.Headers['If-None-Match'] -eq $etag) {
        $res.StatusCode = 304
      } else {
        $bytes = [IO.File]::ReadAllBytes($file)
        $res.ContentLength64 = $bytes.Length
        if ($req.HttpMethod -ne 'HEAD') { $res.OutputStream.Write($bytes, 0, $bytes.Length) }
      }
    } else { $res.StatusCode = 404 }
  } catch {} finally { try { $res.Close() } catch {} }
}
