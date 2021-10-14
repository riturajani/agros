import "./hero.css";
import slide1 from "../../assets/img/slide/slide-1.jpg";
import slide2 from "../../assets/img/slide/slide-2.jpg";
import slide3 from "../../assets/img/slide/slide-3.jpg";

export default function Hero() {
  /**
   * Hero carousel indicators
   */
  //   let heroCarouselIndicators = select("#hero-carousel-indicators");
  //   let heroCarouselItems = select("#heroCarousel .carousel-item", true);

  //   heroCarouselItems.forEach((item, index) => {
  //     index === 0
  //       ? (heroCarouselIndicators.innerHTML +=
  //           "<li data-bs-target='#heroCarousel' data-bs-slide-to='" +
  //           index +
  //           "' class='active'></li>")
  //       : (heroCarouselIndicators.innerHTML +=
  //           "<li data-bs-target='#heroCarousel' data-bs-slide-to='" +
  //           index +
  //           "'></li>");
  //   });
  return (
    <div>
      <section id="hero">
        <div
          id="heroCarousel"
          data-bs-interval="5000"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

          <div class="carousel-inner" role="listbox">
            {/* <!-- Slide 1 --> */}
            <div
              class="carousel-item active"
              style={{
                background: `url(${slide1})`,
              }}
            >
              <div class="carousel-container">
                <div class="container">
                  <h2 class="animate__animated animate__fadeInDown">
                    Welcome to <span>Green</span>
                  </h2>
                  <p class="animate__animated animate__fadeInUp">
                    Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                    ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                    dolorem mollitia ut. Similique ea voluptatem. Esse
                    doloremque accusamus repellendus deleniti vel. Minus et
                    tempore modi architecto.
                  </p>
                  <a
                    href="#about"
                    class="btn-get-started animate__animated animate__fadeInUp scrollto"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Slide 2 --> */}
            <div
              class="carousel-item"
              style={{
                background: `url(${slide2})`,
              }}
            >
              <div class="carousel-container">
                <div class="container">
                  <h2 class="animate__animated animate__fadeInDown">
                    Lorem Ipsum Dolor
                  </h2>
                  <p class="animate__animated animate__fadeInUp">
                    Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                    ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                    dolorem mollitia ut. Similique ea voluptatem. Esse
                    doloremque accusamus repellendus deleniti vel. Minus et
                    tempore modi architecto.
                  </p>
                  <a
                    href="#about"
                    class="btn-get-started animate__animated animate__fadeInUp scrollto"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Slide 3 --> */}
            <div
              class="carousel-item"
              style={{
                background: `url(${slide3})`,
              }}
            >
              <div class="carousel-container">
                <div class="container">
                  <h2 class="animate__animated animate__fadeInDown">
                    Sequi ea ut et est quaerat
                  </h2>
                  <p class="animate__animated animate__fadeInUp">
                    Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                    ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                    dolorem mollitia ut. Similique ea voluptatem. Esse
                    doloremque accusamus repellendus deleniti vel. Minus et
                    tempore modi architecto.
                  </p>
                  <a
                    href="#about"
                    class="btn-get-started animate__animated animate__fadeInUp scrollto"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#heroCarousel"
            role="button"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon bi bi-chevron-left"
              aria-hidden="true"
            ></span>
          </a>

          <a
            class="carousel-control-next"
            href="#heroCarousel"
            role="button"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon bi bi-chevron-right"
              aria-hidden="true"
            ></span>
          </a>
        </div>
      </section>
    </div>
  );
}
