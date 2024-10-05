import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: '/',
                disallow: ["/api/*", '/admin'],
            }
        ],
        sitemap: `${process.env.NEXT_DEPLOY_WEB_URL}/sitemap.xml`
    }
}