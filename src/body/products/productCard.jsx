import { Link, Route } from "react-router-dom";
import productImg from "../../assets/img/cat/Biostimulants.jpg";
import ProductDetail from "./productDetails/productDetail";
export default function ProductCard(props) {
  console.log(props);
  console.log(props.id);
  return (
    <div class="col-lg-4 col-md-6 portfolio-item filter-app">
      <div class="portfolio-wrap">
        <img src={productImg} class="img-fluid" alt="" />
        <div class="portfolio-info">
          <h4>{props.product.productName}</h4>
          <p>App</p>
          <div class="portfolio-links">
            <a
              href={productImg}
              data-gallery="portfolioGallery"
              class="portfolio-lightbox"
              title="App 1"
            >
              <i class="bi bi-arrows-angle-expand"></i>
            </a>
            <Link to={"/products/" + props.id} title="More Details">
              <i class="bi bi-arrow-right-circle"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Instead of using a selector, define the gallery elements
