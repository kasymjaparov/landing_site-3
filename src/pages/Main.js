import React from 'react'
import MarkirovkaAbout from '../components/MarkirovkaAbout/MarkirovkaAbout'
import Operator from '../components/Operator/Operator'
import Partners from '../components/Partners/Partners'
import Staffs from '../components/Staffs/Staffs'
import About from '../components/About/About'
import ForMarkirovka from '../components/ForMarkirovka/ForMarkirovka'
import Callback from '../components/Callback/Callback'

export default function Main() {
    return (
        <>
             <About />
			<MarkirovkaAbout />
			<ForMarkirovka />
			<Operator />
			<Staffs />
			<Partners />
			<Callback/>   
        </>
    )
}
