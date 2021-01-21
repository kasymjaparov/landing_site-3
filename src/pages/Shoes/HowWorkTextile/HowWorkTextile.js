import React from 'react'
import './HowWorkTextile.css'
import gif from "./ofd-nn.gif"

export default function HowWorkTextile() {
	return (
		<div className='howworktextile'>
			<div className='howworktextile_wrapper'>
                <div className="howworktextile_info">
                <div className="howworktextile_title">
                Как работает маркировка
                </div>
                <div className="howworktextile_stick"/>
                <div className="howworktextile_text">С 1 июля 2020 года при приемке и отгрузке вы обязаны сканировать коды с обуви и передавать их в систему маркировки обуви. Розничная продажа осуществляется через онлайн-кассу с ОФД: кассир сканирует код с обуви, а оператор фискальных данных отправляет его в систему мониторинга.</div>
                </div>
                <div className="howworktextile_image">
                    <img src={gif} alt="gif old"/>
                </div>
            </div>
		</div>
	)
}
