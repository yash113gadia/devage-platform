import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Apply from './pages/Apply';
import Internships from './pages/Internships';
import Admin from './pages/Admin';
import Verify from './pages/Verify';
import BookCall from './pages/BookCall';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Plans from './pages/Plans';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-100 font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/book" element={<BookCall />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/verify" element={<Verify />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
