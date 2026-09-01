import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar.jsx'
import Product from './pages/Product.jsx'
import Footer from './components/Footer.jsx'
import Error from './pages/Error.jsx'
import MenCollection from './pages/MenCollection.jsx'
import WomenCollection from './pages/WomenCollection.jsx'
import User from './pages/User.jsx'
import Authentication from './pages/Authentication.jsx'


function App() {
  return (
    <div>
      <Navbar />

      <main className="pt-20">
        <Routes>
          <Route path="/login" element={<Authentication />} />

          <Route path="/" element={<Home />} />

          <Route path="/About" element={<About />} />

          <Route path="/Contact" element={<Contact />} />

          <Route path="/Product" element={<Product />} />

          <Route
            path="/Product/Men"
            element={<MenCollection />}
          />

          <Route
            path="/Product/Women"
            element={<WomenCollection />}
          />

          <Route
            path="/User/:userId"
            element={<User />}
          />

          <Route
            path="*"
            element={<Error />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
