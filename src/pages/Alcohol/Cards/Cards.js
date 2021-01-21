import React from 'react'
import './Cards.css'
import alcohol1 from './alcohol1.jpg'
import alcohol2 from './alcohol2.jpg'
import alcohol3 from './alcohol3.jpg'

export default function Cards() {
	const cards = [
		{
			src: alcohol1,
			title: 'Розничным продавцам',
			desc: `Быстрая продажа по коду маркировки.Бесплатное приложение для приемки и проверки кодов.
    Удобная обработка входящих УПД.`
		},
		{
			src: alcohol2,
			title: 'Дистрибьюторам',
			desc: `Отгрузка и приемка упаковками.
    Быстрое создание транспортного кода.
    Поддержка терминалов сбора данных и любых 2D-сканеров.`
		},
		{
			src: alcohol3,
			title: 'Производителям',
			desc: `Заказ кодов и ввод в оборот.
    Автоматический расчет акцизов.
    Технологические карты, учет сырья и готовой продукции.`
		}
	]
	return (
		<div className='alcohol_cards'>
			<div className='alcohol_cards_wrapper'>
				{cards.map((item) => (
					<div key={item.src} className='alcohol_cards_item'>
						<div className='alcohol_cards_item_image'>
							<img src={item.src} alt={item.src} />
						</div>
						<div className='alcohol_cards_item_title'>{item.title}</div>
						<div className='alcohol_cards_item_desc'>{item.desc}</div>
					</div>
				))}
			</div>
		</div>
	)
}
