import Link from "next/link";

export function MainNav() {
  return (
    <nav>
      {/* ... other navigation items */}
      <Link
        href="/build-guide"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Build Guide
      </Link>
      {/* ... */}
    </nav>
  );
}
