import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useRef } from 'react';
import Header from './components/pages/header/Header';
import Home from './components/home/Home';
import Team from './components/team/Team';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import ScrollToTop from './components/UI/ScrollToTop';

function App() {
  const challenge = useRef(null)
  const solution = useRef(null)
  const flowerLifecycle = useRef(null)
  const contactUs = useRef(null)

  const scrollToSection = elementRef => {
    elementRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <Router>
      <ReactNotifications />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Header scrollToSection={scrollToSection} challenge={challenge} solution={solution} flowerLifecycle={flowerLifecycle} contactUs={contactUs} />}>
          <Route index element={<Home challenge={challenge} solution={solution} flowerLifecycle={flowerLifecycle} contactUs={contactUs} />} />
          <Route path='/team' element={<Team contactUs={contactUs} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
