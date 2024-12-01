import React, { FC } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import scss from "./Contac.module.scss";
import { FormComponent } from "@/components/ui/FormComponent/FormComponent";


const Contac: FC = () => {
	return (
		<section className={scss.sectoins}>
			<div className="container">
				<div className={scss.contact}>
					<h1>Контакты</h1>
					<div className={scss.contact_wrapper}>
						<div className={scss.contact_info}>
							<ul className={scss.contact_list}>
								<li className={scss.contact_item}>
									<MdOutlineEmail
										style={{
											alignItems: "center",
											width: "40px ",
											height: "40px",
											color: "palevioletred",
										}}
									/>

									<h5>nefashionkg@gmail.com</h5>
								</li>
								<li className={scss.contact_item}>
									<MdLocalPhone
										style={{
											alignItems: "center",
											width: "40px ",
											height: "40px",
											color: "palevioletred",
										}}
									/>

									<h5
										style={{
											display: "flex",
											flexDirection: "column",
											gap: "10px",
										}}>
										<a href="tel:+996999886644">+996 709 32 80 37</a>
									</h5>
								</li>
								<li className={scss.contact_item}>
									<IoLocationSharp
										style={{
											alignItems: "center",
											width: "40px ",
											height: "40px",
											color: "palevioletred",
										}}
									/>

									<h5>Переулок Томский 1. Город Бишкек</h5>
								</li>
								<li className={scss.contact_item}>
									<FaInstagram
										style={{
											alignItems: "center",
											width: "40px ",
											height: "40px",
											color: "palevioletred",
										}}
									/>

									<h5>
										<a href="https://www.instagram.com/ne.kgz" target="blank">
											@nefashionkg
										</a>
									</h5>
								</li>
							</ul>
						</div>
						<div className={scss.location}>
							<div className="mapouter">
								<div className="gmap_canvas">
									<iframe
										src="https://yandex.ru/map-widget/v1/?um=constructor%3A3d5939b901feccbe7a7f209790a5bfe2af5d724f22a7538b3b7af71fcf237db3&amp;source=constructor"
										width="600"
										height="400"
										frameBorder="0"></iframe>
									<style>{`
                      .mapouter {
                        position: relative;
                        text-align: right;
                        height: 100%;
                        width: 100%;
                          }
                            .gmap_canvas {
                          overflow: hidden;
                    background: none!important;
                      height: 100%;
                      width: 100%;
                  }
                      `}</style>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
				<div >
					<FormComponent/>
				</div>

		</section>
	);
};

export default Contac;
