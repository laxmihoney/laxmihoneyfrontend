import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home, About, Blog, Search, Contact ,Dashboard ,Profile , Settings } from './pages/page';
import { Layout } from './Components/component';

// Layout Component for Nested Routes

const NotFound = () => <h2>404 - Page Not Found</h2>;

// App Component with Nested Routes
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="dashboard" element={<Dashboard />} >
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<NotFound />} /></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;