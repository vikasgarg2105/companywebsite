import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Services/Services.scss";
import ServiceItem from "./ServiceItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import MobileAppImg from "../../images/mobile-app-development.svg";
import WebDevelopmentImg from "../../images/web-development.svg";
import BrandingImg from "../../images/Branding-and-designing.svg";
import DigitalMarketingImg from "../../images/digital-marketing.svg";
import AIImg from "../../images/Artificial-Intelligence.svg";
import CRMImg from "../../images/CRM-software.svg";
import "swiper/css";
import "swiper/css/pagination";

const serviceItem = [
  {
    serviceImg: MobileAppImg,
    serviceName: "Mobile App Development",
    serviceDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.",
  },
  {
    serviceImg: WebDevelopmentImg,
    serviceName: "Web Designing & Development",
    serviceDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.",
  },
  {
    serviceImg: DigitalMarketingImg,
    serviceName: "Digital Marketing",
    serviceDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.",
  },
  {
    serviceImg: BrandingImg,
    serviceName: "Branding & Design",
    serviceDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.",
  },
  {
    serviceImg: CRMImg,
    serviceName: "CRM SOftware",
    serviceDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.",
  },
  {
    serviceImg: AIImg,
    serviceName: "AI Solutions",
    serviceDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.",
  },
  {
    serviceImg: MobileAppImg,
    serviceName: "Chatbot Devlopment",
    serviceDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.",
  },
];

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
                    delay: 3500,
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
                  {serviceItem.map((item, index) => {
                    return (
                      <SwiperSlide className="mb-5" key={index}>
                        <ServiceItem
                          serviceName={item.serviceName}
                          serviceDescription={item.serviceDescription}
                          serviceImg={item.serviceImg}
                        />
                      </SwiperSlide>
                    );
                  })}
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
