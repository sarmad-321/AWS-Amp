import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
// Component's Import

import { PromotionOffer } from "./Promotion/PromotionOffer";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./ContactForm.css";
// import useWindowSize from "../../../../WindowSize";
import useWindowSize from "../../../WindowSize";

// import Swiper core and required modules
import SwiperCore, { Mousewheel ,Navigation } from "swiper/core";
import { Storage } from "./Storage/Storage";
import { RequiredSize } from "./Size/RequiredSize";
import { Information } from "./Information/Information";
import { MoreInfo } from "./Information/MoreInfo";

// install Swiper modules
SwiperCore.use([Mousewheel , Navigation]);

export const ContactFrom = ({
	contactInfo,
	setContactInfo,
	setFormSubmited,
	typeId,
	slideNo,
	setCurrentSlide,
}) => {
	const [swiper, setSwiper] = useState(1);
	const [initialIstate, setinitialIstate] = useState(0);
	 const [width] = useWindowSize();
	useEffect(() => {
		setCurrentSlide(swiper);
		console.log(contactInfo)
	}, [swiper]);
  

	return (
		<Container maxWidth={false} disableGutters>
			<Swiper
				direction={"vertical"}
				slidesPerView={1}
				spaceBetween={30}
				mousewheel={true}
				className="ContactForm"
				speed={1500}
				touchRatio={2}
				onSlideChange={(e) => setSwiper(e.activeIndex + 1)}
				initialSlide={initialIstate}
				followFinger={false}
				onSwiper={(swiper) => console.log('swiping..........', swiper)}
				 navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
		     	>
				<SwiperSlide>
					<Storage
						contactInfo={contactInfo}
						setContactInfo={setContactInfo}
						typeId={typeId}
					/>
				</SwiperSlide>
				{/* <SwiperSlide>
					<RequiredSize
						contactInfo={contactInfo}
						setContactInfo={setContactInfo}
					/>
				</SwiperSlide> */}
				<SwiperSlide>
					<PromotionOffer
						contactInfo={contactInfo}
						setContactInfo={setContactInfo}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Information
						contactInfo={contactInfo}
						setContactInfo={setContactInfo}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<MoreInfo
						contactInfo={contactInfo}
						setContactInfo={setContactInfo}
						setFormSubmited={setFormSubmited}
					/>
				</SwiperSlide>
				<div>
				<div className="swiper-button-prev" style={{fontFamily:'inter'}}>Back</div>
				<div className="swiper-button-next" style={{fontFamily:'inter'}}>Next</div>
				</div>
				 {/* <ArrowBackIcon className="swiper-button-prev" /> */}
                {/* <ArrowForwardIcon className="swiper-button-next" /> */}
			
			</Swiper>
			
		</Container>
	);
};
