/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { FC, useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedNumbersProps {
	value: number;
}

const AnimatedNumbers: FC<AnimatedNumbersProps> = ({ value }) => {
	const ref: any = useRef(null);

	const motionValue: any = useMotionValue(0);
	const springValue: any = useSpring(motionValue, { duration: 7000 });
	const isView: boolean = useInView(ref);

	useEffect(() => {
		if (isView) {
			motionValue.set(value);
		}
	}, [isView, value, motionValue]);

	useEffect(() => {
		springValue.on("change", (latest: any): void => {
			if (ref.current && latest.toFixed(0) <= value) {
				ref.current.textContent = latest.toFixed(0);
			}
		});
	}, [springValue, value]);

	return (
		<>
			<em style={{fontWeight:'100'}} ref={ref}></em>
		</>
	);
};
export default AnimatedNumbers;
