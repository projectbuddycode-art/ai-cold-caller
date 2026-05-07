'use client';

export default function SchemaMarkup() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Project Buddy',
    url: 'https://www.projectbuddy.co.in',
    logo: 'https://www.projectbuddy.co.in/logo.png',
    description: 'Enterprise AI software modernization, operational intelligence, and workflow automation company.',
    sameAs: [
      'https://www.linkedin.com/company/project-buddy',
      'https://twitter.com/projectbuddy',
      'https://www.facebook.com/projectbuddy',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9999999999',
      contactType: 'Business Development',
      email: 'hello@projectbuddy.co.in',
      areaServed: 'IN',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Address',
      addressLocality: 'India',
      postalCode: '110000',
      addressCountry: 'IN',
    },
  };

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Project Buddy - AI Software Modernization',
    description: 'Enterprise AI software modernization, operational intelligence, workflow automation, and business systems modernization services.',
    url: 'https://www.projectbuddy.co.in',
    serviceType: [
      'AI Software Modernization',
      'Operational Intelligence',
      'Workflow Automation',
      'Business Process Automation',
      'CRM Modernization',
      'ERP Optimization',
      'AI Consulting',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    priceRange: '$$$$',
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Project Buddy',
    image: 'https://www.projectbuddy.co.in/logo.png',
    description: 'Enterprise AI transformation and operational intelligence company',
    telephone: '+91-9999999999',
    url: 'https://www.projectbuddy.co.in',
    priceRange: '$$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Address',
      addressLocality: 'India',
      postalCode: '110000',
      addressCountry: 'IN',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.projectbuddy.co.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://www.projectbuddy.co.in/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Portfolio',
        item: 'https://www.projectbuddy.co.in/portfolio',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'About',
        item: 'https://www.projectbuddy.co.in/about',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
