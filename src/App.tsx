import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Layout from './pages/HomeLayout';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BlogPage from './pages/BlogPage';
import Login from './pages/auth/Login';
import Auth from './pages/auth/Auth';
import Reset from './pages/auth/Reset';
import Signup from './pages/auth/Signup';
import Onboard from './pages/auth/Onboard';
import Dashboard from './pages/dashboard/Dashboard';
import DashboardHome from './pages/dashboard/DashboardHome';
import AddProject from './pages/dashboard/AddProject';
import { AuthProvider } from './AuthProvider';
import Todo from './pages/dashboard/Todo';
import Projects from './pages/dashboard/Projects';
import Schedule from './pages/dashboard/Schedule';
import Chat from './pages/dashboard/Chat';

function App() {
  const today = new Date().toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });

  return (
    <BrowserRouter>
      <AuthProvider>
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
            <Route path='/dashboard/to-do' element={<Todo today={today} />} />
            <Route path='/dashboard/projects' element={<Projects today={today} />} />
            <Route path='/dashboard/schedules' element={<Schedule today={today} />} />
            <Route path='/dashboard/chat' element={<Chat today={today} />} />
          </Route>

          {/* <Route path='explore' element={<Explore />} />
        <Route path='blog' element={<Blog />} />
        <Route path='/blog/:id' element={<BlogPage />} /> */}
          {/* <Route path='*' element={<NoPage />} /> */}
        </Routes>
      </AuthProvider>
    </BrowserRouter>


  )
}

export default App;
