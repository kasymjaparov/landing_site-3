import React from 'react'
import './Staffs.css'
import phone from './phone.jpg'
import printer from './printer.jpg'
import scaner from './scaner.jpg'
import img4 from './4.png'
import img5 from './5.png'
import img6 from './6.png'

export default function Staffs() {
	const staffs = [
		{
			title: 'Urovo DT50',
			desc: `ТЕРМИНАЛ СБОРА ДАННЫХ UROVO DT50 / DT50-SH3S9E4F00 / ANDROID 9.0 / 1.4 GHZ / 8ХCORE, CORTEX A53 / QUALCOMM SD 450 / RAM 2 GB / ROM 16 GB / HONEYWELL N6603 / 2D IMAGER / 5.7" / 720 X 1440 / 2G / 4G (LTE) / BLUETOOTH / GPS / GSM / WI-FI / 4300 MAH / NFC / СЕНСОР ОТПЕЧАТКА / IP 67 / 250 G / 6 КЛАВИШ`,
			image: phone
		},
		{
			title: 'UROVO D8000',
			desc: `Термотрансферный принтер UROVO D8000 отличает высокая эргономичность корпуса, простой и понятный для пользователя интерфейс, а также полный набор опций, соответствующих потребностям практически любой области применения.`,
			image: printer
		},

		{
			title: 'IDZOR 9750S 2D',
			desc: `Сканер IDZOR 9750S 2D – это универсальный инструмент для сканирования линейных и двумерных штрих-кодов, ориентированный на низкий и средний сегменты рынка.`,
			image: img6,
			clas: 'staffs_cards_item_img-40-2'
		}
	]

	return (
		<div className='staffs'>
			<div className='staffs_wrapper'>
				<div className='formarkirovka_title staffs_title'>Торговое оборудование</div>
				<div className='staffs_cards'>
					{staffs.map((item) => (
						<div key={item.title} className='staffs_cards_item-2'>
							<div className={`staffs_cards_item_img-2 ${item.clas}`}>
								<img src={item.image} alt={item.title} />
							</div>
							<div className='staffs_cards_item_description-2'>
								<div className='staffs_cards_item_title-2'>{item.title}</div>
								<div className='staffs_cards_item_desc-2'>{item.desc}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
