import { Container, Title } from "../ui";

export const Services = () => {
  return (
    <section id="services">
      <Container>
        <div className="flex flex-col lg:flex-row items-start justify-between mb-[20px] lg:mb-[40px]">
          <Title as={"h2"}>Наши услуги</Title>
          <div className="max-w-[768px] w-full mt-0 lg:mt-[45px] font-semibold text-[rgba(12, 12, 11, 0.8)]">
            <p className="text-[14px] lg:text-[20px] mt-[6px] lg:mt-[40px]">
              Полный цикл услуг от концепции до реализации с передовыми
              технологиями
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="flex flex-col items-center justify-center p-[28px] lg:px-[38px] lg:py-[28px] w-full border border-[#ccc] rounded-[28px]">
            <Title className="w-full max-w-full mb-[22px] lg:mb-[28px] font-semibold" as={"h4"}>
              Полиграфические услуги
            </Title>
            <p className="w-full max-w-full leading-[177%] font-semibold">
              Печать визиток, листовок, буклетов 
              <br />
              Печать журналов и каталогов
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-[28px] lg:px-[38px] lg:py-[28px] w-full border border-[#ccc] rounded-[28px]">
            <Title className="w-full max-w-full mb-[22px] lg:mb-[28px] font-semibold" as={"h4"}>
              Услуги дизайнера
            </Title>
            <p className="w-full max-w-full leading-[177%] font-semibold">
              Печать визиток, листовок, буклетов 
              <br />
              Печать журналов и каталогов
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-[28px] lg:px-[38px] lg:py-[28px] w-full border border-[#ccc] rounded-[28px]">
            <Title className="w-full max-w-full mb-[22px] lg:mb-[28px] font-semibold" as={"h4"}>
              Сувенирная продукция
            </Title>
            <p className="w-full max-w-full leading-[177%] font-semibold">
              Брендирование кружек, ручек
              <br />
              Нанесение принтов на одежду
              <br />
              Изготовление значков, магнитиков и брелков
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
