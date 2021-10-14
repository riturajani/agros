import Category from "./category";
import "./services.css";
export default function Services() {
  return (
    <div>
      {/* <!-- ======= Services Section ======= --> */}
      <section id="services" class="services">
        <div class="container">
          <div class="section-title">
            <h2>Product Categories</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <Category />
        </div>
      </section>
      {/* <!-- End Services Section --> */}
    </div>
  );
}
