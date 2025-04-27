import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { IoIosColorPalette } from "react-icons/io";

/* Your 10 modern colors */
const CUSTOM_PALETTES = [
  "darkTeal",
  "terraCotta",
  "teal",
  "pastelPurple",
  "slateBlue",
  "lavender",
  "coral",
  "mossGreen",
  "seaBlue",
  "deepPlum",
  "sunshineYellow",
  "rust",
  "skyBlue",
  "blushPink",
  "emeraldGreen",
] as const;

type Palette = (typeof CUSTOM_PALETTES)[number];

export function ColorPicker() {
  const [theme, setTheme] = useState<Palette>(
    () => (localStorage.getItem("theme") as Palette) || "mustard"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Popover className="relative inline-block text-left">
      <Popover.Button
        aria-label="Select theme"
        className="p-2 bg-white dark:bg-neutral-800 rounded-full shadow hover:bg-gray-50 dark:hover:bg-neutral-700 transition flex items-center justify-center"
      >
        <IoIosColorPalette
          className="w-6 h-6"
          style={{ color: "var(--color-primary)" }}
        />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition duration-150 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-100 ease-in"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel className="absolute right-0 z-10 mt-2 w-52 bg-white dark:bg-neutral-800 border  rounded-lg shadow-lg p-4">
          <div className="grid grid-cols-5 gap-2">
            {CUSTOM_PALETTES.map((p) => (
              <motion.button
                key={p}
                onClick={() => setTheme(p)}
                whileHover={{ scale: 1.1 }}
                className={`relative w-7 h-7 rounded-sm ring-1 ring-inset ring-gray-700 dark:ring-gray-600 focus:outline-none transition ${
                  theme === p ? "ring-2 ring-primary ring-offset-2" : ""
                }`}
                title={`${p.charAt(0).toUpperCase() + p.slice(1)} theme`}
              >
                <span
                  className="block w-full h-full rounded-sm"
                  style={{
                    backgroundColor: `var(--color-primary-${p})`,
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
