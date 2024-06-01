'use client';
import { Article } from 'schema-dts';
import Script from 'next/script';
import { Balancer } from 'react-wrap-balancer';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');

  const jsonLd: Article = {
    '@type': 'Article',
    name: 'My Article',
    url: 'https://example.com/article',
    image: 'https://example.com/image',
    datePublished: '2020-05-01',
  };

  return (
    <>
      <main>
        <div className='flex h-screen flex-col items-center justify-center'>
          <h1 className='text-3xl font-bold'>
            <Balancer>{t('hello')}</Balancer>
          </h1>
        </div>
      </main>

      <Script
        id='json-ld'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
