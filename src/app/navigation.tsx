import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="navList">
      <Link href="/entry">Welcome</Link>
      <Link href="/studies">Studies</Link>
      <Link href="/internship">Internship</Link>
      <Link href="/ticorporate">Ticorporate</Link>
    </nav>
  );
}
