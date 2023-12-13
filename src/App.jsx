import { useState } from 'react'
import style from "./css/modules/Main.module.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Blog from './pages/Blog';
import ShowSinglePost from './pages/ShowSinglePost';
import DefaultLayout from './pages/DefaultLayout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/posts/:slug' element={<ShowSinglePost />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
