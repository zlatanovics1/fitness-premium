import { IoPricetag } from "react-icons/io5";
import { TiLocationOutline } from "react-icons/ti";
import { LuContact } from "react-icons/lu";
import { MdFeaturedPlayList } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { IconType } from "react-icons";

interface NavLink {
  label: string;
  href: string;
  icon: IconType;
}
export const navLinks: NavLink[] = [
  {
    label: "Features",
    href: "#features",
    icon: MdFeaturedPlayList,
  },
  {
    label: "Gallery",
    href: "#gallery",
    icon: GrGallery,
  },
  {
    label: "Pricing",
    href: "#pricing",
    icon: IoPricetag,
  },
  {
    label: "Find us",
    href: "#findus",
    icon: TiLocationOutline,
  },
  {
    label: "Contact us",
    href: "#contact",
    icon: LuContact,
  },
];
