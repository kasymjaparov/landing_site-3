import React from 'react'
import './icons.css'
import icon1 from './cashbox.svg'
import icon2 from './documents.svg'
import icon3 from './flash-drive.svg'
import icon4 from './tools.svg'

export default function Icons() {
	const icons = [{icon:icon1,desc:`Выдадим КЭП и зарегистрируем на маркировку`},{icon:icon2,desc:`Обновим кассу и подберем сканер`},{icon:icon3,desc:`Подключим к ОФД и ЭДО`},{icon:icon4,desc:`Обучим персонал, наладим процесс работы`}]
	return (
		<div className='icons'>
			<div className='icons_wrapper'>
				<div className='icons_title'>Полный комплекс услуг по маркировке</div>
				<div className='icons_stick' />
				<div className='icons_items'>
					{icons.map((item) => (
						<div className="icon_item" key={item.icon}>
							<div className='icon_items_item'>
								<img src={item.icon} alt={item.icon} />
							</div>
							<div className="icon_item_desc">{item.desc}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
