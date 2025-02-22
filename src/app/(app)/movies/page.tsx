"use client";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { SearchProps } from "antd/es/input";

import {
	Modal,
	Pagination,
	Button,
	DatePicker,
	Form,
	Input,
	InputNumber,
	Select,
} from "antd";
import { HiXMark } from "react-icons/hi2";
import { categoryMocks } from "@/mock/categoryMocks";
import { languageMocks } from "@/mock/languageMocks";
import { formatMocks } from "@/mock/formatMocks";

const { Search } = Input;

type SizeType = Parameters<typeof Form>[0]["size"];

const MoviesScreen = () => {
	const handleChange = (value: string) => {
		console.log(`selected ${value}`);
	};

	const handleCategoryChange = (value: string) => {
		console.log(`selected ${value}`);
	};

	const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
		console.log(info?.source, value);

	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	// form
	const [componentSize, setComponentSize] = useState<SizeType | "default">(
		"default"
	);

	const onFormLayoutChange = ({ size }: { size: SizeType }) => {
		setComponentSize(size);
	};

	return (
		<div className="relative">
			{/* contents  */}
			<div className="p-4">
				<div className="min-h-64">
					{/* content action bar  */}
					<div className="h-12 mb-4 flex items-center justify-between">
						{/* filter  */}
						<div className="flex items-center gap-6">
							{/* display results type  */}
							<div className="flex items-center gap-2">
								<span className="font-semibold">表示結果</span>
								<Select
									defaultValue="all"
									style={{ width: 150 }}
									onChange={handleChange}
									options={[
										{ value: "all", label: "すべて" },
										{
											value: "onBoarding",
											label: "上映中",
										},
										{
											value: "upcoming",
											label: "公開予定",
										},
										{
											value: "finished",
											label: "終了",
										},
									]}
								/>
							</div>

							{/* category filter  */}
							<div className="flex items-center gap-2">
								<span className="font-semibold">カテゴリ</span>
								<Select
									defaultValue="all"
									style={{ width: 150 }}
									onChange={handleCategoryChange}
									options={[
										{
											value: "all",
											label: "すべて",
										},
										{
											value: "action",
											label: "アクション",
										},
										{
											value: "discover",
											label: "冒険",
										},
									]}
								/>
							</div>

							{/* name filter  */}
							<div className="flex items-center gap-2">
								<span className="font-semibold shrink-0">
									映画名
								</span>
								<Search
									placeholder="名前から検索"
									onSearch={onSearch}
									enterButton
									style={{ width: 350 }}
								/>
							</div>
						</div>
					</div>

					{/* list area  */}
					<div className="grid grid-cols-4 gap-5">
						{/* render items  */}
						{Array(8)
							.fill(null)
							.map((_, index) => (
								<Fragment key={index}>
									<div
										onClick={showModal}
										className="bg-white group rounded-lg shadow-md overflow-hidden cursor-pointer"
									>
										<div className="w-full aspect-video overflow-hidden">
											<Image
												src="https://i.pinimg.com/736x/49/43/7a/49437a99d17db363a6b2c6ffe7902fba.jpg"
												alt="movie-banner"
												width={300}
												height={300}
												className="object-cover w-full h-full object-center group-hover:scale-105 transition-all"
											/>
										</div>
										<div className="p-2">
											<p className="font-semibold">
												CAPTAIN AMERICA: THẾ GIỚI MỚI
												(2025)
											</p>
											<p className="text-gray-400 text-sm mt-1">
												追加日： 2025/01/14
											</p>
										</div>
									</div>
								</Fragment>
							))}
					</div>

					{/* pagination  */}
					<div className="mt-10 flex justify-center">
						<Pagination
							total={85}
							showTotal={(total, range) =>
								`${range[0]}-${range[1]} of ${total} items`
							}
							defaultPageSize={20}
							defaultCurrent={1}
						/>
					</div>
				</div>
			</div>

			<Modal
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				width={1000}
				centered
				footer={[]}
				styles={{
					content: {
						padding: 0,
						overflow: "hidden",
					},
				}}
				closeIcon={false}
				className="scrollbar-hidden"
			>
				<div className="relative max-h-[85vh] scrollbar-hidden overflow-y-auto">
					{/* tool bar  */}
					<div className="h-12 sticky top-0 left-0 flex items-center justify-between px-4 bg-white shadow-sm">
						<span onClick={handleCancel} className="cursor-pointer">
							<HiXMark size={24} />
						</span>

						<div className="flex gap-4 items-center">
							<Button
								type="text"
								className="text-red-500 text-base font-medium"
							>
								削除
							</Button>
							<Button type="default" className="text-base">
								編集
							</Button>
							<Button type="primary" className="text-base">
								保存
							</Button>
						</div>
					</div>

					{/* banner  */}
					<div className="w-[800px] aspect-video mx-auto rounded-md overflow-hidden mt-4">
						<Image
							src="https://i.pinimg.com/736x/49/43/7a/49437a99d17db363a6b2c6ffe7902fba.jpg"
							alt="movie-banner"
							width={1200}
							height={1000}
							className="object-cover w-full h-full object-center"
						/>
					</div>

					{/* movie content  */}
					<div className="flex gap-4 mt-10 justify-center">
						<div>
							<div className="w-[140px] aspect-[2/3] rounded-md overflow-hidden">
								<Image
									src="https://i.pinimg.com/736x/30/05/ef/3005ef9bbe66c822cb275c1a87d766b9.jpg"
									alt="movie-poster"
									width={300}
									height={200}
									className="object-cover w-full h-full object-center"
								/>
							</div>
							<p className="text-center font-semibold my-2">
								ポスター
							</p>
						</div>

						<div className="shrink-0 w-[600px]">
							<Form
								labelCol={{ span: 4 }}
								wrapperCol={{ span: 20 }}
								layout="horizontal"
								initialValues={{ size: componentSize }}
								onValuesChange={onFormLayoutChange}
								size={componentSize as SizeType}
								style={{ maxWidth: 600 }}
							>
								{/* title  */}
								<Form.Item label="タイトル">
									<Input placeholder="タイトルを入力してください" />
								</Form.Item>

								{/* desc  */}
								<Form.Item label="紹介">
									<Input.TextArea placeholder="映画について紹介文を書いてください" />
								</Form.Item>

								{/* status  */}
								<Form.Item label="状態">
									<Select
										defaultActiveFirstOption
										placeholder="状態を選択してください"
									>
										<Select.Option value="onBoarding">
											上映中
										</Select.Option>
										<Select.Option value="upcoming">
											公開予定
										</Select.Option>
										<Select.Option value="finished">
											終了
										</Select.Option>
									</Select>
								</Form.Item>

								{/* language  */}
								<Form.Item label="言語">
									<Select
										defaultActiveFirstOption
										placeholder="言語を選択してください"
									>
										{languageMocks.length > 0 &&
											languageMocks.map((l) => (
												<Fragment key={l.languageId}>
													<Select.Option
														value={l.languageId}
													>
														{l.name}
													</Select.Option>
												</Fragment>
											))}
									</Select>
								</Form.Item>

								{/* theater type  */}
								<Form.Item label="上映形式">
									<Select
										defaultActiveFirstOption
										placeholder="上映形式を選択してください"
									>
										{formatMocks.length > 0 &&
											formatMocks.map((f) => (
												<Fragment key={f.formatId}>
													<Select.Option
														value={f.formatId}
													>
														{f.name}
													</Select.Option>
												</Fragment>
											))}
									</Select>
								</Form.Item>

								{/* product date  */}
								<Form.Item label="公開日">
									<DatePicker />
								</Form.Item>

								{/* R labels  */}
								<Form.Item label="年齢指定">
									<Select
										defaultActiveFirstOption
										placeholder="Rラベルを選択してください"
									>
										{rLabels.length > 0 &&
											rLabels.map((r) => (
												<Fragment key={r.rRabelId}>
													<Select.Option
														value={r.rRabelId}
													>
														{`${r.name}（${r.description}）`}
													</Select.Option>
												</Fragment>
											))}
									</Select>
								</Form.Item>

								{/* movie duration  */}
								<Form.Item label="本編（分）">
									<InputNumber />
								</Form.Item>

								{/* casts  */}
								<Form.Item
									name="movieCategories"
									label="カテゴリー"
									rules={[
										{
											required: true,
											message:
												"カテゴリーを選択してください",
											type: "array",
										},
									]}
								>
									<Select
										mode="multiple"
										placeholder="カテゴリーを選択してください"
									>
										{categoryMocks.length > 0 &&
											categoryMocks.map((c) => (
												<Fragment key={c.categoryId}>
													<Select.Option
														value={c.categoryId}
													>
														{c.name}
													</Select.Option>
												</Fragment>
											))}
									</Select>
								</Form.Item>
							</Form>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	);
};

const rLabels: {
	rRabelId: string;
	name: string;
	description: string;
}[] = [
	{
		rRabelId: "0",
		name: "全年対象",
		description: "どなたでもご覧になれます",
	},
	{
		rRabelId: "1",
		name: "R15+",
		description: "15歳以上がご覧になれます",
	},
	{
		rRabelId: "2",
		name: "R18+",
		description: "18歳以上がご覧になれます",
	},
	{
		rRabelId: "3",
		name: "PG12",
		description: "小学生には助言・指導が必要です",
	},
];

export default MoviesScreen;
