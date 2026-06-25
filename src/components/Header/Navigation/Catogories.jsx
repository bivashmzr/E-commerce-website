import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoMdClose } from "react-icons/io";

import "./navigation.css";
import CategoryCollapse from "../../CategoryCollapse/CategoryCollapse";

const Catogories = (props) => {
    const toggleDrawer = (newOpen) => () => {
    props.setCategories(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <h3 className="!p-3 text-[16px] font-[500] flex items-center justify-between">
        Shop by Categories
        <IoMdClose onClick={toggleDrawer(false)}/>
      </h3>
      <CategoryCollapse/>
    </Box>
  );

  return (
    <div>
      <Drawer open={props.Categories} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default Catogories;
