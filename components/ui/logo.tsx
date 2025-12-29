import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      <Image
        src="/images/logo-05.png"
        alt="Logo"
        width={64}
        height={64}
        className="rounded-full"
      />
    </Link>
  );
}
