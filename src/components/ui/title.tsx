import { clsx } from "clsx";
import { ElementType, FC, ReactNode } from "react";

interface IProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

export const Title: FC<IProps> = ({ as: Tag = "h1", className, children }) => {
  return (
    <Tag
      className={clsx(`tracking-tighter ${className}`, {
        "text-[48px] xl:text-[101px]": Tag === "h1",
        "text-[40px] xl:text-[95px] font-medium": Tag === "h2",
        "text-[30px] xl:text-[37px]": Tag === "h3",
        "text-[20px] xl:text-[28px]": Tag === "h4",
      })}
    >
      {children}
    </Tag>
  );
};
