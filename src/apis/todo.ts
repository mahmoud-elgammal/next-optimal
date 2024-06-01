const getToDos = async (): Promise<
  {
    id: number;
    userId: number;
    title: string;
    complete: boolean;
  }[]
> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  return res.json();
};

export default getToDos;
