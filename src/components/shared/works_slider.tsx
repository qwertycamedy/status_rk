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
      className="w-[calc(100%+40px)] xl:w-full -left-[20px] xl:left-0 !px-[20px] xl:!px-0"
      grabCursor={true}
      breakpoints={{
        320: { slidesPerView: "auto", spaceBetween: 11 },
        1280: { slidesPerView: 3, spaceBetween: 15 },
      }}
    >
      {works?.map((work) => (
        <SwiperSlide className="max-w-[302px] xl:max-w-[100%]" key={work.title}>
          <div className="flex flex-col items-center text-center gap-[10px] xl:gap-[14px] font-semibold">
            <p className="text-[10px] xl:text-[14px]">{work.title}</p>
            <div className="w-full flex gap-[10px] xl:gap-[15px] pt-[30px] xl:pt-[38px] relative before:absolute before:top-0 before:border before:border-[#ccc] before:border-b-transparent before:rounded-t-[14px] xl:before:rounded-t-[21px] before:w-full before:h-[20px] xl:before:h-[28px]">
              <Image
                className="rounded-[20px] xl:rounded-[29px] w-[146px] xl:w-full"
                src={work.imgs[0]}
                alt="work"
                width={212}
                height={336}
              />
              <Image
                className="rounded-[20px] xl:rounded-[29px] w-[146px] xl:w-full"
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
