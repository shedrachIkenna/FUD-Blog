import { BrowserRouter as Router, Route, Routes} from 'react-router-dom' 
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import BlogDetails from './components/blogs/BlogDetails'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Dashboard/>} />
            <Route path='/blog/:id' element={<BlogDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
