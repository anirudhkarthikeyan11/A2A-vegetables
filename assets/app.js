(function () {
  'use strict';

  var IMG = 'assets/img/';
  var VEGGIES = [
    { name: 'Tomato', local: 'തക്കാളി', price: 30, unit: 'kg', cat: 'staples', img: IMG + 'tomato.jpg', desc: "Firm, ripe tomatoes from this morning's lot. Good for gravies, chutneys and the lunchbox salad." },
    { name: 'Onion', local: 'സവാള', price: 40, unit: 'kg', cat: 'staples', img: IMG + 'onion-plate.jpg', desc: 'Dry, clean bulbs with the tops trimmed short. Keeps well for weeks in a cool, dark pantry.' },
    { name: 'Potato', local: 'ഉരുളക്കിഴങ്ങ്', price: 35, unit: 'kg', cat: 'staples', img: IMG + 'potato.jpg', desc: 'Firm potatoes brushed clean, no green patches. Boils dry for fries, holds shape in sambar.' },
    { name: 'Green Chilli', local: 'പച്ചമുളക്', price: 80, unit: 'kg', cat: 'staples', img: IMG + 'green-chilli.jpg', desc: 'Thin, sharp chillies picked this morning. A little goes a long way in the tempering.' },
    { name: 'Brinjal', local: 'വഴുതനങ്ങ', price: 55, unit: 'kg', cat: 'staples', img: IMG + 'brinjal-plant.png', desc: 'Glossy, tight-skinned brinjals — best when the skin springs back at a press.' },
    { name: 'Cucumber', local: 'വെള്ളരിക്ക', price: 30, unit: 'kg', cat: 'staples', img: IMG + 'cucumber-pile.png', desc: 'Cool, watery cucumbers for pachadi, raita and the salad box. Sold by weight.' },
    { name: 'Capsicum', local: 'ക്യാപ്സിക്കം', price: 60, unit: 'kg', cat: 'staples', img: IMG + 'capsicum-plant.jpg', desc: 'Crunchy green capsicum with thick walls. Slices clean for stir-fries and biryani.' },
    { name: 'Spinach', local: 'പാലക്ക് ചീര', price: 20, unit: 'bunch', cat: 'greens', img: IMG + 'spinach-bunch.jpg', desc: 'A fresh bunch of palak with the roots trimmed. Goes soft quickly in a hot pan.' },
    { name: 'Cabbage', local: 'മുട്ടക്കോസ്', price: 35, unit: 'piece', cat: 'greens', img: IMG + 'cabbage-field.jpg', desc: 'Tight, heavy heads that feel solid in the hand. Crisp for poriyal, soft for a slow curry.' },
    { name: 'Coriander', local: 'മല്ലിയില', price: 15, unit: 'bunch', cat: 'greens', img: IMG + 'coriander.jpg', desc: 'Fragrant coriander bunches, stems on. Wash, dry and chill to keep the leaves perky.' },
    { name: 'Green Mango', local: 'പച്ചമാങ്ങ', price: 90, unit: 'kg', cat: 'exotic', img: IMG + 'green-mango.jpg', desc: 'Hard green mangoes for pachadi, pickle and the salt-and-chilli snack.' },
    { name: 'Carrot', local: 'കാരറ്റ്', price: 45, unit: 'kg', cat: 'roots', img: IMG + 'carrot.jpg', desc: 'Snappy carrots with a bright core. Sweet enough to eat raw, firm enough to grate.' },
    { name: 'Beetroot', local: 'ബീറ്റ്റൂട്ട്', price: 40, unit: 'kg', cat: 'roots', img: IMG + 'beetroot-cut.jpg', desc: 'Deep-red beetroots with clean rings. Roast or boil — the skin slips right off.' },
    { name: 'Garlic', local: 'വെളുത്തുള്ളി', price: 120, unit: 'kg', cat: 'roots', img: IMG + 'garlic-bulbs.png', desc: 'Plump, dry bulbs sold by weight so you get exactly the pods you need.' },
    { name: 'Ginger', local: 'ഇഞ്ചി', price: 90, unit: 'kg', cat: 'roots', img: IMG + 'ginger-root.jpg', desc: 'Fresh ginger with a juicy snap. Grate it for chai, slice it for the tempering.' },
    { name: 'Broccoli', local: 'ബ്രോക്കോളി', price: 120, unit: 'kg', cat: 'exotic', img: IMG + 'broccoli-florets.jpg', desc: 'Tight green florets, cut to order at the counter. Steam three minutes, no more.' },
    { name: 'Drumstick', local: 'മുരിങ്ങക്കായ', price: 60, unit: 'kg', cat: 'roots', img: IMG + 'drumstick-bunch.jpg', desc: 'Long drumsticks with fat seeds inside — the classic sambar stick.' },
    { name: 'Mushroom', local: 'കൂൺ', price: 90, unit: '250 g', cat: 'exotic', img: IMG + 'mushroom-board.jpg', desc: 'Button mushrooms in clean, dry trays. Ready for the masala, no washing needed.' }
  ];
  // Photo version: change this number after replacing photos so every browser loads the new ones at once
  var PHOTO_VERSION = '4';
  VEGGIES.forEach(function (v) { v.img += '?v=' + PHOTO_VERSION; });

  var CATS = [
    { id: 'all', label: 'All veggies', icon: '🧺' },
    { id: 'staples', label: 'Everyday staples', icon: '🍅' },
    { id: 'greens', label: 'Leafy greens', icon: '🥬' },
    { id: 'roots', label: 'Roots & spices', icon: '🥕' },
    { id: 'exotic', label: 'Exotic picks', icon: '🥦' }
  ];

  // ---------- helpers (same rules as the original) ----------
  function qtyOptions(v) {
    if (v.unit === 'kg') return [{ label: '250 g', qty: .25 }, { label: '500 g', qty: .5 }, { label: '1 kg', qty: 1 }, { label: '2 kg', qty: 2 }];
    if (v.unit === '250 g') return [{ label: '250 g', qty: 1 }, { label: '500 g', qty: 2 }, { label: '750 g', qty: 3 }];
    if (v.unit === 'bunch') return [{ label: '1 bunch', qty: 1 }, { label: '2 bunches', qty: 2 }, { label: '3 bunches', qty: 3 }];
    return [{ label: '1 piece', qty: 1 }, { label: '2 pieces', qty: 2 }, { label: '3 pieces', qty: 3 }];
  }
  function step(v) { return v.unit === 'kg' ? .25 : 1; }
  // How many times an item was added (each + press = 1), shown instead of kg / g
  function addedCount(v, q) { var p = packs[v.name]; return p ? p.length : (q > 0 ? 1 : 0); }
  function fmtQty(v, q) {
    var n = Math.round(q * 1e3) / 1e3;
    if (v.unit === 'kg') return n < 1 ? Math.round(n * 1e3) + ' g' : n + ' kg';
    if (v.unit === '250 g') return Math.round(n * 250) + ' g';
    if (n === 1) return '1 ' + v.unit;
    return n + ' ' + (v.unit === 'bunch' ? 'bunches' : v.unit === 'piece' ? 'pieces' : v.unit + 's');
  }
  function money(n) { return '₹' + (Number.isInteger(n) ? n : n.toFixed(2)); }
  // A short shop-style description when the owner doesn't write one (picked by category, varied by name)
  function autoDescription(v) {
    var n = String(v.name || 'This vegetable'), l = n.toLowerCase();
    var by = {
      staples: [
        n + ' from this morning\'s market: fresh, firm and ready for everyday cooking.',
        'Fresh ' + l + ', hand-picked at sunrise. Great for curries, stir-fries and the daily meal.',
        'Clean, fresh ' + l + ' straight from the morning lot. A kitchen staple you can count on.'
      ],
      greens: [
        'A fresh bunch of ' + l + ', washed and trimmed. Cook it the same day for the brightest flavour.',
        'Tender ' + l + ' picked this morning. Wrap it in a damp cloth and it stays crisp.',
        'Leafy, green and fresh: ' + l + ' from today\'s lot, perfect for thoran and dal.'
      ],
      roots: [
        'Firm, earthy ' + l + ' picked for freshness. Keeps well in a cool, dry place.',
        'Fresh ' + l + ' with a clean snap. Perfect for sambar, curries and the tempering.',
        'Hand-picked ' + l + ', brushed clean. Full of flavour and keeps for days.'
      ],
      exotic: [
        'Fresh ' + l + ', hand-picked for something special: lovely in salads, stir-fries and soups.',
        'Hand-picked ' + l + ' from this morning\'s lot. A fresh change from the everyday basket.',
        'Crisp, fresh ' + l + ' chosen with care. Cook it lightly to keep its colour and crunch.'
      ]
    };
    var opts = by[v.cat] || by.staples, h = 0;
    for (var i = 0; i < l.length; i++) h = (h * 31 + l.charCodeAt(i)) >>> 0;
    return opts[h % opts.length];
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function byName(n) { for (var i = 0; i < VEGGIES.length; i++) if (VEGGIES[i].name === n) return VEGGIES[i]; }
  function $(id) { return document.getElementById(id); }
  function el(html) { var t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstChild; }

  // ---------- state ----------
  var cat = 'all', query = '', basket = {}, order = [], popKey = 0;
  var sheetVeg = null, sheetQty = 1, sheetAdded = false, sheetTimer = 0, sheetPrevFocus = null;

  // ---------- typewriter text ----------
  document.querySelectorAll('[data-type]').forEach(function (host) {
    var text = host.getAttribute('data-type'), base = +host.dataset.base, speed = +host.dataset.speed;
    var words = text.split(' '), idx = 0, html = '';
    words.forEach(function (w, wi) {
      html += '<span class="type-word">';
      w.split('').forEach(function (ch) { html += '<span class="type-char" style="animation-delay:' + (base + idx * speed) + 'ms">' + esc(ch) + '</span>'; idx++; });
      html += '</span>' + (wi < words.length - 1 ? ' ' : '');
    });
    html += '<span class="type-caret" style="animation-delay:' + (base + idx * speed + 140) + 'ms"></span>';
    host.setAttribute('aria-hidden', 'true');
    host.innerHTML = html;
  });

  // ---------- reveal on scroll ----------
  function observeReveal(root) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: .12 });
    (root || document).querySelectorAll('.reveal:not(.in)').forEach(function (n) { io.observe(n); });
  }
  observeReveal();
  // pause the always-running decorations while the browser tab is in the background
  function syncTabHidden() { document.documentElement.classList.toggle('tab-hidden', document.hidden); }
  document.addEventListener('visibilitychange', syncTabHidden); syncTabHidden();

  // ---------- pause floating animations in sections that are off screen ----------
  if ('IntersectionObserver' in window) {
    var animIO = new IntersectionObserver(function (es) {
      es.forEach(function (e) { e.target.classList.toggle('anim-off', !e.isIntersecting); });
    }, { rootMargin: '200px 0px' });
    ['top', 'shop', 'why', 'visit'].forEach(function (id) { var s = $(id); if (s) animIO.observe(s); });
  }

  // ---------- scroll: header compaction + hero parallax ----------
  var nav = $('nav'), hero = $('heroParallax'), raf = 0, scrolled = false;

  // ---------- cart button: appears bottom-right once you scroll down (the header Basket stays put) ----------
  var body = document.body, docked = false;
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function setDocked(on) {
    if (on === docked) return;
    docked = on;
    body.classList.toggle('show-cart', on);
  }

  function onScroll() {
    raf = 0;
    var y = window.scrollY, s = y > 20;
    if (s !== scrolled) { scrolled = s; nav.classList.toggle('py-2', s); }
    setDocked(y > 120);
    if (hero && y < window.innerHeight * 1.5) hero.style.transform = 'translate3d(0, ' + (y * .15).toFixed(1) + 'px, 0)';
  }
  onScroll();
  window.addEventListener('scroll', function () { if (!raf) raf = requestAnimationFrame(onScroll); }, { passive: true });

  // ---------- hamburger menu ----------
  var menuWrap = $('menuWrap'), menuBtn = $('menuBtn'), menu = $('menu'), bars = menuWrap.querySelectorAll('.mbar');
  function setMenu(open) {
    menu.hidden = !open;
    menuBtn.setAttribute('aria-expanded', open);
    bars[0].classList.toggle('translate-y-1.5', open); bars[0].classList.toggle('rotate-45', open);
    bars[1].classList.toggle('opacity-0', open);
    bars[2].classList.toggle('-translate-y-1.5', open); bars[2].classList.toggle('-rotate-45', open);
  }
  // ☰ opens the shop owner login (or the dashboard when already logged in as owner)
  // ☰ opens the side menu (shop links, basket, shop owner login)
  menuBtn.addEventListener('click', function () { setSide(true); });
  menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('mousedown', function (e) { if (!menu.hidden && !menuWrap.contains(e.target)) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !menu.hidden) setMenu(false); });

  // ---------- backend (Supabase) ----------
  var cfg = window.A2A_CONFIG || {};
  var sb = (cfg.supabaseUrl && cfg.supabaseAnonKey && window.supabase)
    ? window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey) : null;
  var BASE_VEG = VEGGIES.slice(), allVeg = VEGGIES.slice(), currentUser = null, isOwner = false;

  // ---------- popup helper: scroll lock, Esc closes the top popup, smooth close animation ----------
  var lockCount = 0, lockSaved = '', modalStack = [];
  function lockScroll() { if (lockCount++ === 0) { lockSaved = document.body.style.overflow; document.body.style.overflow = 'hidden'; } }
  function unlockScroll() { if (lockCount > 0 && --lockCount === 0) document.body.style.overflow = lockSaved; }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalStack.length) modalStack[modalStack.length - 1](false);
  });
  function modal(node) {
    var timer = 0;
    function isOpen() { return !node.hidden && !node.classList.contains('is-closing'); }
    function set(open) {
      if (open === isOpen()) return;
      clearTimeout(timer);
      if (open) {
        var wasHidden = node.hidden;
        node.classList.remove('is-closing');
        node.hidden = false;
        if (wasHidden) lockScroll();
        modalStack.push(set);
      } else {
        modalStack = modalStack.filter(function (f) { return f !== set; });
        node.classList.add('is-closing');
        timer = setTimeout(function () {
          node.hidden = true;
          node.classList.remove('is-closing');
          unlockScroll();
        }, reduceMotion ? 0 : 300);
      }
    }
    return set;
  }

  // ---------- shop owner account ----------
  // Only these emails get the dashboard (all lower case).
  var OWNER_EMAILS = ['anirudhkarthikeyan25@gmail.com', 'surekhamooliyil@gmail.com'];
  // SHA-256 fingerprint of the owner password (the password itself is not stored in the site).
  var OWNER_PASS_SHA256 = '2c679a7e56076005a59081a37b0e4a7be7139fa098d3f181debd1eb228a9f319';
  var LOCAL_SESSION_KEY = 'a2a-owner', LOCAL_PRICES_KEY = 'a2a-local-prices';

  function store(kind) { try { return window[kind]; } catch (e) { return null; } }
  function readJSON(kind, key) { try { return JSON.parse(store(kind).getItem(key)) || null; } catch (e) { return null; } }
  function writeJSON(kind, key, val) { try { store(kind).setItem(key, JSON.stringify(val)); return true; } catch (e) { return false; } }
  function removeKey(kind, key) { try { store(kind).removeItem(key); } catch (e) {} }
  async function sha256(text) {
    var buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
    return Array.prototype.map.call(new Uint8Array(buf), function (b) { return ('0' + b.toString(16)).slice(-2); }).join('');
  }
  function isOwnerEmail(email) { return OWNER_EMAILS.indexOf(String(email || '').trim().toLowerCase()) !== -1; }

  function openOwnerArea() { if (isOwner) openDash(); else setOwnerLogin(true); }
  function renderMenuAuth() {
    menuBtn.setAttribute('aria-label', 'Open menu');
    $('sideOwner').innerHTML = isOwner
      ? '<button type="button" class="side-item" data-sm="dash"><span class="side-ic">📊</span>Owner dashboard</button>' +
        '<button type="button" class="side-item side-item-quiet" data-sm="signout"><span class="side-ic">🚪</span>Sign out</button>'
      : '<button type="button" class="side-item" data-sm="owner"><span class="side-ic">🔑</span>Log in as shop owner</button>';
  }

  // ---------- side menu ----------
  var sideMenu = $('sideMenu'), setSide = modal(sideMenu);
  sideMenu.addEventListener('click', function (e) {
    var t = e.target.closest('[data-sm]'); if (!t) return;
    var act = t.dataset.sm;
    if (act === 'go') e.preventDefault();
    setSide(false);
    // wait for the menu to slide away (and the page to unlock) before the next step
    setTimeout(function () {
      if (act === 'go') { var target = document.querySelector(t.getAttribute('href')); if (target) target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' }); }
      else if (act === 'basket') setBasket(true);
      else if (act === 'owner') setOwnerLogin(true);
      else if (act === 'dash') openDash();
      else if (act === 'signout') signOut();
      else if (act === 'app') menuDownload();
    }, act === 'close' ? 0 : 320);
  });

  // ---------- shop owner login popup ----------
  var ownerLogin = $('ownerLogin'), setOwnerLoginRaw = modal(ownerLogin);
  function setOwnerLogin(open) {
    setOwnerLoginRaw(open);
    if (open) { $('ownerMsg').textContent = ''; $('ownerMsg').classList.remove('is-error'); $('ownerEmail').focus(); }
  }
  ownerLogin.addEventListener('click', function (e) { if (e.target.closest('[data-ol="close"]')) setOwnerLogin(false); });
  $('ownerPassToggle').addEventListener('click', function () {
    var p = $('ownerPass'), show = p.type === 'password';
    p.type = show ? 'text' : 'password';
    this.textContent = show ? '🙈' : '👁️';
    this.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
  });
  $('ownerForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    var msg = $('ownerMsg'), btn = $('ownerSubmit');
    var email = $('ownerEmail').value.trim(), pass = $('ownerPass').value;
    function fail(t) { msg.textContent = t; msg.classList.add('is-error'); ownerLogin.querySelector('form').classList.remove('shake'); void ownerLogin.offsetWidth; ownerLogin.querySelector('form').classList.add('shake'); }
    msg.classList.remove('is-error');
    if (!isOwnerEmail(email)) { fail('This email does not have owner access.'); return; }
    btn.disabled = true; msg.textContent = 'Logging in…';
    try {
      if (sb) {
        var res = await sb.auth.signInWithPassword({ email: email, password: pass });
        if (res.error) { fail(res.error.message === 'Invalid login credentials' ? 'Wrong email or password.' : res.error.message); return; }
        await refreshOwner(res.data.user);
        if (!isOwner) { fail('This account is not set up as a shop owner yet (see SETUP.md).'); return; }
      } else {
        if (!window.crypto || !crypto.subtle) { fail('Open the site through serve.ps1 (http://localhost) to log in.'); return; }
        if ((await sha256(pass)) !== OWNER_PASS_SHA256) { fail('Wrong email or password.'); return; }
        writeJSON('sessionStorage', LOCAL_SESSION_KEY, { email: email.toLowerCase() });
        await refreshOwner({ email: email.toLowerCase() });
      }
      $('ownerPass').value = '';
      msg.textContent = '';
      setOwnerLogin(false);
      openDash();
      setTimeout(function () { showAppPrompt('bottom'); }, 900); // owner: offer to download the app
    } catch (err) {
      fail('Could not reach the server. Check your internet connection.');
    } finally { btn.disabled = false; }
  });

  async function refreshOwner(user) {
    currentUser = user || null; isOwner = false;
    if (currentUser && isOwnerEmail(currentUser.email)) {
      if (sb) { var r = await sb.rpc('is_shop_owner'); isOwner = !r.error && r.data === true; }
      else isOwner = true;
    }
    renderMenuAuth();
  }
  // ---------- "Download the app" message: customers see it at the top when they open the site,
  // the owner sees it after a correct login, and the side menu has a "Download app" option ----------
  var installEvt = null, APP_DISMISS_KEY = 'a2a-app-dismissed';
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault(); // use our own message instead of the browser's banner
    installEvt = e;
  });
  window.addEventListener('appinstalled', function () {
    writeJSON('localStorage', 'a2a-app-installed', true);
    writeJSON('localStorage', 'a2a-app-shell-seen', APP_SHELL_VERSION); // fresh install is already the newest version
    hideAppPrompt(); renderMenuApp();
  });
  function appAlreadyOpen() {
    return (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
  }
  function hideAppPrompt() {
    var t = $('appPrompt'); if (!t) return;
    t.id = ''; t.classList.remove('is-in');
    setTimeout(function () { if (t.parentNode) t.remove(); }, 400);
  }
  function renderMenuApp() { var m = $('sideApp'); if (m) m.hidden = appAlreadyOpen(); }
  async function installApp() {
    if (!installEvt) return false;
    var ev = installEvt; installEvt = null;
    ev.prompt();
    try { var choice = await ev.userChoice; if (choice && choice.outcome === 'accepted') hideAppPrompt(); } catch (err) {}
    return true;
  }
  // where: 'top' (customers) or 'bottom' (owner). showHow: open the install steps straight away.
  function showAppPrompt(where, showHow) {
    if (appAlreadyOpen()) return;
    var old = $('appPrompt'); if (old) old.remove();
    var forOwner = where !== 'top';
    var ua = navigator.userAgent;
    var iOS = /iPhone|iPad|iPod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    var how = iOS ? 'In Safari, tap the Share button <b>⬆</b> and then <b>Add to Home Screen</b>.'
      : 'Open the browser menu <b>⋮</b> and choose <b>Install app</b> or <b>Add to Home screen</b>.';
    var t = document.createElement('div');
    t.id = 'appPrompt'; t.className = 'app-prompt' + (forOwner ? '' : ' app-prompt-top');
    t.setAttribute('role', 'dialog'); t.setAttribute('aria-label', 'Download the A2A Vegetables app');
    t.innerHTML =
      '<img src="assets/img/app-icon-192.png" alt="" class="app-prompt-icon" width="48" height="48">' +
      '<div class="app-prompt-text"><b>Download the A2A Vegetables app</b><span>' +
        (forOwner ? 'Open your shop dashboard in one tap, right from your home screen.' : 'See today\'s fresh vegetables and order in one tap, right from your home screen.') +
        '</span><span class="app-prompt-how"' + (showHow ? '' : ' hidden') + '>' + how + '</span></div>' +
      '<div class="app-prompt-btns"><button type="button" class="app-prompt-go" data-ap="' + (showHow ? 'no">Got it' : 'go">Download') + '</button>' +
        '<button type="button" class="app-prompt-no" data-ap="no">Not now</button></div>' +
      '<button type="button" class="app-prompt-x" data-ap="no" aria-label="Close">✕</button>';
    document.body.appendChild(t);
    void t.offsetWidth; // start from the hidden position, then slide in
    t.classList.add('is-in');
    t.addEventListener('click', async function (e) {
      var b = e.target.closest('[data-ap]'); if (!b) return;
      if (b.dataset.ap === 'no') { writeJSON('sessionStorage', APP_DISMISS_KEY, true); hideAppPrompt(); return; }
      if (!(await installApp())) {
        t.querySelector('.app-prompt-how').hidden = false; // browser can't install by itself: show how
        b.textContent = 'Got it'; b.dataset.ap = 'no';
      }
    });
  }
  // ---------- "Update the app" message: only inside an already-installed app ----------
  // Everything inside the app (prices, photos, design) updates by itself. Only the app's icon, name and
  // opening screen need a reinstall. When those change, raise APP_SHELL_VERSION: everyone who opens an
  // installed app then sees this message once.
  var APP_SHELL_VERSION = 2, APP_SHELL_KEY = 'a2a-app-shell-seen';
  function showAppUpdate() {
    if (!appAlreadyOpen() || (readJSON('localStorage', APP_SHELL_KEY) || 0) >= APP_SHELL_VERSION || $('appPrompt')) return;
    var ua = navigator.userAgent;
    var iOS = /iPhone|iPad|iPod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    if (!/Android/i.test(ua)) return; // the opening-screen change only matters on Android
    var steps = iOS
      ? '1. Press and hold the app icon and remove it.<br>2. Open the site in Safari.<br>3. Tap Share <b>⬆</b> and <b>Add to Home Screen</b>.'
      : '1. Press and hold the app icon and choose <b>Uninstall</b>.<br>2. Open the site in Chrome.<br>3. Tap <b>☰</b> and <b>Download app</b>.';
    var t = document.createElement('div');
    t.id = 'appPrompt'; t.className = 'app-prompt app-prompt-top';
    t.setAttribute('role', 'dialog'); t.setAttribute('aria-label', 'A new version of the app is ready');
    t.innerHTML =
      '<img src="assets/img/app-icon-192.png" alt="" class="app-prompt-icon" width="48" height="48">' +
      '<div class="app-prompt-text"><b>A new version of the app is ready</b><span>Reinstall once to get the new app opening screen. Everything else is already up to date.</span>' +
        '<span class="app-prompt-how" hidden>' + steps + '<br><span style="word-break:break-all">' + esc(location.origin + location.pathname) + '</span></span></div>' +
      '<div class="app-prompt-btns"><button type="button" class="app-prompt-go" data-au="how">Reinstall steps</button>' +
        '<button type="button" class="app-prompt-no" data-au="later">Later</button></div>' +
      '<button type="button" class="app-prompt-x" data-au="later" aria-label="Close">✕</button>';
    document.body.appendChild(t);
    void t.offsetWidth;
    t.classList.add('is-in');
    t.addEventListener('click', function (e) {
      var b = e.target.closest('[data-au]'); if (!b) return;
      writeJSON('localStorage', APP_SHELL_KEY, APP_SHELL_VERSION); // show only once
      if (b.dataset.au === 'how') { t.querySelector('.app-prompt-how').hidden = false; b.textContent = 'Got it'; b.dataset.au = 'later'; return; }
      hideAppPrompt();
    });
  }
  if (appAlreadyOpen()) setTimeout(showAppUpdate, 1200);

  // ---------- automatic update: when the app (or tab) comes back on screen, load the newest version ----------
  var myVersion = ((document.querySelector('script[src*="assets/app.js"]') || {}).src || '').replace(/^.*[?&]v=(\d+).*$/, '$1');
  var lastCheck = Date.now();
  function checkForUpdate() {
    if (document.hidden || Date.now() - lastCheck < 60000) return; // at most once a minute
    lastCheck = Date.now();
    fetch('index.html?check=' + Date.now(), { cache: 'no-store' }).then(function (r) { return r.ok ? r.text() : ''; }).then(function (html) {
      var m = /assets\/app\.js\?v=(\d+)/.exec(html);
      // reload only when nothing is open, so a customer's basket screen or the owner's edits are never interrupted
      if (m && myVersion && m[1] !== myVersion && !sheetVeg && !basketOpen && !order.length && !isOwner) location.reload();
    }).catch(function () {});
    if (navigator.serviceWorker && navigator.serviceWorker.getRegistration) navigator.serviceWorker.getRegistration().then(function (r) { if (r) r.update(); });
  }
  document.addEventListener('visibilitychange', checkForUpdate);
  window.addEventListener('focus', checkForUpdate);
  // side menu "Download app": open the browser's install window, or show the steps
  async function menuDownload() { if (!(await installApp())) showAppPrompt('top', true); }
  // customers: show the message at the top shortly after the site opens (not again after "Not now" in this visit)
  renderMenuApp();
  setTimeout(function () {
    if (!isOwner && !readJSON('sessionStorage', APP_DISMISS_KEY) && !readJSON('localStorage', 'a2a-app-installed')) showAppPrompt('top');
  }, 1500);
  async function signOut() {
    hideAppPrompt();
    setDash(false);
    removeKey('sessionStorage', LOCAL_SESSION_KEY);
    if (sb) await sb.auth.signOut();
    await refreshOwner(null);
  }

  // Without a database, the owner's changes are kept in this browser only.
  var LOCAL_ADDED_KEY = 'a2a-local-added';
  function applyLocalOverrides() {
    var o = readJSON('localStorage', LOCAL_PRICES_KEY) || {};
    var added = readJSON('localStorage', LOCAL_ADDED_KEY) || [];
    allVeg = BASE_VEG.concat(added).map(function (v) {
      var c = o[v.name]; if (!c) return v;
      return Object.assign({}, v, { price: c.price, available: c.available, updated: c.updated });
    });
    applyVeggies();
  }

  // ---------- publish to everyone through GitHub (prices.json in the repository) ----------
  var GH_REPO = String(cfg.githubRepo || '').trim(), GH_BRANCH = cfg.githubBranch || 'main', GH_TOKEN_KEY = 'a2a-gh-token';
  function ghToken() { try { return localStorage.getItem(GH_TOKEN_KEY) || ''; } catch (e) { return ''; } }
  function ghMode() { return !sb && !!GH_REPO; }
  function withPhotoVersion(img) { return img && /^assets\/img\/[^/]+$/.test(img) ? img + '?v=' + PHOTO_VERSION : img; }
  function plainImg(img) { img = String(img || ''); return img.indexOf('data:') === 0 ? '' : img.split('?')[0]; }
  // Everyone: load the published prices (if the owner has published any)
  async function loadPublished() {
    try {
      var r = await fetch('prices.json?ts=' + Date.now(), { cache: 'no-store' });
      if (!r.ok) return false;
      var data = await r.json();
      if (!data || !Array.isArray(data.veggies) || !data.veggies.length) return false;
      allVeg = data.veggies.map(function (v) { return Object.assign({}, v, { price: +v.price, img: withPhotoVersion(v.img) }); });
      applyVeggies();
      return true;
    } catch (e) { return false; }
  }
  function b64utf8(s) { return btoa(unescape(encodeURIComponent(s))); }
  async function gh(path, opts) {
    var res = await fetch('https://api.github.com/repos/' + GH_REPO + path, Object.assign({}, opts, {
      headers: { 'Accept': 'application/vnd.github+json', 'Authorization': 'Bearer ' + ghToken(), 'X-GitHub-Api-Version': '2022-11-28' }
    }));
    var body = null; try { body = await res.json(); } catch (e) {}
    return { ok: res.ok, status: res.status, body: body };
  }
  function ghError(r) {
    if (r.status === 401) return 'The GitHub key is wrong or has expired. Connect GitHub again.';
    if (r.status === 403 || r.status === 404) return 'The GitHub key is not allowed to change this website. Give it “Contents: Read and write” for ' + GH_REPO + '.';
    return 'GitHub said: ' + ((r.body && r.body.message) || ('error ' + r.status));
  }
  // Create or replace one file in the repository (this commit makes GitHub redeploy the site)
  async function ghPutFile(path, base64, message) {
    for (var attempt = 0; attempt < 2; attempt++) {
      var cur = await gh('/contents/' + path + '?ref=' + encodeURIComponent(GH_BRANCH));
      if (!cur.ok && cur.status !== 404) throw new Error(ghError(cur));
      var put = await gh('/contents/' + path, { method: 'PUT', body: JSON.stringify({ message: message, content: base64, branch: GH_BRANCH, sha: cur.ok && cur.body ? cur.body.sha : undefined }) });
      if (put.ok) return put.body;
      if (put.status !== 409 && put.status !== 422) throw new Error(ghError(put));
    }
    throw new Error('Someone else saved at the same moment. Please press Save again.');
  }
  async function publishPrices(list, message) {
    var data = {
      updated: new Date().toISOString(),
      veggies: list.map(function (v) {
        return { name: v.name, local: v.local || '', price: +v.price, unit: v.unit, cat: v.cat, img: plainImg(v.img), desc: v.desc || '', available: v.available !== false, updated: v.updated || null, credit: v.credit || undefined };
      })
    };
    await ghPutFile('prices.json', b64utf8(JSON.stringify(data, null, 2) + '\n'), message);
    allVeg = data.veggies.map(function (v) { return Object.assign({}, v, { img: withPhotoVersion(v.img) }); });
    removeKey('localStorage', LOCAL_PRICES_KEY); removeKey('localStorage', LOCAL_ADDED_KEY);
    applyVeggies();
  }
  // Dashboard: "Connect GitHub" (one time per device)
  function renderGhBar() {
    $('ghBar').hidden = !ghMode();
    if (!ghMode()) return;
    var on = !!ghToken();
    $('ghStatus').textContent = on ? '🟢 Saving publishes to everyone' : '🟠 Connect GitHub so your changes reach every customer';
    $('ghConnectBtn').textContent = on ? 'Change key' : '🔗 Connect GitHub';
    $('ghForget').hidden = !on;
  }
  function showGhConnect(open) {
    $('ghConnect').hidden = !open;
    if (open) { $('ghMsg').textContent = ''; $('ghMsg').classList.remove('is-error'); setTimeout(function () { $('ghToken').focus(); }, 50); }
  }
  $('ghConnectBtn').addEventListener('click', function () { showGhConnect($('ghConnect').hidden); });
  $('ghForget').addEventListener('click', function () { removeKey('localStorage', GH_TOKEN_KEY); showGhConnect(false); renderGhBar(); openDash(); });
  $('ghSaveKey').addEventListener('click', async function () {
    var t = $('ghToken').value.trim(), m = $('ghMsg');
    function bad(s) { m.textContent = s; m.classList.add('is-error'); }
    if (!t) return bad('Paste the GitHub key first.');
    m.classList.remove('is-error'); m.textContent = 'Checking the key…';
    try {
      var r = await fetch('https://api.github.com/repos/' + GH_REPO, { headers: { 'Accept': 'application/vnd.github+json', 'Authorization': 'Bearer ' + t } });
      var body = {}; try { body = await r.json(); } catch (e) {}
      if (r.status === 401) return bad('That key is not valid. Copy it again from GitHub.');
      if (!r.ok) return bad('That key cannot see ' + GH_REPO + '. Choose this repository when creating the key.');
      if (body.permissions && body.permissions.push === false) return bad('That key can only read. Give it “Contents: Read and write”.');
      try { localStorage.setItem(GH_TOKEN_KEY, t); } catch (e) { return bad('This browser blocked saving the key.'); }
      $('ghToken').value = ''; showGhConnect(false); openDash();
      $('dashMsg').textContent = '✓ GitHub connected. From now on, Save publishes to everyone.';
    } catch (e) { bad('Could not reach GitHub. Check your internet connection.'); }
  });

  // ---------- prices from the database ----------
  function fromRow(r) {
    return { id: r.id, name: r.name, local: r.local, price: +r.price, unit: r.unit, cat: r.cat, img: r.img, desc: r.description, available: r.available, updated: r.updated_at, sort: r.sort };
  }
  function applyVeggies() {
    VEGGIES = allVeg.filter(function (v) { return v.available !== false; });
    // drop basket items that are no longer sold
    order = order.filter(function (n) { if (byName(n)) return true; delete basket[n]; delete packs[n]; return false; });
    // rebuild only the cards whose details changed; the rest (and their pictures) stay as they are
    Object.keys(cardNodes).forEach(function (k) {
      var v = byName(k);
      if (!v || cardNodes[k].dataset.sig !== cardSig(v)) { cardNodes[k].remove(); delete cardNodes[k]; }
    });
    renderGrid();
    updateBasket(false);
    var latest = allVeg.reduce(function (m, v) { return v.updated && v.updated > m ? v.updated : m; }, '');
    if (latest) {
      var d = new Date(latest), today = new Date();
      var time = d.toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit' });
      var day = d.toDateString() === today.toDateString() ? 'today' : 'on ' + d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
      $('lastUpdated').textContent = 'Prices last updated ' + day + ' at ' + time;
    }
  }
  async function loadVeggies() {
    if (!sb) return;
    var r = await sb.from('veggies').select('*').order('sort').order('name');
    if (r.error || !r.data || !r.data.length) { if (r.error) console.warn('Could not load prices:', r.error.message); return; }
    allVeg = r.data.map(fromRow);
    applyVeggies();
  }

  // ---------- owner dashboard ----------
  var dash = $('dash'), setDash = modal(dash), CAT_LABEL = {};
  CATS.forEach(function (c) { CAT_LABEL[c.id] = c.label; });
  dash.addEventListener('click', function (e) { if (e.target.closest('[data-dash="close"]')) setDash(false); });
  function openDash(newName) {
    if (!isOwner) return;
    $('dashWho').textContent = 'Logged in as ' + (currentUser.email || 'owner') + '. Change a price or tick/untick “In stock”, then press Save.' +
      (sb ? '' : ghMode() ? (ghToken() ? ' Saved changes go live for every customer in about 1 minute.' : '') : ' Not connected to a database yet, so changes are saved in this browser only.');
    renderGhBar();
    $('dashMsg').textContent = '';
    $('dashMsg').classList.remove('is-error');
    $('dashRows').innerHTML = allVeg.map(function (v) {
      return '<div class="dash-row' + (v.name === newName ? ' is-new' : '') + '" data-id="' + esc(sb ? v.id : v.name) + '">' +
        '<div class="dash-veg">' + (v.img ? '<img class="dash-thumb" src="' + esc(v.img) + '" alt="" loading="lazy">' : '<span class="dash-thumb" style="display:grid;place-items:center">🥬</span>') +
          '<div style="min-width:0"><div class="dash-name">' + esc(v.name) + '</div><div class="dash-sub">' + (v.local ? esc(v.local) + ' · ' : '') + esc(CAT_LABEL[v.cat] || v.cat) + '</div></div></div>' +
        '<label class="dash-price">₹<input type="number" min="0" step="0.5" inputmode="decimal" value="' + v.price + '" data-orig="' + v.price + '" aria-label="' + esc(v.name) + ' price"> / ' + esc(v.unit) + '</label>' +
        '<input type="checkbox" ' + (v.available !== false ? 'checked' : '') + ' data-orig="' + (v.available !== false) + '" aria-label="' + esc(v.name) + ' in stock">' +
      '</div>';
    }).join('');
    setDash(true);
    if (newName) {
      var nr = $('dashRows').querySelector('.is-new');
      if (nr) { nr.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); $('dashMsg').textContent = '✓ ' + newName + ' added to the price list.'; }
    }
  }

  // ---------- add a new vegetable ----------
  var addVeg = $('addVeg'), setAddVeg = modal(addVeg), avPhotoBlob = null, avPhotoData = '';
  addVeg.addEventListener('click', function (e) { if (e.target.closest('[data-av="close"]')) setAddVeg(false); });
  $('dashAdd').addEventListener('click', function () {
    $('avForm').reset();
    avPhotoBlob = null; avPhotoData = '';
    $('avPreview').hidden = true; $('avPreview').removeAttribute('src');
    $('avPhotoEmpty').hidden = false; $('avPhotoChange').hidden = true;
    $('avMsg').textContent = ''; $('avMsg').classList.remove('is-error');
    avFound = []; avFoundFor = ''; avFoundIdx = 0; avPhotoCredit = '';
    $('avFind').textContent = '🔍 Find a picture for me'; $('avFind').disabled = false; $('avFindNote').textContent = '';
    addVeg.querySelectorAll('.invalid').forEach(function (n) { n.classList.remove('invalid'); });
    setAddVeg(true);
    setTimeout(function () { $('avName').focus(); }, 50);
  });

  // Shrink the picture in the browser (max 560px, JPEG) so it loads fast and fits in storage.
  function shrinkImage(file) {
    return new Promise(function (resolve, reject) {
      var url = URL.createObjectURL(file), img = new Image();
      img.onload = function () {
        var s = Math.min(1, 560 / Math.max(img.naturalWidth, img.naturalHeight));
        var w = Math.round(img.naturalWidth * s), h = Math.round(img.naturalHeight * s);
        var c = document.createElement('canvas'); c.width = w; c.height = h;
        var ctx = c.getContext('2d'); ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, w, h); ctx.drawImage(img, 0, 0, w, h);
        URL.revokeObjectURL(url);
        var data = c.toDataURL('image/jpeg', 0.72);
        c.toBlob(function (blob) { resolve({ blob: blob, data: data }); }, 'image/jpeg', 0.72);
      };
      img.onerror = function () { URL.revokeObjectURL(url); reject(new Error('bad image')); };
      img.src = url;
    });
  }
  async function takePhoto(file) {
    var msg = $('avMsg');
    if (!file) return;
    if (!/^image\//.test(file.type)) { msg.textContent = 'Please choose a picture file.'; msg.classList.add('is-error'); return; }
    msg.textContent = 'Preparing picture…'; msg.classList.remove('is-error');
    try {
      var r = await shrinkImage(file);
      avPhotoBlob = r.blob; avPhotoData = r.data;
      $('avPreview').src = r.data; $('avPreview').hidden = false;
      $('avPhotoEmpty').hidden = true; $('avPhotoChange').hidden = false;
      $('avPhotoChange').parentElement.classList.remove('invalid');
      msg.textContent = '';
    } catch (e) { msg.textContent = 'That picture could not be opened. Try another one.'; msg.classList.add('is-error'); }
  }
  $('avPhoto').addEventListener('change', function () { takePhoto(this.files && this.files[0]); });
  var avDrop = addVeg.querySelector('.av-photo');
  ['dragenter', 'dragover'].forEach(function (t) { avDrop.addEventListener(t, function (e) { e.preventDefault(); avDrop.classList.add('drag'); }); });
  ['dragleave', 'drop'].forEach(function (t) { avDrop.addEventListener(t, function (e) { e.preventDefault(); avDrop.classList.remove('drag'); }); });
  avDrop.addEventListener('drop', function (e) { takePhoto(e.dataTransfer.files && e.dataTransfer.files[0]); });
  // the owner chose their own picture: forget any found ones
  $('avPhoto').addEventListener('change', function () { $('avFindNote').textContent = ''; avPhotoCredit = ''; });

  // ---------- no picture? find a free one online ----------
  // Wikimedia Commons (Wikipedia's photo library): free licences that allow business use.
  // Most need a photo credit, so the credit is saved and shown in the vegetable's details.
  var avFound = [], avFoundFor = '', avFoundIdx = 0, avPhotoCredit = '';
  var OK_LICENCE = /^(public domain|pd|cc0|cc by(-sa)? [0-9.]+|cc by(-sa)?)/i;
  async function getJSON(url) {
    var ctl = new AbortController(), t = setTimeout(function () { ctl.abort(); }, 12000);
    try { var r = await fetch(url, { signal: ctl.signal }); return r.ok ? await r.json() : null; }
    catch (e) { return null; } finally { clearTimeout(t); }
  }
  function plainText(html) { var d = document.createElement('div'); d.innerHTML = html || ''; return (d.textContent || '').replace(/\s+/g, ' ').trim(); }
  function commonsPhotos(data) {
    var pages = data && data.query && data.query.pages; if (!pages) return [];
    return Object.keys(pages).map(function (k) { return pages[k]; })
      .sort(function (a, b) { return (a.index || 0) - (b.index || 0); })
      .map(function (p) {
        var ii = p.imageinfo && p.imageinfo[0]; if (!ii || !ii.thumburl) return null;
        var meta = ii.extmetadata || {}, lic = plainText(meta.LicenseShortName && meta.LicenseShortName.value);
        if (!OK_LICENCE.test(lic)) return null;
        var who = plainText(meta.Artist && meta.Artist.value).slice(0, 60);
        return { url: ii.thumburl, credit: 'Photo: ' + (who ? who + ', ' : '') + lic + ', via Wikimedia Commons' };
      }).filter(Boolean);
  }
  var COMMONS = 'https://commons.wikimedia.org/w/api.php?format=json&origin=*&action=query&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=640&iiextmetadatafilter=LicenseShortName|Artist';
  async function findFreePhotos(name) {
    var out = [];
    // 1) the main photo of the Wikipedia article (usually the raw vegetable)
    var wp = await getJSON('https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=pageimages&piprop=name&redirects=1&titles=' + encodeURIComponent(name));
    var page = wp && wp.query && wp.query.pages && Object.keys(wp.query.pages).map(function (k) { return wp.query.pages[k]; })[0];
    if (page && page.pageimage) out = out.concat(commonsPhotos(await getJSON(COMMONS + '&titles=' + encodeURIComponent('File:' + page.pageimage))));
    // 2) more choices for "Try another"
    out = out.concat(commonsPhotos(await getJSON(COMMONS + '&generator=search&gsrnamespace=6&gsrlimit=12&gsrsearch=' + encodeURIComponent(name + ' vegetable filetype:bitmap'))));
    var seen = {};
    return out.filter(function (x) { if (seen[x.url]) return false; seen[x.url] = 1; return true; });
  }
  // load a found photo into the form exactly like a photo the owner picked (shrunk, previewed)
  async function useFoundPhoto(item) {
    var r = await fetch(item.url);
    if (!r.ok) throw new Error('photo not available');
    var blob = await r.blob();
    await takePhoto(new File([blob], 'found.jpg', { type: blob.type || 'image/jpeg' }));
    if (avPhotoBlob) avPhotoCredit = item.credit;
    return !!avPhotoBlob;
  }
  async function showFoundPhoto() {
    var name = $('avName').value.trim(), note = $('avFindNote'), btn = $('avFind');
    if (!name) { note.textContent = 'Type the vegetable name first.'; $('avName').focus(); return false; }
    btn.disabled = true;
    try {
      if (avFoundFor !== name.toLowerCase()) {
        note.textContent = 'Looking for a picture of ' + name + '…';
        avFound = await findFreePhotos(name); avFoundFor = name.toLowerCase(); avFoundIdx = 0;
      } else avFoundIdx = (avFoundIdx + 1) % Math.max(avFound.length, 1);
      while (avFound.length) {
        try { if (await useFoundPhoto(avFound[avFoundIdx])) break; } catch (e) {}
        avFound.splice(avFoundIdx, 1); if (avFoundIdx >= avFound.length) avFoundIdx = 0;
      }
      if (!avFound.length) { note.textContent = 'No free picture found for "' + name + '". You can add your own, or add it without a picture.'; return false; }
      note.textContent = 'Free photo ' + (avFoundIdx + 1) + ' of ' + avFound.length + '. ' + avPhotoCredit;
      btn.textContent = '🔄 Try another picture';
      return true;
    } finally { btn.disabled = false; }
  }
  $('avFind').addEventListener('click', function () { showFoundPhoto(); });
  $('avName').addEventListener('input', function () { if (avFoundFor && avFoundFor !== this.value.trim().toLowerCase()) $('avFind').textContent = '🔍 Find a picture for me'; });

  $('avForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    var msg = $('avMsg'), btn = $('avSubmit');
    var name = $('avName').value.trim().replace(/\s+/g, ' ');
    var price = $('avPrice').value;
    var bad = null;
    addVeg.querySelectorAll('.invalid').forEach(function (n) { n.classList.remove('invalid'); });
    function err(el, t) { if (!bad) { bad = t; el.classList.add('invalid'); if (el.focus) el.focus(); } }
    if (!name) err($('avName'), 'Please enter the vegetable name.');
    else if (allVeg.some(function (v) { return v.name.toLowerCase() === name.toLowerCase(); })) err($('avName'), name + ' is already on the price list.');
    if (price === '' || isNaN(+price) || +price < 0) err($('avPrice'), 'Please enter a valid price.');
    if (bad) { msg.textContent = bad; msg.classList.add('is-error'); return; }

    var veg = {
      name: name.charAt(0).toUpperCase() + name.slice(1),
      local: $('avLocal').value.trim(),
      price: Math.round(+price * 100) / 100,
      unit: $('avUnit').value,
      cat: $('avCat').value,
      desc: $('avDesc').value.trim() || autoDescription({ name: name.charAt(0).toUpperCase() + name.slice(1), cat: $('avCat').value, unit: $('avUnit').value }),
      available: true,
      updated: new Date().toISOString()
    };
    btn.disabled = true; msg.classList.remove('is-error'); msg.textContent = 'Adding…';
    try {
      // no picture from the owner: find a free one automatically
      if (!avPhotoBlob) {
        msg.textContent = 'No picture added: finding one for ' + veg.name + '…';
        $('avName').value = name;
        await showFoundPhoto();
        msg.textContent = avPhotoBlob ? 'Adding…' : 'No picture found: adding ' + veg.name + ' without one…';
      }
      if (avPhotoBlob && avPhotoCredit) veg.credit = avPhotoCredit; // photo credit for found photos
      if (sb) {
        var imgUrl = null;
        if (avPhotoBlob) {
          var path = 'veg-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8) + '.jpg';
          var up = await sb.storage.from('veggie-photos').upload(path, avPhotoBlob, { contentType: 'image/jpeg', upsert: false });
          if (up.error) throw new Error('Picture upload failed: ' + up.error.message);
          imgUrl = sb.storage.from('veggie-photos').getPublicUrl(path).data.publicUrl;
        }
        var maxSort = allVeg.reduce(function (m, v) { return Math.max(m, v.sort || 0); }, 0);
        var ins = await sb.from('veggies').insert({
          name: veg.name, local: veg.local, price: veg.price, unit: veg.unit, cat: veg.cat,
          img: imgUrl, description: veg.desc, available: true, sort: Math.max(maxSort, allVeg.length) + 1
        }).select();
        if (ins.error) throw new Error(ins.error.message);
        await loadVeggies();
      } else if (ghMode()) {
        if (!ghToken()) throw new Error('Connect GitHub first (in the dashboard) so new vegetables go live for every customer.');
        veg.img = '';
        if (avPhotoBlob) {
          msg.textContent = 'Uploading picture…';
          var slug = veg.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'vegetable';
          var photoPath = 'assets/img/added/' + slug + '-' + Date.now() + '.jpg';
          await ghPutFile(photoPath, avPhotoData.split(',')[1], 'Add photo for ' + veg.name);
          veg.img = photoPath;
        }
        msg.textContent = 'Publishing to everyone…';
        await publishPrices(allVeg.concat([veg]), 'Add vegetable: ' + veg.name);
        // the new photo is online after the site redeploys (~1 min); show the local copy until then
        if (avPhotoData) { allVeg.forEach(function (v) { if (v.name === veg.name) v.img = avPhotoData; }); applyVeggies(); }
      } else {
        veg.img = avPhotoData || '';
        var added = readJSON('localStorage', LOCAL_ADDED_KEY) || [];
        added.push(veg);
        if (!writeJSON('localStorage', LOCAL_ADDED_KEY, added)) throw new Error('This browser is out of space to save more pictures.');
        applyLocalOverrides();
      }
      setAddVeg(false);
      openDash(veg.name);
    } catch (ex) {
      msg.textContent = ex.message || 'Could not add the vegetable.'; msg.classList.add('is-error');
    } finally { btn.disabled = false; }
  });
  $('dashRows').addEventListener('input', function (e) {
    var row = e.target.closest('.dash-row'); if (!row) return;
    var p = row.querySelector('input[type=number]'), c = row.querySelector('input[type=checkbox]');
    row.classList.toggle('changed', +p.value !== +p.dataset.orig || String(c.checked) !== c.dataset.orig);
  });
  $('dashSave').addEventListener('click', async function () {
    var msg = $('dashMsg'), btn = $('dashSave');
    var rows = Array.prototype.slice.call(document.querySelectorAll('#dashRows .dash-row.changed'));
    if (!rows.length) { msg.textContent = 'Nothing changed.'; return; }
    for (var i = 0; i < rows.length; i++) {
      var v = rows[i].querySelector('input[type=number]').value;
      if (v === '' || isNaN(+v) || +v < 0) { msg.textContent = 'Please enter a valid price.'; rows[i].querySelector('input[type=number]').focus(); return; }
    }
    msg.classList.remove('is-error');
    btn.disabled = true; msg.textContent = 'Saving…';
    function markSaved() {
      msg.textContent = '✓ Saved ' + rows.length + ' change' + (rows.length > 1 ? 's' : '') + '. The price list is updated.';
      rows.forEach(function (row) {
        var p = row.querySelector('input[type=number]'), c = row.querySelector('input[type=checkbox]');
        p.dataset.orig = p.value; c.dataset.orig = String(c.checked); row.classList.remove('changed');
      });
    }
    if (ghMode()) {
      if (!ghToken()) {
        btn.disabled = false; showGhConnect(true);
        msg.textContent = 'Connect GitHub once (just above) so new prices go live for every customer.'; msg.classList.add('is-error');
        return;
      }
      msg.textContent = 'Publishing to everyone…';
      try {
        var stamp = new Date().toISOString(), edits = {};
        rows.forEach(function (row) {
          edits[row.dataset.id] = { price: +row.querySelector('input[type=number]').value, available: row.querySelector('input[type=checkbox]').checked, updated: stamp };
        });
        var list = allVeg.map(function (v) { return edits[v.name] ? Object.assign({}, v, edits[v.name]) : v; });
        await publishPrices(list, 'Update prices: ' + Object.keys(edits).join(', '));
        markSaved();
        msg.textContent = '✓ Saved for everyone. The live site shows the new prices in about 1 minute.';
      } catch (ex) { msg.textContent = ex.message || 'Could not publish.'; msg.classList.add('is-error'); }
      finally { btn.disabled = false; }
      return;
    }
    if (!sb) {
      var o = readJSON('localStorage', LOCAL_PRICES_KEY) || {}, now = new Date().toISOString();
      rows.forEach(function (row) {
        o[row.dataset.id] = { price: +row.querySelector('input[type=number]').value, available: row.querySelector('input[type=checkbox]').checked, updated: now };
      });
      if (!writeJSON('localStorage', LOCAL_PRICES_KEY, o)) { msg.textContent = 'This browser blocked saving.'; btn.disabled = false; return; }
      markSaved();
      applyLocalOverrides();
      btn.disabled = false;
      return;
    }
    try {
      var results = await Promise.all(rows.map(function (row) {
        return sb.from('veggies').update({
          price: +row.querySelector('input[type=number]').value,
          available: row.querySelector('input[type=checkbox]').checked
        }).eq('id', +row.dataset.id).select('id');
      }));
      var failed = results.filter(function (r) { return r.error || !r.data || !r.data.length; });
      if (failed.length) { msg.textContent = 'Some prices were not saved' + (failed[0].error ? ': ' + failed[0].error.message : ' (no permission).'); }
      else markSaved();
      await loadVeggies();
    } catch (err) {
      msg.textContent = 'Could not reach the server. Check your internet connection.';
    } finally { btn.disabled = false; }
  });

  $('dashSignOut').addEventListener('click', signOut);

  function initBackend() {
    renderMenuAuth();
    if (!sb) {
      applyLocalOverrides();
      if (GH_REPO) loadPublished(); // everyone sees the owner's published prices
      var s = readJSON('sessionStorage', LOCAL_SESSION_KEY);
      if (s && isOwnerEmail(s.email)) refreshOwner({ email: String(s.email).toLowerCase() });
      return;
    }
    loadVeggies();
    sb.auth.getSession().then(function (r) { refreshOwner(r.data.session && r.data.session.user); });
    sb.auth.onAuthStateChange(function (event, session) {
      if (event === 'SIGNED_OUT') { setDash(false); }
      if (event === 'SIGNED_IN' || event === 'SIGNED_OUT' || event === 'USER_UPDATED') {
        // run outside the auth callback to avoid Supabase client deadlocks
        setTimeout(function () { refreshOwner(session && session.user); }, 0);
      }
    });
  }

  // ---------- categories ----------
  var catsEl = $('cats');
  function renderCats() {
    catsEl.innerHTML = '';
    CATS.forEach(function (c) {
      var b = el('<button class="rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ' +
        (cat === c.id ? 'bg-primary text-primary-foreground shadow-lg scale-105' : 'glass hover:-translate-y-0.5') + '">' + c.icon + ' ' + esc(c.label) + '</button>');
      b.addEventListener('click', function () { if (cat === c.id) return; cat = c.id; renderCats(); switchCategory(); });
      catsEl.appendChild(b);
    });
  }

  // ---------- cards (keyed by name, like React) ----------
  var grid = $('grid'), cardNodes = {};
  function controlsHTML(v) {
    var n = basket[v.name] || 0;
    if (n === 0) return '<button data-act="add" class="w-full rounded-full bg-primary/10 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground active:scale-95">+ Add</button>';
    return '<div class="flex items-center justify-between rounded-full bg-primary p-1 text-primary-foreground">' +
      '<button data-act="dec" aria-label="Remove ' + esc(v.name) + '" class="h-7 w-7 rounded-full transition hover:bg-primary-foreground/20">−</button>' +
      '<span class="text-sm font-semibold">' + fmtQty(v, n) + '</span>' +
      '<button data-act="inc" aria-label="Add ' + esc(v.name) + '" class="h-7 w-7 rounded-full transition hover:bg-primary-foreground/20">+</button></div>';
  }
  var cardsMade = 0;
  function makeCard(v) {
    var eager = cardsMade++ < 4; // first row of photos: load straight away
    var node = el(
      '<div class="card-float"><div class="liquid glass group animate-in fade-in slide-in-from-bottom-4 fill-mode-both duration-500 cursor-pointer rounded-3xl p-3 transition hover:-translate-y-1.5 hover:shadow-2xl">' +
        '<button type="button" data-act="open" aria-label="See ' + esc(v.name) + ' details and prices" class="block w-full rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-ring">' +
          '<div class="relative aspect-square overflow-hidden rounded-2xl bg-secondary"><div class="absolute inset-0">' +
            (v.img ? '<img src="' + esc(v.img) + '" alt="' + esc(v.name) + '" loading="' + (eager ? 'eager" fetchpriority="high' : 'lazy') + '" decoding="async" width="440" height="440" class="h-full w-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-2">'
                   : '<div class="grid h-full place-items-center text-7xl transition group-hover:scale-110">🥬</div>') +
          '</div><span class="pointer-events-none absolute inset-x-3 bottom-3 translate-y-3 rounded-full glass px-3 py-1.5 text-center text-xs font-semibold text-primary opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">See details &amp; quantity →</span></div>' +
        '</button>' +
        '<div class="mt-3 flex items-start justify-between gap-2 px-1"><div><h3 class="text-lg font-semibold leading-tight">' + esc(v.name) + '</h3><p class="text-xs text-muted-foreground">' + esc(v.local) + '</p></div>' +
          '<div class="text-right"><div class="font-display text-lg font-semibold text-primary">₹' + v.price + '</div><div class="text-[11px] text-muted-foreground">/ ' + esc(v.unit) + '</div></div></div>' +
        '<div class="ctl mt-3 px-1 pb-1">' + controlsHTML(v) + '</div>' +
      '</div></div>');
    node.dataset.sig = cardSig(v);
    var inner = node.firstChild;
    inner.addEventListener('click', function (e) {
      var b = e.target.closest('[data-act]'), act = b && b.dataset.act;
      if (act === 'add' || act === 'inc') { e.stopPropagation(); change(v.name, step(v)); }
      else if (act === 'dec') { e.stopPropagation(); change(v.name, -step(v)); }
      else openSheet(v);
    });
    return node;
  }
  // Category buttons: current cards fade away, then the new set pops in one after another
  var switchTimer = 0, outAnims = [];
  function switchCategory() {
    if (reduceMotion) { renderGrid(); return; }
    clearTimeout(switchTimer);
    outAnims.forEach(function (a) { a.cancel(); });
    outAnims = Array.prototype.map.call(grid.children, function (n, i) {
      return n.firstChild.animate(
        [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateY(14px) scale(.94)' }],
        { duration: 170, delay: Math.min(i, 6) * 12, easing: 'cubic-bezier(.4, 0, 1, 1)', fill: 'forwards' });
    });
    switchTimer = setTimeout(function () {
      renderGrid(true);
      outAnims.forEach(function (a) { a.cancel(); });
      outAnims = [];
    }, 200);
  }
  function renderGrid(cascade) {
    var q = query.trim().toLowerCase();
    var list = VEGGIES.filter(function (v) { return (cat === 'all' || v.cat === cat) && (v.name + v.local).toLowerCase().indexOf(q) !== -1; });
    var keep = {}, first = {}, animate = !cascade && !reduceMotion && grid.children.length > 0;
    list.forEach(function (v) { keep[v.name] = 1; });
    // remember where cards that stay on screen are now (for the glide)
    if (animate) Object.keys(cardNodes).forEach(function (k) {
      if (keep[k] && cardNodes[k].parentNode === grid) first[k] = cardNodes[k].getBoundingClientRect();
    });
    // Hidden cards are only taken off the page and kept ready, so their pictures never reload when you switch filters.
    Object.keys(cardNodes).forEach(function (k) { if (!keep[k] && cardNodes[k].parentNode) cardNodes[k].remove(); });
    var entering = 0;
    list.forEach(function (v, i) {
      var isNew = !cardNodes[v.name] || cardNodes[v.name].parentNode !== grid;
      var node = cardNodes[v.name] || (cardNodes[v.name] = makeCard(v));
      // float timing stays tied to the vegetable, so cards never jump when the list changes
      node.style.animationDelay = (VEGGIES.indexOf(v) % 4 * -1.7) + 's';
      if (isNew) node.firstChild.style.animationDelay = (entering++ * 40) + 'ms';
      // only move a card in the page if it is out of place (moving restarts its animations)
      if (grid.children[i] !== node) grid.insertBefore(node, grid.children[i] || null);
    });
    // glide cards that stayed from their old spot to their new spot
    if (animate) list.forEach(function (v) {
      var f = first[v.name]; if (!f) return;
      var inner = cardNodes[v.name].firstChild, l = cardNodes[v.name].getBoundingClientRect();
      var dx = f.left - l.left, dy = f.top - l.top;
      if (Math.abs(dx) < 1 && Math.abs(dy) < 1) return;
      inner.animate([{ transform: 'translate(' + dx + 'px, ' + dy + 'px)' }, { transform: 'translate(0, 0)' }],
        { duration: 550, easing: 'cubic-bezier(.22, 1, .36, 1)' });
    });
    // category switch: every card pops up in turn with a soft spring
    if (cascade && !reduceMotion) list.forEach(function (v, i) {
      var inner = cardNodes[v.name].firstChild;
      // clear any earlier entrance/glide on this card (e.g. when buttons are tapped quickly)
      inner.getAnimations().forEach(function (a) { if (!(typeof CSSTransition !== 'undefined' && a instanceof CSSTransition)) a.cancel(); });
      inner.animate(
        [{ opacity: 0, transform: 'translateY(34px) scale(.9)' }, { opacity: 1, offset: .55 }, { opacity: 1, transform: 'none' }],
        { duration: 620, delay: i * 55, easing: 'cubic-bezier(.34, 1.4, .64, 1)', fill: 'backwards' });
    });
    // the first row of photos loads straight away (the rest load as you scroll)
    for (var fi = 0; fi < grid.children.length; fi++) { var fim = grid.children[fi].querySelector('img'); if (!fim) continue; if (fi < 4) { fim.loading = 'eager'; fim.setAttribute('fetchpriority', 'high'); } }
    var empty = $('empty');
    empty.hidden = list.length !== 0;
    empty.textContent = 'No vegetables match "' + query + '".';
  }
  function refreshCardControls() {
    Object.keys(cardNodes).forEach(function (k) {
      var ctl = cardNodes[k].querySelector('.ctl'), html = controlsHTML(byName(k));
      if (ctl.innerHTML !== html) ctl.innerHTML = html;
    });
  }
  $('search').addEventListener('input', function (e) { query = e.target.value; renderGrid(); });

  // ---------- search box: typing animation in the placeholder ----------
  (function () {
    var box = $('search'), base = 'Search ';
    var words = ['tomato…', 'potato…', 'onion…', 'carrot…', 'green chilli…', 'brinjal…', 'ginger…'];
    if (reduceMotion) { box.placeholder = 'Search tomato, potato…'; return; }
    var w = 0, n = 0, deleting = false, timer = 0, boxOnScreen = true;
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { boxOnScreen = es[0].isIntersecting; }).observe(box);
    function tick() {
      // hold still while the customer is using the box
      if (document.activeElement === box || box.value) { timer = setTimeout(tick, 600); return; }
      // do no work while the box is scrolled off screen or the tab is in the background
      if (document.hidden || !boxOnScreen) { timer = setTimeout(tick, 800); return; }
      var word = words[w];
      n += deleting ? -1 : 1;
      box.placeholder = base + word.slice(0, n) + (deleting || n < word.length ? '|' : '');
      var wait = deleting ? 45 : 95;
      if (!deleting && n === word.length) { deleting = true; wait = 1400; }         // finished typing: pause
      else if (deleting && n === 0) { deleting = false; w = (w + 1) % words.length; wait = 350; } // erased: next word
      timer = setTimeout(tick, wait);
    }
    box.addEventListener('blur', function () { if (!box.value) { clearTimeout(timer); n = 0; deleting = false; tick(); } });
    tick();
  })();

  // ---------- basket ----------
  // packs[name] = list of amounts added, one entry per "add" (so the shown number = how many times it was added)
  var packs = {};
  function change(name, delta) {
    var cur = basket[name] || 0, p = packs[name] || (packs[name] = []);
    if (delta > 0) p.push(delta);
    else if (delta < 0) {
      if (-delta >= cur - 1e-9) p.length = 0;          // remove all of it
      else delta = -(p.pop() || 0);                     // − takes away the last thing added
    }
    var next = p.length ? Math.round(Math.max(0, cur + delta) * 1e3) / 1e3 : 0;
    if (next === 0) { delete basket[name]; delete packs[name]; order = order.filter(function (n) { return n !== name; }); }
    var isNewVeg = false;
    if (next !== 0) { if (!(name in basket)) { order.push(name); isNewVeg = true; } basket[name] = next; }
    // the number only goes up (and pops) when a NEW vegetable is added — changing 250 g → 500 g → 1 kg doesn't count again
    if (isNewVeg) popKey++;
    updateBasket(isNewVeg);
  }
  function updateBasket(pop) {
    var total = 0;
    var count = order.length; // number of different vegetables in the basket
    order.forEach(function (n) { total += byName(n).price * basket[n]; });
    // count badge (re-mounted so the pop animation replays, like React's key change)
    ['basketCount', 'basketFabCount'].forEach(function (id) {
      var old = $(id), badge = old.cloneNode(false);
      badge.className = 'grid h-6 min-w-6 place-items-center rounded-full bg-accent px-1.5 text-xs text-accent-foreground ' + (popKey ? 'pop' : '');
      badge.textContent = count;
      if (pop || old.textContent !== badge.textContent) old.replaceWith(badge);
      $(id).hidden = count === 0; // no "0" when the basket is empty
    });
    // side menu basket count
    var sideCount = $('sideCount');
    if (sideCount) { sideCount.textContent = count; sideCount.hidden = count === 0; }

    var items = $('basketItems');
    if (!order.length) items.innerHTML = '<p class="text-muted-foreground">Your basket is empty. Add some fresh picks! 🥬</p>';
    else {
      items.innerHTML = order.map(function (n, r) {
        var v = byName(n), q = basket[n];
        return '<div class="basket-float flex items-center justify-between rounded-xl bg-card/60 p-2.5" style="animation-delay:' + (-(r * .9)) + 's" data-name="' + esc(n) + '">' +
          '<div><div class="font-semibold">' + esc(n) + '</div><div class="text-xs text-muted-foreground">' + fmtQty(v, q) + ' · ₹' + v.price + '/' + esc(v.unit) + '</div></div>' +
          '<div class="flex items-center gap-2">' +
            '<button data-b="dec" aria-label="Remove ' + esc(n) + '" class="h-7 w-7 rounded-full bg-primary/10">−</button>' +
            '<button data-b="inc" aria-label="Add more ' + esc(n) + '" class="h-7 w-7 rounded-full bg-leaf-gradient font-bold text-primary-foreground shadow-sm transition hover:shadow-md">+</button>' +
            '<span class="w-16 text-right font-semibold text-primary">' + money(v.price * q) + '</span>' +
            '<button data-b="del" aria-label="Remove ' + esc(n) + ' from basket" class="h-7 w-7 rounded-full bg-destructive/10 text-destructive transition hover:bg-destructive hover:text-destructive-foreground">✕</button>' +
          '</div></div>';
      }).join('');
    }
    $('basketTotal').textContent = money(total);
    $('basketNote').textContent = total >= 300 ? '🎉 Free home delivery unlocked (within 3 km)' : 'Add ₹' + Math.ceil(300 - total) + ' more for free delivery';
    $('basketClear').disabled = !order.length;
    $('basketWhatsApp').disabled = !order.length;
    // name + place boxes, Total and the delivery note show only when something is in the basket
    $('waChoices').hidden = !order.length;
    $('basketTotal').parentElement.hidden = !order.length;
    $('basketNote').hidden = !order.length;
    refreshCardControls();
  }
  $('basketItems').addEventListener('click', function (e) {
    var b = e.target.closest('[data-b]'); if (!b) return;
    var n = b.closest('[data-name]').dataset.name, v = byName(n);
    if (b.dataset.b === 'dec') change(n, -step(v));
    else if (b.dataset.b === 'inc') change(n, step(v));
    else change(n, -basket[n]);
  });
  $('basketClear').addEventListener('click', function () { basket = {}; packs = {}; order = []; updateBasket(false); });

  // ---------- send the basket as an order on WhatsApp ----------
  function whatsappOrderText() {
    var lines = ['Hello A2A Vegetables 👋', 'I would like to order:', ''], total = 0;
    order.forEach(function (n, i) {
      var v = byName(n), q = basket[n], cost = v.price * q;
      total += cost;
      lines.push((i + 1) + '. ' + n + ' — ' + fmtQty(v, q) + ' — ' + money(Math.round(cost * 100) / 100));
    });
    total = Math.round(total * 100) / 100;
    lines.push('', '*Total: ' + money(total) + '*');
    lines.push(total >= 300 ? '🛵 Free home delivery (within 3 km)' : 'Not unlocked free delivery');
    lines.push('', '👤 Name: ' + customer.name, '📍 Place: ' + customer.place);
    return lines.join('\n');
  }
  // Customer's name and place (remembered on this device for next time)
  var CUSTOMER_KEY = 'a2a-customer';
  var customer = readJSON('localStorage', CUSTOMER_KEY) || { name: '', place: '' };
  function shopNumbers() {
    var c = window.A2A_CONFIG || {};
    var list = Array.isArray(c.whatsappNumbers) ? c.whatsappNumbers : (c.whatsappNumber ? [c.whatsappNumber] : []);
    return list.map(function (n) { return String(n).replace(/\D/g, ''); }).filter(Boolean);
  }
  function prettyNumber(n) { // 919876543210 -> +91 98765 43210
    return n.length === 12 && n.indexOf('91') === 0 ? '+91 ' + n.slice(2, 7) + ' ' + n.slice(7) : '+' + n;
  }
  // Opens the shop's chat straight away, skipping WhatsApp's "Continue to chat / Use WhatsApp Web" page:
  // phones open the WhatsApp app directly, computers open WhatsApp Web directly.
  function openWhatsApp(num) {
    var q = 'phone=' + num + '&text=' + encodeURIComponent(whatsappOrderText());
    var isPhone = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    if (isPhone) {
      var left = false;
      var onHide = function () { if (document.hidden) left = true; };
      document.addEventListener('visibilitychange', onHide);
      location.href = 'whatsapp://send?' + q;
      // WhatsApp app not installed: fall back to the web link
      setTimeout(function () {
        document.removeEventListener('visibilitychange', onHide);
        if (!left && !document.hidden) location.href = 'https://api.whatsapp.com/send?' + q;
      }, 1800);
      return;
    }
    var url = 'https://web.whatsapp.com/send?' + q;
    var w = window.open(url, '_blank', 'noopener');
    if (!w) location.href = url; // popup blocked: open in the same tab
  }
  // Name + place boxes sit above "Send to WhatsApp" (filled in with what the customer typed last time)
  $('waName').value = customer.name || '';
  $('waPlace').value = customer.place || '';
  $('waChoices').addEventListener('input', function (e) {
    if (e.target.id !== 'waName' && e.target.id !== 'waPlace') return;
    customer.name = $('waName').value; customer.place = $('waPlace').value;
    e.target.classList.remove('invalid');
    $('waErr').textContent = '';
    writeJSON('localStorage', CUSTOMER_KEY, customer);
  });
  // Send to WhatsApp: check name + place, then open the shop's chat with the order
  $('basketWhatsApp').addEventListener('click', function () {
    if (!order.length) return;
    var nameEl = $('waName'), placeEl = $('waPlace');
    customer.name = nameEl.value.trim(); customer.place = placeEl.value.trim();
    nameEl.classList.toggle('invalid', !customer.name);
    placeEl.classList.toggle('invalid', !customer.place);
    if (!customer.name || !customer.place) {
      $('waErr').textContent = !customer.name && !customer.place ? 'Please type your name and place.' : (!customer.name ? 'Please type your name.' : 'Please type your place.');
      (!customer.name ? nameEl : placeEl).focus();
      return;
    }
    writeJSON('localStorage', CUSTOMER_KEY, customer);
    openWhatsApp(shopNumbers()[0] || '');
  });

  var basketOpen = false, savedOv = {};
  function setBasket(open) {
    basketOpen = open;
    $('basket').classList.toggle('visible', open); $('basket').classList.toggle('invisible', !open);
    $('basketBg').classList.toggle('opacity-100', open); $('basketBg').classList.toggle('opacity-0', !open);
    $('basketPanel').classList.toggle('translate-x-0', open); $('basketPanel').classList.toggle('translate-x-[110%]', !open);
    var de = document.documentElement;
    if (open) { savedOv = { h: de.style.overflow, b: document.body.style.overflow }; de.style.overflow = 'hidden'; document.body.style.overflow = 'hidden'; document.body.dataset.basketOpen = '1'; }
    else { de.style.overflow = savedOv.h || ''; document.body.style.overflow = savedOv.b || ''; delete document.body.dataset.basketOpen; }
  }
  $('basketBtn').addEventListener('click', function () { setBasket(true); });
  $('basketFab').addEventListener('click', function () { setBasket(true); });
  $('basketClose').addEventListener('click', function () { setBasket(false); });
  $('basketBg').addEventListener('click', function () { setBasket(false); });

  // ---------- details sheet ----------
  var sheetRoot = $('sheetRoot'), sheetOv = '';
  // Sharp (800 px) copies of the built-in photos, used in the vegetable details popup
  var HD_PHOTOS = ['beetroot-cut', 'brinjal-plant', 'broccoli-florets', 'carrot', 'coriander', 'cucumber-pile', 'drumstick-bunch', 'garlic-bulbs',
    'ginger-root', 'green-chilli', 'green-mango', 'mushroom-board', 'onion-plate', 'potato', 'spinach-bunch', 'tomato'];
  function hdPhoto(img) {
    var m = /^assets\/img\/([a-z-]+)\.(?:jpe?g|png)(?:\?|$)/.exec(img || '');
    return m && HD_PHOTOS.indexOf(m[1]) !== -1 ? 'assets/img/hd/' + m[1] + '.jpg?v=' + PHOTO_VERSION : '';
  }
  function openSheet(v) {
    var opts = qtyOptions(v);
    var wasOpen = !!sheetVeg;
    sheetVeg = v;
    sheetQty = opts.some(function (o) { return o.qty === .25; }) ? .25 : 1;
    sheetAdded = false;
    if (!wasOpen) { sheetOv = document.body.style.overflow; document.body.style.overflow = 'hidden'; document.addEventListener('keydown', sheetKey); }
    renderSheet(true);
  }
  function closeSheet() {
    if (!sheetVeg) return;
    sheetVeg = null; clearTimeout(sheetTimer);
    document.body.style.overflow = sheetOv;
    document.removeEventListener('keydown', sheetKey);
    var w = sheetRoot.firstChild;
    if (!w) return;
    w.classList.add('is-closing'); // play the close animation, then remove
    setTimeout(function () { if (sheetRoot.firstChild === w && !sheetVeg) sheetRoot.innerHTML = ''; }, reduceMotion ? 0 : 300);
  }
  function sheetKey(e) { if (e.key === 'Escape') closeSheet(); }
  function sheetTotal() { return Math.round(sheetVeg.price * sheetQty * 100) / 100; }
  function chipClass(o) { return 'rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ' + (sheetQty === o.qty ? 'scale-105 bg-primary text-primary-foreground shadow-lg' : 'glass hover:-translate-y-0.5'); }
  function addLabel() { return sheetAdded ? '✓ Added to basket' : 'Add ' + fmtQty(sheetVeg, sheetQty) + ' · ' + money(sheetTotal()); }
  function renderSheet(full) {
    var v = sheetVeg, opts = qtyOptions(v);
    if (full) {
      var catLabel = (CATS.filter(function (c) { return c.id === v.cat; })[0] || {}).label || '';
      sheetRoot.innerHTML =
        '<div class="sheet-wrap fixed inset-0 z-[60] grid place-items-center overflow-y-auto p-4" role="dialog" aria-modal="true" aria-label="' + esc(v.name) + ' details">' +
          '<div data-s="bg" class="sheet-bg absolute inset-0 bg-forest/40 backdrop-blur-md"></div>' +
          '<div class="sheet-card sheet-in veg-sheet relative w-full max-w-3xl overflow-hidden rounded-[2rem] shadow-2xl">' +
            '<span class="sheet-grab" aria-hidden="true"></span>' +
            '<button data-s="close" aria-label="Close details" class="glass absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full text-sm transition hover:rotate-90 hover:scale-110">✕</button>' +
            '<div class="grid md:grid-cols-2">' +
              '<div class="sheet-img relative aspect-square bg-secondary md:aspect-auto">' +
                (v.img ? '<img src="' + esc(v.img) + '" alt="' + esc(v.name) + '" decoding="async" class="h-full w-full object-cover">' : '<div class="grid h-full place-items-center text-9xl">🥬</div>') +
                '<span class="glass absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-primary">' + esc(catLabel) + '</span></div>' +
              '<div class="flex flex-col p-6 md:p-8">' +
                '<h2 class="font-display text-3xl font-semibold leading-tight text-forest">' + esc(v.name) + '</h2>' +
                '<p class="mt-1 text-sm text-muted-foreground">' + esc(v.local) + ' · sold by ' + (v.unit === 'kg' ? 'weight' : 'the ' + esc(v.unit)) + '</p>' +
                '<p class="mt-4 text-sm leading-relaxed text-muted-foreground">' + esc(v.desc || autoDescription(v)) + '</p>' +
                '<div class="mt-5 flex items-end gap-2"><span class="font-display text-4xl font-semibold text-primary">₹' + v.price + '</span><span class="pb-1 text-sm text-muted-foreground">/ ' + esc(v.unit) + '</span></div>' +
                '<p class="mt-6 text-xs font-semibold uppercase tracking-widest text-primary">Choose your quantity</p>' +
                '<div class="qty-chips mt-3 flex flex-wrap gap-2">' + opts.map(function (o, t) {
                  return '<span class="chip-float inline-block" style="animation-delay:' + (t * -1.1) + 's"><button data-q="' + o.qty + '" class="' + chipClass(o) + '">' + o.label + '</button></span>';
                }).join('') + '</div>' +
                '<div class="mt-5 flex items-center justify-between rounded-2xl bg-card/70 px-4 py-3"><span data-s="qtytxt" class="text-sm text-muted-foreground"></span><span data-s="total" class="font-display text-2xl font-semibold text-primary"></span></div>' +
                '<button data-s="add" class="mt-4 w-full rounded-full bg-leaf-gradient py-3.5 font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-xl active:scale-95"></button>' +
                '<p class="mt-3 text-center text-xs text-muted-foreground">Weighed in front of you · Free delivery within 3 km above ₹300</p>' +
                (v.credit ? '<p class="photo-credit">' + esc(v.credit) + '</p>' : '') +
              '</div></div></div></div>';
      var root = sheetRoot.firstChild;
      root.addEventListener('click', function (e) {
        var s = e.target.closest('[data-s],[data-q]'); if (!s) return;
        if (s.dataset.q) { sheetQty = +s.dataset.q; sheetAdded = false; renderSheet(false); }
        else if (s.dataset.s === 'bg' || s.dataset.s === 'close') closeSheet();
        else if (s.dataset.s === 'add') {
          change(sheetVeg.name, sheetQty); sheetAdded = true; renderSheet(false);
          clearTimeout(sheetTimer); sheetTimer = setTimeout(function () { if (sheetVeg) { sheetAdded = false; renderSheet(false); } }, 1500);
        }
      });
      root.querySelector('[data-s="close"]').focus();
      // show the small photo at once (already saved), then swap in the sharp photo as soon as it arrives
      var hd = hdPhoto(v.img), pic = root.querySelector('.sheet-img img');
      if (hd && pic) {
        var big = new Image(); big.decoding = 'async';
        big.onload = function () { if (sheetVeg === v && pic.isConnected) pic.src = hd; };
        big.src = hd;
      }
    }
    var r = sheetRoot.firstChild;
    r.querySelectorAll('[data-q]').forEach(function (b) { b.className = chipClass({ qty: +b.dataset.q }); });
    r.querySelector('[data-s="qtytxt"]').textContent = fmtQty(v, sheetQty) + ' at the counter';
    r.querySelector('[data-s="total"]').textContent = money(sheetTotal());
    r.querySelector('[data-s="add"]').textContent = addLabel();
  }

  function cardSig(v) { return [v.name, v.local, v.price, v.unit, v.cat, v.img ? v.img.length + ':' + v.img.slice(-24) : ''].join('|'); }

  // ---------- keep pictures saved on the device after the first load ----------
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function (e) { console.warn('Picture cache unavailable:', e && e.message); });
    });
  }

  // ---------- init ----------
  $('year').textContent = new Date().getFullYear();
  renderCats();
  renderGrid();
  updateBasket(false);
  initBackend();
})();
