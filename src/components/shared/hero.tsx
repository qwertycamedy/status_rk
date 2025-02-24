import { Container, MyLink, Title } from "../ui";

export const Hero = () => {
  return (
    <section className="pb-[72px]">
      <div className="mb-5 pt-[218px] rounded-b-[58px] bg-gradient-to-t from-[rgba(255,255,255,0.08)] to-transparent overflow-hidden">
        <Container>
          <Title className="text-nowrap text-center animate-show_main_title" as={"h1"}>
            Делаем ваш бренд заметным
          </Title>
        </Container>
      </div>
      <Container className="flex items-center justify-center flex-col animate-show">
        <ul className="w-full mb-[38px] flex items-center justify-between gap-4 ">
          <li className="flex items-center gap-2">
            <span className="bg-[#1880fa] rounded-full w-[13px] h-[12px]" />
            <span>Кокшетау, ул. Александра Пушкина, 46</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="bg-[#1880fa] rounded-full w-[13px] h-[12px]" />
            <span>Рекламное агентство полного цикла</span>
          </li>
        </ul>
        <div className="max-w-[350px] flex flex-col items-center justify-center gap-[26px]">
          <Title className="text-center font-semibold" as={"h4"}>
            Профессиональный подход к вашему проекту
          </Title>
          <MyLink className="text-[16px] !py-[15px] !px-[25px]" variant="bg-light" href='/#contacts'>Связаться с нами</MyLink>
        </div>
      </Container>
    </section>
  );
};
