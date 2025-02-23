"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, Fragment, PropsWithChildren } from "react";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
	const pathname = usePathname();

	return (
		<div className="h-screen relative">
			{/* navigation  */}
			<div className="p-4 h-screen w-[250px] border-r border-r-borderGray fixed left-0 top-0 bg-white">
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
											: "hover:bg-slate-100"
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
			<div className="ml-[250px]">
				{/* topbar  */}
				<div className="h-[72px] flex items-center justify-between z-10 px-4 sticky top-0 left-0 bg-white border-b border-b-borderGray">
					<h2 className="text-2xl font-semibold">映画管理</h2>
					<div className="flex items-center gap-2">
						<div className="flex flex-col items-end">
							<p className="text-xl font-semibold">管理者</p>
							<p className=" text-gray-500">
								john.doe@example.com
							</p>
						</div>
						<Image
							src="https://i.pinimg.com/736x/3c/4e/1a/3c4e1a3fff988b372e475e3dd71eb2dd.jpg"
							alt="manager-avatar"
							className="w-12 aspect-square object-cover object-center rounded-full bg-gray-100"
							width={50}
							height={50}
						/>
					</div>
				</div>
				<div>{children}</div>
			</div>
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
	{
		label: "拡張",
		href: "/extends",
	},
];

export default AppLayout;
