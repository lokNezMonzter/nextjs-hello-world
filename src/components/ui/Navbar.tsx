import Link from "next/link";

export default function NavbarComponent() {
  return (
    <div className="mb-4 bg-sky-950 text-white h-12 flex items-center">
      <Link className="text-xl px-4 hover:underline focus:font-bold" href="/">
        Home
      </Link>
      <Link
        className="text-xl px-4 hover:underline focus:font-bold"
        href="/user"
      >
        User
      </Link>
      <Link
        className="text-xl px-4 hover:underline focus:font-bold"
        href="/analytics"
      >
        Analytics
      </Link>
      <Link
        className="text-xl px-4 hover:underline focus:font-bold"
        href="/settings"
      >
        Settings
      </Link>
    </div>
  );
}
