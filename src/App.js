import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Auth from './Pages/Auth'
import Main from './Pages/Main'

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Auth />}/>
        <Route path="/Main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
