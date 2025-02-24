import { Container, Title } from "../ui";
import { WorksSlider } from "./works_slider";

export const Works = () => {
  return (
    <section id="works">
      <Container>
        <div className="flex items-start justify-between mb-[40px]">
          <Title as={"h2"}>Примеры работ</Title>
        </div>
        <WorksSlider />
      </Container>
    </section>
  );
};
