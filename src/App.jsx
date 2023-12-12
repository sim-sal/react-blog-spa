import { useState } from 'react'
import style from "./css/modules/Main.module.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Blog from './pages/Blog';
import ShowSinglePost from './pages/ShowSinglePost';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/show-post' element={<ShowSinglePost />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
