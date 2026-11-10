// Connect the site to your Supabase project (see SETUP.md).
// Both values are on Supabase → Project Settings → API.
// The "anon public" key is meant to be public — never put the "service_role" key here.
window.A2A_CONFIG = {
  supabaseUrl: '',      // e.g. 'https://abcdefgh.supabase.co'
  supabaseAnonKey: '',  // e.g. 'eyJhbGciOi...'

  // The shop's WhatsApp numbers for basket orders: country code + number, digits only.
  // Each number gets its own button in the basket. Leave the list empty to let the customer pick the chat in WhatsApp.
  whatsappNumbers: ['917293368630'],

  // Owner price changes are published to everyone by saving prices.json in this GitHub repository.
  // The owner connects once in the dashboard with a GitHub key (stored only on their own device).
  githubRepo: 'anirudhkarthikeyan11/A2A-vegetables',
  githubBranch: 'main'
};
