import React from 'react'
import './HowWork.css'
import ofdn from './ofdn.png'
export default function HowWork() {
	return (
		<div className='howwork'>
			<div className='howwork_wrapper'>
				<div className='howwork_title'>Узнайте, как работать с ЕГАИС участникам оборота. Подробнее</div>
				<div className='howwork_cards'>
					<div className='howwork_cards_item'>
						<div className='howwork_cards_item_image'>
							<img src={ofdn} alt='ofdn' />
						</div>
						<div className='howwork_cards_item_desc'>
							<div className='howwork_cards_item_desc_title'>
								ОФД-НН возьмет на себя всю работу с ЕГАИС
							</div>
							<div className='howwork_cards_item_desc_text'>
								Ведите учет в ОФД-НН и оформляйте документы на алкоголь, как на обычный товар. По каждой
								операции все данные отправятся в ЕГАИС автоматически.
							</div>
						</div>
					</div>
                    <div className='howwork_cards_item'>
						<div className='howwork_cards_item_image'>
							<img src={ofdn} alt='ofdn' />
						</div>
						<div className='howwork_cards_item_desc'>
							<div className='howwork_cards_item_desc_title'>
								ОФД-НН возьмет на себя всю работу с ЕГАИС
							</div>
							<div className='howwork_cards_item_desc_text'>
								Ведите учет в ОФД-НН и оформляйте документы на алкоголь, как на обычный товар. По каждой
								операции все данные отправятся в ЕГАИС автоматически.
							</div>
						</div>
					</div>
				</div>
              
					
			</div>
		</div>
	)
}
