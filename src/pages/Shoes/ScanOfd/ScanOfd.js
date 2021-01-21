import React from 'react'
import './ScanOfd.css'
import scan from './scan.gif'

export default function ScanOfd() {
	const info = [
		{
			title: 'Быстрая продажа',
			text: `Кассир сканирует только Data Matrix код с коробки — Новая Норма сам найдет и добавит нужную позицию в чек.`
		},
		{
			title: 'Удобная приемка',
			text: `Товаровед открывает поступление в приложении ОФД-НН. На складе и камерой телефона или сканером считывает коды с обуви. ОФД-НН проверит, сходится ли факт с ЭДО, и сообщит, если есть ошибки. Если всё хорошо — «отчитается» в систему маркировки обуви и примет товар на склад.`
		}
	]
	return (
		<div className='scanofd'>
			<div className='scanofd_wrapper'>
				<div className='scanofd_title'>Сканируйте — остальное сделает ОФД-НН</div>
				<div className='scanofd_about'>
					<div className='scanofd_about_stick' />
					<div className='scanofd_about_text'>
						Ведите учет в ОФД-НН и оформляйте документы, как и раньше, а чтобы передать марки — сканируйте
						коды с коробок. По каждой операции ОФД-НН автоматом отчитается в систему маркировки обуви.
					</div>
				</div>
				<div className='scanofd_info'>
					<div className='scanofd_info_text'>
						{info.map((item) => (
							<div key={item.title} className='scanofd_info_text_item'>
								<div className='scanofd_info_text_item_title'>{item.title}</div>
                                <div className="scanofd_info_text_item_stick"/>
								<div className='scanofd_info_text_item_text'>{item.text}</div>
							</div>
						))}
					</div>
					<div className='scanofd_info_img'>
						<img src={scan} alt={scan} />
					</div>
                    
				</div>
			</div>
		</div>
	)
}
