# Turning on the shop owner login

The site works without this: it shows the built-in price list. Once you do these steps, prices come from an online database, and the shop owner can log in from the ☰ menu and change them. Everyone who visits the site then sees the new prices.

The setup uses **Supabase**, the same service the original Lovable site used. It is free for a shop this size.

## 1. Create a Supabase project (about 5 minutes)

1. Go to https://supabase.com and sign up or log in.
2. Click **New project**. Give it a name (for example `a2a-vegetables`), choose a database password (save it somewhere safe), and pick the region **Mumbai** (`ap-south-1`).
3. Wait about a minute until the project is ready.

## 2. Create the price table

1. In your project, open **SQL Editor** → **New query**.
2. Open `supabase/setup.sql` from this folder, copy all of it, paste it in, and click **Run**.
3. Open **Table Editor**. You should see a `veggies` table with 18 vegetables.

## 3. Create the shop owner's login

1. Open **Authentication** → **Users** → **Add user** → **Create new user**.
2. Enter the email `anirudhkarthikeyan25@gmail.com` and the owner password, tick **Auto Confirm User**, and click **Create user**.
3. Go back to **SQL Editor** → **New query**, and run:

   ```sql
   insert into public.shop_owners (user_id)
   select id from auth.users where email = 'anirudhkarthikeyan25@gmail.com'
   on conflict do nothing;
   ```

The website only lets `anirudhkarthikeyan25@gmail.com` into the dashboard. That email is set as `OWNER_EMAIL` in `assets/app.js`. Once connected, Supabase checks the password, so it stays private. Before that, the site checks the password against a SHA-256 fingerprint in `assets/app.js`, and saved prices stay in that one browser only.

## 4. Connect the website

1. In Supabase, open **Project Settings** → **API**.
2. Copy the **Project URL** and the **anon public** key.
3. Open `assets/config.js` in this folder and paste them in:

   ```js
   window.A2A_CONFIG = {
     supabaseUrl: 'https://YOUR-PROJECT.supabase.co',
     supabaseAnonKey: 'eyJhbGciOi...'
   };
   ```

   The anon key is meant to be public, so it is safe in the website. **Never** paste the `service_role` key here.

## 5. Try it

1. Open the site (run `serve.ps1`, then go to http://localhost:8080).
2. Click ☰ → **Log in as shop owner** and log in with the owner's email and password.
3. The **Owner dashboard** opens. Change a price, or untick **In stock** to hide a vegetable, and click **Save prices**.
4. The price list updates, and so does the "Prices last updated" line under it.

The owner stays logged in on that device. To log out, click ☰ → **Sign out**.

## Good to know

- Only accounts listed in `shop_owners` can change prices. Anyone else who logs in gets "not a shop owner", and the database refuses their changes.
- To add a new vegetable, click **＋ Add vegetable** in the Owner dashboard. Add a picture (on a phone you can take one with the camera), then the name, price, unit and category. The picture is shrunk automatically and saved in Supabase Storage (the `veggie-photos` bucket that `setup.sql` creates).
- If the database can't be reached, the site falls back to the built-in price list in `assets/app.js`.
