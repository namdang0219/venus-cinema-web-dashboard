import React, { FC, PropsWithChildren } from "react";
import AppLayout from "./AppLayout";

// Main layout is layout component to devide App and Auth layout

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return <AppLayout>{children}</AppLayout>;
};

export default MainLayout;
