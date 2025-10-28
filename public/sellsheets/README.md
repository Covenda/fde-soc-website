# Generating Sell Sheet PDF

To create the `covenda-services.pdf` file:

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Navigate to the sell sheet page**:
   Open your browser to: `http://localhost:3000/sellsheet`

3. **Print to PDF**:
   - Press `Cmd + P` (Mac) or `Ctrl + P` (Windows/Linux)
   - Select "Save as PDF" as the destination
   - Configure these print settings:
     - Paper size: **Letter (8.5 x 11 inches)**
     - Margins: **None**
     - Scale: **100%**
     - Background graphics: **Enabled**
   - Click "Save"
   - Save as `covenda-services.pdf` in this directory

4. **Verify**:
   - PDF should be exactly 1 page
   - All colors and formatting should be preserved
   - No headers/footers from browser

## Alternative: Using Puppeteer/Playwright

For automated PDF generation in CI/CD or for bulk creation:

```javascript
// scripts/generate-sellsheet.js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:3000/sellsheet', {
    waitUntil: 'networkidle0'
  });

  await page.pdf({
    path: 'public/sellsheets/covenda-services.pdf',
    format: 'Letter',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });

  await browser.close();
  console.log('✅ Sell sheet PDF generated');
})();
```

Run with:
```bash
npm install puppeteer
node scripts/generate-sellsheet.js
```

## Updating the Sell Sheet

Edit the content in `app/sellsheet/page.tsx`:
- Update pricing
- Modify service descriptions
- Change metrics/statistics
- Adjust layout and styling

After making changes, regenerate the PDF using the steps above.
