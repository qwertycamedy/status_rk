import { FC, ReactNode } from "react";

interface IProps {
  className?: string;
  children: ReactNode;
}

export const Page: FC<IProps> = ({ className, children }) => {
  return (
    <div
      className={`overflow-x-hidden ${className}`}
    >
      {children}
    </div>
  );
};
