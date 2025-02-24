import Link from "next/link";
import { Container, Logo, MyLink } from "../ui";
import Image from "next/image";

const navLinks = [
  {
    href: "/#about",
    text: "О компании",
  },
  {
    href: "/#services",
    text: "Услуги",
  },
  {
    href: "/#works",
    text: "Примеры работ",
  },
  {
    href: "/#contacts",
    text: "Контакты",
  },
];

export const Footer = () => {
  return (
    <header className="absolute w-full pb-[46px] text-nowrap">
      <Container className="flex items-center justify-between gap-[60px]">
        <div className="w-full flex items-center gap-[50px]">
          <Logo />
          <ul className="flex items-center gap-[30px]">
            {navLinks.map((link, i) => (
              <li key={i}>
                <MyLink variant="text-blue" href={link.href}>{link.text}</MyLink>
              </li>
            ))}
          </ul>
          <div className="ml-auto">
            Пн-Пт 09:00–18:00&nbsp;&nbsp;&nbsp;
            <span className="text-[#ffffff90]">Сб 10:00–15:00</span>
          </div>
        </div>

        <div className="flex items-center gap-[30px]">
          <MyLink variant="text-blue" href={"tel:+77017067666"}>+7 701 706 76 66</MyLink>
          <ul className="flex items-center gap-[6px]">
            <li>
              <Link className="flex w-[24px]" href="/" target="_blank">
                <Image
                  width={24}
                  height={24}
                  src={"/assets/img/ig.svg"}
                  alt="instagram"
                />
              </Link>
            </li>
            <li>
              <Link className="flex w-[24px]" href="/" target="_blank">
                <Image
                  width={24}
                  height={24}
                  src={"/assets/img/wh.svg"}
                  alt="whatsapp"
                />
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};
