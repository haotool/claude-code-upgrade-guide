import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'], // Disallow API routes and Next.js internal assets
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: '/api/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: '/api/',
      },
      {
        userAgent: 'GPTBot', // OpenAI
        allow: '/',
        crawlDelay: 2,
      },
      {
        userAgent: 'ChatGPT-User', // ChatGPT
        allow: '/',
        crawlDelay: 2,
      },
      {
        userAgent: 'Google-Extended', // Google Bard/Gemini
        allow: '/',
        crawlDelay: 2,
      },
      {
        userAgent: 'anthropic-ai', // Claude
        allow: '/',
        crawlDelay: 2,
      },
      {
        userAgent: 'PerplexityBot', // Perplexity
        allow: '/',
        crawlDelay: 2,
      },
      {
        userAgent: 'ClaudeBot', // Anthropic Claude
        allow: '/',
        crawlDelay: 2,
      },
    ],
    host: 'https://claude-code-upgrade-guide.vercel.app',
    sitemap: [
      'https://claude-code-upgrade-guide.vercel.app/sitemap.xml',
      'https://claude-code-upgrade-guide.vercel.app/llms.txt',
      'https://claude-code-upgrade-guide.vercel.app/llms-full.txt',
    ],
  };
}
