# 🚀 Quick Deployment Guide

## Deploy Your Carolina Running Club Website in 5 Minutes

This guide walks you through deploying to Netlify.

---

## Step 1: Prepare Your Repository (2 minutes)

```bash
# Make sure you're in your project directory
cd "D:\cddhi\FACULTATE\proiecte personale\CarolinaRunningClub Webpage"

# Check git status
git status

# Stage all changes
git add .

# Commit with a message
git commit -m "v2.0: Complete design overhaul - red/black/white theme, better testimonials, enhanced FAQ"

# Push to GitHub
git push origin main
```

---

## Step 2: Connect to Netlify (3 minutes)

### Option A: Automatic Deploy (Recommended)

1. Open https://app.netlify.com/
2. Click **"Sign up"** (use GitHub to sign up)
3. Authorize Netlify to access your GitHub repos
4. Click **"New site from Git"**
5. Select your GitHub account
6. Find **"webpage-carolinarunning-club"**
7. Click to select it
8. Leave all settings as default:
   - **Build command**: empty
   - **Publish directory**: `.`
9. Click **"Deploy site"**

Netlify will automatically deploy and give you a URL like:
```
https://funky-name-12345.netlify.app
```

### Option B: Manual Deploy (If GitHub not connected)

1. Go to https://app.netlify.com/
2. Drag and drop your project folder to deploy
3. Wait for upload to complete

---

## Step 3: Test Your Site (Minimal time)

1. Open the Netlify URL provided (e.g., `funky-name-12345.netlify.app`)
2. Test these links:
   - ✅ Click "Join the next run" button
   - ✅ Click "Follow on Instagram" link
   - ✅ Scroll through all sections
   - ✅ Fill out and submit "Get run updates" form
   - ✅ Check on mobile (use browser DevTools)

3. After submitting the form, check Netlify:
   - Go to your site on Netlify
   - Click **"Forms"** tab
   - Confirm your test submission appears

---

## Step 4: Set Custom Domain (Optional, 10 minutes)

1. Get a domain name:
   - Recommended: `carolinarunningclub.ro`
   - Providers: Namecheap, Google Domains, GoDaddy

2. In Netlify site settings:
   - Click **"Domain settings"**
   - Click **"Add custom domain"**
   - Enter your domain (e.g., `carolinarunningclub.ro`)
   - Follow DNS setup instructions

3. Point domain to Netlify (DNS records):
   - Each provider is different, but Netlify guides you through it
   - Takes 15-60 minutes to propagate

---

## Step 5: Update Your Instagram Bio

```
Come for the run. Stay for the community.
[Link: carolinarunningclub.ro]
or [Link: funky-name-12345.netlify.app]
```

---

## What Happens Next

- Every time you push to GitHub → Netlify auto-deploys (1-2 min)
- No build process needed (it's static HTML/CSS)
- Free HTTPS certificate included
- 99.9% uptime guaranteed

---

## Common Questions

**Q: Will my form work?**
A: Yes. Netlify Forms is built-in. Submissions appear in your Forms dashboard.

**Q: Can I add to the newsletter later?**
A: Yes. Connect Mailchimp or MailerLite to Netlify Forms later using Zapier.

**Q: How do I update content?**
A: Edit HTML/CSS → commit → push → auto-deploys in 1-2 minutes.

**Q: Can I add photos?**
A: Yes. Add files to `assets/photos/` with the expected names, commit, push.

**Q: Is it free?**
A: Yes. Netlify free tier includes unlimited static sites, forms, and HTTPS.

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Can't find GitHub repo in Netlify | Make sure you signed up with GitHub and authorized Netlify |
| Site shows old content | Click "Trigger deploy" in Netlify site settings |
| CSS looks wrong | Press `Ctrl+Shift+R` to hard-refresh (clear cache) |
| Form not submitting | Check Netlify Forms dashboard to see errors |
| Custom domain not working | Wait 1 hour for DNS to propagate, then clear browser cache |

---

## Next Steps After Deploy

1. **Share the link**: Post on Instagram Stories
2. **Collect feedback**: Ask members for testimonials
3. **Add photos**: Update `assets/photos/` with real club images
4. **Monitor forms**: Check Netlify Forms for submissions weekly
5. **Plan Phase 2**: Consider shop, blog, or email marketing later

---

## Support Resources

- **Netlify Docs**: https://docs.netlify.com/
- **GitHub Guide**: https://guides.github.com/
- **HTML/CSS Help**: https://developer.mozilla.org/

---

**You're all set! Your Carolina Running Club website is live. 🎉**

Come for the run. Stay for the community. 🏃‍♂️❤️
