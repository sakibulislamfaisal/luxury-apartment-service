import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ShowReview.css";
import ReviewByCustomer from "../ReviewByCustomer/ReviewByCustomer";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/effect-fade/effect-fade.scss";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]);
const ShowReview = () => {
  const [userReview, setUserReview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4200/api/service/review")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setUserReview(data.data);
      });
  }, []);
  // console.log(userReview);
  return (
    <Container className="pr-0 py-5">
      <h4 className="text-center font-bold underline">Customer Review</h4>
      <Row>
        <Col sm={12} xl={12}>
          <Swiper
            spaceBetween={15}
            slidesPerView={3}
            navigation
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{ clickable: true }}
            scrollbar={true}
          >
            {userReview.map((review) => {
              return (
                <SwiperSlide key={review._id}>
                  {({ isActive }) => (
                    <ReviewByCustomer isActive={isActive} review={review} />
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Col>
      </Row>
    </Container>
  );
};

export default ShowReview;
