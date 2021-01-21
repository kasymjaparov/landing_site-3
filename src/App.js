import './assets/css/index.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './pages/Main'
import News from "./pages/News/News.js"
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Alcohol from './pages/Alcohol/Alcohol'
import Tekstil from './pages/Tekstil/Tekstil'
import Shoes from "./pages/Shoes/Tekstil"
function App() {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
			<Route path="/" component={Main} exact />
			<Route path="/news" component={News} exact />
			<Route path="/alcohol" component={Alcohol} exact />
			<Route path="/tekstil" component={Tekstil} exact />
			<Route path="/shoes" component={Shoes} exact />
			<Redirect to="/"/>
			</Switch>
			<Footer />
		</BrowserRouter>
		
	)
}

export default App
