import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/header/navbar/Navbar';
import Home from './components/pages/Home';
import AddPost from './components/add Post/AddPost';



function App()  {
  return (
    <Router>
      <Navbar />
      <Footer />


      {/* <Hire/> */}

      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/Jobs' element={< AddPost/>}></Route>
        <Route exact path='/About' element={< Home />}></Route>
        <Route exact path='/Contact' element={< AddPost />}></Route>
      </Routes>
    </Router>

  );
}

export default App;
