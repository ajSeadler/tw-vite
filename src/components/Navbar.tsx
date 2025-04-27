// src/components/Navbar.tsx
import { NavLink } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import { ColorPicker } from "../components/ColorPicker";

const navigation = [
  { name: "Home", to: "/" },
  { name: "Projects", to: "/projects" },
  { name: "About", to: "/about" },
];

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="fixed w-full bg-white/70 dark:bg-neutral-900/70 backdrop-blur z-50"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-800 ">
                  <span className="sr-only">Open main menu</span>
                  {open ? <XIcon size={24} /> : <MenuIcon size={24} />}
                </Disclosure.Button>
              </div>

              {/* Logo & desktop links */}
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      className={({ isActive }) =>
                        `inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium transition ${
                          isActive
                            ? "border-primary text-primary"
                            : "border-transparent text-neutral-700 dark:text-neutral-300 hover:border-gray-300"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Theme picker */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                <ColorPicker />
              </div>
            </div>
          </div>

          {/* Mobile menu panel */}
          <Disclosure.Panel className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  as={NavLink}
                  key={item.name}
                  to={item.to}
                  className={({ isActive }: { isActive: boolean }) =>
                    `block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition ${
                      isActive
                        ? "bg-primary/10 border-primary text-primary"
                        : "border-transparent text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:border-gray-300"
                    }`
                  }
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
