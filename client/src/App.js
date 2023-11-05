
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TypingTest from './components/typingtest';
import ScoreList from './components/scoreboard';
import Registration from './components/register';
import Login from './components/login';
import Update from './components/edit';
import HighScores from './components/highscores';
import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={[<Login/>, <Registration/>]} path='/' default/>
        <Route element={[<TypingTest />,<ScoreList/>]} path='/test'/>
        <Route element={<Update/>} path ="/scores/edit/:id" />
        <Route element={<HighScores/>} path="/highscores" />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
