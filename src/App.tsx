import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Layout from './pages/HomeLayout';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='blog' element={<Blog />} />
          <Route path='/blog/:id' element={<BlogPage />} />
          <Route path='/contact' element={<Contact />} />
          {/* <Route path='*' element={<NoPage />} /> */}
        </Route>
        {/* <Route path='explore' element={<Explore />} />
        <Route path='blog' element={<Blog />} />
        <Route path='/blog/:id' element={<BlogPage />} /> */}
        {/* <Route path='*' element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
