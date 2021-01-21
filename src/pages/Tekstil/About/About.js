import React from 'react'
import "./about_t.css"
import textileScan from "./textil-scan.jpg"
export default function About() {
    return (
        <div className="tekstil_about">
            <div className="tekstil_about_wrapper">
                <div className="tekstil_about_info">
                <div className="tekstil_about_title">
                Маркировка одежды и текстиля
                </div>
                <div className="tekstil_about_stick"/>
                <div className="tekstil_about_desc">В ОФД-НН есть всё для маркировки товаров легкой промышленности: принимайте, отгружайте и продавайте одежду и белье по новым правилам, обменивайтесь ЭДО, ведите учет — данные по каждой операции отправляются в систему маркировки одежды автоматически.</div>
                <div className="about_btn">Подключить</div>
                </div>
               <div className="tekstil_about_image">
                   <img src={textileScan} alt={textileScan}/>
               </div>
            </div>
        </div>
    )
}
