import "@splidejs/splide/css";
function Banner() {
    return (
        <>
            {/* <!-- Banner --> */}
    <section className="banner-bg">
        <div id="banner-slider" className="splide">
            <div className="splide__track">
                <ul className="splide__list">
                    <li className="splide__slide slide-1">
                        <div className="container d-flex align-items-center justify-content-center h-100" data-aos="fade-up"  data-aos-duration="1500">
                            <div className="splide-container text-center">
                                <p className="prime-text second-font text-capitalize fw-bold mb-2 fs-1">
                                    Welcome to Hevinta
                                </p>
                                <h1 className="white-text fw-bold mb-3 lh-sm text-uppercase fs-10">
                                 Healing with Humanity
                                </h1>
                                <p className="white-text text-capitalize mb-4 fs-5">
                                   Hevinta Trust works to spread hope, care, and positive change in every community.
                                </p>
                                <div>
                                    <a href="contact.html" className="btn prime-btn-2  btn-lg rounded-0 m-2">
                                        Donate Now
                                    </a>
                                    <a href="contact.html" className="btn prime-btn-2 btn-lg  rounded-0 m-2">
                                        Join Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="splide__slide slide-2">
                        <div className="container d-flex align-items-center justify-content-center h-100" data-aos="fade-up"  data-aos-duration="1500">
                            <div className="splide-container text-center">
                                <p className="prime-text second-font text-capitalize fw-bold mb-2 fs-1">
                                    Welcome to Hevinta
                                </p>
                                <h1 className="white-text fw-bold mb-3 lh-sm text-uppercase fs-10">
                                 Empowering Through Education
                                </h1>
                                <p className="white-text text-capitalize mb-4 fs-5">
                                   From education to empowerment, we stand for humanity.Together, we can build brighter futures for all.
                                </p>
                                <div>
                                    <a href="contact.html" className="btn prime-btn-2  btn-lg rounded-0 m-2">
                                        Donate Now
                                    </a>
                                    <a href="contact.html" className="btn prime-btn-2 btn-lg  rounded-0 m-2">
                                        Join Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="splide__slide slide-3">
                        <div className="container d-flex align-items-center justify-content-center h-100" data-aos="fade-up"  data-aos-duration="1500">
                            <div className="splide-container text-center">
                                <p className="prime-text second-font text-capitalize fw-bold mb-2 fs-1">
                                    Welcome to Hevinta
                                </p>
                                <h1 className="white-text fw-bold mb-3 lh-sm text-uppercase fs-10">
                                   Together, We Rise
                                </h1>
                                <p className="white-text text-capitalize mb-4 fs-5">
                                  Hevinta Trust is a step toward hope and healing.Let’s spread love, care, and change—one life at a time.
                                </p>
                                  <div>
                                    <a href="contact.html" className="btn prime-btn-2  btn-lg rounded-0 m-2">
                                        Donate Now
                                    </a>
                                    <a href="contact.html" className="btn prime-btn-2 btn-lg  rounded-0 m-2">
                                        Join Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
        </>
    )
}
export default Banner;  