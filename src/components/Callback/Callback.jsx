import React from 'react'
import "./Callback.css"

export default function Callback() {
    return (
        <div className="callback">
            <div className="callback_wrapper">
<div className="callback_info">
    <div className="callback_info_title">
    Оставьте свой номер телефона
    </div>
    <div className="callback_info_desc">
    Наши специалисты свяжутся с вами
    </div>
</div>
<div className="callback_input">
    <input  type="text" placeholder="Ваш номер телефона"/>
</div>
<div className="callback_btn about_btn">Отправить</div>
            </div>
        </div>
    )
}
