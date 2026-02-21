import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SeoProps } from '../types';

export const SEO: React.FC<SeoProps> = ({ title, description, url = 'https://ag-mart.eg', image = 'https://picsum.photos/1200/630' }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AG-Mart",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": description,
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EGP",
      "lowPrice": "1500",
      "highPrice": "9000"
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="ar_EG" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};