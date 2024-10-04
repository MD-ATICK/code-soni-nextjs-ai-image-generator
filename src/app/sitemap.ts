import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: 'https://imagealx.vercel.app/',
            lastModified: new Date().toISOString(), // Current date for last modified
            priority: 1,
        },
        {
            url: 'https://imagealx.vercel.app/generate',
            lastModified: new Date().toISOString(), // Current date for last modified
            priority: 0.8,
        },
        {
            url: 'https://imagealx.vercel.app/profile',
            lastModified: new Date().toISOString(), // Current date for last modified
            priority: 0.5, // Updated from 0 to 0.5
        },
    ];
}
