import { Link } from "react-router-dom";

export default function BreadCrumbs(props) {
  return (
    <div>
      {/* <!-- ======= Breadcrumbs ======= --> */}
      <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
          <div class="d-flex justify-content-between align-items-center">
            <h2>Portfolio Details</h2>
            <ol>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>{props.prodName}</li>
            </ol>
          </div>
        </div>
      </section>
      {/* <!-- End Breadcrumbs --> */}
    </div>
  );
}
