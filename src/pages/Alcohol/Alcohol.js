import React from 'react'
import Cards from './Cards/Cards'
import About from './About/About'
import './Alcohol.css'
import Egais from './Egais/Egais'
import HowWork from './HowWork/HowWork'
import InfoImage from './InfoImage/InfoImage'
import ScanOfd from './ScanOfd/ScanOfd'

export default function Alcohol() {
	return (
		<div className='alcohol'>
			<About />
			<Cards />
			<HowWork />
			<ScanOfd/>
			<InfoImage/>
			<Egais/>
		</div>
	)
}
