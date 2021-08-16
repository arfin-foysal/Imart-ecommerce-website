import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home";


function App() {
  return (
    <div >
      <Router>
      <Header/>
         <Switch>
           <Route path= "/cart" exact component={Cart}/>
           <Route path= "/" exact component={Home}/>
         </Switch>
      </Router>
     
    </div>
  );
}

export default App;
