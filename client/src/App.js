
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TypingTest from './components/typingtest';
import ScoreList from './components/scoreboard';
import Update from './components/edit';
import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={[<TypingTest />,<ScoreList/>]} path='/' default/>
        <Route element={<Update/>} path ="/scores/edit/:id" />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
