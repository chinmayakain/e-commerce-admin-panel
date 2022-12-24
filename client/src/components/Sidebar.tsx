import React from "react";

import sidebarData from "../data/sidebarData";

type Props = {};

const Sidebar = (props: Props) => {
    const sidebarItems = sidebarData();

    return (
        <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r dark:bg-gray-900 dark:border-gray-700">
            <div className="flex flex-col items-center mt-1 mx-2">
                <img
                    className="object-cover w-50 h-28 rounded-full text-white"
                    src="/assets/app-logo.png"
                    alt="app-logo"
                />
            </div>

            <div className="flex flex-col justify-between flex-1 mt-6">
                <nav>
                    {sidebarItems.map(({ name, icon, link }) => (
                        <a
                            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 dark:hover:bg-yellow-800 dark:hover:text-white hover:text-yellow-700 active:bg-yellow-500 active:text-white"
                            href={link}
                        >
                            {icon}

                            <span className="mx-4 font-medium">{name}</span>
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
