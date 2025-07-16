import { useState } from 'react';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';
import { getGlobalData } from '../../utils/global-data';
import { promptCategories } from '../../utils/prompt-data';

export default function CategoryPage({ categoryKey, globalData }) {
  const [copiedId, setCopiedId] = useState(null);
  const { title, prompts } = promptCategories[categoryKey] || {
    title: categoryKey,
    prompts: [],
  };

  const copyPrompt = (text, id) => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1000);
    }
  };

  return (
    <Layout>
      <SEO
        title={`${title} Prompts - ${globalData.name}`}
        description={`Prompts for ${title.toLowerCase()}.`}
      />
      <Header name={globalData.name} />
      <main className="w-full">
        <h1 className="mb-6 text-3xl text-center lg:text-5xl">{title} Prompts</h1>
        <div className="mb-8 text-center">
          <Link href="/prompt-library" className="font-semibold hover:underline">
            Back to Prompt Library
          </Link>
        </div>
        <ul className="w-full">
          {prompts.map((text, index) => (
            <li
              key={index}
              className="transition bg-white border border-b-0 border-gray-800 md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 dark:border-white border-opacity-10 dark:border-opacity-10 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <div className="flex items-start justify-between px-6 py-6 lg:py-10 lg:px-16">
                <pre className="whitespace-pre-wrap">{text}</pre>
                <button
                  onClick={() => copyPrompt(text, index)}
                  className="px-3 py-2 ml-4 text-sm text-white bg-primary rounded transition"
                >
                  {copiedId === index ? 'Copied' : 'Copy'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground variant="large" className="fixed top-20 opacity-40 dark:opacity-60" />
      <GradientBackground variant="small" className="absolute bottom-0 opacity-20 dark:opacity-10" />
    </Layout>
  );
}

export function getStaticPaths() {
  return {
    paths: Object.keys(promptCategories).map((key) => ({ params: { category: key } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const globalData = getGlobalData();
  return { props: { categoryKey: params.category, globalData } };
}
