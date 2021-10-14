import { useState } from "react";
import { _categories, _products } from "../../data/data";
import "./main.css";
import ProductCard from "./productCard";
export default function Main() {
  const [productsInList, setProducts] = useState(_products);
  const [categoryColor, setCatColor] = useState("");
  console.log("hii");
  var filterdata = (x, e) => {
    x.preventDefault();
    if (e === "All") {
      setProducts(_products);
      return;
    }
    let category = e;
    let match = [];
    setCatColor("whhh");
    x.target.className = "filter-active";
    _products.map((p, k) => {
      if (p.category === category) {
        match.push(p);
      }
    });
    console.log(category);
    console.log(productsInList);
    setProducts(match);
  };
  return (
    <div>
      {/* <!-- ======= Portfolio Section ======= --> */}
      {console.log("hii reurn ", categoryColor)}
      <section id="portfolio" class="portfolio">
        <div class="container">
          <div class="section-title">
            <h2>Our Products</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div class="row">
            <div class="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li
                  data-filter="*"
                  className={categoryColor}
                  id="All"
                  onFocus={(x) => filterdata(x, "All")}
                  onClick={(x) => filterdata(x, "All")}
                >
                  All
                </li>

                {_categories.map((i, k) => (
                  <li
                    className={categoryColor}
                    onFocus={(x) => filterdata(x, i.categoryName)}
                    onClick={(x) => filterdata(x, i.categoryName)}
                    id={i.categoryName}
                  >
                    {i.categoryName}
                  </li>
                ))}
                {/* <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li> */}
              </ul>
            </div>
          </div>

          <div class="row portfolio-container">
            {productsInList.map((i, k) => (
              <ProductCard product={i} id={k} />
            ))}
          </div>
        </div>
      </section>

      {/* <!-- End Portfolio Section --> */}
    </div>
  );
}
