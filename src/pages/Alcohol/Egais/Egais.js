import React from 'react'
import './Egais.css'
import tools from "./tools.png"
export default function Egais() {
	const text = [
		{
			main: 'Выдадим электронную подпись – 3 500 сом',
			text: 'для ЕГАИC подходит только квалифицированная КЭП на JaCarta или ЭЦП 2.0.'
		},
		{
			main: 'Поставим оборудование – от 5 100 сом',
			text:
				'Купите лицензию «Обмен данными с ЕГАИС». Скачайте УТМ при регистрации на egais.kg Интеграцию СБИС возьмет на себя.'
		},
		{
			main: 'Подключим ОФД-НН к ЕГАИС – 1 500 сом',
			text:
				'Уже есть онлайн-касса? Купите только 2D-сканер для приемки и продажи. Ещё не автоматизировались? Оборудуем «под ключ».'
		}
	]
	return (
		<div className='egais'>
			<div className='egais_wrapper'>
				<div className='egais_info'>
					<div className='egais_title'>Организуем работу с ЕГАИС «с нуля»</div>
					<div className='egais_stick' />
					{text.map((item) => (
						<div className='egais_text'>
							<span className='egais_text_main'>{item.main}</span>
							<span className='egais_text_text'>{item.text}</span>
						</div>
					))}
				</div>
                <div className="egais_image">
                    <img src={tools} alt={tools}/>
                </div>
			</div>
		</div>
	)
}
