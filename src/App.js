import { BrowserRouter as Router, Route, Routes} from 'react-router-dom' 
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Dashboard/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
