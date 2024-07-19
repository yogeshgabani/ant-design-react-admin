import React, { useState } from "react";
import "../Header/Header.css";
import {  IoMdLock } from "react-icons/io";
import { DownOutlined } from '@ant-design/icons';
import { Input, Radio, Tag, Typography } from 'antd';
import menuimg from "../../Assets/Images/img1.png";
import flageimg from "../../Assets/icon/f1.jpg";
import f1img from "../../Assets/icon/f6.jpg";
import f2img from "../../Assets/icon/f2.jpg";
import f3img from "../../Assets/icon/f3.jpg";
import f4img from "../../Assets/icon/f4.jpg";
import f5img from "../../Assets/icon/f5.jpg";
import accimg from "../../Assets/icon/acc.jpg";
import w1img from "../../Assets/icon/w1.png";
import w2img from "../../Assets/icon/w2.png";
import w3img from "../../Assets/icon/w3.png";
import w4img from "../../Assets/icon/w4.png";
import w5img from "../../Assets/icon/w5.png";
import w6img from "../../Assets/icon/w6.png";
import n1img from "../../Assets/icon/n1.jpg";
import n2img from "../../Assets/icon/n2.jpg";
import { CiSearch, CiSettings, CiWallet } from "react-icons/ci";
import { Drawer } from 'antd';
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { Avatar, Badge } from 'antd';
import { FaArrowAltCircleRight, FaRegBell, FaRegCalendarCheck, FaShoppingBasket, FaUserCircle } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import { IoHelpBuoySharp, IoLogOutOutline, IoTimeOutline } from "react-icons/io5";
import { TfiTruck } from "react-icons/tfi";
import { MdOutlineMessage } from "react-icons/md";
import { Link } from "react-router-dom";

const { Paragraph } = Typography;

function Header() {

  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const [show, setshow] = useState(false)
  const showmenu = () => {
    setshow(!show)
  }

  const [open, setOpen] = useState(false)

  // full screen
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      // Request full screen
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    } else {
      // Exit full screen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }

    setIsFullScreen(!isFullScreen);
  };

  // drawer
  const [opendrawer, setOpendrawer] = useState(false);
  const showDrawer = () => {
    setOpendrawer(true);
  };
  const onClose = () => {
    setOpendrawer(false);
  };

  // radio button
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const [value1, setValue1] = useState(1);
  const onChange1 = (e) => {
    console.log('radio checked', e.target.value);
    setValue1(e.target.value);
  };
  const [value2, setValue2] = useState(1);
  const onChange2 = (e) => {
    console.log('radio checked', e.target.value);
    setValue2(e.target.value);
  };
  const [value3, setValue3] = useState(1);
  const onChange3 = (e) => {
    console.log('radio checked', e.target.value);
    setValue3(e.target.value);
  };
  const [value4, setValue4] = useState(1);
  const onChange4 = (e) => {
    console.log('radio checked', e.target.value);
    setValue4(e.target.value);
  };
  const [value5, setValue5] = useState(1);
  const onChange5 = (e) => {
    console.log('radio checked', e.target.value);
    setValue5(e.target.value);
  };
  const [value6, setValue6] = useState(1);
  const onChange6 = (e) => {
    console.log('radio checked', e.target.value);
    setValue6(e.target.value);
  };

  return (

    <div className="main-header position-relative bg-white d-flex justify-content-between align-items-center">


      <div className="d-flex align-items-center">

        <div className="d-lg-block d-none">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              Component <DownOutlined style={{ fontSize: "10px" }} />
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropmenu-component position-absolute">
              <div className="component-dropmenu">
                <Dropdown.Item href="#/action-3">alerts</Dropdown.Item>
                <Dropdown.Item href="#/action-1">buttons</Dropdown.Item>
                <Dropdown.Item href="#/action-2">cards</Dropdown.Item>
                <Dropdown.Item href="#/action-3">dropdowns</Dropdown.Item>
                <Dropdown.Item href="#/action-3">lightbox</Dropdown.Item>
                <Dropdown.Item href="#/action-3">modals</Dropdown.Item>
                <Dropdown.Item href="#/action-3">range slider</Dropdown.Item>
                <Dropdown.Item href="#/action-3">progress bar</Dropdown.Item>
                <Dropdown.Item href="#/action-3">sweet alert</Dropdown.Item>
                <Dropdown.Item href="#/action-3">tabs and accordions</Dropdown.Item>
                <Dropdown.Item href="#/action-3">typography</Dropdown.Item>
                <Dropdown.Item href="#/action-3">general</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Rating</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Notifications</Dropdown.Item>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="d-lg-block d-none">
          <Dropdown className="dropdown-megamenu">
            <Dropdown.Toggle id="dropdown-basic">
              Categories <DownOutlined style={{ fontSize: "10px" }} />
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropmenu-component position-absolute w-100">

              <div className="row">
                <div className="col menu-title">
                  <h5 className=" fw-medium mt-2">Computers Accessories</h5>
                  <a href="#">Laptops Tablets</a>
                  <a href="#">Desktop Computers</a>
                  <a href="#">Networking Products</a>
                  <a href="#">Monitors</a>
                  <a href="#">Bags, Cases & Sleeves</a>
                  <a href="#">Batteries</a>
                  <a href="#">Charges Adapters</a>
                </div>
                <div className="col menu-title">
                  <h5 className=" fw-medium mt-2">Smartphones & Tablets</h5>
                  <a href="#">Apple iPhone</a>
                  <a href="#">Android Smartphones</a>
                  <a href="#">Phablets</a>
                  <a href="#">Apple iPad</a>
                  <a href="#">Android Tablets</a>
                  <a href="#">Tablets with Keyboard</a>
                </div>
                <div className="col menu-title">
                  <h5 className=" fw-medium mt-2">Television & Video</h5>
                  <a href="#">TV Sets</a>
                  <a href="#">Home Theater Systems</a>
                  <a href="#">DVD Players & Recorders</a>
                  <a href="#">DVD-VCR Combos</a>
                  <a href="#">Projectors</a>
                  <a href="#">Projection Screens</a>
                  <a href="#">Satelite Television</a>
                </div>
                <div className="col menu-title">
                  <h5 className=" fw-medium mt-2">Cameras, Photo & Video</h5>
                  <a href="#">Point & Shoot Digital Cameras</a>
                  <a href="#">DSLR Cameras</a>
                  <a href="#">Mirrorless Cameras</a>
                  <a href="#">Body Mounted Cameras</a>
                  <a href="#">Camera Lenses</a>
                  <a href="#">Video Studio</a>
                </div>
                <div className="col">
                  <div className="py-2">
                    <img src={menuimg} className="img-fluid mx-auto" alt="" />
                  </div>
                </div>

              </div>


            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="d-flex align-items-center lg-gap-2 gap-0">
        <div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <CiSearch style={{ fontSize: "20px" }} />
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropmenu-component position-absolute">
              <div className="position-relative search-icon bg-white">
                <Input className="search-input" placeholder="Search" />
                <CiSearch className="search-iconmenu position-absolute" />
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="d-sm-block d-none">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <img src={flageimg} style={{ height: "16px" }} alt="" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropmenu-component flag-menu position-absolute">
              <Dropdown.Item className="d-flex align-items-center" href="#/action-1"><img className="me-2 flagimage" src={f1img} style={{ height: "16px" }} alt="" />English</Dropdown.Item>
              <Dropdown.Item className="d-flex align-items-center" href="#/action-2"><img className="me-2 flagimage" src={f2img} style={{ height: "16px" }} alt="" />Spenish</Dropdown.Item>
              <Dropdown.Item className="d-flex align-items-center" href="#/action-3"><img className="me-2 flagimage" src={f3img} style={{ height: "16px" }} alt="" />German</Dropdown.Item>
              <Dropdown.Item className="d-flex align-items-center" href="#/action-3"><img className="me-2 flagimage" src={f4img} style={{ height: "16px" }} alt="" />Italian</Dropdown.Item>
              <Dropdown.Item className="d-flex align-items-center" href="#/action-3"><img className="me-2 flagimage" src={f5img} style={{ height: "16px" }} alt="" />Russian</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="d-sm-block d-none">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <HiOutlineSquares2X2 className="icon-header" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropmenu-component web-app-menu position-absolute">
              <div className="d-flex align-items-center web-title p-3">
                <Typography.Title className="title-acc fs-5 fw-normal" level={5} style={{ margin: 0, }}>
                  Web Apps
                </Typography.Title>
                <a className="text-decoration-underline ms-auto" href="#">View All</a>
              </div>
              <div className="web-app-data overflow-hidden overflow-y-auto">
                <a href="#">
                  <div className="d-flex align-items-center" style={{ borderBottom: "1px solid #eff0f2" }}>
                    <img src={w1img} alt="" />
                    <div className="web-text-one ms-4">
                      <Typography.Title className="" level={5} style={{ margin: 0, }}>
                        Slack
                      </Typography.Title>
                      <Paragraph className="textdata m-0">
                        This is your moment. Let’s reinvent work.
                      </Paragraph>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="d-flex align-items-center" style={{ borderBottom: "1px solid #eff0f2" }}>
                    <img src={w2img} alt="" />
                    <div className="web-text-one ms-4">
                      <Typography.Title className="" level={5} style={{ margin: 0, }}>
                        Behance<Tag className="ms-2" color="#f7cc53">Free</Tag>
                      </Typography.Title>
                      <Paragraph className="textdata m-0">
                        Showcase your work.
                      </Paragraph>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="d-flex align-items-center" style={{ borderBottom: "1px solid #eff0f2" }}>
                    <img src={w3img} alt="" />
                    <div className="web-text-one ms-4">
                      <Typography.Title className="" level={5} style={{ margin: 0, }}>
                        Dribbble
                      </Typography.Title>
                      <Paragraph className="textdata m-0">
                        Dribbble is the world’s leading community for creatives to share, grow, and get hired.
                      </Paragraph>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="d-flex align-items-center" style={{ borderBottom: "1px solid #eff0f2" }}>
                    <img src={w4img} alt="" />
                    <div className="web-text-one ms-4">
                      <Typography.Title className="" level={5} style={{ margin: 0, }}>
                        Dropbox
                      </Typography.Title>
                      <Paragraph className="textdata m-0">
                        Keep life organized and work moving—all in one place
                      </Paragraph>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="d-flex align-items-center" style={{ borderBottom: "1px solid #eff0f2" }}>
                    <img src={w5img} alt="" />
                    <div className="web-text-one ms-4">
                      <Typography.Title className="" level={5} style={{ margin: 0, }}>
                        Mail Chimp <Tag className="ms-2" color="#f50">Premium</Tag>
                      </Typography.Title>
                      <Paragraph className="textdata m-0">
                        The best value for your digital marketing budget
                      </Paragraph>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="d-flex align-items-center" style={{ borderBottom: "1px solid #eff0f2" }}>
                    <img src={w6img} alt="" />
                    <div className="web-text-one ms-4">
                      <Typography.Title className="" level={5} style={{ margin: 0, }}>
                        Github
                      </Typography.Title>
                      <Paragraph className="textdata m-0">
                        Where the world builds software
                      </Paragraph>
                    </div>
                  </div>
                </a>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <Badge size="small" count={5}>
                <FaRegBell className="icon-header" />
              </Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropmenu-component web-app-menu position-absolute">
              <div className="d-flex align-items-center web-title p-3 border-0">
                <Typography.Title className="title-acc fs-5 fw-normal" level={5} style={{ margin: 0, }}>
                  Notification
                </Typography.Title>
                <a className="text-decoration-underline ms-auto" href="#">View All</a>
              </div>
              <div className="web-app-data overflow-hidden overflow-y-auto" style={{ height: "230px" }}>
                <a href="#">
                  <div className="d-flex " style={{ borderBottom: "1px solid #eff0f2" }}>
                    <Avatar size={32} style={{ minWidth: "32px" }} src={n1img} />
                    <div className="web-text-one ms-3">
                      <Typography.Title className="" level={5} style={{ margin: 0, }}>
                        Justin Verduzco
                      </Typography.Title>
                      <Paragraph className="textdata m-0">
                        Your task changed an issue from "In Progress" to<Tag className="ms-2" color="green">Review</Tag>
                      </Paragraph>
                      <Paragraph className="textdata m-0 d-flex align-items-center p-0">
                        <IoTimeOutline style={{ color: "#495057bf", fontSize: "10px", fontWeight: "600" }} />1 hour ago
                      </Paragraph>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="d-flex" style={{ borderBottom: "1px solid #eff0f2" }}>
                    <div>
                      <Avatar size={32} style={{ backgroundColor: '#038edc' }} icon={<FaShoppingBasket />} />
                    </div>
                    <div className="web-text-one ms-4">
                      <Typography.Title className="" level={5} style={{ margin: 0, }}>
                        New order has been placed
                      </Typography.Title>
                      <Paragraph className="textdata m-0">
                        Open the order confirmation or shipment confirmation.
                      </Paragraph>
                      <Paragraph className="textdata m-0 d-flex align-items-center p-0">
                        <IoTimeOutline style={{ color: "#495057bf", fontSize: "10px", fontWeight: "600" }} />1 hour ago
                      </Paragraph>
                    </div>
                  </div>
                </a>
                <Typography.Title className="fw-semibold" style={{ background: "#f5f6f8", margin: 0, padding: "8px 24px", fontSize: "12px" }}>
                  Earlier
                </Typography.Title>
                <a href="#">
                  <div className="d-flex" style={{ borderBottom: "1px solid #eff0f2" }}>
                    <div>
                      <Avatar size={32} style={{ backgroundColor: '#038edc' }} icon={<TfiTruck style={{ color: "#51d28c" }} />} />
                    </div>
                    <div className="web-text-one ms-4">
                      <Typography.Title className="" level={5} style={{ margin: 0, }}>
                        Your item is shipped
                      </Typography.Title>
                      <Paragraph className="textdata m-0">
                        Here is somthing that you might light like to know.
                      </Paragraph>
                      <Paragraph className="textdata m-0 d-flex align-items-center p-0">
                        <IoTimeOutline style={{ color: "#495057bf", fontSize: "10px", fontWeight: "600" }} />1 day ago
                      </Paragraph>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="d-flex" style={{ borderBottom: "1px solid #eff0f2" }}>
                    <Avatar size={32} style={{ minWidth: "32px" }} src={n2img} />
                    <div className="web-text-one ms-4">
                      <Typography.Title className="" level={5} style={{ margin: 0, }}>
                        Salena Layfield
                      </Typography.Title>
                      <Paragraph className="textdata m-0">
                        Yay ! Everything worked!
                      </Paragraph>
                      <Paragraph className="textdata m-0 d-flex align-items-center p-0">
                        <IoTimeOutline style={{ color: "#495057bf", fontSize: "10px", fontWeight: "600" }} />3 days ago
                      </Paragraph>
                    </div>
                  </div>
                </a>
              </div>
              <div className="d-flex justify-content-center p-3">
                <a href="#" className="d-flex gap-2 align-items-center" style={{ fontSize: "13px", color: "#038edc" }} ><FaArrowAltCircleRight />View all</a>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="">
          <CiSettings className="icon-header" onClick={showDrawer} />
          <Drawer className="setting-drawer" title="Theme Customizer" onClose={onClose} open={opendrawer}>
            <div className="">
              <Typography.Title className="fw-semibold mb-3" style={{ fontSize: "14px" }}>
                Layouts
              </Typography.Title>
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>Vertical</Radio>
                <Radio value={2}>Horizontal</Radio>
              </Radio.Group>
              <Typography.Title className="fw-semibold mb-3 mt-4 pt-2" style={{ fontSize: "14px" }}>
                Layout Mode
              </Typography.Title>
              <Radio.Group onChange={onChange1} value={value1}>
                <Radio value={1}>Light</Radio>
                <Radio value={2}>Dark</Radio>
              </Radio.Group>
              <Typography.Title className="fw-semibold mb-3 mt-4 pt-2" style={{ fontSize: "14px" }}>
                Layouts Width
              </Typography.Title>
              <Radio.Group onChange={onChange2} value={value2}>
                <Radio value={1}>Fluid</Radio>
                <Radio value={2}>Boxed</Radio>
              </Radio.Group>
              <Typography.Title className="fw-semibold mb-3 mt-4 pt-2" style={{ fontSize: "14px" }}>
                Layouts Position
              </Typography.Title>
              <Radio.Group onChange={onChange3} value={value3}>
                <Radio value={1}>Fixed</Radio>
                <Radio value={2}>Scrollable</Radio>
              </Radio.Group>
              <Typography.Title className="fw-semibold mb-3 mt-4 pt-2" style={{ fontSize: "14px" }}>
                Topbar Color
              </Typography.Title>
              <Radio.Group onChange={onChange4} value={value4}>
                <Radio value={1}>Light</Radio>
                <Radio value={2}>Dark</Radio>
              </Radio.Group>
              <Typography.Title className="fw-semibold mb-3 mt-4 pt-2" style={{ fontSize: "14px" }}>
                Sidebar Size
              </Typography.Title>
              <Radio.Group onChange={onChange5} className="d-flex flex-column" value={value5}>
                <Radio value={1}>Default</Radio>
                <Radio value={2}>Compact</Radio>
                <Radio value={3}>Small (Icon View)</Radio>
              </Radio.Group>
              <Typography.Title className="fw-semibold mb-3 mt-4 pt-2" style={{ fontSize: "14px" }}>
                Sidebar Color
              </Typography.Title>
              <Radio.Group onChange={onChange6} className="d-flex flex-column" value={value6}>
                <Radio value={1}>Light</Radio>
                <Radio value={2}>Dark</Radio>
                <Radio value={3}>Brand</Radio>

              </Radio.Group>

            </div>
          </Drawer>
        </div>
        <div>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              <div className="d-flex align-items-center gap-2">
                <Avatar src={<img src={accimg} alt="avatar" />} />
                <div className="acc-title text-start d-sm-block d-none">
                  <Typography.Title className="title-acc" level={5} style={{ margin: 0, }}>
                    admin
                  </Typography.Title>
                  <Paragraph className="m-0 fw-normal acc-text">
                    Administrator
                  </Paragraph>
                </div>
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropmenu-component account-dropmenu position-absolute">
              <div className="">
                <div className="p-3 acc-drop-title">
                  <Typography.Title className="text-white fw-semibold" level={5} style={{ margin: 0, }}>
                    admin
                  </Typography.Title>
                  <Paragraph className="m-0 fw-normal acc-text text-white">
                    admin@themesbrand.com
                  </Paragraph>
                </div>
                <div className="acc-list-menu py-2">
                  <ul className="p-0 m-0" style={{ borderBottom: "1px solid #eff0f2" }}>
                    <li><Link to="/profile"><FaUserCircle className="me-2" />Profile</Link></li>
                    <li><Link to="/message" ><MdOutlineMessage className="me-2" />Messages</Link></li>
                    <li><Link to="/taskboard" ><FaRegCalendarCheck className="me-2" />Taskboard</Link></li>
                    <li><Link to="/help" ><IoHelpBuoySharp className="me-2" />Help</Link></li>
                  </ul>
                  <ul className="m-0 p-0">
                    <li className="text-black"><CiWallet className="me-2" />Balance :<span className="ps-1"> $6951.02</span></li>
                    <li><Link to="/setting" ><CiSettings className="me-2" />Setting <Tag className="ms-auto" color="green">New</Tag></Link></li>
                    <li><Link to="/lockscreen" ><IoMdLock className="me-2" />Lock screen</Link></li>
                    <li><Link to="/"><IoLogOutOutline className="me-2" />Logout</Link></li>

                  </ul>
                </div>

              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      
    </div>


  );
}

export default Header;
