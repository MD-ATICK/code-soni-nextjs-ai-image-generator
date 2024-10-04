import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: '/',
                disallow: ["/api/*", '/profile'],
            }
        ],
        sitemap: `${process.env.NEXT_DEPLOY_WEB_URL}/sitemap.xml`
    }
}