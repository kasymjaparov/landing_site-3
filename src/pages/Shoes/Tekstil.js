import React from 'react'
import About from './About/About'
import HowWorkTextile from './HowWorkTextile/HowWorkTextile'
import Icons from './Icons/Icons'
import LetsMark from './LetsMark/LetsMark'
import ScanOfd from './ScanOfd/ScanOfd'
import MarkCases from './MarkCases/MarkCases'
import Accordeon from '../../components/Accordeon/Accordeon'

export default function Tekstil() {
	React.useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<div className='tekstil'>
			<About />
			<Icons />
			<HowWorkTextile />
			<ScanOfd />
			<LetsMark />
			<MarkCases />
			<Accordeon />
		</div>
	)
}
