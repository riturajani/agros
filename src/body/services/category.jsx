import { HashLink } from "react-router-hash-link";
import { _categories } from "../../data/data";

export default function Category() {
  return (
    <div class="row">
      {_categories.map((i, k) => (
        <div
          class="col-lg-4 col-md-6 d-flex align-items-stretch"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div class="icon-box iconbox-blue">
            <img src={`/imgs/cat/${i.categoryImg}`} className="catImgs"></img>
            <h4>
              <HashLink to={"#" + i.categoryName}>{i.categoryName}</HashLink>
            </h4>
            <p>{i.categoryDesc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
