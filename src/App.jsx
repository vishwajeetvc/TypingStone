import About from './components/About'
import Home from './components/Home'
import Login from './components/Login'
import Root from './routes/Root'
import Signup from './components/Signup'

import './index.css'

import { createBrowserRouter , RouterProvider} from 'react-router-dom'

function App() {
	const route = createBrowserRouter([
		{
			path :'/', 
			element: <Root/> ,
			errorElement: <div>Error</div>,// we'll use error page later
			children : [
				{
					path :'/', // for default
					element: <Home/> ,
				},
				{
					path :'/about', 
					element: <About/> ,
				},
				{
					path :'/login', 
					element: <Login/> ,
				},
				{
					path :'/signup', 
					element: <Signup/> ,
				},
			]
		},
	])
	return (
		<RouterProvider router={route}/>
	)
}
export default App
