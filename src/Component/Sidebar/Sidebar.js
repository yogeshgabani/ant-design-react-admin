import React from "react";
import "../Sidebar/Sidebar.css"
import { useState } from "react";
import logo_main from "../../Assets/icon/logo.png";
import logo_main2 from "../../Assets/icon/logosmall.png";
import { MenuOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { CiCalendar, CiChat1, CiFileOn, CiMonitor, CiViewTable } from "react-icons/ci";
import { LuBarChart2, LuPieChart } from "react-icons/lu";
import { CgExtensionAdd } from "react-icons/cg";
import { MdErrorOutline, MdKeyboardArrowDown, MdOutlineEmail, MdOutlineViewKanban, MdOutlineWidgets } from "react-icons/md";
import { RiContactsBook2Line } from "react-icons/ri";
import { HiMiniDocumentText, HiOutlinePhoto } from "react-icons/hi2";
import { TbDeviceProjector, TbInvoice } from "react-icons/tb";
import { FaRegUser, FaWpforms } from "react-icons/fa";
import { GoTag } from "react-icons/go";
import { FiAward, FiShare2 } from "react-icons/fi";
import { BiCube, BiMap } from "react-icons/bi";
import { SiMaterialdesignicons } from "react-icons/si";
import { Link } from "react-router-dom";

const { Text } = Typography;

function Sidebar() {

  // menu active index
  const [activeIndex, setActiveIndex] = useState(null);
  const hidemenu = () => {
    setActiveIndex(!activeIndex);
  }
  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const [active, setactive] = useState(0);
  const activelink = (index) => {
    setactive(!active)
    if (active === index) {
      setactive(null);
    } else {
      setactive(index);
    }

  }

  // showmore-less button
  const [showmore, setshowmore] = useState("false");
  const showclick = () => {
    setshowmore(!showmore);
  };

  // sidemenu open-close button
  ;

  const [close, setclose] = useState(false)
  function openmenu() {
    setclose(!close)
  }
  return (
    <div className={close ? "hidesmall sidebar-main bg-white" : "sidebar-main bg-white "}>
      <div className="logo-main position-fixed d-flex align-items-center">
        <img className="d-lg-block logo-img1 d-none" src={logo_main} alt="" />
        <img className="d-lg-none logo-img2 d-block me-4" height={22} src={logo_main2} alt="" />
        <MenuOutlined className="menu-icon position-absolute d-lg-none d-block" onClick={openmenu} />
      </div>
      <div className={close ? "hidesmall sidebar-menu overflow-y-auto" : " sidebar-menu overflow-y-auto"} >
        <ul className="m-0 list-unstyled">
          <Text className="data-name text-uppercase" >dashboard</Text>
          <Link to='/maincontant'>
          <li className={active === 0 ? "mmactive" : ""} onClick={() => activelink(0)}>
            <div className="mx-2 list-data d-flex align-items-center gap-2" onClick={hidemenu}>
              <CiMonitor className="icon-sidebar" />
              <span className="text-capitalize">Sales</span>
              <Text className="badge-icon fw-medium">5+</Text>
            </div>
          </li></Link>
          <Link to='/analytics'>
          <li className={active === 1 ? "mmactive" : ""} onClick={() => activelink(1)}>
            <div className="mx-2 list-data d-flex align-items-center gap-2" onClick={hidemenu}>
              <LuPieChart className="icon-sidebar" />
              <span className="text-capitalize">analytics</span>
            </div>
          </li></Link>
          <Text className="data-name text-uppercase">applications</Text>
          <li className={active === 2 ? "mmactive" : ""} onClick={() => activelink(2)}>
            <div className="mx-2 list-data d-flex align-items-center gap-2" onClick={hidemenu}>
              <CiCalendar className="icon-sidebar" />
              <span className="text-capitalize">calendar</span>
            </div>
          </li>
          <Link to='/message'>
          <li className={active === 3 ? "mmactive" : ""} onClick={() => activelink(3)}>
            <div className="mx-2 list-data d-flex align-items-center gap-2" onClick={hidemenu}>
              <CiChat1 className="icon-sidebar" />
              <span className="text-capitalize">chat</span>
              <Text className="badge-icon-chat fw-medium">Hot</Text>
            </div>
          </li></Link>
          <Link to='/taskboard'>
          <li className={active === 4 ? "mmactive" : ""} onClick={() => activelink(4)}>
            <div className="mx-2 list-data d-flex align-items-center gap-2" onClick={hidemenu}>
              <MdOutlineViewKanban className="icon-sidebar" />
              <span className="text-capitalize">kanban board</span>
            </div>
          </li></Link>
          <li className={active === 5 ? "mmactive" : ""} onClick={() => activelink(5)}>
            <div className="mx-2 list-data d-flex align-items-center gap-2" onClick={hidemenu}>
              <CiFileOn ieChart className="icon-sidebar" />
              <span className="text-capitalize">file manager</span>
            </div>
          </li>
          <li className={active === 6 ? "mmactive" : ""} onClick={() => activelink(6)}>
            <div className="mx-2 list-data d-flex align-items-center gap-2" onClick={() => handleClick(0)}>
              <MdOutlineEmail className="icon-sidebar" />
              <span className="text-capitalize">email</span>
              <MdKeyboardArrowDown className={activeIndex === 0 ? "arrow-icon arrow-down" : "arrow-icon"} />
            </div>
            <ul className={activeIndex === 0 ? "p-0 list-sub-menu active" : "list-sub-menu unactive p-0"}>
              <li className="position-relative sub-list text-capitalize">Inbox</li>
              <li className="position-relative sub-list text-capitalize">read email</li>
            </ul>
          </li>
          <li className={active === 7 ? "mmactive" : ""} onClick={() => activelink(7)}>
            <div className="mx-2 list-data d-flex align-items-center gap-2" onClick={() => handleClick(1)}>
              <RiContactsBook2Line className="icon-sidebar" />
              <span className="text-capitalize">contact</span>
              <MdKeyboardArrowDown className={activeIndex === 1 ? "arrow-icon arrow-down" : "arrow-icon"} />
            </div>
            <ul className={activeIndex === 1 ? "p-0 list-sub-menu active" : "list-sub-menu unactive p-0"}>
              <li className="position-relative sub-list text-capitalize">user grid</li>
              <li className="position-relative sub-list text-capitalize">user list</li>
              <li className="position-relative sub-list text-capitalize">user settings</li>
            </ul>
          </li>
          <li className={active === 8 ? "mmactive" : ""} onClick={() => activelink(8)}>
            <div className="mx-2 list-data d-flex align-items-center gap-2" onClick={hidemenu}>
              <HiOutlinePhoto className="icon-sidebar" />
              <span className="text-capitalize">gallery</span>
            </div>
          </li>
          <li className={active === 9 ? "mmactive" : ""} onClick={() => activelink(9)}>
            <div className="mx-2 list-data d-flex align-items-center gap-2" onClick={() => handleClick(2)}>
              <TbDeviceProjector className="icon-sidebar" />
              <span className="text-capitalize">projects</span>
              <MdKeyboardArrowDown className={activeIndex === 2 ? "arrow-icon arrow-down" : "arrow-icon"} />
            </div>
            <ul className={activeIndex === 2 ? "p-0 list-sub-menu active" : "list-sub-menu unactive p-0"}>
              <li className="position-relative sub-list text-capitalize">projects grid</li>
              <li className="position-relative sub-list text-capitalize">projects list</li>
              <li className="position-relative sub-list text-capitalize">projects overview</li>
              <li className="position-relative sub-list text-capitalize">projects new</li>
            </ul>
          </li>
          <Text className="data-name text-uppercase">pages</Text>
          <li className={active === 10 ? "mmactive" : ""} onClick={() => activelink(10)}>
            <div className="mx-2 list-data d-flex align-items-center gap-2" onClick={() => handleClick(3)}>
              <FaRegUser className="icon-sidebar" />
              <span className="text-capitalize">authentication</span>
              <span className="auth-msg">9</span>
              <MdKeyboardArrowDown className={activeIndex === 3 ? "arrow-icon arrow-down" : "arrow-icon"} />
            </div>
            <ul className={activeIndex === 3 ? "p-0 list-sub-menu active" : "list-sub-menu unactive p-0"}>
              <li className="position-relative sub-list text-capitalize">sign in</li>
              <li className="position-relative sub-list text-capitalize">sign up</li>
              <li className="position-relative sub-list text-capitalize">sign out</li>
              <li className="position-relative sub-list text-capitalize">lock screen</li>
              <li className="position-relative sub-list text-capitalize">forgot password</li>
              <li className="position-relative sub-list text-capitalize">reset password</li>
              <li className="position-relative sub-list text-capitalize">email vefication</li>
              <li className="position-relative sub-list text-capitalize">2-step verification</li>
              <li className="position-relative sub-list text-capitalize">thank you</li>
            </ul>
          </li>
          <li className={active === 11 ? "mmactive" : ""} onClick={() => activelink(11)}>
            <div className="mx-2 list-data d-flex align-items-center gap-2" onClick={() => handleClick(4)}>
              <MdErrorOutline className="icon-sidebar" />
              <span className="text-capitalize">error pages</span>
              <MdKeyboardArrowDown className={activeIndex === 4 ? "arrow-icon arrow-down" : "arrow-icon"} />
            </div>
            <ul className={activeIndex === 4 ? "p-0 list-sub-menu active" : "list-sub-menu unactive p-0"}>
              <li className="position-relative sub-list text-capitalize">404 Basic</li>
              <li className="position-relative sub-list text-capitalize">404 cover</li>
              <li className="position-relative sub-list text-capitalize">projects overview</li>
              <li className="position-relative sub-list text-capitalize">projects new</li>
            </ul>
          </li>
          <li className={active === 12 ? "mmactive" : ""} onClick={() => activelink(12)}>
            <div className="mx-2 list-data d-flex align-items-center gap-2" onClick={() => handleClick(5)}>
              <HiMiniDocumentText className="icon-sidebar" />
              <span className="text-capitalize">utility</span>
              <MdKeyboardArrowDown className={activeIndex === 5 ? "arrow-icon arrow-down" : "arrow-icon"} />
            </div>
            <ul className={activeIndex === 5 ? "p-0 list-sub-menu active" : "list-sub-menu unactive p-0"}>
              <li className="position-relative sub-list text-capitalize">starter page</li>
              <li className="position-relative sub-list text-capitalize">profile</li>
              <li className="position-relative sub-list text-capitalize">maintenance</li>
              <li className="position-relative sub-list text-capitalize">coming soon</li>
              <li className="position-relative sub-list text-capitalize">FAQ</li>
            </ul>
          </li>
          <li className={active === 13 ? "mmactive" : ""} onClick={() => activelink(13)}>
            <div className="mx-2 list-data d-flex align-items-center gap-2" onClick={() => handleClick(6)}>
              <GoTag className="icon-sidebar" />
              <span className="text-capitalize">pricing</span>
              <MdKeyboardArrowDown className={activeIndex === 6 ? "arrow-icon arrow-down" : "arrow-icon"} />
            </div>
            <ul className={activeIndex === 6 ? "p-0 list-sub-menu active" : "list-sub-menu unactive p-0"}>
              <li className="position-relative sub-list text-capitalize">basic</li>
              <li className="position-relative sub-list text-capitalize">table</li>
            </ul>
          </li>
          <li className={active === 14 ? "mmactive" : ""} onClick={() => activelink(14)}>
            <div className="mx-2 list-data d-flex align-items-center gap-2" onClick={() => handleClick(7)}>
              <TbInvoice className="icon-sidebar" />
              <span className="text-capitalize">invoices</span>
              <MdKeyboardArrowDown className={activeIndex === 7 ? "arrow-icon arrow-down" : "arrow-icon"} />
            </div>
            <ul className={activeIndex === 7 ? "p-0 list-sub-menu active" : "list-sub-menu unactive p-0"}>
              <li className="position-relative sub-list text-capitalize">invoice list</li>
              <li className="position-relative sub-list text-capitalize">invoice detail</li>
            </ul>
          </li>
          <li className={active === 15 ? "mmactive" : ""} onClick={() => activelink(15)}>
            <div className="mx-2 list-data d-flex align-items-center gap-2" onClick={() => handleClick(8)}>
              <FiAward className="icon-sidebar" />
              <span className="text-capitalize">timeline</span>
              <MdKeyboardArrowDown className={activeIndex === 8 ? "arrow-icon arrow-down" : "arrow-icon"} />
            </div>
            <ul className={activeIndex === 8 ? "p-0 list-sub-menu active" : "list-sub-menu unactive p-0"}>
              <li className="position-relative sub-list text-capitalize">cnter view</li>
              <li className="position-relative sub-list text-capitalize">horizontal view</li>
              <li className="position-relative sub-list text-capitalize">vertical view</li>
            </ul>
          </li>
          <Text className="data-name text-uppercase">components</Text>
          <li className={active === 16 ? "mmactive" : ""} onClick={() => activelink(16)}>
            <div className="mx-2 list-data d-flex align-items-center gap-2" onClick={() => handleClick(9)}>
              <BiCube className="icon-sidebar" />
              <span className="text-capitalize">UI elements</span>
              <MdKeyboardArrowDown className={activeIndex === 9 ? "arrow-icon arrow-down" : "arrow-icon"} />
            </div>
            <ul className={activeIndex === 9 ? "p-0 list-sub-menu active" : "list-sub-menu unactive p-0"}>
              <li className="position-relative sub-list text-capitalize">button</li>
              <li className="position-relative sub-list text-capitalize">card</li>
              <li className="position-relative sub-list text-capitalize">alerts</li>
              <li className="position-relative sub-list text-capitalize">images</li>
            </ul>
          </li>
          <li className={active === 17 ? "mmactive" : ""} onClick={() => activelink(17)}>
            <div className="mx-2 list-data d-flex align-items-center gap-2" onClick={hidemenu}>
              <CgExtensionAdd className="icon-sidebar" />
              <span className="text-capitalize">extended UI</span>
            </div>
          </li>
          <li className={active === 18 ? "mmactive" : ""} onClick={() => activelink(18)}>
            <div className="mx-2 list-data d-flex align-items-center gap-2" onClick={hidemenu}>
              <MdOutlineWidgets className="icon-sidebar" />
              <span className="text-capitalize">widgets</span>
            </div>
          </li>
          <li className={active === 19 ? "mmactive" : ""} onClick={() => activelink(19)}>
            <div className="mx-2 list-data d-flex align-items-center gap-2" onClick={() => handleClick(10)}>
              <FaWpforms className="icon-sidebar" />
              <span className="text-capitalize">forms</span>
              <MdKeyboardArrowDown className={activeIndex === 10 ? "arrow-icon arrow-down" : "arrow-icon"} />
            </div>
            <ul className={activeIndex === 10 ? "p-0 list-sub-menu active" : "list-sub-menu unactive p-0"}>
              <li className="position-relative sub-list text-capitalize">basic elements</li>
              <li className="position-relative sub-list text-capitalize">validation</li>
              <li className="position-relative sub-list text-capitalize">editors</li>
              <li className="position-relative sub-list text-capitalize">upload</li>
            </ul>
          </li>
          <li className={active === 20 ? "mmactive" : ""} onClick={() => activelink(20)}>
            <div className="mx-2 list-data d-flex align-items-center gap-2" onClick={() => handleClick(11)}>
              <CiViewTable className="icon-sidebar" />
              <span className="text-capitalize">tables</span>
              <MdKeyboardArrowDown className={activeIndex === 11 ? "arrow-icon arrow-down" : "arrow-icon"} />
            </div>
            <ul className={activeIndex === 11 ? "p-0 list-sub-menu active" : "list-sub-menu unactive p-0"}>
              <li className="position-relative sub-list text-capitalize">bootstrap table</li>
              <li className="position-relative sub-list text-capitalize">advance table</li>
            </ul>
          </li>
          <li className={active === 21 ? "mmactive" : ""} onClick={() => activelink(21)}>
            <div className="mx-2 list-data d-flex align-items-center gap-2" onClick={() => handleClick(12)}>
              <LuBarChart2 className="icon-sidebar" />
              <span className="text-capitalize">apex charts</span>
              <MdKeyboardArrowDown className={activeIndex === 12 ? "arrow-icon arrow-down" : "arrow-icon"} />
            </div>
            <ul className={activeIndex === 12 ? "p-0 list-sub-menu active" : "list-sub-menu unactive p-0"}>
              <li className="position-relative sub-list text-capitalize">bar</li>
              <li className="position-relative sub-list text-capitalize">pie</li>
              <li className="position-relative sub-list text-capitalize">line</li>
              <li className="position-relative sub-list text-capitalize">column</li>
            </ul>
          </li>
          <li className={active === 22 ? "mmactive" : ""} onClick={() => activelink(22)}>
            <div className="mx-2 list-data d-flex align-items-center gap-2" onClick={() => handleClick(15)}>
              <SiMaterialdesignicons className="icon-sidebar" />
              <span className="text-capitalize">icons</span>
              <MdKeyboardArrowDown className={activeIndex === 15 ? "arrow-icon arrow-down" : "arrow-icon"} />
            </div>
            <ul className={activeIndex === 15 ? "p-0 list-sub-menu active" : "list-sub-menu unactive p-0"}>
              <li className="position-relative sub-list text-capitalize">font awesome</li>
              <li className="position-relative sub-list text-capitalize">material design</li>
              <li className="position-relative sub-list text-capitalize">feather icon</li>
              <li className="position-relative sub-list text-capitalize">unicons</li>
            </ul>
          </li>
          <li className={active === 23 ? "mmactive" : ""} onClick={() => activelink(23)}>
            <div className="mx-2 list-data d-flex align-items-center gap-2" onClick={() => handleClick(13)}>
              <BiMap className="icon-sidebar" />
              <span className="text-capitalize">maps</span>
              <MdKeyboardArrowDown className={activeIndex === 13 ? "arrow-icon arrow-down" : "arrow-icon"} />
            </div>
            <ul className={activeIndex === 13 ? "p-0 list-sub-menu active" : "list-sub-menu unactive p-0"}>
              <li className="position-relative sub-list text-capitalize">google</li>
              <li className="position-relative sub-list text-capitalize">apple</li>
              <li className="position-relative sub-list text-capitalize">vector</li>
              <li className="position-relative sub-list text-capitalize">leaflet</li>
            </ul>
          </li>
          <li className={active === 24 ? "mmactive" : ""} onClick={() => activelink(24)}>
            <div className="mx-2 list-data d-flex align-items-center gap-2" onClick={() => handleClick(14)}>
              <FiShare2 className="icon-sidebar" />
              <span className="text-capitalize">multi level</span>
              <MdKeyboardArrowDown className={activeIndex === 14 ? "arrow-icon arrow-down" : "arrow-icon"} />
            </div>
            <ul className={activeIndex === 14 ? "p-0 list-sub-menu active" : "list-sub-menu unactive p-0"}>
              <li className="position-relative sub-list text-capitalize">level 1.1</li>
              <li className="position-relative sub-list text-capitalize">level 1.2</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
