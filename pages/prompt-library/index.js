import Link from 'next/link';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';
import { getGlobalData } from '../../utils/global-data';
import { promptCategories } from '../../utils/prompt-data';

export default function PromptLibrary({ globalData }) {
  return (
    <Layout>
      <SEO
        title={`Prompt Library - ${globalData.name}`}
        description="Prompt categories."
      />
      <Header name={globalData.name} />
      <main className="w-full">
        <h1 className="mb-12 text-3xl text-center lg:text-5xl">Prompt Library</h1>
        <ul className="space-y-4 text-center">
          {Object.entries(promptCategories).map(([key, { title }]) => (
            <li key={key}>
              <Link
                href={`/prompt-library/${key}`}
                className="font-semibold hover:underline"
              >
                {title}
              </Link>
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
