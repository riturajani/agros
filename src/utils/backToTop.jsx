import { Link } from "react-router-dom";

export default function BackToTop() {
  return (
    <Link
      to="/home#"
      class="back-to-top d-flex align-items-center justify-content-center"
    >
      <i class="bi bi-arrow-up-short"></i>
    </Link>
  );
}
