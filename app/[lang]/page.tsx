import Link from 'next/link';
import { getDictionary } from '../../getDictionary';
import { Metadata } from 'next';
import TrackBackground from './components/TrackBackground';
import Hero from './components/Hero';

export async function generateMetadata({params,}: {params: Promise<{ lang: string }>;}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function PortfolioTestPage( {params,}: {params: Promise<{ lang: string }>;}) {
  const { lang } = await params;

  const dict = await getDictionary(lang);

  return (
    <main className="flex justify-center relative w-full">

      <TrackBackground/>

      <Hero dict={dict}/>

    </main>
  );
}