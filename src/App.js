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
          <div className="col-start-1 col-end-3">
            <Navbar />
          </div>
          <div className="col-start-3 col-end-7">
            <Routes className="">
              <Route exact path='/' element={<Dashboard/>} />
              <Route path='/blog/:id' element={<BlogDetails />} />
              <Route path='/create' element={<CreateBlog />} />
            </Routes>
          </div>
          <div className="col-start-7 col-end-9">
            <Board />
          </div>
      </div>
    </Router>
  );
}

export default App;
