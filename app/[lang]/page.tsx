import Link from 'next/link';
import { getDictionary } from '../../getDictionary';
import { Metadata } from 'next';
import TrackBackground from './components/TrackBackground';
import Hero from './components/Hero';
import HeaderSection from './components/HeaderSection';
import About from './components/About';
import Projects from './components/Projects';

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
    <>

    <header className="fixed z-40 top-0 left-0 site_header flex justify-end w-full">
      <HeaderSection dict={dict}/>
    </header>

    <main className="flex justify-center relative w-full flex-wrap">
      <TrackBackground/>

      <Hero dict={dict}/>

      <Projects dict={dict}/>

      <About dict={dict}/>
    </main>
    </>

  );
}