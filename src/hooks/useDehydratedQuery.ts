import { dehydrate } from '@tanstack/react-query';
import getToDos from '~/apis/todo';
import getQueryClient from '~/utils/getQueryClient';

const useDehydratedQuery = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({ queryKey: ['toDos'], queryFn: getToDos });
  const dehydratedState = dehydrate(queryClient);
  return dehydratedState;
};

export default useDehydratedQuery;
