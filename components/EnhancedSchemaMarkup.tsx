'use client';

interface EnhancedSchemaMarkupProps {
  pageType: 'homepage' | 'services' | 'work' | 'service-detail' | 'case-study';
  title?: string;
  description?: string;
  url?: string;
}

export default function EnhancedSchemaMarkup({
  pageType,
  title = 'Project Buddy',
  description = 'Enterprise AI Software Modernization & Operational Intelligence',
  url = 'https://www.projectbuddy.co.in',
}: EnhancedSchemaMarkupProps) {
  const generateSchema = () => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Project Buddy',
      url: 'https://www.projectbuddy.co.in',
      logo: 'https://www.projectbuddy.co.in/logo.png',
      description: 'Enterprise AI software modernization, operational intelligence, and workflow automation',
      sameAs: [
        'https://www.linkedin.com/company/projectbuddy',
        'https://twitter.com/projectbuddy',
        'https://www.instagram.com/projectbuddy',
      ],
      foundingDate: '2015',
      founders: [
        {
          '@type': 'Person',
          name: 'Founder Name',
          url: 'https://www.projectbuddy.co.in/about',
        },
      ],
      areaServed: ['IN', 'US', 'GB', 'CA', 'AU'],
      knowsAbout: [
        'AI Software Modernization',
        'Operational Intelligence',
        'Workflow Automation',
        'Business Process Automation',
        'CRM Modernization',
        'ERP Optimization',
        'Intelligent Systems',
      ],
    };

    const schemas: { '@context': string; '@type': string; '@graph'?: any[] } | { '@context': string; '@type': string; [key: string]: any } = {
      '@context': 'https://schema.org',
      '@graph': [],
    };

    if (pageType === 'homepage') {
      schemas['@graph'] = [
        baseSchema,
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          url: 'https://www.projectbuddy.co.in',
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.projectbuddy.co.in/search?q={search_term_string}',
            },
            'query-input': 'required name=search_term_string',
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Project Buddy',
          description: 'Enterprise AI modernization and operational intelligence platform',
          image: 'https://www.projectbuddy.co.in/og-image.jpg',
          url: 'https://www.projectbuddy.co.in',
          telephone: '+1-800-PROJECTBUDDY',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'US',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            ratingCount: '150',
            bestRating: '5',
            worstRating: '1',
          },
          service: [
            {
              '@type': 'Service',
              name: 'AI Software Modernization',
              description: 'Transform legacy systems with AI-powered modern platforms',
              areaServed: 'Worldwide',
            },
            {
              '@type': 'Service',
              name: 'Operational Intelligence Systems',
              description: 'AI-powered dashboards providing real-time operational visibility',
              areaServed: 'Worldwide',
            },
            {
              '@type': 'Service',
              name: 'Workflow Modernization',
              description: 'End-to-end workflow reimagining using AI automation',
              areaServed: 'Worldwide',
            },
            {
              '@type': 'Service',
              name: 'Business Process Automation',
              description: 'Comprehensive BPA solutions with intelligent orchestration',
              areaServed: 'Worldwide',
            },
          ],
          review: [
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
              },
              reviewBody: 'Exceptional AI modernization expertise and delivery',
              author: {
                '@type': 'Person',
                name: 'Enterprise Client',
              },
            },
          ],
        },
      ];
    } else if (pageType === 'services') {
      schemas['@graph'] = [
        baseSchema,
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Our Services',
          url: 'https://www.projectbuddy.co.in/services',
          description: 'Comprehensive enterprise AI transformation services',
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                item: {
                  '@type': 'Service',
                  name: 'AI Software Modernization',
                  url: 'https://www.projectbuddy.co.in/ai-software-modernization',
                  description: 'Transform legacy systems with AI-powered modern platforms',
                },
              },
              {
                '@type': 'ListItem',
                position: 2,
                item: {
                  '@type': 'Service',
                  name: 'Operational Intelligence Systems',
                  url: 'https://www.projectbuddy.co.in/operational-intelligence-systems',
                  description: 'Real-time AI-powered operational dashboards and analytics',
                },
              },
              {
                '@type': 'ListItem',
                position: 3,
                item: {
                  '@type': 'Service',
                  name: 'Workflow Modernization',
                  url: 'https://www.projectbuddy.co.in/workflow-modernization',
                  description: 'End-to-end workflow optimization using AI',
                },
              },
            ],
          },
        },
      ];
    } else if (pageType === 'work') {
      schemas['@graph'] = [
        baseSchema,
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Enterprise Case Studies',
          url: 'https://www.projectbuddy.co.in/work',
          description: 'Real transformation case studies with measurable results',
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                item: {
                  '@type': 'CaseStudy',
                  name: 'Global Logistics Transformation',
                  description: 'Implemented AI workflow automation for supply chain optimization',
                  resultNote: 'Achieved 72% faster order processing and $8.2M annual savings',
                  url: 'https://www.projectbuddy.co.in/work',
                },
              },
              {
                '@type': 'ListItem',
                position: 2,
                item: {
                  '@type': 'CaseStudy',
                  name: 'Enterprise Recruitment Intelligence',
                  description: 'Deployed AI-powered candidate screening and intelligent matching',
                  resultNote: 'Reduced time-to-hire by 65% and improved retention by 42%',
                  url: 'https://www.projectbuddy.co.in/work',
                },
              },
            ],
          },
        },
      ];
    }

    return schemas;
  };

  const schema = generateSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
