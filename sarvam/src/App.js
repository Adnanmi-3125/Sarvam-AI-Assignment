import { Route, Routes } from 'react-router-dom';
import Talk from './Pages/Talk';
import Discover from './Pages/Discover';
import { useState } from 'react';

function App() {
  const [post , setPost] = useState(false);
  return (
    <div className="App bg-[#FAF3EA]">
      <Routes>
        <Route path='/' element={<Talk post={post} setPost={setPost} />}/>
        <Route path='/discover' element={<Discover post={post} setPost={setPost}/>}/>
      </Routes>
    </div>
  );
}

export default App;
