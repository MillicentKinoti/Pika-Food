
import './App.css';
import Layout from "./pages/Layout"
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

//import Home from './pages/Home';

function App() {
	return (
		<Router>
			<Layout/>
		</Router>
	);
}

export default App;
