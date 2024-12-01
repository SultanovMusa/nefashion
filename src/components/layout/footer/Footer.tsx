// import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";
import scss from "./Footer.module.scss";
import { useRouter } from "next/navigation";
import { IconBrandWhatsapp, IconBrandInstagram } from "@tabler/icons-react";

const Footer = () => {
	const router = useRouter();
	return (
		<footer className={scss.footer}>
			<div className={scss.content}>
				<Image
					src={logo}
					alt="photo"
					width={250}
					height={40}
					onClick={() => router.push("/")}
				/>
				<p>2024. Все права защишены</p>

				<div className={scss.icons}>
					<span>
						<a
							className={scss.span}
							href="https://www.instagram.com/ne.kgz?igsh=bTUzZ3Z3ZXV6cWRq" target="_blank">
							<IconBrandInstagram />
						</a>
					</span>
					<a className={scss.span} href="https://api.whatsapp.com/send?phone=996709328037&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9C%D1%8B%20%D0%BF%D0%B8%D1%88%D0%B5%D0%BC%20%D1%81%20%D0%B2%D0%B0%D1%88%D0%B5%D0%B3%D0%BE%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0"  target="_blank">
						<IconBrandWhatsapp />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
