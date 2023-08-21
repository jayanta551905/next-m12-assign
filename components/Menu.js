import Link from "next/link";
export default function Menu() {
  return (
    <nav className="text-right shadow-lg bg-gray-100 p-2 mb-24">
      <li className="p-4">
        <Link
          className="mr-96 p-4 text-2xl font-bold hover:bg-gray-200"
          href={"/"}
        >
          Blog site
        </Link>
        <Link className="p-4  hover:bg-gray-200" href={"/"}>
          Home
        </Link>
        <Link className="p-4  hover:bg-gray-200" href={"/about"}>
          About
        </Link>
        <Link className="p-4  hover:bg-gray-200" href={"/blog"}>
          Blog
        </Link>
        <Link className="p-4  hover:bg-gray-200" href={"/contact"}>
          Contact
        </Link>
      </li>
    </nav>
  );
}
