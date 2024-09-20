import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from '../src/components/sidebar/sidebar';
import Navbar from '../src/components/navbar/navbar';

//sidebar
import Add from './pages/add/add';
import List from './pages/list/list';
import Order from './pages/order/order';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="flex pt-16">
          <Sidebar />
          <div className="flex-1 bg-gray-100 min-h-screen p-6">
            <Routes>
              <Route path="/add-item" element={<Add />} />
              <Route path="/list-item" element={<List />} />
              <Route path="/order" element={<Order />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
