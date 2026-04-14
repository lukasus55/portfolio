import Link from 'next/link';
import { getDictionary } from '../../getDictionary';
import { Metadata } from 'next';

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
    <main className="flex items-center justify-center min-h-screen font-sans">
      <div className="max-w-2xl p-8 rounded-3xl shadow-xl">
        
        {/* Testing the Dictionary */}
        <h1 className="text-4xl font-bold mb-4">
          {dict.hero.greeting}
        </h1>
        <p className="text-lg mb-8 opacity-60">
          {dict.hero.subtitle}
        </p>

      </div>
    </main>
  );
}