/* src/components/ColorPicker.tsx */
import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { IoIosColorPalette } from "react-icons/io";

/* all your palettes */
const PALETTES = [
  "teal",
  "indigo",
  "red",
  "yellow",
  "green",
  "purple",
  "pink",
  "lavender",
  "mint",
  "peach",
  "sky",
  "lemon",
] as const;

type Palette = (typeof PALETTES)[number];

export function ColorPicker() {
  const [theme, setTheme] = useState<Palette>(
    () => (localStorage.getItem("theme") as Palette) || "teal"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Popover className="relative inline-block text-left">
      {/* ICON-ONLY TRIGGER */}
      <Popover.Button
        aria-label="Select theme"
        className="p-2 bg-white dark:bg-neutral-800 rounded-full shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition flex items-center justify-center"
      >
        {/* tint the palette icon with your current primary color */}
        <IoIosColorPalette
          className="w-6 h-6"
          style={{ color: "var(--color-primary)" }}
        />
      </Popover.Button>

      {/* DROPDOWN */}
      <Transition
        as={Fragment}
        enter="transition duration-150 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-100 ease-in"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel className="absolute right-0 z-10 mt-2 w-44 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-3">
          <div className="grid grid-cols-3 gap-2">
            {PALETTES.map((p) => (
              <motion.button
                key={p}
                onClick={() => setTheme(p)}
                whileHover={{ scale: 1.1 }}
                className={`relative w-6 h-6 rounded-sm shadow-lg ring-1 ring-gray-700 dark:ring-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary transition ${
                  theme === p ? "ring-2 ring-offset-2 ring-primary" : ""
                }`}
                title={`${p.charAt(0).toUpperCase() + p.slice(1)} theme`}
              >
                <span
                  className="block w-full h-full rounded-sm"
                  style={{
                    backgroundColor: `var(--color-primary-${p}-500)`,
                  }}
                />
                {theme === p && (
                  <Check className="absolute top-1 right-1 w-3 h-3 text-white" />
                )}
              </motion.button>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
