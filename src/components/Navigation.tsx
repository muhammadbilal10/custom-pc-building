import Link from "next/link";

export function Navigation() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/pc-builder" className="hover:text-gray-300">
            PC Builder
          </Link>
        </li>
        <li>
          <Link href="/feeds" className="hover:text-gray-300">
            Feeds
          </Link>
        </li>
      </ul>
    </nav>
  );
}
