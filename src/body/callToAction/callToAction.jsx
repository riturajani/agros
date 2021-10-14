import "./callToAction.css";
import background from "../../assets/img/call-to-action-bg.jpg";
export default function CallToAction() {
  return (
    <div>
      {/* <!-- ======= Call To Action Section ======= --> */}
      <section
        class="call-to-action"
        id="call-to-action"
        style={{
          background: `linear-gradient(rgb(91 190 125 / 55%), rgba(7, 56, 57, 0.5)) , url(${background}) fixed center center`,
        }}
      >
        <div class="container">
          <div class="text-center">
            <h3>Call To Action</h3>
            <p>
              {" "}
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <a class="cta-btn" href="#">
              Call To Action
            </a>
          </div>
        </div>
      </section>
      {/* <!-- End Call To Action Section --> */}
    </div>
  );
}
