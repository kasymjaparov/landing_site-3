import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'
import './Partners.css'
import partner1 from './partners/1.png'
import partner2 from './partners/2.png'
import partner3 from './partners/3.png'
import partner4 from './partners/4.png'
import partner5 from './partners/5.png'
import partner6 from './partners/6.png'
import partner7 from './partners/7.png'
import partner8 from './partners/8.png'
import partner9 from './partners/megacom.png'
import partner10 from './partners/mtk.png'
import partner11 from "./partners/tpp2.png"
import partner12 from "./partners/mmc.jpg"

export default function Partners() {
	SwiperCore.use([Autoplay])
	const partners = [
		{ src: partner1 },
		{ src: partner2 },
		{ src: partner3 },
		{ src: partner4 },
		{ src: partner5 },
		{ src: partner6 },
		{ src: partner7 },
		{ src: partner8 },
		{ src: partner9 },
		{ src: partner10 },
		{ src: partner12 }
	]
	let amount = 9
	if (window.matchMedia('(max-width:500px)').matches) {
		amount = 3
	} else if (window.matchMedia('(max-width:768px)').matches) {
		amount = 6
	}
	return (
		<div className='partners'>
			<Swiper
				spaceBetween={50}
				slidesPerView={amount}
				loop={true}
				pagination={{ clickable: true }}
				autoplay={{ delay: 1000 }}
			>
				{partners.map((item) => (
					<SwiperSlide key={item.src} className='swiper_partners'>
						{' '}
						<div className='swiper_partners'>
							<img src={item.src} alt={item.src} />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
