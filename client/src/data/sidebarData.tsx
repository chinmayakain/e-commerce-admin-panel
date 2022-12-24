import React from "react";
import {
    ChartBarSquareIcon,
    ClipboardDocumentCheckIcon,
    ClipboardDocumentIcon,
    Cog6ToothIcon,
    ExclamationCircleIcon,
    InboxStackIcon,
    PlusIcon,
    RectangleStackIcon,
    UserIcon,
} from "@heroicons/react/24/outline";

type Props = {};

export default function sidebarData() {
    return [
        {
            name: "Dashboard",
            icon: <RectangleStackIcon className="w-5 h-5" />,
            link: "/dashboard",
        },
        {
            name: "Customers",
            icon: <UserIcon className="w-5 h-5" />,
            link: "/customers",
        },
        {
            name: "Orders",
            icon: <ClipboardDocumentIcon className="w-5 h-5" />,
            link: "/orders",
        },
        {
            name: "Analytics",
            icon: <ChartBarSquareIcon className="w-5 h-5" />,
            link: "/analytics",
        },
        {
            name: "Messages",
            icon: <InboxStackIcon className="w-5 h-5" />,
            link: "/messages",
        },
        {
            name: "Products",
            icon: <ClipboardDocumentCheckIcon className="w-5 h-5" />,
            link: "/products",
        },
        {
            name: "Reports",
            icon: <ExclamationCircleIcon className="w-5 h-5" />,
            link: "/reports",
        },
        {
            name: "Settings",
            icon: <Cog6ToothIcon className="w-5 h-5" />,
            link: "/settings",
        },
    ];
}
