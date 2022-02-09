import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import Navbar from './components/layout/navbar/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import BlogDetails from './components/blogs/blogDetails/BlogDetails'
import CreateBlog from './components/blogs/createBlog/CreateBlog'
import Board from './components/board/Board'

const App = () => {
  return (
    <Router>
      <div className="App font-inter text-gray-600 flex flex-col md:flex-row">
      <div className="basis-1/4">
        <Navbar />
      </div>
        <div className="content basis-1/2">
          <Routes className="">
            <Route exact path='/' element={<Dashboard/>} />
            <Route path='/blog/:id' element={<BlogDetails />} />
            <Route path='/create' element={<CreateBlog />} />
          </Routes>
        </div>
        <div className="basis-1/4">
          <Board />
        </div>
      </div>
    </Router>
  );
}

export default App;
