import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

import "./index.css"
import "./style.css"

function App() {

  return(
    <Router>
      <div className="bg">
        <div className="container-fluid homeBody">
          <NavTabs />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          
        </div>
      </div>
    </Router>
    )
}

export default App;

// style={{backgroundImage:`url(${backgroundImage})`}}
