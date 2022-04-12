import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage.js';
import Team from './pages/Team.js';
import About from './pages/About.js';
import Story from './pages/Story.js';

function App() {
  return (
	<div>
	  <Router>
	  	<Routes>
	  		<Route path="/" element={ <MainPage /> } exact />
	  		<Route path="/about" element={ <About /> } exact />
	  		<Route path="/team" element={ <Team /> } exact />
	  		<Route path="/story" element={ <Story /> } exact />
	  	</Routes>
	  </Router>
	</div>
  );
}

export default App;
