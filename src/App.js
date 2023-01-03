import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import ToDoList from './screens/ToDoList/ToDoList';

function App () {
  return(
    <>
          <Header />
          <main> 
            <Routes>
              <Route path='/'element= {<LandingPage/>} exact/>
              <Route path='/home'element= {<LandingPage/>} exact/>
              <Route path='/todolist'element= {<ToDoList/>} />
            </Routes>
          </main>
      <Footer />
    </>
  )
}
export default App;

