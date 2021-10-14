import Navbar from "./navbar";
import "./header.css";
import logo from "../assets/img/logo.png";
export default function Header() {
  return (
    <div>
      {/* <!-- ======= Header ======= --> */}
      <header id="header" class="d-flex align-items-center">
        <div class="container d-flex align-items-center">
          <h1 class="logo me-auto">
            {/* <a href="index.html">Green</a> */}
            <a href="index.html" class="logo me-auto">
              <img src={logo} alt="" class="img-fluid" />
            </a>
          </h1>
          {/* <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}

          <Navbar />
        </div>
      </header>
      {/* <!-- End Header --> */}
    </div>
  );
}
