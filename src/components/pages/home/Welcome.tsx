"use client";
/* eslint-disable @typescript-eslint/no-require-imports */

import Image from "next/image";
import AnimatedNumbers from "@/components/ui/count/AnimatedNumbers";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import foto2 from "../../assets/2.webp";
// import winter from "../../assets/1a4d7d80-e416-50fe-b408-45e244aa3732.jpeg";
// import autumn from "../../assets/3fb06ede1855744ccaebc83726fs.jpg";
// import spring from "../../assets/a088c288-c186-5b3f-91f2-5419a451b6bd.jpeg";
// import summer from "../../assets/IMG_3509.jpg";
import photo1 from "../../assets/model12.jpg";
import photo2 from "../../assets/model13.jpg";
import photo3 from "../../assets/model3.webp";
import photo4 from "../../assets/model9.jpg";
import photo5 from "../../assets/model4.webp";
import photo6 from "../../assets/model5.webp";
import photo7 from "../../assets/model1.webp";
import photo8 from "../../assets/model6.webp";
// import video from "../../../../public/video.mp4";
import {
	IconServer2,
	IconUserSquare,
	IconVector,
	IconHexagonLetterKFilled,
	IconCheckupList,
	IconBrandDatabricks,
	IconAssembly,
	IconPlanet,
	IconLayersIntersect,
	IconBrandAppleNews,
	IconSlideshow,
	IconCreativeCommonsBy,
} from "@tabler/icons-react";
import scss from "./Welcome.module.scss";
import SwitchContact from "@/components/ui/contacs/SwitchContact";
import { motion } from "framer-motion";
// import ReactPlayer from "react-player";

export default function Welcome() {
	const router = useRouter();
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		});
	}, []);
	const arrow = [
		{
			id: 1,
			img: photo1,
			name: " Трикотажное платье",
			title:
				"Вам не нужно никуда ехать! Просто отправьте нам фотографии или лекала вашей мечты, и мы с любовью разработаем для вас идеальный образец, который станет основой вашего проекта.",
		},
		{
			id: 2,
			img: photo2,
			name: " Офисное платье",
			title:
				"В этом важном этапе мы будем рядом с вами. Наши эксперты помогут выбрать из более чем 10 000 материалов, чтобы каждая деталь вашей одежды отражала ваш стиль и идею.",
		},
		{
			id: 3,
			img: photo3,
			name: "Женское пальто",
			title:
				"Мы шьем образец с тщательной преданностью качеству, чтобы вы могли увидеть, как модель будет выглядеть на практике. Этот шаг гарантирует идеальную посадку и исключительное качество.",
		},
		{
			id: 4,
			img: photo4,
			name: " Вечернее платье",
			title:
				"После вашего одобрения образца мы с гордостью запускаем массовое производство. Благодаря отлаженным процессам, мы обеспечиваем быстрый и качественный результат без компромиссов.",
		},
		{
			id: 5,
			img: photo5,
			name: "Офисное платье 2",
			title:
				"Наша преданность качеству проявляется в многослойном контроле на каждом этапе: от подбора тканей до финальной инспекции готовой продукции. Мы заботимся о каждом изделии..",
		},
		{
			id: 6,
			img: photo6,
			name: "Классический костюм",
			title:
				"Каждое изделие бережно упаковывается с учетом ваших пожеланий. Мы сотрудничаем только с проверенными логистическими партнерами, чтобы обеспечить быструю и надежную доставку.",
		},
		{
			id: 7,
			img: photo7,
			name: "Классический костюм",
			title:
				"Каждое изделие бережно упаковывается с учетом ваших пожеланий. Мы сотрудничаем только с проверенными логистическими партнерами, чтобы обеспечить быструю и надежную доставку.",
		},
		{
			id: 8,
			img: photo8,
			name: "Классический костюм",
			title:
				"Каждое изделие бережно упаковывается с учетом ваших пожеланий. Мы сотрудничаем только с проверенными логистическими партнерами, чтобы обеспечить быструю и надежную доставку.",
		},
	];

	const data = [
		{
			id: 1,
			name: "Контрактное производство",
			title: "Оптовые партии от 300 до 10 000 единиц",
			icon: <IconAssembly />,
		},
		{
			id: 2,
			name: "Конструкторский бюро",
			title: "Разработка лекал для идеальной посадки, включая большие размеры.",
			icon: <IconPlanet />,
		},
		{
			id: 3,
			name: "Подбор материалов",
			title: "Видеообзоры тканей, новинки и каталоги по запросу.",
			icon: <IconLayersIntersect />,
		},
		{
			id: 4,
			name: "Пошив пробного образца",
			title:
				"Изготовление эталонного образца для точного воспроизведения партии.",
			icon: <IconBrandAppleNews />,
		},
		{
			id: 5,
			name: "Профессиональные фотосессии (по запросу)",
			title:
				"Организация съемок с подбором студий и моделей для каталога и рекламы.",
			icon: <IconSlideshow />,
		},
		{
			id: 6,
			name: "Креативное сотрудничество",
			title:
				"Тесное взаимодействие с командой маркетологов и дизайнеров для создания уникального брендинга и фирменных элементов.",
			icon: <IconCreativeCommonsBy />,
		},
	];

	const steps = [
		{
			id: 1,
			title: " Легкость создания модели",
			description:
				"Вам не нужно никуда ехать! Просто отправьте нам фотографии или лекала вашей мечты, и мы с любовью разработаем для вас идеальный образец, который станет основой вашего проекта.",
		},
		{
			id: 2,
			title: "Индивидуальный подбор тканей и фурнитуры",
			description:
				"В этом важном этапе мы будем рядом с вами. Наши эксперты помогут выбрать из более чем 10 000 материалов, чтобы каждая деталь вашей одежды отражала ваш стиль и идею.",
		},
		{
			id: 3,
			title: "Профессиональный пошив образца",
			description:
				"Мы шьем образец с тщательной преданностью качеству, чтобы вы могли увидеть, как модель будет выглядеть на практике. Этот шаг гарантирует идеальную посадку и исключительное качество.",
		},
		{
			id: 4,
			title: "Запуск серийного производства",
			description:
				"После вашего одобрения образца мы с гордостью запускаем массовое производство. Благодаря отлаженным процессам, мы обеспечиваем быстрый и качественный результат без компромиссов.",
		},
		{
			id: 5,
			title: "Строгий контроль качества на всех этапах",
			description:
				"Наша преданность качеству проявляется в многослойном контроле на каждом этапе: от подбора тканей до финальной инспекции готовой продукции. Мы заботимся о каждом изделии.",
		},
		{
			id: 6,
			title: "Изысканная упаковка и доставка .",
			description:
				"Каждое изделие бережно упаковывается с учетом ваших пожеланий. Мы сотрудничаем только с проверенными логистическими партнерами, чтобы обеспечить быструю и надежную доставку.",
		},
	];
	return (
		<div className={scss.home}>
			<section className={scss.section_1}>
			<video className={scss.video} autoPlay muted loop >
			<source src="/video.mp4" type="video/mp4" />
			</video>
				<h3>Ваш бренд на маркетплейсе может больше!</h3>
				<h1>Создайте уникальный и устойчивый бренд с нами</h1>
				<p>
					Устойчивое сотрудничество с nefashion позволяет совместно генерировать
				</p>
				<p>уникальные предложения, объединяя идеи и экспертизу .</p>
			</section>

			<section className={scss.section_2}>
				<div className="container">
					<div className={scss.cards} data-aos="fade-up">
						<div className={scss.box}>
							<h2>NEFASHION </h2>
							<i>Разработка вашего дизайна под ключ</i>
							<p>
								Пошив верхней одежды от разработки лекал до отгрузки на
								склад.«Основанная в 2018 г. NEFASHION стала одним из самых
								динамично развивающихся производителей одежды в Кыргызской
								Республике, достигнув трех производственных площадок.»
							</p>

							<button onClick={() => router.push("/about")}>
								Читать далше ...
							</button>
						</div>
						<Image
							className={scss.img_p}
							src={foto2}
							alt="photo"
							objectFit="cover"
							width={500}
							height={600}
						/>
					</div>
				</div>
			</section>

			<section className={scss.section_3}>
				<div className="container">
					<div className={scss.numbers}>
						<div className={scss.boxs}>
							<h3>
								<AnimatedNumbers value={12228} />
							</h3>
							<span></span>
							<p>Готовых товаров</p>
						</div>
						<div className={scss.boxs}>
							<h3>
								<AnimatedNumbers value={1233} />
							</h3>
							<span></span>
							<p>Заказы</p>
						</div>
						<div className={scss.boxs}>
							<h3>
								<AnimatedNumbers value={176} />
							</h3>
							<span></span>
							<p>Релизованных дизайнов</p>
						</div>
						<div className={scss.boxs}>
							<h3>
								<AnimatedNumbers value={1500} />
							</h3>
							<span></span>
							<p>Давольных клиентов .</p>
						</div>
					</div>
				</div>
			</section>

			<section className={scss.section_7}>
				<div className="container">
					<div className={scss.hobi}>
						<h1>Наши Услуги</h1>
						<div className={scss.people}>
							{data.map((item, index) => (
								<div key={index} className={scss.action}>
									<h2>{item.icon}</h2>
									<div>
										<h1>{item.name}</h1>
										<p>{item.title}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* 	<section className={scss.section_4}>
				<div className="container">
					<div className={scss.cards}>
						<div
							className={scss.card_1}
							data-aos="fade-left"
							data-aos-duration="1000">
							<div className={scss.text}>
								<h1>Зима </h1>
								<p>
									Duis autem vhj el eum iriure dolor in hendrerit in vulputate
									velit molestie consequat
								</p>
							</div>
							<Image
								className={scss.img_p}
								src={winter}
								alt="photo"
								width={400}
								height={300}
							/>
						</div>
						<div
							className={scss.card_2}
							data-aos="fade-right"
							data-aos-duration="1000">
							<Image
								className={scss.img_p}
								src={spring}
								alt="photo"
								width={400}
								height={300}
							/>
							<div className={scss.text}>
								<h1>Весна </h1>
								<p>
									Duis autem vel eum iriure dolor in hendrerit in vulputate
									velit molestie consequat
								</p>
							</div>
						</div>
						<div
							className={scss.card_3}
							data-aos="fade-left"
							data-aos-duration="1000">
							<div className={scss.text}>
								<h1>Осень</h1>
								<p>
									Duis autem vel eum iriure dolor in hendrerit in vulputate
									velit molestie consequat
								</p>
							</div>
							<Image
								className={scss.img_p}
								src={autumn}
								alt="photo"
								width={400}
								height={300}
							/>
						</div>
						<div
							className={scss.card_4}
							data-aos="fade-right"
							data-aos-duration="1000">
							<Image
								className={scss.img_p}
								src={summer}
								alt="photo"
								width={400}
								height={300}
							/>
							<div className={scss.text}>
								<h1>Лето</h1>
								<p>
									Duis autem vel eum iriure dolor in hendrerit in vulputate
									velit molestie... consequat
								</p>
							</div>
						</div>
					</div>
				</div>
			</section> */}

			<section className={scss.seciton_5}>
				<div className="container">
					<h1>Наши Преимущества</h1>
					<div className={scss.intense}>
						<div
							className={scss.hidden}
							data-aos="fade-right"
							data-aos-duration="1000">
							<div className={scss.mega}>
								<IconServer2 />
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "20px",
										width: "320px",
									}}>
									<h1>Гибкие условия</h1>
									<p>
										Комфортные условия сотрудничества под потребности каждого
										клиента
									</p>
								</div>
							</div>
							<div className={scss.mega}>
								<IconUserSquare />
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "20px",
										width: "320px",
									}}>
									<h1>Сопровождение менеджера</h1>
									<p>Личный менеджер поддерживает вас на каждом этапе.</p>
								</div>
							</div>
							<div className={scss.mega}>
								<IconVector />
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "20px",
										width: "320px",
									}}>
									<h1>Собственный конструкторский бюро </h1>
									<p>
										Разработка моделей с нуля и создание уникальных лекал для
										точного соответствия запросам клиента.
									</p>
								</div>
							</div>
						</div>
						<Image
							data-aos="fade-up"
							className={scss.img_p}
							src={foto2}
							alt="photo"
							width={430}
							height={580}
						/>
						<div
							className={scss.hidden}
							data-aos="fade-left"
							data-aos-duration="1000">
							<div className={scss.megas}>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "20px",
										width: "320px",
									}}>
									<h1>Высокий контроль качества </h1>
									<p>
										Трехэтапный контроль на всех стадиях: проверка ткани,
										процессная инспекция, финальная инспекция ОТК.
									</p>
								</div>
								<IconHexagonLetterKFilled />
							</div>
							<div className={scss.megas}>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "20px",
										width: "320px",
									}}>
									<h1> Постпроектный отчет</h1>
									<p>
										По завершении каждого заказа формируется детализированный
										отчет в виде конвенционной карты для анализа и оптимизации
										дальнейшего сотрудничества.
									</p>
								</div>
								<IconCheckupList />
							</div>
							<div className={scss.megas}>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "20px",
										width: "320px",
									}}>
									<h1>Профессиональный подход к разработке моделей</h1>
									<p>Выбор из более 10 000 видов тканей и фурнитуры</p>
								</div>
								<IconBrandDatabricks />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={scss.section_8}>
				<div className="container">
					<div className={scss.content}>
						<h2 className={scss.title}>
							Этапы оформления заказа и производства
						</h2>
						<div className={scss.steps}>
							{steps.map((step) => (
								<motion.div
									key={step.id}
									className={scss.step}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: step.id * 0.2 }}>
									<div
										style={{
											textAlign: "center",
											fontSize: "30px ",
											color: "black",
											fontWeight: "600",
										}}>
										{step.id}
									</div>
									<h3>{step.title}</h3>
									<p>{step.description}</p>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className={scss.section_6}>
				<div className="container">
					<div className={scss.flat}>
						<div
							style={{ display: "flex", flexDirection: "column", gap: "20px" }}
							data-aos="fade-right"
							data-aos-duration="1000">
							<h1>Наши модели </h1>
							<i>Доставка продукции по вашему выбору, 7–10 дне</i>
						</div>
						<div
							className={scss.block}
							data-aos="fade-up"
							data-aos-duration="1000">
							{arrow.map((item, index) => (
								<div key={index}>
									<Image
										src={item.img}
										alt={item.name}
										style={{ borderRadius: "15px" }}
									/>
									<i>{item.name}</i>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<SwitchContact />
		</div>
	);
}
