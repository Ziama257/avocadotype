
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TypingTest from './components/typingtest';
// import ScoreList from './components/scoreboard';
import Registration from './components/register';
import Login from './components/login';
import Update from './components/edit';
import HighScores from './components/highscores';
import UserList from './components/userlist';
import UserPage from './components/userpage';
import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={[<Login/>, <Registration/>]} path='/' default/>
        <Route element={[<TypingTest />]} path='/test'/>
        <Route element={<Update/>} path ="/scores/edit/:id" />
        <Route element={<HighScores/>} path="/highscores" />
        <Route element ={<UserList/>} path="/users"/>
        <Route element ={<UserPage/>} path ="/users/:username"/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
