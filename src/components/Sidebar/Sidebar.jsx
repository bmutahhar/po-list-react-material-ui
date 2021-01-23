import React from "react";

import MiniDrawer from "./Drawer";

const Sidebar = ({ open, handleDrawerOpen, handleDrawerClose }) => {
  return (
    <>
      <MiniDrawer
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
    </>
  );
};

export default Sidebar;
