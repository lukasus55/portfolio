import { getDictionary } from '../../getDictionary';
import { Metadata } from 'next';
import HeaderSection from './components/HeaderSection';
import MainSection from './components/MainSection';
import LanguageSwitcher from './components/LanguageSwitcher';

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
      <LanguageSwitcher/>

      <header className="fixed z-40 top-0 left-0 site_header flex justify-end w-full">
        <HeaderSection dict={dict}/>
      </header>

      <MainSection dict={dict}/>

    </>

  );
}