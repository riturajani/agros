import SocialLinks from "../utils/socialLinks";
import "./connect.css";
export default function Connect() {
  return (
    <div>
      {/* <!-- ======= Top Bar ======= --> */}
      <section id="topbar" class="d-flex align-items-center">
        <div class="container d-flex justify-content-center justify-content-md-between">
          <div class="contact-info d-flex align-items-center">
            <i class="bi bi-envelope-fill"></i>
            <a href="mailto:rishabh.singh@agrosindia.com">
              rishabh.singh@agrosindia.com
            </a>
            <i class="bi bi-phone-fill phone-icon"></i> +91 172 2603082
          </div>
          <SocialLinks />
        </div>
      </section>
    </div>
  );
}
