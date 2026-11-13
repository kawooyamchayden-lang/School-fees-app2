SCHOOL FEES REGISTER (installable app)
1. Upload all files in this folder to free HTTPS hosting (Netlify Drop: app.netlify.com/drop, GitHub Pages, or Cloudflare Pages).
2. Open the link on the bursar's PC in Chrome or Edge, wait a few seconds, then click the install icon in the address bar (or menu > "Install app").
3. Open it once with internet. After that it works fully offline.
4. Restore your old data: Settings > Restore from backup (old backup files work).
Notes: data is stored on that PC only. Use Settings > Save / share backup weekly.

CLOUD BACKUP (optional)
The folder includes a Netlify Function (netlify/functions/backup.mjs) that stores one ENCRYPTED backup per school.
It needs a Netlify deploy that builds functions: connect the folder to a Git repo on Netlify, or run "npx netlify-cli deploy --prod" in this folder.
Then in the app: Settings > Cloud backup > choose a passphrase. Keep it safe: it cannot be recovered.

DIRECTOR PAGE
After cloud backup is on, share  https://YOUR-SITE.netlify.app/director.html  with the head teacher or director (Settings > Cloud backup > Share Director page link).
They enter the same backup passphrase. The page is read-only, decrypts the data in their browser, and refreshes every 30 seconds.
