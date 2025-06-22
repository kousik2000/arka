import Header from './components/Header';
import Sections from './components/Sections';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from './sections/Gallery';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Sections />  {/* contains Portfolio inside */}
              <Footer />
            </>
          }
        />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}
