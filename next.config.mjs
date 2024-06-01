import createNextIntlPlugin from 'next-intl/plugin';
import bundleAnalyzer from '@next/bundle-analyzer';

const withNextIntl = createNextIntlPlugin('./src/i18n.tsx');

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
  })

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withBundleAnalyzer(withNextIntl(nextConfig));
