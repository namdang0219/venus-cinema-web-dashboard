"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, Fragment, PropsWithChildren } from "react";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
	const pathname = usePathname();

	return (
		<div className="grid grid-cols-[250px_1fr] h-screen">
			{/* navigation  */}
			<div className="p-4 border-r border-r-gray-300">
				{/* logo  */}
				<h1 className="font-semibold text-2xl mb-4">
					<span className="text-primary">Venus</span>Cinema
				</h1>

				{/* navigation links  */}
				<div className="flex flex-col gap-1">
					{navigations.map((item, index) => (
						<Fragment key={index}>
							<Link href={item.href} className="block">
								<div
									className={`h-12 font-semibold flex items-center px-3.5 ${
										pathname === item.href
											? "bg-primary rounded-lg text-white"
											: ""
									}`}
								>
									<p>{item.label}</p>
								</div>
							</Link>
						</Fragment>
					))}
				</div>
			</div>

			{/* main  */}
			<div>{children}</div>
		</div>
	);
};

const navigations: {
	label: string;
	href: string;
}[] = [
	{
		label: "ダッシュボード",
		href: "/",
	},
	{
		label: "映画",
		href: "/movies",
	},
	{
		label: "プロモーション",
		href: "/promotions",
	},
	{
		label: "ユーザー",
		href: "/users",
	},
];

export default AppLayout;
