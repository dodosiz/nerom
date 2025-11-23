# SEO Maintenance Checklist

## Weekly Tasks

- [ ] Check Google Search Console for crawl errors
- [ ] Review Google Analytics for traffic trends
- [ ] Monitor Core Web Vitals scores
- [ ] Check for broken links

## Monthly Tasks

- [ ] Update sitemap if new projects added
- [ ] Review and update meta descriptions for underperforming pages
- [ ] Check for duplicate content issues
- [ ] Review search query performance in Search Console
- [ ] Update business hours in LocalBusiness schema if changed
- [ ] Check mobile usability in Search Console

## Quarterly Tasks

- [ ] Audit all page titles and descriptions
- [ ] Review and update structured data
- [ ] Analyze competitor SEO strategies
- [ ] Update keywords based on search trends
- [ ] Review and optimize images (file size, alt text)
- [ ] Test page speed and optimize if needed
- [ ] Update content for freshness

## Annual Tasks

- [ ] Comprehensive SEO audit
- [ ] Review and update privacy policy
- [ ] Refresh all page content
- [ ] Update business information across all schemas
- [ ] Review and renew SSL certificate
- [ ] Analyze year-over-year traffic growth

## When Adding New Content

### New Architecture Project

- [ ] Add project to `app/_data/projects.ts`
- [ ] Upload preview image to `/public/architecture/preview/`
- [ ] Upload project images to `/public/architecture/[project-id]/`
- [ ] Add translations to `app/localization.ts`
- [ ] Test metadata generation
- [ ] Verify sitemap includes new project
- [ ] Submit updated sitemap to Search Console

### New Service Page

- [ ] Create page with `generateMetadata` function
- [ ] Include relevant keywords
- [ ] Add to navigation menu
- [ ] Update sitemap if needed
- [ ] Add service to ServiceStructuredData schema
- [ ] Create OpenGraph image
- [ ] Add internal links from related pages

### New Blog Post (Future)

- [ ] Include Article schema
- [ ] Add author information
- [ ] Include publish date
- [ ] Add to blog sitemap
- [ ] Share on social media
- [ ] Add internal links to related content

## Key Metrics to Monitor

### Google Search Console

- Click-through rate (CTR)
- Average position
- Impressions
- Coverage issues
- Mobile usability
- Core Web Vitals

### Google Analytics

- Organic traffic
- Bounce rate
- Average session duration
- Pages per session
- Goal completions (contact form)
- Geographic distribution

### Performance

- Lighthouse score (aim for 90+)
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- First Input Delay (FID)

## Target Keywords

### Primary Keywords

- Engineering services Athens
- Business consulting Greece
- Architectural design services
- Executive training Greece
- NEROM engineering
- Υπηρεσίες μηχανικού Αθήνα
- Επιχειρηματική συμβουλευτική

### Long-tail Keywords

- Space design and construction Athens
- Chemical process engineering Greece
- Marketing and sales promotion consulting
- Executive training seminars Greece

## Important URLs to Monitor

| Page         | URL              | Target Keywords                                     |
| ------------ | ---------------- | --------------------------------------------------- |
| Homepage     | /en              | NEROM, engineering services, business consulting    |
| Services     | /en/services     | engineering services, business consulting, training |
| Architecture | /en/architecture | architectural design, space design, Athens          |
| Contact      | /en/contact      | contact NEROM, Athens engineering services          |

## Quick Fixes for Common Issues

### Slow Page Speed

1. Optimize images (compress, use WebP)
2. Enable caching
3. Minimize JavaScript
4. Use CDN for static assets

### Low CTR

1. Improve meta titles (add numbers, questions, power words)
2. Enhance meta descriptions (include call-to-action)
3. Use rich snippets (structured data)
4. Add FAQ schema

### High Bounce Rate

1. Improve page loading speed
2. Enhance content quality
3. Add clear calls-to-action
4. Improve mobile experience
5. Add internal linking

### Poor Mobile Usability

1. Test on multiple devices
2. Check touch target sizes
3. Ensure text is readable
4. Avoid intrusive interstitials
5. Test forms on mobile

## Tools & Resources

### Essential SEO Tools

- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com)
- [PageSpeed Insights](https://pagespeed.web.dev)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [Rich Results Test](https://search.google.com/test/rich-results)

### Schema Validators

- [Schema.org Validator](https://validator.schema.org)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

### Additional Tools

- [Lighthouse](https://developers.google.com/web/tools/lighthouse) (built into Chrome DevTools)
- [Screaming Frog SEO Spider](https://www.screamingfrog.co.uk/seo-spider/) (free version)
- [GTmetrix](https://gtmetrix.com)

## Contact Information Updates

When business information changes, update in:

- [ ] `app/layout.tsx` (metadata)
- [ ] `app/_components/structuredData/structuredData.tsx` (all schemas)
- [ ] `app/localization.ts` (contact details)
- [ ] `app/[lang]/contact/page.tsx` (contact page)
- [ ] `app/[lang]/privacy/page.tsx` (privacy policy)
- [ ] Google Business Profile
- [ ] Social media profiles

## Emergency Response

### Site Down or Not Indexing

1. Check Google Search Console for manual actions
2. Verify robots.txt is not blocking crawlers
3. Check server logs for errors
4. Verify sitemap is accessible
5. Check DNS settings

### Traffic Drop

1. Check Google Search Console for coverage issues
2. Look for Google algorithm update announcements
3. Check for competitor changes
4. Review recent site changes
5. Check for technical errors (404s, server errors)

---

**Last Updated**: November 23, 2025
**Next Review**: February 23, 2026
