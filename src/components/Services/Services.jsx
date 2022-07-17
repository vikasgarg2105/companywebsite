import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Services/Services.scss";
import ServiceItem from "./ServiceItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Services = () => {
  return (
    <>
      <section className="services py-5">
        <Container fluid className="px-0 py-5">
          <Row className="g-0">
            <Col xs={12}>
              <div className="heading both text-center">
                <h6 className="d-flex align-items-center justify-content-center">
                  Services
                </h6>
                <h2 className="mb-4">What we do</h2>
              </div>
              <div className="services-list">
                <Swiper
                  spaceBetween={50}
                  centeredSlides={true}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                  }}
                  pagination={true}
                  modules={[Pagination, Autoplay]}
                  breakpoints={{
                    0: {
                      slidesPerView: 1.2,
                      spaceBetween: 50,
                    },
                    576: {
                      slidesPerView: 1.6,
                      spaceBetween: 50,
                    },
                    768: {
                      slidesPerView: 2.2,
                      spaceBetween: 50,
                    },
                    992: {
                      slidesPerView: 2.8,
                      spaceBetween: 50,
                    },
                    1200: {
                      slidesPerView: 3.4,
                      spaceBetween: 50,
                    },
                    1400: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
                >
                  <SwiperSlide className="mb-5">
                    <ServiceItem />
                  </SwiperSlide>
                  <SwiperSlide className="mb-5">
                    <ServiceItem />
                  </SwiperSlide>
                  <SwiperSlide className="mb-5">
                    <ServiceItem />
                  </SwiperSlide>
                  <SwiperSlide className="mb-5">
                    <ServiceItem />
                  </SwiperSlide>
                  <SwiperSlide className="mb-5">
                    <ServiceItem />
                  </SwiperSlide>
                  <SwiperSlide className="mb-5">
                    <ServiceItem />
                  </SwiperSlide>
                </Swiper>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Services;
