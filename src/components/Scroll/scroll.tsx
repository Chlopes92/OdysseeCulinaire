import React, { ReactNode } from 'react';
import style from "./scroll.module.css";

interface CustomScrollbarProps {
  children: ReactNode;
}

const CustomScrollbar = ({ children }: CustomScrollbarProps) => {
  return (
    <div className={style["custom-scrollbar"]}>
      {children}
    </div>
  );
};

export default CustomScrollbar;