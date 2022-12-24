import React from "react";
import Sidebar from "../components/Sidebar";

type Props = {
    children: JSX.Element;
};

const SidebarLayout = ({ children }: Props) => {
    return (
        <div>
            <Sidebar />
            <main>{children}</main>
        </div>
    );
};

export default SidebarLayout;
