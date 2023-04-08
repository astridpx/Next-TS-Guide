import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="p-9 bg-blue-400 flex gap-4">
      <p className="mr-4 text-xl font-bold">I am Header</p>
      <Link
        href="/"
        className="text-center px-2 rounded-lg font-bold text-blue-900 bg-slate-100"
      >
        Home
      </Link>
      <Link
        href="/phonebook"
        className="text-center px-2 rounded-lg font-bold text-blue-900 bg-slate-100"
      >
        Name
      </Link>
    </div>
  );
}

export default Header;
