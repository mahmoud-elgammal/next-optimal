'use client';

import { useQuery } from '@tanstack/react-query';
// import { useTranslations } from 'next-intl';
import React from 'react';
import getToDos from '~/apis/todo';

const Todos = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['toDos'],
    queryFn: getToDos,
    staleTime: 1000 * 60,
  });

  // const {} = useTranslations('')

  return (
    <div>
      {isLoading && 'Loading...'}

      {data?.map((d: any) => (
        <div key={d.id}>
          user({d.userId}) {d.title} {d.complete ? '✅' : '❌'}
        </div>
      ))}
    </div>
  );
};

export default Todos;
