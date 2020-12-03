import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import "./style.css"

function App() {

  return(
    <Router>
      <div className="bg">
        <div className="container-fluid">
          <NavTabs />
          <Route exact path="/" component={Home} />
          <Route exact path="/andy-greenhaw-react-portfolio" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          
        </div>
      </div>
    </Router>
    )
}

export default App;
