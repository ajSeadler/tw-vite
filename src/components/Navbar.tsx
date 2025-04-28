// src/components/Navbar.tsx
import { Fragment, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Menu as MenuIcon,
  X as XIcon,
  ChevronDown as ChevronDownIcon,
} from "lucide-react";
import { ColorPicker } from "../components/ColorPicker";
import NotificationMenu from "./NotificationMenu";
// import TechLogo from "./TechLogo";

const navigation = [
  { name: "Home", to: "/" },
  { name: "Projects", to: "/projects" },
  { name: "About", to: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bgClass = scrolled
    ? "bg-white/80 dark:bg-neutral-900/80 shadow-lg"
    : "bg-white dark:bg-neutral-900";

  return (
    <Disclosure
      as="nav"
      className={`fixed top-0 w-full z-50 backdrop-blur-lg transition-all duration-500 ${bgClass}`}
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Left Side: Logo + Links */}
              <div className="flex items-center space-x-8">
                {/* <NavLink to="/" className="flex-shrink-0">
                  <TechLogo className="h-8 w-auto" />
                </NavLink> */}
                <div className="hidden md:flex space-x-10">
                  {navigation.map((item) => (
                    <NavLink key={item.name} to={item.to}>
                      {({ isActive }) => (
                        <div
                          className={`group relative px-2 py-1 font-medium uppercase tracking-wider text-sm transition-colors duration-300 ${
                            isActive
                              ? "text-primary"
                              : "text-neutral-700 dark:text-neutral-300 hover:text-primary"
                          }`}
                        >
                          {item.name}
                          <span
                            className={`absolute left-0 -bottom-0.5 h-0.5 w-full bg-primary origin-left transform transition-transform duration-300 ${
                              isActive
                                ? "scale-x-100"
                                : "scale-x-0 group-hover:scale-x-100"
                            }`}
                          />
                        </div>
                      )}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Right Side: Desktop Icons */}
              <div className="hidden md:flex items-center space-x-4">
                <NotificationMenu />
                <ColorPicker />

                {/* Profile Dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button className="flex items-center space-x-1 p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition">
                    <img
                      src="/images/me.jpg"
                      alt="Avatar"
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <ChevronDownIcon
                      size={16}
                      className="text-neutral-700 dark:text-neutral-300"
                    />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-150"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white dark:bg-neutral-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <NavLink
                              to="/profile"
                              className={`block px-4 py-2 text-sm ${
                                active
                                  ? "bg-neutral-100 dark:bg-neutral-700"
                                  : ""
                              } text-neutral-800 dark:text-neutral-200`}
                            >
                              Profile
                            </NavLink>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`w-full text-left block px-4 py-2 text-sm text-primary ${
                                active
                                  ? "bg-neutral-100 dark:bg-neutral-700"
                                  : ""
                              }`}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex md:hidden">
                <Disclosure.Button className="p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition">
                  {open ? (
                    <XIcon
                      size={24}
                      className="text-neutral-700 dark:text-neutral-300"
                    />
                  ) : (
                    <MenuIcon
                      size={24}
                      className="text-neutral-700 dark:text-neutral-300"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="md:hidden">
            <div className=" backdrop-blur-md text-white pl-6 pb-6  z-40 ">
              <div className="flex justify-end">
                <Disclosure.Button className="p-2 rounded-md hover:bg-neutral-700 transition"></Disclosure.Button>
              </div>

              <nav className="space-y-6">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={NavLink}
                    to={item.to}
                    className="block text-2xl font-semibold uppercase hover:text-primary transition"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </nav>

              {/* Divider */}
              <div className="border-t border-neutral-700 pt-6 space-y-4">
                <NotificationMenu />
                <ColorPicker />

                {/* Profile quick access */}
                <div className="flex items-center space-x-4 pt-4">
                  <img
                    src="/images/me.jpg"
                    alt="Avatar"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <NavLink
                      to="/profile"
                      className="text-sm font-medium hover:text-primary"
                    >
                      Profile
                    </NavLink>
                    <button className="text-sm text-primary hover:underline">
                      Sign out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
