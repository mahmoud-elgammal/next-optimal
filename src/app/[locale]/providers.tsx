'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as ReactWrapBalancerProvider } from 'react-wrap-balancer';

const queryClient = new QueryClient();

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactWrapBalancerProvider>{children}</ReactWrapBalancerProvider>
    </QueryClientProvider>
  );
};

export default Providers;
