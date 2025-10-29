# Deployment Instructions for ROS DJ Website

## 🚀 Build the Project

1. Navigate to the project root:
   ```bash
   cd /Users/admin/CascadeProjects/personal-website-2
   ```

2. Install dependencies (if not already done):
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run build
   ```

4. Check the `dist` folder for built files

## 📤 Deploy to Hosting

### Option 1: Manual Upload via FTP/cPanel
1. Connect to your hosting via FTP or File Manager
2. Upload all files from `dist` folder to public_html (or www)
3. Ensure sitemap files are included:
   - sitemap.xml
   - sitemap.html
   - sitemap.txt
   - sitemap-index.xml
   - robots.txt

### Option 2: Git-based Deployment
If using GitHub/Netlify/Vercel:
1. Push code to repository
2. Configure build command: `npm run build`
3. Set publish directory: `dist`

### Option 3: Direct Upload
Use hosting file manager to upload the `dist` folder contents

## ✅ Post-Deployment Checks

1. Visit https://rosdj.com/
2. Check sitemap URLs:
   - https://rosdj.com/sitemap.xml
   - https://rosdj.com/sitemap.html
   - https://rosdj.com/robots.txt

3. Test SSL certificate:
   - Visit https://www.ssllabs.com/ssltest/
   - Enter: rosdj.com

4. Submit to Google Search Console:
   - Add sitemap: https://rosdj.com/sitemap.xml

## 🔧 Troubleshooting

- 404 errors: Files not uploaded to correct directory
- SSL errors: Certificate not configured on hosting
- Slow loading: Enable compression, optimize images

## 📞 Need Help?
If you need specific instructions for your hosting provider, please share:
- Hosting company name
- Control panel type (cPanel, Plesk, etc.)
- Deployment method preference
