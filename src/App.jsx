import Home from "./components/home/home";
import Contact from "./components/contact/Contact";
import TopBar from "./components/topbar/TopBar";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
// import Footer from "./components/footer/Footer";
import "./app.scss";
import Menu from "./components/menu/Menu";
import { useState } from "react";

const App = ()=> {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}  />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Home />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>

    </div>
  );
}

export default App;
