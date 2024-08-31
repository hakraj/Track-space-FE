import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Layout from './pages/HomeLayout';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BlogPage from './pages/BlogPage';
import Login from './pages/Login';
import Auth from './pages/Auth';
import Reset from './pages/Reset';
import Signup from './pages/Signup';

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
        <Route path='/auth' element={<Auth />}>
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/signup' element={<Signup />} />
          <Route path='/auth/reset' element={<Reset />} />
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
