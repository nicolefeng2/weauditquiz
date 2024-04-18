// import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Landing'
import BiasPrompt from './BiasPrompt'
import {BiasDistribution} from './BiasDistribution'
import Ending from './Ending'
import Result from './Result'


function App() {
  // const [submit, setSubmit] = useState(false);

  const handleSubmit = () => {
    // setSubmit(true);
  };

  return (
    <div className="App">
      <BrowserRouter basename='weauditquiz'>
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/flower' element={<BiasPrompt prompt="flower" onSubmit={handleSubmit} />}></Route>
          <Route path='/flower-distr' element={<BiasDistribution distr="flower" button={true} />}></Route>
          <Route path='/tree' element={<BiasPrompt prompt="tree" onSubmit={handleSubmit} />}></Route>
          <Route path='/tree-distr' element={<BiasDistribution distr="tree" button={true}/>}></Route>
          <Route path='/baby' element={<BiasPrompt prompt="baby" onSubmit={handleSubmit} />}></Route>
          <Route path='/baby-distr' element={<BiasDistribution distr="baby" button={true}/>}></Route>
          <Route path='/ceo' element={<BiasPrompt prompt="ceo" onSubmit={handleSubmit} />}></Route>
          <Route path='/ceo-distr' element={<BiasDistribution distr="ceo" button={true}/>}></Route>
          <Route path='/couple' element={<BiasPrompt prompt="couple" onSubmit={handleSubmit} />}></Route>
          <Route path='/couple-distr' element={<BiasDistribution distr="couple" button={true}/>}></Route>
          <Route path='/wedding' element={<BiasPrompt prompt="wedding" onSubmit={handleSubmit} />}></Route>
          <Route path='/wedding-distr' element={<BiasDistribution distr="wedding" button={true}/>}></Route>
          <Route path='/doctor' element={<BiasPrompt prompt="doctor" onSubmit={handleSubmit} />}></Route>
          <Route path='/doctor-distr' element={<BiasDistribution distr="doctor" button={true}/>}></Route>
          <Route path='/ending' element={<Ending/>}></Route>
          <Route path='/result' element={<Result/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App