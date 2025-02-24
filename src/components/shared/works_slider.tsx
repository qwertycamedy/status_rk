"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const works = [
  {
    title: "Полиграфические услуги",
    imgs: ["/assets/img/works_1.jpg", "/assets/img/works_2.jpg"],
  },
  {
    title: "Наружное рекламное оформление",
    imgs: ["/assets/img/works_3.jpg", "/assets/img/works_4.jpg"],
  },
  {
    title: "Сувенирная продукция",
    imgs: ["/assets/img/works_5.jpg", "/assets/img/works_6.jpg"],
  },
];

export const WorksSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: "auto", spaceBetween: 11 },
        1300: { slidesPerView: 3, spaceBetween: 15 },
      }}
    >
      {works?.map((work) => (
        <SwiperSlide key={work.title}>
          <div className="flex flex-col items-center text-center gap-[14px] font-semibold">
            <p>{work.title}</p>
            <div className="flex gap-[15px] pt-[38px] relative before:absolute before:top-0 before:border before:border-[#ccc] before:border-b-transparent before:rounded-t-[21px] before:w-full before:h-[28px]">
              <Image
                className="rounded-[29px]"
                src={work.imgs[0]}
                alt="work"
                width={212}
                height={336}
              />
              <Image
                className="rounded-[29px]"
                src={work.imgs[1]}
                alt="works"
                width={212}
                height={336}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
