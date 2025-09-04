
# Manhua GitHub Pages Starter

This is a minimal, static site template for hosting legally licensed manhua / comics on **GitHub Pages** with ad slots (AdSense/Ezoic).

## How to Use
1. Rename the `CNAME` file content to your domain (e.g., `mydomain.com`) or delete it if you won't use a custom domain yet.
2. Replace `yourdomain.com` in `sitemap.xml` and `robots.txt`.
3. Paste your ad network **global script** into the `<head>` of each HTML (see comments), and replace the placeholder ad boxes by editing `/assets/ads.js` or putting the ad unit code directly into the `#ad-top`, `#ad-mid`, `#ad-bottom` containers.
4. Put your chapter page images into `/images/<series-slug>/chapter-<n>/` as `001.jpg`, `002.jpg`, ...
5. Duplicate `/series/sample-manhua/chapter-1/index.html` for new chapters and update the image paths and titles.
6. Duplicate `/series/sample-manhua/` for new series; update links and metadata.
7. Commit/push to GitHub; enable **Pages** in your repo settings (branch: `main`, folder: `/root`).

## Ad Tips
- Keep ads reasonable (top/middle/bottom). Overloading ads can hurt UX and RPM.
- Ensure you have **Privacy**, **Terms**, and **DMCA** pages for AdSense/Ezoic compliance.

## Custom Domain (Porkbun → GitHub Pages)
- In this repo, edit the `CNAME` file to contain your domain (e.g., `mydomain.com`).
- In Porkbun **DNS**:
  - Apex (root) `@` → **A** records to GitHub Pages:
    - 185.199.108.153
    - 185.199.109.153
    - 185.199.110.153
    - 185.199.111.153
  - `www` → **CNAME** to `<your-github-username>.github.io`
- In GitHub repo **Settings → Pages**, set your custom domain and enforce HTTPS.

## License
You are responsible for only hosting content you have legal rights to use.
