import React from 'react'
import './Equipments.css'
import img1 from '../../components/Staffs/phone.jpg'
import img2 from '../../components/Staffs/printer.jpg'
import img3 from '../../components/Staffs/scaner.jpg'
import img7 from './7.png'
import img8 from './9.png'
import img9 from './10.png'
import img10 from './11.png'
import img11 from './12.png'
import img12 from './13.png'

export default function Equipments() {
	React.useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	const staffs1 = [
		{
			title: 'Urovo DT50',
			desc: `ТЕРМИНАЛ СБОРА ДАННЫХ UROVO DT50 / DT50-SH3S9E4F00 / ANDROID 9.0 / 1.4 GHZ / 8ХCORE, CORTEX A53 / QUALCOMM SD 450 / RAM 2 GB / ROM 16 GB / HONEYWELL N6603 / 2D IMAGER / 5.7" / 720 X 1440 / 2G / 4G (LTE) / BLUETOOTH / GPS / GSM / WI-FI / 4300 MAH / NFC / СЕНСОР ОТПЕЧАТКА / IP 67 / 250 G / 6 КЛАВИШ`,
			image: img1
		},
		{
			title: 'UROVO D8000',
			desc: `Термотрансферный принтер UROVO D8000 отличает высокая эргономичность корпуса, простой и понятный для пользователя интерфейс, а также полный набор опций, соответствующих потребностям практически любой области применения.`,
			image: img2
		},
		{
			title: 'IDZOR 9750BT 2D',
			desc: `Сканер штрих-кодов IDZOR 9750BT Bluetooth 2D - Беспроводной сканер с радиусом действия 100 метров!`,
			image: img3
		}
	]

	const staffs3 = [
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

	const staffs2 = [
		{
			title: 'Принтер печати на этикетках Printronix 8000',
			desc: `Печатает уникальные коды на самоклеящихся этикетках.`,
			image: img10
		},
		{
			title: 'Станция Комплекс складских операций.',
			desc: `Простое решение для проведения складских операций и ведения складского учета.`,
			image: img11
		},
		{
			title: 'Станция агрегации АР-10С. Линия М.',
			desc: `Предназначенная для ручной агрегации вторичных упаковок в короба.`,
			image: img12
		}
	]
	return (
		<div className='equipments'>
			<div className='equipments_wrapper'>
				<div className='equipments_row'>
					{staffs1.map((item) => (
						<div key={item.title} className='staffs_cards_item'>
							<div className='staffs_cards_item_img'>
								<img src={item.image} alt='image' />
							</div>
							<div className='staffs_cards_item_description'>
								<div className='staffs_cards_item_title'>{item.title}</div>
								<div className='staffs_cards_item_desc'>{item.desc}</div>
							</div>
						</div>
					))}

					{staffs3.map((item) => (
						<div key={item.title} className='staffs_cards_item'>
							<div className='staffs_cards_item_img'>
								<img src={item.image} alt='image' />
							</div>
							<div className='staffs_cards_item_description'>
								<div className='staffs_cards_item_title'>{item.title}</div>
								<div className='staffs_cards_item_desc'>{item.desc}</div>
							</div>
						</div>
					))}

					{staffs2.map((item) => (
						<div key={item.title} className='staffs_cards_item'>
							<div className='staffs_cards_item_img'>
								<img src={item.image} alt='image' />
							</div>
							<div className='staffs_cards_item_description'>
								<div className='staffs_cards_item_title'>{item.title}</div>
								<div className='staffs_cards_item_desc'>{item.desc}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
