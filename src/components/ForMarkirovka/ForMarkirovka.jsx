import React from 'react'
import "./ForMarkirovka.css"

export default function ForMarkirovka() {
    const links=[{path:"/shoes",title:"Обувь"},{path:"/tekstil",title:"Текстиль"},{path:"/",title:"Алкоголь"},{path:"",title:"Молоко"},{path:"",title:"Лекарства"},{path:"",title:"Табак"}]
    return (
        <div className="formarkirovka">
            <div className="formarkirovka_wrapper">
<div className="formarkirovka_title">Все для маркировки</div>
<div className="formarkirovka_links">
{
    links.map((item)=>(
        <a href={item.path} className="formarkirovka_links_item" key={item.title}>
<div className="formarkirovka_links_item_round"><i className="fas fa-chevron-right"/></div>
<div className="formarkirovka_links_item_title">{item.title}</div>
        </a>
    ))
}
</div>
            </div>
        </div>
    )
}
