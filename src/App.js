import logo from "./logo.svg";
import "./App.css";
import Connect from "./header/connect";
import Header from "./header/header";
import Footer from "./footer/footer";
import Hero from "./body/hero/hero";
import Services from "./body/services/services";
import CallToAction from "./body/callToAction/callToAction";
import Main from "./body/products/main";
import Contact from "./body/contact/contact";
import BackToTop from "./utils/backToTop";
import { Redirect, Route } from "react-router";
import ProductDetail from "./body/products/productDetails/productDetail";

function App() {
  return (
    <div className="App">
      <Connect />
      <Header />
      <Route
        exact
        path="/products/:id"
        render={(params) => (
          <div>
            <ProductDetail {...params} />
          </div>
        )}
      />
      <Route
        path="/home"
        render={() => (
          <div>
            <Hero />
            <Services />
            <Main />
          </div>
        )}
      />
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <CallToAction />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
