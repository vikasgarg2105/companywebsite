import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PayPal from "../../images/paypal.svg";
import Netflix from "../../images/netflix.svg";
import Snapchat from "../../images/snapchat.svg";
import Figma from "../../images/figma.svg";
import YouTube from "../../images/youtube.svg";
import "../Clients/Clients.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Clients = () => {
  return (
    <>
      <section className="clients py-md-5 mb-5">
        <Container>
          <Row>
            <Col>
              <Swiper
                className="px-4"
                spaceBetween={50}
                centeredSlides={true}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: true,
                }}
                pagination={true}
                modules={[Autoplay,Pagination]}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 50,
                  },
                  576: {
                    slidesPerView: 1.6,
                    spaceBetween: 50,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                  992: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1200: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
              >
                <SwiperSlide className="mb-5">
                  <div className="client-item d-flex align-items-center justify-content-center py-4 px-5 h-100 my-4">
                    <div className="client-img">
                      <img src={PayPal} alt="" className="img-fluid" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="mb-5">
                  <div className="client-item d-flex align-items-center justify-content-center py-4 px-5 h-100 my-4">
                    <div className="client-img">
                      <img src={Netflix} alt="" className="img-fluid" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="mb-5">
                  <div className="client-item d-flex align-items-center justify-content-center py-4 px-5 h-100 my-4">
                    <div className="client-img">
                      <img src={Snapchat} alt="" className="img-fluid" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="mb-5">
                  <div className="client-item d-flex align-items-center justify-content-center py-4 px-5 h-100 my-4">
                    <div className="client-img">
                      <img src={Figma} alt="" className="img-fluid" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="mb-5">
                  <div className="client-item d-flex align-items-center justify-content-center py-4 px-5 h-100 my-4">
                    <div className="client-img">
                      <img src={YouTube} alt="" className="img-fluid" />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Clients;
