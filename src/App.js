import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import Navbar from './components/layout/navbar/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import BlogDetails from './components/blogs/blogDetails/BlogDetails'
import CreateBlog from './components/blogs/createBlog/CreateBlog'
import Board from './components/board/Board'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

const App = () => {
  return (
    <Router>
      <div className="App font-inter text-gray-600 max-w-screen-xl border-2 border-red-500 mx-auto">
          <div className="md:fixed md:top-auto md:right-auto md:w-64 border-yellow-500 border md:h-screen">
            <Navbar />
          </div>
          <div className="md:ml-64 -mt-16 md:mt-0 mx-auto lg:mr-[19.5rem]">
            <Routes className=""> 
              <Route exact path='/' element={<Dashboard/>} />
              <Route path='/blog/:id' element={<BlogDetails />} />
              <Route path='/create' element={<CreateBlog />} />
              <Route path='/signin' element={<SignIn />} />
              <Route path='/signout' element={<SignUp />} />
            </Routes>
          </div>
          <div className="hidden lg:fixed lg:block lg:border lg:border-l-fuchsia-600 lg:z-20 lg:top-0 lg:bottom-0 lg:right-[max(0px,calc(50%-40rem))] lg:w-[19.5rem]">
            <Board />
          </div>
      </div>
    </Router>
  );
}

export default App;
