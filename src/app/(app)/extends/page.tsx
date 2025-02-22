"use client";
import React, { Fragment } from "react";
import { Button, Tabs } from "antd";
import type { TabsProps } from "antd";
import { categoryMocks } from "@/mock/categoryMocks";
import { languageMocks } from "@/mock/languageMocks";
import { formatMocks } from "@/mock/formatMocks";

const onChange = (key: string) => {
	console.log(key);
};

const Tab1 = () => {
	return (
		<div>
			<div className="bg-white shadow-md rounded-xl overflow-hidden">
				<div className="py-4 px-4 flex items-center justify-between">
					<span className="font-semibold text-lg">
						カテゴリー管理
					</span>
					<div className="flex items-center gap-4">
						<Button type="primary" className="text-lg">
							追加
						</Button>
					</div>
				</div>
				<table className="w-full">
					<thead className="bg-slate-100 text-gray-500 h-[50px] text-base">
						<tr>
							<th className="w-[200px]">ID</th>
							<th>カテゴリー名</th>
							<th className="w-[200px]">登録日</th>
							<th className="w-[200px]">ツール</th>
						</tr>
					</thead>
					<tbody>
						{categoryMocks.length > 0 &&
							categoryMocks.map((c) => (
								<Fragment key={c.categoryId}>
									<tr className="border-b border-b-slate-100 h-[50px] hover:bg-slate-50 transition-all">
										<td className="text-center">
											{c.categoryId}
										</td>
										<td className="text-center">
											{c.name}
										</td>
										<td className="text-center">
											2025-02-22
										</td>
										<td>
											<div className="flex items-center gap-4 justify-center">
												<Button
													type="link"
													className="text-gray-600"
												>
													編集
												</Button>
												<Button
													type="text"
													className="text-red-400"
												>
													削除
												</Button>
											</div>
										</td>
									</tr>
								</Fragment>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

const Tab2 = () => {
	return (
		<div>
			<div className="bg-white shadow-md rounded-xl overflow-hidden">
				<div className="py-4 px-4 flex items-center justify-between">
					<span className="font-semibold text-lg">言語管理</span>
					<div className="flex items-center gap-4">
						<Button type="primary" className="text-lg">
							追加
						</Button>
					</div>
				</div>
				<table className="w-full">
					<thead className="bg-slate-100 text-gray-500 h-[50px] text-base">
						<tr>
							<th className="w-[200px]">ID</th>
							<th>言語</th>
							<th className="w-[200px]">登録日</th>
							<th className="w-[200px]">ツール</th>
						</tr>
					</thead>
					<tbody>
						{languageMocks.length > 0 &&
							languageMocks.map((l) => (
								<Fragment key={l.languageId}>
									<tr className="border-b border-b-slate-100 h-[50px] hover:bg-slate-50 transition-all">
										<td className="text-center">
											{l.languageId}
										</td>
										<td className="text-center">
											{l.name}
										</td>
										<td className="text-center">
											2025-02-22
										</td>
										<td>
											<div className="flex items-center gap-4 justify-center">
												<Button
													type="link"
													className="text-gray-600"
												>
													編集
												</Button>
												<Button
													type="text"
													className="text-red-400"
												>
													削除
												</Button>
											</div>
										</td>
									</tr>
								</Fragment>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

const Tab3 = () => {
	return (
		<div>
			<div className="bg-white shadow-md rounded-xl overflow-hidden">
				<div className="py-4 px-4 flex items-center justify-between">
					<span className="font-semibold text-lg">上映形式管理</span>
					<div className="flex items-center gap-4">
						<Button type="primary" className="text-lg">
							追加
						</Button>
					</div>
				</div>
				<table className="w-full">
					<thead className="bg-slate-100 text-gray-500 h-[50px] text-base">
						<tr>
							<th className="w-[200px]">ID</th>
							<th>上映形式</th>
							<th className="w-[200px]">登録日</th>
							<th className="w-[200px]">ツール</th>
						</tr>
					</thead>
					<tbody>
						{formatMocks.length > 0 &&
							formatMocks.map((f) => (
								<Fragment key={f.formatId}>
									<tr className="border-b border-b-slate-100 h-[50px] hover:bg-slate-50 transition-all">
										<td className="text-center">
											{f.formatId}
										</td>
										<td className="text-center">
											{f.name}
										</td>
										<td className="text-center">
											2025-02-22
										</td>
										<td>
											<div className="flex items-center gap-4 justify-center">
												<Button
													type="link"
													className="text-gray-600"
												>
													編集
												</Button>
												<Button
													type="text"
													className="text-red-400"
												>
													削除
												</Button>
											</div>
										</td>
									</tr>
								</Fragment>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

const items: TabsProps["items"] = [
	{
		key: "1",
		label: "カテゴリー",
		children: <Tab1 />,
	},
	{
		key: "2",
		label: "言語",
		children: <Tab2 />,
	},
	{
		key: "3",
		label: "上映形式",
		children: <Tab3 />,
	},
];

const ExtendsPage = () => {
	return (
		<div className="p-4">
			<Tabs
				defaultActiveKey="1"
				items={items}
				onChange={onChange}
				size="large"
			/>
		</div>
	);
};

export default ExtendsPage;
