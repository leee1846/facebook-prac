import React from "react";
import "./Sidebar.css";
import SidebarRow from "../sidebarRow/SidebarRow";
//icons
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const SideBar = () => {
  return (
    <div className='sidebar'>
      <SidebarRow
        src='https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19754.png'
        title='jake lee'
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title={"COVID-19 Information Center"}
      />
      <SidebarRow Icon={EmojiFlagsIcon} title={"Pages"} />
      <SidebarRow Icon={PeopleIcon} title={"Friends"} />
      <SidebarRow Icon={ChatIcon} title={"Messenger"} />
      <SidebarRow Icon={StorefrontIcon} title={"Marketplace"} />
      <SidebarRow Icon={VideoLibraryIcon} title={"Video"} />
      <SidebarRow Icon={ExpandMoreIcon} title={"Marketplace"} />
    </div>
  );
};

export default SideBar;