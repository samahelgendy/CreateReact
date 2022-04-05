import React from 'react';
import {BrowserRouter ,Route ,Routes} from 'react-router-dom';


import  Navbar from './components/Navbar/index'
import Content from './components/Content/index';
import Contact from './components/Contact/index';

function App() {
  return (
     <BrowserRouter>
    <div className="App">
      
      < Navbar />
      <Routes>
        <Route path="/" element={ <Content />}/>
        <Route  path="/contact" element={ <Contact />}/>
    </Routes>
     </div>
       </BrowserRouter>  
  );
}

export default App;
