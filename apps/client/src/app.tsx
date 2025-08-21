import { useEffect, useState } from 'react';
import { api } from './lib/api-client';

type HelloData = { message: string };

export default function App() {
  const [data, setData] = useState<HelloData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get<HelloData>('/hello')
      .then((res) => setData(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>Failed to load</p>;

  return (
    <main className='w-full h-screen flex items-center justify-center'>
      <h1 className='text-5xl font-bold'>{data.message}</h1>
    </main>
  );
}
