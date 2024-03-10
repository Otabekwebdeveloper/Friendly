import { useState, MouseEvent } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

const NavMenu = ({ scrolled }: { scrolled: boolean }): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (evt: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(evt.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="md:!hidden flex items-center text-base">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={`!capitalize rounded-full ${
          scrolled ? "!text-black" : "!text-white"
        }`}
      >
        Browse
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        className="menu"
      >
        <MenuItem>Home</MenuItem>
        <MenuItem>Servise</MenuItem>
        <MenuItem>Servise</MenuItem>
        <MenuItem>About</MenuItem>
      </Menu>
    </div>
  );
};

export default NavMenu;
