'use client';

import Link from 'next/link';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav
      className={cn(
        "w-full px-6 py-4 flex items-center justify-between",
        "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
        "text-white shadow-md"
      )}
    >
      {/* Leva strana - HOME */}
      <div>
        <Link href="/">
          <span className="text-xl font-bold tracking-wide hover:underline">HOME</span>
        </Link>
      </div>

      {/* Desna strana - Linkovi */}
      <div className="flex gap-4">
        <Link href="/about">
          <Button variant="ghost" className="text-white hover:bg-white/10">
            About
          </Button>
        </Link>
        <Link href="/forma">
          <Button variant="ghost" className="text-white hover:bg-white/10">
            Forma
          </Button>
        </Link>
        <Link href="/contact">
          <Button variant="ghost" className="text-white hover:bg-white/10">
            Contact
          </Button>
        </Link>
        <Link href="/jsmastery">
          <Button variant="ghost" className="text-shadow-amber-300 hover:bg-white/10">
           JSMastery
          </Button>
        </Link>
      </div>
    </nav>
  );
}
