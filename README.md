# MedBed — Website (`med-bed.dev`)

A complete, static marketing + investor website for **MedBed**. No build step, no framework — just HTML, CSS, and a little vanilla JavaScript. It's ready to publish on **GitHub Pages** at **https://med-bed.dev**.

---

## 🚀 Publish in 5 minutes

### Step 1 — Put these files in a GitHub repo
Two easy options:

**A. Upload in the browser (no tools needed)**
1. Go to <https://github.com/new> and create a repository (Public). Name it anything, e.g. `medbed-site`.
2. On the new repo page, click **“uploading an existing file.”**
3. Drag in **everything inside this `med-bed.dev` folder** (the `index.html`, the other `.html` files, the `assets/` folder, `CNAME`, `.nojekyll`, `robots.txt`, `sitemap.xml`). Keep the folder structure.
4. Click **Commit changes.**

**B. Use git (if you prefer the command line)**
```bash
cd "med-bed.dev"
git init
git add .
git commit -m "MedBed website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

### Step 2 — Turn on GitHub Pages
1. In the repo, go to **Settings → Pages.**
2. Under **Build and deployment → Source**, choose **“Deploy from a branch.”**
3. Set **Branch = `main`** and **Folder = `/ (root)`**, then **Save.**
4. Wait ~1 minute. GitHub will show your live URL. Your site is now published. ✅

> The included `CNAME` file already sets the custom domain to `med-bed.dev`, so GitHub will pick it up automatically. The `.nojekyll` file tells GitHub to serve the files exactly as-is.

### Step 3 — Point `med-bed.dev` at GitHub (one-time DNS setup)
This is the only part that happens **outside** the repo — at whatever registrar you bought `med-bed.dev` from (e.g. Google Domains/Squarespace, Namecheap, Cloudflare, Porkbun). Add these records:

**Apex domain `med-bed.dev` — add four `A` records** (all pointing to GitHub):
```
A   @   185.199.108.153
A   @   185.199.109.153
A   @   185.199.110.153
A   @   185.199.111.153
```
**(Recommended) also add IPv6 `AAAA` records:**
```
AAAA  @  2606:50c0:8000::153
AAAA  @  2606:50c0:8001::153
AAAA  @  2606:50c0:8002::153
AAAA  @  2606:50c0:8003::153
```
**(Optional) redirect `www` to your site — add one `CNAME` record:**
```
CNAME  www   <your-username>.github.io.
```

Then back in **Settings → Pages**:
- Confirm **Custom domain** shows `med-bed.dev` (it will, thanks to the `CNAME` file). If it's empty, type `med-bed.dev` and Save.
- Once the DNS check passes (can take anywhere from a few minutes to a few hours), tick **✅ Enforce HTTPS**. `.dev` domains require HTTPS, and GitHub provides the certificate free.

That's it — `https://med-bed.dev` is live.

---

## 🖥️ Preview locally before publishing
Because the site uses relative paths, just open it with any tiny web server:
```bash
cd "med-bed.dev"
python3 -m http.server 8000
# then visit http://localhost:8000 in your browser
```
(You can also double-click `index.html`, though a local server renders it most accurately.)

---

## ✉️ Make the contact form actually send email
The form currently shows a friendly “thanks” message but doesn't deliver anything yet. To make it live (free, ~2 minutes):
1. Create a form at <https://formspree.io> and copy your form ID.
2. Open `contact.html` and find the `<form ... action="https://formspree.io/f/YOUR_FORM_ID">` line.
3. Replace `YOUR_FORM_ID` with yours, and change `data-live="false"` to `data-live="true"`.
Submissions will now be emailed to you. (Any form service that accepts a POST works — Formspree, Getform, Basin, etc.)

---

## ✏️ Things to fill in before launch (search for `[` )
The site is complete, but a few spots are intentionally left as placeholders so you can add real details. Search the `.html` files for square brackets `[` and the word `placeholder`:
- **Team page** (`team.html`) — each member's **role**, a short **bio**, and a **headshot** (currently shows initials).
- **Investors page** (`investors.html`) — the funding **amount / use of funds**, and real **traction milestones**.
- **Impact page** (`impact.html`) — your **market-size (TAM/SAM)** estimate.
- **Contact / footer** — **phone**, **location**, and **LinkedIn / X** links. Email is set to `hello@med-bed.dev` (change if you use another address).
- **Sources page** (`sources.html`) — confirm the two “estimate” figures before publishing.

To add a team headshot, drop a square photo in `assets/product/` (or a new `assets/team/` folder) and swap the `<div class="member__avatar">…</div>` for an `<img>` in `team.html`.

---

## 🗂️ What's in here
```
med-bed.dev/
├── index.html          Home
├── problem.html        The Problem
├── solution.html       The Solution
├── impact.html         Impact & ROI
├── team.html           Our Team
├── investors.html      For Investors
├── contact.html        Contact (form)
├── sources.html        Cited sources
├── faq.html            FAQ
├── 404.html            Friendly not-found page
├── CNAME               Custom domain (med-bed.dev) — do not delete
├── .nojekyll           Tells GitHub Pages to serve files as-is
├── robots.txt          Search-engine directives
├── sitemap.xml         Sitemap for SEO
└── assets/
    ├── css/styles.css  All styling (brand colors, layout, responsive)
    ├── js/main.js      Menu, scroll animations, contact form
    ├── logo/           MedBed logos (SVG + PNG)
    ├── product/        Product renders & photos
    ├── impact/         Value / savings graphic
    └── icons/          Favicons + social share image
```

## 🎨 Editing content & style
- **Text** lives directly in the `.html` files — edit and re-commit.
- **Colors, fonts, spacing** are all near the top of `assets/css/styles.css` (the `:root` variables). Brand palette: deep green `#2E4A34`, sage `#5E7B63`, mint `#8CA88F`, cream `#F4F6F1`.
- **Fonts:** Poppins (headings) + Inter (body), loaded from Google Fonts.
- Navigation, footer, and the call-to-action band are repeated on each page; if you change one, update the others to match (they're identical blocks).

## ✅ Notes
- The site is responsive (phone → desktop), accessible, and SEO-ready (per-page titles/descriptions, Open Graph share image, sitemap).
- Nothing on the public site describes how the device works internally — that's intentional. Keep it that way in any edits.
- Keep `CNAME` and `.nojekyll` in the repo; deleting them breaks the custom domain / correct serving.

---

*Questions while publishing? The GitHub Pages docs are here: <https://docs.github.com/pages> — and the custom-domain guide is here: <https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site>.*
