import React from 'react'
import './InfoImage.css'
import catalog from './catalog.png'
import catalog2 from './catalog-2.png'

export default function InfoImage() {
	return (
		<div className='infoimage'>
			<div className='infoimage_wrapper'>
				<div className='infoimage_item'>
					<div className='infoimage_item_image'>
						<img src={catalog} alt={catalog} />
					</div>
					<div className='infoimage_item_text'>
						<div className='infoimage_item_text_title'>Удобная учетная система</div>
						<div className='infoimage_item_text_stick' />
						<div className='infoimage_item_text_desc'>
							ОФД-НН полностью автоматизирует учет в вашем магазине. Рассчитывайтесь с поставщиками,
							начисляйте зарплату, формируйте и сдавайте отчетность в госорганы.
						</div>
					</div>
				</div>

				<div className='infoimage_item'>
					<div className='infoimage_item_text'>
						<div className='infoimage_item_text_title'>Кассовая программа для маркировки</div>
						<div className='infoimage_item_text_stick' />
						<div className='infoimage_item_text_desc'>
							ОФД-НН Для магазинов и аптек напомнит сканировать коды и проконтролирует, чтобы вы по ошибке
							не продали неучтенный товар или не даст пробить дважды одну марку.
						</div>
					</div>
					<div className='infoimage_item_image'>
						<img src={catalog2} alt={catalog2} />
					</div>
				</div>

			</div>
		</div>
	)
}
