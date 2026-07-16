import Header from './components/Header';
import Footer from './components/Footer';

import "./App.scss"
import Main from './components/Main';
import PublicationPage from './components/PublicationPage';
import { Route, Routes } from 'react-router-dom';
import Analytics from './components/Analytics';


function App() {


  return (
    <div className="App">
     <Analytics/>
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
