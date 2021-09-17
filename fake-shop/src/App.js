import Header from "./components/Header"
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
    
      <Router> 
     <Header />
      <Switch>
      <Route path="/" exact component={ProductListing} />

      <Route path="/cart" exact component={Cart} />
      <Route path="/product/:productId" exact component={ProductDetail} />
      <Route path="/login" exact component={Login} />
       <Route>404 Not Found</Route>
       </Switch>
     </Router>
    </div>

    );
}

export default App;
