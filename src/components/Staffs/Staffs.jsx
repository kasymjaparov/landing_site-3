import React from 'react'
import './Staffs.css'
import phone from './phone.jpg'
import printer from './printer.jpg'
import img6 from './6.png'
import img7 from './7.png'
import img8 from './9.png'
import img9 from './10.png'

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
	const staffs2 = [
		{
			title: 'Urovo U2 Терминал сбора данных',
			desc: `На терминал предустановлено бесплатное ПО - 1С Мобильная торговля. Предназначенная для учета и инвентаризации товаров для магазинов и небольших складов.`,
			image: img7
		},
		{
			title: 'Станция послойной агрегации АР-30. Линия М.',
			desc: `Станция позволяет послойно считывать коды вторичных упаковок, сложенные в короба, а также печатать групповые этикетки на короб.`,
			image: img9
		},
		{
			title: 'АМК-100. Линия М.',
			desc: `Пролистыватель АМК-100 предназначен для автоматической маркировки развернутых коробок, конвертов, мешков, пакетов, этикеток методом прямой печати.`,
			image: img8
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
					{staffs2.map((item) => (
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
