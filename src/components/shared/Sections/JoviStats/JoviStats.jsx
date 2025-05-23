import React, { useEffect, useRef, useState } from "react";
import './JoviStats.css'
import joviLogo from './../../../../assets/Images/jovi-property-logo.png';

const JoviStatsSection = () => {
	const [counts, setCounts] = useState([
		{ value: 0, target: 98, prefix: '', suffix: '%', label: 'Tenant Retention' },
		{ value: 0, target: 1000000, prefix: '$', suffix: 'M+', label: 'Repairs Managed Annually' },
		{ value: 0, target: 100, prefix: '', suffix: '+', label: 'Properties Under Care' },
	]);
	const sectionRef = useRef(null);
	const [hasAnimated, setHasAnimated] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !hasAnimated) {
					setHasAnimated(true);
					startCounting();
				}
			},
			{ threshold: 0.5 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, [hasAnimated]);

	const startCounting = () => {
		counts.forEach((stat, index) => {
			let start = 0;
			const increment = stat.target / 100;
			const interval = setInterval(() => {
				start += increment;
				setCounts((prevCounts) => {
					const updated = [...prevCounts];
					updated[index].value = Math.min(start, stat.target);
					return updated;
				});
				if (start >= stat.target) clearInterval(interval);
			}, 20);
		});
	};

	const formatValue = (value, prefix, suffix) => {
		if (suffix === 'M+') {
			return `${prefix}${(value / 1000000).toFixed(0)}${suffix}`;
		}
		return `${prefix}${Math.round(value)}${suffix}`;
	};

	return (
		<section className="stats-right-col-section" ref={sectionRef}>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="stats-row d-lg-flex d-grid justify-content-between text-center">
							<img src={joviLogo} alt="Jovi Property Management" className="align-self-center" />
							{counts.map((stat, index) => (
								<div className="jovi-stat" key={index}>
									<h2 className="mb-4">{formatValue(stat.value, stat.prefix, stat.suffix)}</h2>
									<p>{stat.label}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default JoviStatsSection;