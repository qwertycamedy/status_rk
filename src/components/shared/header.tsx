"use client";

import Link from "next/link";
import { Button, Container, Logo, MyLink } from "../ui";
import Image from "next/image";
import { useState } from "react";
import { clsx } from "clsx";

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

export const Header = () => {
  const [burger, setBurger] = useState<boolean>(false);

  const onBurger = () => {
    setBurger(!burger);
  };

  return (
    <header
      className={clsx("absolute z-10 w-full pt-[35px] animate-show", {
        "before:fixed before:left:0 before:top:0 before:w-svw before:h-svh before:-z-10":
          burger,
      })}
      onClick={() => burger && setBurger(false)}
    >
      <Container className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-[35px]">
          <Logo />
          <ul
            onClick={(e) => e.stopPropagation()}
            className={clsx(
              "flex transition-opacity duration-200 ease-linear max-w-lg w-[93%] z-10 py-[22px] px-[16.5px] bg-[#181818] absolute flex-col gap-[14px] left-1/2 top-[60px] -translate-x-1/2 rounded-[29px] lg:py-0 lg:px-0 lg:w-auto lg:bg-transparent lg:left-0 lg:top-0 lg:translate-x-0 lg:rounded-none lg:relative lg:!opacity-100 lg:flex-row items-center lg:gap-[10px]",
              {
                "opacity-0 pointer-events-none lg:pointer-events-auto": !burger,
              }
            )}
          >
            {navLinks.map((link, i) => (
              <li className="w-full lg:w-auto" key={i}>
                <MyLink
                  className="w-full lg:w-auto border-[#fff1] lg:border-[#fff]"
                  variant="border"
                  href={link.href}
                  onClick={onBurger}
                >
                  {link.text}
                </MyLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-[14px]">
          <MyLink variant="border" href={"tel:+77017067666"}>
            +7 701 706 76 66
          </MyLink>
          <ul className="hidden lg:flex items-center gap-[6px] py-[6px] px-[7px] border border-white rounded-full">
            <li>
              <Link href="/" target="_blank">
                <Image
                  width={24}
                  height={24}
                  src={"/assets/img/ig.svg"}
                  alt="instagram"
                />
              </Link>
            </li>
            <li>
              <Link href="/" target="_blank">
                <Image
                  width={24}
                  height={24}
                  src={"/assets/img/wh.svg"}
                  alt="whatsapp"
                />
              </Link>
            </li>
          </ul>
          <Button
            onClick={onBurger}
            className="flex lg:hidden !text-[14px] !py-[8px] !px-[14px]"
            variant={burger ? "active" : "light"}
          >
            Меню
          </Button>
        </div>
      </Container>
    </header>
  );
};
