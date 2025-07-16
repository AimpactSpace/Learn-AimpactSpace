import Link from 'next/link';

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
        </Link>
      </nav>
    </header>
  );
}
