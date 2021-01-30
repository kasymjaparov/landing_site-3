import React from 'react'
import './MarkirovkaAbout.css'
import Carousel from 'react-bootstrap/Carousel'
import img1 from "./Rectangle 61.png"
import img2 from "./Rectangle 62.png"
import img3 from "./Rectangle 63.png"
import ref from "../../refToLk.js"
export default function MarkirovkaAbout() {
	return (
		<div className='markirovkaAbout'>
			<div className='markirovkaAbout_wrapper'>
				<div className='markirovkaAbout_info'>
					<div className='markirovkaAbout_info_title'>Маркировка</div>
					<div className='markirovkaAbout_info_desc'>
						Маркировка - нанесение на упаковку или этикетку сгенерированного цифрового кода: электронного
						точечного двухмерного кода формата Data Matrix.
					</div>
					<div className='markirovkaAbout_info_desc'>
						Основной целью маркировки товаров является повышение защиты и снижение оборота
						фальсифицированной и контрафактной продукции.
					</div>
					<a
						href={ref}
						style={{ marginBottom: 20 }}
						className='about_btn markirovkaAbout_btn'
					>
						Подключиться
					</a>
				</div>
				<Carousel>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src={img3}
							alt='First slide'
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src={img2}
							alt='First slide'
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src={img1}
							alt='First slide'
						/>
					</Carousel.Item>
				</Carousel>
				{/* <div className='markirovkaAbout_img'></div> */}
			</div>
		</div>
	)
}
