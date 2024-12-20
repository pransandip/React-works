import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
/*?---protected route import---?*/
// import Home from './components/Home';
// import Login from './components/Login';
// import Products from './components/Products';
// import Error from './components/Error';
// import PrivateRoutes from './utils/PrivateRoutes';

/*?---(shared / nested ) Routing---?*/
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import NavHeader from './pages/NavHeader';
import Error from './pages/Error';
import Protected from './pages/Protected';

import './App.css'

function App() {
  return (
    <div>
      <Router>
        <Routes>

          {/* protected routes */}
          {/* <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home />} exact />
            <Route path="/products" element={<Products />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} /> */}

          {/* Outlet example */}
          {/* <Route path="/" element={<NavHeader />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<Error />} />
          </Route> */}

          {/* protected routes example two*/}
          <Route path='/' element={<Protected Component={Home} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Protected Component={Products} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
