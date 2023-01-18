import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Hodimlar from "./Pages/Hodimlar/Hodimlar";
import Kontaktlar from "./Pages/Kontaktlar/Kontaktlar";
import Lokatsiya from "./Pages/Lokatsiya/Lokatsiya";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar/>
          <Switch>
              <Route path="/"  exact component={Home}/>
              <Route path="/hodimlar" exact component={Hodimlar}/>
              <Route path="/kontaktlar" exact component={Kontaktlar}/>
              <Route path="/lokatsiya" exact component={Lokatsiya}/>
          </Switch>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
