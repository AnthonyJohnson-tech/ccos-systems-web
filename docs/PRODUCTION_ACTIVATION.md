# Production-domain activation — hold for Founder approval

Current phase: staging only.

After Founder approval:

1. In the existing Cloudflare Pages project, add `ccos.systems` as a custom domain.
2. Allow Cloudflare Pages to create or identify the required apex-domain configuration.
3. Add `www.ccos.systems` to the Pages project only after the apex is verified.
4. Configure a permanent `www` → apex redirect through the verified Cloudflare configuration.
5. Preserve all unrelated DNS records, especially MX, TXT, DKIM, SPF, and other email records.
6. Verify DNS resolution, SSL issuance, HTTPS, canonical metadata, and both host behaviors before calling activation complete.

Do not manually invent DNS targets or remove existing records.
