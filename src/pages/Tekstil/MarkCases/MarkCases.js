import React from 'react'
import './markcases.css'
import img1 from './sistem-1.png'
import img2 from './sistem-2.png'

export default function MarkCases() {
	return (
		<div className='markcases'>
			<div className='markcases_wrapper'>
				<div className='markcases_title'>Маркировка, касса, склад и учет — в одной системе</div>
				<div className='markcases_desc'>
					Кассиры работают в одной системе, ЭДО в другой, ОФД — в третьей и т. д. Проще и логичнее все делать
					в ОФД-НН.
				</div>
				<div className='markcases_item'>
					<div className='markcases_item_image'>
						<img src={img1} alt='img1' />
					</div>
					<div className='markcases_item_info'>
						<div className='markcases_item_info_title'>Удобная учетная система</div>
						<div className='markcases_item_info_stick' />
						<div className='markcases_item_info_desc'>
							ОФД-НН полностью автоматизирует учет в вашем магазине. Рассчитывайтесь с поставщиками,
							начисляйте зарплату, формируйте и сдавайте отчетность в госорганы.
						</div>
					</div>
				</div>

				<div className='markcases_item'>
					<div className='markcases_item_info'>
						<div className='markcases_item_info_title'>Кассовая программа для маркировки</div>
						<div className='markcases_item_info_stick' />
						<div className='markcases_item_info_desc'>
							ОФД-НН Для магазинов и аптек напомнит сканировать коды и проконтролирует, чтобы вы по ошибке
							не продали неучтенный товар или не даст пробить дважды одну марку.
						</div>
					</div>
					<div className='markcases_item_image'>
						<img src={img2} alt='img2' />
					</div>
				</div>
			</div>
		</div>
	)
}
