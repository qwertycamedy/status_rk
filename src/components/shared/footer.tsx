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
    <header className="absolute w-full pb-[22px] lg:pb-[46px] text-nowrap">
      <Container className="flex flex-wrap xl:flex-nowrap justify-center gap-[22px] items-center xl:justify-between lg:gap-[60px]">
        <div className="w-full flex flex-wrap lg:flex-nowrap items-center gap-[35px] lg:gap-[50px]">
          <Logo className="-order-3" />
          <ul className="w-full flex items-center justify-between gap-0 lg:gap-[30px] xl:-order-2">
            {navLinks.map((link, i) => (
              <li key={i}>
                <MyLink className="!p-0 lg:!py-[8px] lg:!px-[14px]" variant="text-blue" href={link.href}>{link.text}</MyLink>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-end lg:block ml-auto -order-1">
            Пн-Пт 09:00–18:00{' '}
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
