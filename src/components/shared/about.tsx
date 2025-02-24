import Image from "next/image";
import { Container, Title } from "../ui";

export const About = () => {
  return (
    <section id={'about'}>
      <Container>
        <div className="flex flex-col lg:flex-row items-start justify-between mb-[40px] lg:mb-[82px]">
          <Title as={"h2"}>О компании</Title>
          <div className="max-w-[768px] w-full mt-[20px] lg:mt-[45px] font-semibold">
            <p className={"text-[16px] lg:text-[28px] mb-[22px] lg:mb-[68px]"}>
              Компания &quot;Status RK&quot; представляет собой одну из ведущих
              компаний на рынке рекламных услуг, объединяющего креативность и
              высококачественное производство.
            </p>
            <p className="text-[14px] lg:text-[20px]">
              Мы предлагаем полный спектр услуг — от разработки концепции
              рекламной кампании до её реализации с использованием самых
              современных технологий.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-4 font-semibold">
          <div className="flex flex-col items-center justify-center px-[32px] py-[22px] lg:px-[38px] lg:py-[28px] w-full border border-[#ccc] rounded-[28px]">
            <Image
              className="h-[165px] w-[310px] mb-[30px] object-contain"
              width={310}
              height={165}
              src={"/assets/img/about_1.svg"}
              alt="about img"
            />
            <Title className="w-full max-w-full" as={"h3"}>
              7 лет
            </Title>
            <p className="w-full max-w-full">на рынке рекламы</p>
          </div>
          <div className="flex flex-col items-center justify-center px-[38px] py-[28px] w-full border border-[#ccc] rounded-[28px]">
            <Image
              className="h-[165px] w-[310px] mb-[30px] object-contain"
              width={310}
              height={165}
              src={"/assets/img/about_2.svg"}
              alt="about img"
            />
            <Title className="w-full max-w-full" as={"h3"}>
              10 000+
            </Title>
            <p className="w-full max-w-full">выполненных проектов</p>
          </div>
          <div className="flex flex-col items-center justify-center px-[38px] py-[28px] w-full border border-[#ccc] rounded-[28px]">
            <Image
              className="h-[165px] w-[310px] mb-[30px] object-contain"
              width={310}
              height={165}
              src={"/assets/img/about_3.svg"}
              alt="about img"
            />
            <Title className="w-full max-w-full" as={"h3"}>
              3 дня
            </Title>
            <p className="w-full max-w-full">на изготовление заказа</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
