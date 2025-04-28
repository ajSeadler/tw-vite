// src/components/NotificationMenu.tsx
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Bell as BellIcon } from "lucide-react";

const notifications = [
  { id: 1, message: "AJ commented on your post", time: "2m ago" },
  { id: 2, message: "You have a new follower: Riley", time: "10m ago" },
  { id: 3, message: "Daily report is ready to view", time: "1h ago" },
];

export default function NotificationMenu() {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="relative p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition">
        <BellIcon
          size={20}
          className="text-neutral-700 dark:text-neutral-300"
        />
        <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
          {notifications.length}
        </span>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-150"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-80 origin-top-right divide-y divide-neutral-200 dark:divide-neutral-700 rounded-md bg-white dark:bg-neutral-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {notifications.map((notif) => (
            <div key={notif.id} className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`w-full flex justify-between items-center px-4 py-2 text-left text-sm ${
                      active ? "bg-neutral-100 dark:bg-neutral-700" : ""
                    }`}
                  >
                    <span className="flex-1 text-gray-200">
                      {notif.message}
                    </span>
                    <span className="ml-2 text-xs text-neutral-500 ">
                      {notif.time}
                    </span>
                  </button>
                )}
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
