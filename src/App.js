import Header from './components/Header';
import Footer from './components/Footer';

import "./App.scss"
import Main from './components/Main';
import PublicationPage from './components/PublicationPage';
import { Route, Routes } from 'react-router-dom';


function App() {


  return (
    <div className="App">
     <Header/>
     <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/publications" element={<PublicationPage/>}></Route>
      </Routes>
     <Footer/>
    </div>
  );
}

export default App;
