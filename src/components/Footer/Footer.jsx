import React from 'react'
import "./Footer.css"
export default function Footer() {
    const links =[{href:"",icons:"fab fa-instagram"},{href:"",icons:"fab fa-youtube"},{href:"",icons:"fab fa-telegram-plane"},{href:"",icons:"fab fa-vk"},{href:"",icons:"fab fa-odnoklassniki"},]
    return (
        <footer className="footer">
    <div className="container">
        <div className="footer__inner">

            <div className="footer__column">
                <div className="footer__title">Новая Норма</div>
                <div className="footer__links">
                    <div className="footer__text">Компания является интегратором и провайдером облачных сервисов для
                        автоматизации процессов управления цепочками поставок и взаиморасчетов. Важным направлением
                        работы компании является участие в строительстве цифровой ЭКО-системы.
                    </div>
                </div>
            </div>

            <div className="footer__column">
                <div className="footer__title">Драйвера</div>
                <div className="footer__links">
                    <div className="footer__link">Шртих-Light</div>
                    <div className="footer__link">Атол</div>
                    <div className="footer__link">Альфа АЗС 2.8</div>
                </div>
            </div>

            <div className="footer__column">
                <div className="footer__title">Документы</div>
                <div className="footer__links">
                    <div className="footer__link">Руководство пользователя</div>
                    <div className="footer__link">Описание процессов</div>
                    <div className="footer__link">Разрешение на обработку фиксальных данных</div>
                    <div className="footer__link">Договор на обработку фиксальных данных</div>
                    <div className="footer__link">Условия поставки</div>
                    <div className="footer__link">Условия гарантии</div>
                </div>
            </div>

            <div className="footer__column">
                <div className="footer__title">Контакты</div>
                <div className="footer__links">
                    <div className="footer__link">Адрес: 720030, Баялинова 146</div>
                    <div className="footer__link">Call-center:<a target="_blank" rel="noopener noreferrer"  href="tel:+996501588882">+996501588882</a></div>
                  
                    <div className="footer__link">
                             <a target="_blank"
							rel="noopener noreferrer"
							href="https://api.whatsapp.com/send?phone=+996501588882">+996501588882</a></div>
                            <div className="footer__link">
                             <a target="_blank"
							rel="noopener noreferrer"
							href="https://api.whatsapp.com/send?phone=+996550830532">+996550830532</a></div>
                 
                     <div className="footer__link">
                             <a target="_blank"
							rel="noopener noreferrer"
							href="https://api.whatsapp.com/send?phone=+996708700700">+996708700700</a></div>
                              <div className="footer__link">+996 (312) 888-882</div>
                              {links.map((item)=>(
 <a key={item.icons} href={item.href} className="footer_links_icons"><i className={item.icons}/></a>
                              ))}
                             
                </div>

            </div>
        </div>

        <div className="footer__samoedno">
            Лицензия ГАС КР №0062266 рег. №19065-3301-ООО
        </div>
    </div>
</footer>
    )
}
