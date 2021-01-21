import React from 'react'
import './letsmark.css'
import remains from './remains.png'

export default function LetsMark() {
	return (
		<div className='letsmark'>
			<div className='letsmark_wrapper'>
				<div className='letsmark_image'>
					<img src={remains} alt='remains' />
				</div>
				<div className='letsmark_info'>
					<div className='letsmark_info_title'>Промаркируем остатки</div>
					<div className='letsmark_info_stick' />
					<div className='letsmark_info_text'>
						У вас небольшой магазин? За вас введем остатки обуви в оборот и напечатаем этикетки с кодами
						маркировки — вам останется только наклеить их на коробки. Если нужно, сразу же зачислим остатки
						на ваш склад и заведем каталог.
					</div>
					<div className='letsmark_info_text'>
						Большой оборот? Подберем оптимальный принтер из нашего каталога и поможем с получением кодов
						маркировки для обуви.
					</div>
				</div>
			</div>
		</div>
	)
}
