"use client";

import { FC, useEffect, useState } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import scss from "./Layout.module.scss";

interface LayoutProps {
	children: React.ReactNode;
}
export const LayoutPages: FC<LayoutProps> = ({ children }) => {
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const time = setTimeout(() => {
			setLoading(false);
		}, 1000);
		return () => clearTimeout(time);
	}, []);

	return (
		<div className={scss.layout}>
			{loading ? (
				<div className={scss.loader}>
					<div className={scss.spinner}></div>
				</div>
			) : (
				<>
					<Header />
					<main>{children}</main>
					<Footer />
				</>
			)}
		</div>
	);
};
