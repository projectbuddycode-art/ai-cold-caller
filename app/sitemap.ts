import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.projectbuddy.co.in';

  const pages = [
    '',
    'about',
    'services',
    'portfolio',
    'work',
    'process',
    'blog',
    'policies',
    'thank-you',
    'ai-chatbot-for-business',
    'ai-lead-generation-system',
    'ai-automation-system',
    'crm-automation-system',
    'custom-saas-development-india',
    'whatsapp-automation-for-business',
    'case-study-diamond-photography-software',
    'case-study-school-management-ai-system',
    'audit',
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page ? '/' + page : ''}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'weekly' : 'monthly',
    priority: page === '' ? 1 : 0.8,
  }));
}
