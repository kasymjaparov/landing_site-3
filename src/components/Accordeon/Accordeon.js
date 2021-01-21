import React from 'react'
import './accordeon.css'
import { makeStyles } from '@material-ui/core/styles'

import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
	MuiAccordionroot: {
		'&.MuiAccordion-root:before': {
			backgroundColor: 'white',
			borderRadius: 5
		}
	}
}))
export default function Accordeon() {
	const [expanded, setExpanded] = React.useState('')

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false)
	}
	const classes = useStyles()
	const accordeons = [
		{
			title: 'Сохранится ли маркировка табачных изделий акцизными марками?',
			text:
				'Ответ: Окончательно вопрос решится в 2020 году, после анализа итогов эксперимента, в рамках которого был протестирован расчет акциза.',
			panel: 'panel1'
		},
		{
			title: 'Что и как делает розница?',
			text:
				'Ответ: Принимает товар у поставщика, подписывая универсальный передаточный документ. Продаёт конечному потребителю, сканируя на кассе код DataMatrix. Информация поступает в ОФД, оттуда в «Честный знак». Товар выводится из оборота.',
			panel: 'panel2'
		},
		{
			title: 'Нужна ли маркировка при продаже товара на экспорт (за границу)?',
			text: 'Ответ: Да, маркировка нужна.',
			panel: 'panel3'
		},
		{
			title: 'Когда розничные продавцы будут обязаны передавать данные в Честный ЗНАК.',
			text:
				'Ответ: По разным категориям товаров сроки разные. Ознакомиться подробно можно на сайте Честный ЗНАК.',
			panel: 'panel4'
		},
		{
			title: 'Когда планируется вводить обязательный ЭДО?',
			text: 'Ответ: С 1 июля 2020 года ЭДО обязателен для всех, кого коснется маркировка товаров.',
			panel: 'panel5'
		},
		{
			title: 'Как происходит выбытие товара и что для этого нужно сделать?',
			text:
				'Ответ: Выбытие товара происходит автоматически. Все что для этого необходимо вы можете прочитать в разделе ниже.',
			panel: 'panel6'
		},
		{
			title: 'Как делается возврат товара?',
			text:
				'Ответ: В случае возврата покупателем продукта следует повторно ввести его в оборот. Но, если DataMatrix-код утрачен, сделать этого не получится.',
			panel: 'panel7'
		},
		{
			title: 'Что делать если коды маркировки утрачены или испорчены?',
			text:
				'Ответ: В этом случае коды нужно списать, а затем заказать для этих же товаров новые. Заказ кодов происходит в товароучётных системах, которые интегрированы с Честный ЗНАК (1С, Мойсклад и другие)',
			panel: 'panel8'
		}
	]
	return (
		<div className='accordeon'>
			<div className='accordeon_wrapper'>
				<div className='accordeon_title'>Вопросы по маркировке</div>
				<div className='letsmark_info_stick'></div>
				{accordeons.map((item) => (
					<Accordion
						classes={{
							root: classes.MuiAccordionroot
						}}
						elevation={0}
						className='accordeon_block'
						expanded={expanded === item.panel}
						onChange={handleChange(item.panel)}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1bh-content'
							id='panel1bh-header'
						>
							<Typography style={{ fontSize: 16 }}>{item.title}</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography style={{ fontSize: 14 }}>{item.text}</Typography>
						</AccordionDetails>
					</Accordion>
				))}
			</div>
		</div>
	)
}
