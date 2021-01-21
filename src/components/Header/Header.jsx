import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'

import logo from "./logo copy.png"

export default function Header() {
  const links = [{title:"Главная",path:"/"},{title:"Возможности",path:"/"},{title:"Оборудования",path:"/"},{title:"Эдо",path:"/"},{title:"Новости",path:"/"}]
  const[show,setShow]=React.useState(true)
  React.useEffect(()=>{
    if(window.matchMedia("(max-width:1147px)").matches){
      setShow(false)
    }
  },[])
  
    return (
        <header>
        <div className="header_wrapper">
          <div className="header_logo">
              <img src={logo} alt="norma.kg logo"/>
          </div>
           <div className={show?"navOpen nav":"nav"}>
            {links.map((item)=>(
                <a onClick={()=>{if(window.matchMedia("(max-width:1147px)").matches) setShow(!show)}} key={item.title} href={item.path} className="nav_link">{item.title}</a>
            ))}
                      <i className="fas fa-phone-alt"></i>
<span className="nav_lang">RU</span>
            <span className="login">
					<a href="http://norma.tmg.kg/" className="login_button">Войти </a>
				</span>
        </div>
        <div onClick={()=>setShow(!show)} className={`burger ${show?"burgerOpen":""}`}><div/><div/><div/></div>
        </div>
    </header>

    )
}
