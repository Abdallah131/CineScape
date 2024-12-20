import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Auth from './Pages/Auth'
import Main from './Pages/Main'
import MovieDetails from './Pages/MovieDetails'
import { Profile } from './Pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Auth />}/>
        <Route path="/Main/:page" element={<Main />} />
        <Route path="/Main/:page/:id" element={<MovieDetails />}/>
        <Route path="/Profile" element={<Profile />}/>
      </Routes>
    </Router>
  );
}

export default App;
