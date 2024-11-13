import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Athletes from './pages/Athletes';
import Coaches from './pages/Coaches';
import Calculator from './pages/Calculator';
import News from './pages/News';
import Marketplace from './pages/Marketplace';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/athletes" element={<Athletes />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/news" element={<News />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;