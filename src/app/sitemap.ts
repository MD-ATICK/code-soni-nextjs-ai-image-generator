import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: '/',
            priority: 1
        },
        {
            url: '/generate',
            priority: 0.8
        },
        {
            url: '/profile',
            priority: 0
        },
    ]
}