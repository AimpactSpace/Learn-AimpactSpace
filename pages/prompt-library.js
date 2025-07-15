import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import SEO from '../components/SEO';
import { getGlobalData } from '../utils/global-data';
import { useState } from 'react';

const prompts = [
  {
    id: 1,
    text: 'Explain the concept of machine learning in simple terms.',
  },
  {
    id: 2,
    text: 'Generate a list of creative marketing slogans for a new eco-friendly brand.',
  },
  {
    id: 3,
    text: 'Write a short story set on Mars with a surprise ending.',
  },
  {
    id: 4,
    text: 'Give me five tips for staying productive while working remotely.',
  },
  {
    id: 5,
    text: 'Create a meal plan for a week that is high in protein and low in carbs.',
  },
];

export default function PromptLibrary({ globalData }) {
  const [copiedId, setCopiedId] = useState(null);

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
        title={`Prompt Library - ${globalData.name}`}
        description="A collection of useful prompts."
      />
      <Header name={globalData.name} />
      <main className="w-full">
        <h1 className="mb-12 text-3xl text-center lg:text-5xl">
          Prompt Library
        </h1>
        <ul className="w-full">
          {prompts.map((prompt) => (
            <li
              key={prompt.id}
              className="transition bg-white border border-b-0 border-gray-800 md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 dark:border-white border-opacity-10 dark:border-opacity-10 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <div className="flex items-start justify-between px-6 py-6 lg:py-10 lg:px-16">
                <pre className="whitespace-pre-wrap">{prompt.text}</pre>
                <button
                  onClick={() => copyPrompt(prompt.text, prompt.id)}
                  className="px-3 py-2 ml-4 text-sm text-white bg-primary rounded transition"
                >
                  {copiedId === prompt.id ? 'Copied' : 'Copy'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();

  return { props: { globalData } };
}
