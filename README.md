ROS DJ — React (Vite) single-page site
======================================

This project is a minimal React (Vite) conversion of your old static HTML.
It preserves your original layout, styles and content, and is ready to run.

How to use
----------
1. Download and unzip the project.
2. In the project folder, run:
   npm install
   npm run dev
3. Open http://localhost:5173

Notes
-----
- Replace `/ROSDJ.jpeg`, `/DJROS.jpg` and `/logo.png` in the project root with your real images.
- Font Awesome icons are referenced via CDN in index.html.
- To deploy to Vercel, simply push to a Git repository and import to Vercel. Vercel will run `npm install` and `npm run build`.



Updates:
- Added SoundCloud, Mixcloud and YouTube embeds in the Music section (uses your provided profiles).
- Added a simple contact form that opens mail client (mailto) to r.dabizha@icloud.com.
