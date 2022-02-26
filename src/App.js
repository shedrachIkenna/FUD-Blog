import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import Navbar from './components/layout/navbar/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import BlogDetails from './components/blogs/blogDetails/BlogDetails'
import CreateBlog from './components/blogs/createBlog/CreateBlog'
import Board from './components/board/Board'

const App = () => {
  return (
    <Router>
      <div className="max-w-screen-xl border-2 mx-auto">
        <div className="App font-inter text-gray-600 flex flex-col md:flex-row">
          <div className="basis-2/6 w-full md:w-60 lg:basis-1/4 fixed">
            <Navbar />
          </div>
          <div className="content md:ml-60 md:w-2/3 basis-4/6 lg:basis-1/2">
            <Routes className="">
              <Route exact path='/' element={<Dashboard/>} />
              <Route path='/blog/:id' element={<BlogDetails />} />
              <Route path='/create' element={<CreateBlog />} />
            </Routes>
          </div>
          <div className="basis-1/4 hidden lg:block">
            <Board />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
