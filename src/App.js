import Web3 from './components/Web3.js'
import Smartcontract from './components/Smartcontract.js'
import UI from './components/UI.js'
import Ipfs from './components/Ipfs.js'
import Welcome from './components/Welcome.js'
import NavBar from './NavBar.js'
import React from 'react';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Link, BrowserRouter ,  Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>

    <div className="page-container" >
         <Container>
		<NavBar />

                <Routes>
                     <Route index element={<Welcome />} />                    
                     <Route path="/web3/" element={<Web3 />} />
                     <Route path="/smartcontract/" element={<Smartcontract />} />
                     <Route path="/ui/" element={<UI />} />
                     <Route path="/ipfs/" element={<Ipfs />} />
	  
	        </Routes>
	  </Container>

    </div>


    </div>
  );
}

export default App;
