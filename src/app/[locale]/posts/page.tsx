'use client';

import { useLocale, useTranslations } from 'next-intl';
import React from 'react';
import { usePathname, useRouter } from '~/navigation';

const Page = () => {
  const t = useTranslations('Index');
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const change = (locale: string) => {
    router.push(pathname, { locale });
    router.refresh();
  };

  return (
    <div>
      {t('hello')}
      <div>
        <label htmlFor='change-language'>Change language:</label>
        <select
          defaultValue={locale}
          id='change-language'
          onChange={(e) => change(e.target.value)}
        >
          <option value='en'>English</option>
          <option value='ar'>Arabic</option>
        </select>
      </div>
    </div>
  );
};

export default Page;
