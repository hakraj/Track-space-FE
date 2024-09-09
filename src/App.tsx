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
import Onboard from './pages/Onboard';
import Dashboard from './pages/Dashboard';
import DashboardHome from './pages/DashboardHome';
import AddProject from './pages/AddProject';

function App() {
  const today = new Date().toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });

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
          <Route path='/auth/onboarding' element={<Onboard />} />
          <Route path='/auth/reset' element={<Reset />} />
        </Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='/dashboard/home' element={<DashboardHome today={today} />} />
          <Route path='/dashboard/add' element={<AddProject today={today} />} />
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
