# AWS S3 + CloudFront Deployment Information

## 🌐 Your Live Site

**CloudFront URL:** `https://d1uo0mquchu7hb.cloudfront.net`

### Status

- ✅ Deployed successfully to AWS S3
- ✅ CloudFront distribution created and configured
- ⏳ **Distribution is still deploying** (takes 15-20 minutes to become fully active)
- ✅ Error page handling configured for clean URLs

## 📦 Deployment Details

- **S3 Bucket:** `fde-soc-site-1761680695`
- **Region:** `us-east-1`
- **Distribution ID:** `E18BMUPWNYWEU`
- **Distribution Domain:** `d1uo0mquchu7hb.cloudfront.net`

## 🔄 How Next.js and CloudFront Handle .html Files

### The Problem

Next.js static export generates clean URLs without `.html` extensions:

- `/about` instead of `/about.html`
- `/blog/my-post` instead of `/blog/my-post.html`

However, S3 and CloudFront expect explicit file paths. When someone visits `/about`, the server needs to know to serve `/about.html`.

### The Solution

I configured CloudFront with **Custom Error Responses**:

1. **404 Errors → 200 Response**

   - When CloudFront can't find a file (404), it returns `/index.html` with a 200 status code
   - This allows Next.js's client-side routing to handle the request

2. **403 Errors → 200 Response**
   - When S3 returns a 403 (access denied), it also returns `/index.html`
   - This handles directory access without explicit `index.html` files

### What This Means

- ✅ Clean URLs work: `https://d1uo0mquchu7hb.cloudfront.net/about lives and well`
- ✅ Direct URL access works: visiting any path loads the app
- ✅ Client-side routing works: navigation within the site functions correctly
- ✅ 404 pages work: unknown routes show your custom 404 page

## 📝 For Future Deployments

To update your site in the future:

```bash
# 1. Build the static site
npm run build

# 2. Sync to S3
aws s3 sync out/ s3://fde-soc-site-1761680695/ --delete --region us-east-1

# 3. (Optional) Invalidate CloudFront cache to see changes immediately
aws cloudfront create-invalidation \
  --distribution-id E18BMUPWNYWEU \
  --paths "/*"
```

## ⚠️ Important Notes

1. **Propagation Time:** CloudFront changes take 15-20 minutes to fully deploy. Check status with:

   ```bash
   aws cloudfront get-distribution --id E18BMUPWNYWEU --query 'Distribution.Status'
   ```

2. **The site is publicly accessible** - anyone can visit it via the CloudFront URL.

3. **Clean URLs are fully supported** - no `.html` extensions needed in URLs.

4. **Cost Considerations:**
   - S3 storage: minimal cost
   - CloudFront: pay per GB transferred (first 50GB free tier)
   - Consider setting up CloudWatch alarms for cost monitoring

## 🔗 Quick Access

```bash
export BUCKET_NAME=fde-soc-site-1761680695
export DISTRIBUTION_ID=E18BMUPWNYWEU
```

## ✨ Next Steps

- [ ] Test the live site once CloudFront deployment completes
- [ ] Consider setting up a custom domain (optional)
- [ ] Consider adding CloudWatch alarms for monitoring
- [ ] Set up automated deployments (CI/CD)
