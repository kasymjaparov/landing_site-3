import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import ref from "../../refToLk.js"
import logo from './logo copy.png'

export default function Header() {
	const links = [
		{ title: 'Главная', path: '/' },
		{ title: 'Возможности', path: '/features' },
		{ title: 'Оборудования', path: '/equipments' },
		{ title: 'Эдо', path: '/edo' },
		{ title: 'Новости', path: '/news' }
	]
	const [show, setShow] = React.useState(true)
	React.useEffect(() => {
		if (window.matchMedia('(max-width:1147px)').matches) {
			setShow(false)
		}
	}, [])

	return (
		<header>
			<div className='header_wrapper'>
				<div className='header_logo'>
					<img src={logo} alt='norma.kg logo' />
				</div>
				<div className={show ? 'navOpen nav' : 'nav'}>
					{links.map((item) => (
						<NavLink
							onClick={() => {
								if (window.matchMedia('(max-width:1147px)').matches) setShow(!show)
							}}
							key={item.title}
							to={item.path}
							className='nav_link'
							activeClassName='nav_link-active'
							exact
						>
							{item.title}
						</NavLink>
					))}
					<a
						target='_blank'
						rel='noopener noreferrer'
						className='fas fa-phone-alt'
						href='tel:+996501588882'
					></a>
					<span className='nav_lang'>RU</span>
					<span className='login'>
						<a href={ref} className='login_button'>
							Войти{' '}
						</a>
					</span>
				</div>
				<div onClick={() => setShow(!show)} className={`burger ${show ? 'burgerOpen' : ''}`}>
					<div />
					<div />
					<div />
				</div>
			</div>
		</header>
	)
}
