import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="">
      <div className="2xl:px-24 px-10 m-auto pb-10 pt-40">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                Abc Premium
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium [&_:hover]:text-primary-light [&]:cursor-pointer">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Flowbite
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium [&_:hover]:text-primary-light [&]:cursor-pointer">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase ">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium [&_:hover]:text-primary-light [&]:cursor-pointer">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="mb-6 mt-24 border-gray-200 sm:mx-auto dark:border-gray-700 " />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Fitness Premium ABC™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 gap-4 sm:justify-center sm:mt-0 [&_:hover]:text-primary-light [&]:cursor-pointer ">
            <BsInstagram />
            <FaFacebook />
          </div>
        </div>
      </div>
    </footer>
  );

  // 109 rem // 1744 px
  /*<footer>
    Abc premium
    fitness@abcpremium.com
    // br tel
    // instagram - fitness_premium_abc
    
    </footer>*/
}
