import './App.css';

import { Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import Layout from './views/Layout';
import Contact from './views/Pages/Contact';
import News from './views/Pages/News';
import OurProjects from './views/Pages/OurProjects';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="news" element={<News />} />
          <Route path="ourprojects" element={<OurProjects />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;