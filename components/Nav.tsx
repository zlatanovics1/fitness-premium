import { CgMenuMotion } from "react-icons/cg";
import { HiOutlineMenu } from "react-icons/hi";
import MobileNav from "./MobileNav";

export default function Nav() {
  return (
    <nav className="absolute top-0 z-10">
      <ul className="2xl:px-24 px-10 m-auto py-10 h-[10vh] max-sm:hidden flex gap-12 items-center xl:text-lg">
        <li>Home</li>
        <li>Link</li>
        <li>Socials</li>
        <li>Contact</li>
        <li>Gallery</li>
      </ul>
      <MobileNav />
    </nav>
  );
}
