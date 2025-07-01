import React from "react";
import './ContactSection.css';

import callIcon from "./../../../assets/Images/call-icon.svg";
import mailIcon from "./../../../assets/Images/mail-icon.svg";
import mapIcon from "./../../../assets/Images/map-icon.svg";

const contactData = [
	{
		location: "Vancouver",
		details: [
			{
				icon: callIcon,
				title: "Phone",
				link: "tel:6042022929",
				text: "604.202.2929",
			},
			{
				icon: mailIcon,
				title: "Email",
				link: "mailto:hello@jovirealty.com",
				text: "hello@jovirealty.com",
			},
			{
				icon: mapIcon,
				title: "Address",
				link: "https://maps.app.goo.gl/aQbfJsbgFcHvgJAJA",
				text: "201-2010 E 48th Ave<br/>Vancouver, BC V5P 1R8",
				target: "_blank",
			},
		],
		mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.651849520248!2d-123.06797262322732!3d49.22612937475695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548674246403c9fd%3A0x1297f5e943f70d38!2sJovi%20Realty%20Inc.!5e0!3m2!1sen!2sin!4v1746108790953!5m2!1sen!2sin",
	},
	{
		location: "Squamish",
		details: [
			{
				icon: callIcon,
				title: "Phone",
				link: "tel:6042022929",
				text: "604.202.2929",
			},
			{
				icon: mailIcon,
				title: "Email",
				link: "mailto:hello@jovirealty.com",
				text: "hello@jovirealty.com",
			},
			{
				icon: mapIcon,
				title: "Address",
				link: "https://maps.app.goo.gl/6Xb3kY3Y2ZxJ2k2x9",
				text: "102B 40194 Glenalder Place<br/>Squamish, BC V0N 1T0",
				target: "_blank",
			},
		],
		mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.6518495201317!2d-123.06797262491177!3d49.226129374759154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548674246403c9fd%3A0x1297f5e943f70d38!2sJovi%20Realty%20Inc.!5e0!3m2!1sen!2sin!4v1748086188323!5m2!1sen!2sin",
	},
	{
		location: "Korea",
		details: [
			{
				icon: mailIcon,
				title: "Email",
				link: "mailto:korea@jovirealty.com",
				text: "korea@jovirealty.com",
			},
			{
				icon: mapIcon,
				title: "Address",
				link: "https://maps.app.goo.gl/9Xb3kY3Y2ZxJ2k2x9",
				text: "5-4 Nambusunhwan Ro<br/>239-Gil I Gwanak-gu Seoul",
				target: "_blank",
			},
		],
		mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.2448908635215!2d126.95855217424673!3d37.47854702917127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca025b9fb2cad%3A0xb0314a9330e73445!2si%2C%205-4%20Nambusunhwan-ro%20239-gil%2C%20Gwanak-gu%2C%20Seoul%2C%20South%20Korea!5e0!3m2!1sen!2sin!4v1748086463000!5m2!1sen!2sin",
	},
];

const ContactSection = () => {
	return (
		<div className="contact-section d-flex justify-content-center align-items-center flex-column">
			<div className="container">
				<div className="row justify-content-center position-relative">
					<div className="col-lg-8 text-center text-white contact-header">
						<h5 className="jovi-subhead">Contact Us</h5>
						<h2 className="main-h2">Do you have a question or enquiry for our team?</h2>
						<p>Our dedicated support team is available 24/7 to assist you and answer all your questions.</p>
					</div>
				</div>
				<div className="contact-details-cont d-flex flex-column">
					{contactData.map((location, index) => (
						<div className={`jovi-contact-row jovi-contact-block d-grid gap-50`} key={index}>
							<div className="jovi-contact-details" style={{
								order: `${index % 2 === 0 ? 0 : 1}`
							}}>
								<h3 className="jovi-location-title">{location.location}</h3>
								{location.details.map((item, idx) => (
									<div className="jovi-info-item d-flex" key={idx}>
										<div className="jovi-icon-box">
											<img src={item.icon} alt={`${item.title} icon`} />
										</div>
										<div className="jovi-info-content">
											<h5 className="jovi-info-title">{item.title}</h5>
											<a
												href={item.link}
												target={item.target || "_self"}
												className="jovi-info-link"
												dangerouslySetInnerHTML={{ __html: item.text }}
											/>
										</div>
									</div>
								))}
							</div>
							<div className="jovi-map-container">
								<iframe
									src={location.mapSrc}
									width="100%"
									height="100%"
									style={{ border: 0 }}
									allowFullScreen=""
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ContactSection;