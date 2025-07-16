import Link from 'next/link';
import { promptCategories } from '../utils/prompt-data';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className="block w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-conic from-gradient-3 to-gradient-4" />
      <p className="text-2xl text-center dark:text-white">
        <Link href="/">{name}</Link>
      </p>
      <nav className="flex justify-center mt-6 space-x-6">
        <Link
          href="/"
          className="font-semibold hover:underline dark:text-white"
        >
          Blogs


        </Link>
        <Link
          href="/prompt-library"
          className="font-semibold hover:underline dark:text-white"
        >
          Prompt Library
 main
        </Link>
        <div className="relative group">
          <Link
            href="/prompt-library"
            className="font-semibold hover:underline dark:text-white"
          >
            Prompt Library
          </Link>
          <div
            className="absolute left-0 z-10 hidden w-48 py-2 mt-2 text-sm text-left bg-white rounded shadow-lg border border-gray-200 group-hover:block group-focus-within:block dark:bg-black dark:bg-opacity-90 bg-opacity-90 dark:border-gray-700"
          >
            {Object.entries(promptCategories).map(([key, { title }]) => (
              <Link
                key={key}
                href={`/prompt-library/${key}`}
                className="block px-4 py-2 whitespace-nowrap hover:underline dark:text-white"
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
