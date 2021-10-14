import SocialLinks from "../utils/socialLinks";
import "./footer.css";
export default function Footer() {
  return (
    <div>
      {/* <!-- ======= Footer ======= --> */}
      <footer id="footer">
        <div class="container">
          <h3>AGROS Crop Nutrition</h3>
          <p>
            Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
            eligendi fuga maxime saepe commodi placeat.
          </p>
          <SocialLinks />
          <div class="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>AGROS Crop Nutrition</span>
            </strong>
            . All Rights Reserved
          </div>
          <div class="credits">
            {/* <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/green-free-one-page-bootstrap-template/ -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
            Developed by <a href="https://riturajani.com/">Ritu Rajani</a>
          </div>
        </div>
      </footer>
      {/* <!-- End Footer --> */}
    </div>
  );
}
