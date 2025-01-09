import React from "react";
import { MobileMenuContainer, MobileMenuItem } from "./style";

interface MobileMenuProps {
  items: { label: string; value: string }[];
  handleClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ items, handleClose }) => {
  return (
    <MobileMenuContainer>
      {items.map((item) => (
        <MobileMenuItem key={item.value} onClick={handleClose}>
          {item.label}
        </MobileMenuItem>
      ))}
    </MobileMenuContainer>
  );
};

export default MobileMenu;
