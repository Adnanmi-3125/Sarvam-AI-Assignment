import { Route, Routes } from 'react-router-dom';
import Talk from './Pages/Talk';
import Discover from './Pages/Discover';

function App() {
  return (
    <div className="App bg-[#FAF3EA]">
      <Routes>
        <Route path='/' element={<Talk/>}/>
        <Route path='/discover' element={<Discover/>}/>
      </Routes>
    </div>
  );
}

export default App;
