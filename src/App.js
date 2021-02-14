import './assets/css/index.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './pages/Main'
import News from './pages/News/News.js'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Alcohol from './pages/Alcohol/Alcohol'
import Tekstil from './pages/Tekstil/Tekstil'
import Shoes from './pages/Shoes/Tekstil'
import Equipments from './pages/Equipments/Equipments'
function App() {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path='/' component={Main} exact />
				<Route path='/news' component={News} exact />
				<Route path='/alcohol' component={Alcohol} exact />
				<Route path='/tekstil' component={Tekstil} exact />
				<Route path='/shoes' component={Shoes} exact />
				<Route path='/equipments' component={Equipments} exact />
				<Redirect to='/' />
			</Switch>
			<Footer />
			{/* <a href='https://api.whatsapp.com/send?phone=+996501588882' target='_blank' rel='noopener noreferrer' className='fab fa-whatsapp' ></a> */}
		</BrowserRouter>
	)
}

export default App
