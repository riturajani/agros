import { _products } from "../../../data/data";
import BreadCrumbs from "./breadcrumbs";
import "./product-details.css";
export default function ProductDetail(props) {
  const prod = _products[props.match.params.id];
  return (
    <div>
      <BreadCrumbs prodName={prod.productName}></BreadCrumbs>
      {/* {props.product.productName} */}
      {/* <!-- ======= Portfolio Details Section ======= --> */}
      <section id="portfolio-details" class="portfolio-details">
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-8">
              <div class="portfolio-info">
                <h3>{prod.productName}</h3>
                <ul>
                  <li>
                    <strong>Category</strong>: {prod.category}
                  </li>
                  <li>
                    <strong>Dosage</strong>: {prod.dosage}
                  </li>
                </ul>
              </div>
              <div class="portfolio-info">
                <h3>Technical Specifications</h3>
                <ul>
                  {prod.techSpecs.map((i, k) => (
                    <li>{i}</li>
                  ))}
                </ul>
              </div>
              <div class="portfolio-info">
                <h3>Benefits</h3>
                <ul>
                  {prod.benefits.map((i, k) => (
                    <li>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="portfolio-details-slider swiper-container">
                <div class="swiper-wrapper align-items-center">
                  <div class="swiper-slide">
                    <img src={`/imgs/pro-imgs/${prod.productImg}`} alt="" />
                  </div>
                </div>
                {/* <div class="swiper-pagination"></div> */}
              </div>
              <div class="portfolio-description">
                <h2>{prod.productName} Description</h2>
                <p>
                  Amifol K is an high concentration of liquid Potassium (K2O 465
                  g /L) product. Plants need more Potassium than any other
                  nutrient with the exception of Nitrogen. Potassium helps
                  plants regulate water use, resist disease and maximise crop
                  quality It increases the ability of plants to use all other
                  nutrients correctly Amifol K is ideal as a foliar spray and
                  also suitable for fertigation No leaf burn or scorch due to
                  extremely low salt índex 100% Soluble 100% Plant Safe 100%
                  Reliable
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Portfolio Details Section --> */}
    </div>
  );
}
