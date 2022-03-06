import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import Navbar from './components/layout/navbar/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import BlogDetails from './components/blogs/blogDetails/BlogDetails'
import CreateBlog from './components/blogs/createBlog/CreateBlog'
import Board from './components/board/Board'

const App = () => {
  return (
    <Router>
      <div className="App grid gap-3 lg:grid-cols-8 font-inter text-gray-600 max-w-screen-xl border-2 border-red-500 mx-auto">
          <div className="lg:col-start-1 lg:col-end-3 md:col-start-1 md:col-end-4">
            <Navbar />
          </div>
          <div className="lg:col-start-3 lg:col-end-7 md:col-start-4 md:col-end-9">
            <Routes className="">
              <Route exact path='/' element={<Dashboard/>} />
              <Route path='/blog/:id' element={<BlogDetails />} />
              <Route path='/create' element={<CreateBlog />} />
            </Routes>
          </div>
          <div className="lg:col-start-7 lg:col-end-9">
            <Board />
          </div>
      </div>
    </Router>
  );
}

export default App;
