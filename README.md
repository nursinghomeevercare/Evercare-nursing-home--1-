
  # Evercare nursing home

  This is a code bundle for Evercare nursing home. The original project is available at https://www.figma.com/design/HfnYXJTnJ3RqrmRJe6rkIe/Evercare-nursing-home.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  Great! 🎉 Since your site is already deployed correctly to **GitHub Pages using the `gh-pages` branch**, updating your website will be very simple.

Below is the **standard workflow every time you update content**.

---

# 🚀 Steps to Update Your Website (Vite + React + GitHub Pages)

## 1️⃣ Edit your website content

Update any files in your project, for example:

* `src/pages/HomePage.tsx`
* `src/components/...`
* images in `public/`
* SEO text or pricing

Save all changes.

---

# 2️⃣ Test locally (important)

Run the development server:

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

Check that everything works correctly.

Stop the server with:

```
Ctrl + C
```

---

# 3️⃣ Build the website

This creates the production version inside **dist/**.

```bash
npm run build
```

You should see something like:

```
dist/
   index.html
   assets/
   images/
```

---

# 4️⃣ Commit your changes to Git

```bash
git add .
git commit -m "Update website content"
git push origin main
```

This saves your source code on GitHub.

---

# 5️⃣ Deploy to GitHub Pages

Push the `dist` folder to `gh-pages` branch.

```bash
git subtree push --prefix dist origin gh-pages
```

---

# 6️⃣ Wait for GitHub Pages to update

Usually **30 seconds – 2 minutes**.

Then open your site:

```
https://nursinghomeevercare.github.io/Evercare-nursing-home--1-/
```

Your new content will appear.

---

# ⚡ Super Short Version (Daily Workflow)

When you update your website:

```bash
npm run build
git add .
git commit -m "update website"
git push origin main
git subtree push --prefix dist origin gh-pages
```

Done. ✅

---

# 🧠 Pro Tips (Highly Recommended)

### 1️⃣ Pull before editing (if using multiple computers)

```bash
git pull origin main
```

---

### 2️⃣ Always test locally

```bash
npm run dev
```

---

### 3️⃣ If deployment fails

Run again:

```bash
git subtree push --prefix dist origin gh-pages --force
```

---

# ⭐ Even Easier Method (Optional Future Improvement)

You can make deployment **1 command only**:

```
npm run deploy
```

But this requires installing **gh-pages package**.

If you want, I can also show you:

* ✅ **Automatic deploy using GitHub Actions (best for production)**
* ✅ **SEO setup for your nursing home website**
* ✅ **How to get Google to index your site**
* ✅ **How to get clients from Google search**

These are **very important for a nursing home website**.
