import '../../Pages/Message/Message.css';
import { Avatar, Breadcrumb, Button, Col, Divider, Input, Row, Typography } from 'antd';
import logoimg from '../../Assets/icon/logosmall.png';
import { BsThreeDots, BsThreeDotsVertical } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import Dropdown from 'react-bootstrap/Dropdown';
import chatone from '../../Assets/icon/c1.jpg';
import chattwo from '../../Assets/icon/c2.jpg';
import chatthree from '../../Assets/icon/c3.jpg';
import accimg from '../../Assets/icon/acc.jpg';
import { useState } from 'react';
import { GoDotFill } from 'react-icons/go';
import { IoSend } from 'react-icons/io5';
const { Text } = Typography;


function Message() {

    const [toggleState, setToggleState] = useState(1);
    const [toggleState1, setToggleState1] = useState(1);
    const [toggleState2, setToggleState2] = useState(1);
    const [toggleState3, setToggleState3] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    const toggleTab1 = (index) => {
        setToggleState1(index);
    };
    const toggleTab2 = (index) => {
        setToggleState2(index);
    };
    const toggleTab3 = (index) => {
        setToggleState3(index);
    };

    const getActiveClass = (index, className) =>
        toggleState === index ? className : "";

    const getActiveClass1 = (index, className) =>
        toggleState1 === index ? className : "";
    const getActiveClass2 = (index, className) =>
        toggleState2 === index ? className : "";
    const getActiveClass3 = (index, className) =>
        toggleState3 === index ? className : "";

    return (
        <div className="main-homepage">
            <div className="d-flex justify-content-between align-items-center pb-4">
                <Typography.Title className="title-acc fs-18 fw-500" level={5} style={{ margin: 0, }}>
                    Chat
                </Typography.Title>
                <Breadcrumb className="breadcrumb m-0"
                    items={[
                        { href: '', title: "Apps", },
                        {
                            title: 'Chat',
                        },
                    ]}
                />
            </div>
            <div>
                <Row gutter={[10, 20]}>
                    <Col className="gutter-row" lg={8} xl={6} md={8} sm={24} xs={24} >
                        <div className='chart-box'>
                            <div className='p-4 pb-0' style={{ background: "#cde8f8" }}>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <Avatar size={32} src={<img src={logoimg} alt="" />} />
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <Dropdown className='search-chat-icon'>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                <CiSearch style={{ fontSize: "20px" }} />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropmenu-component  position-absolute w-50">
                                                <div className="position-relative search-icon bg-white">
                                                    <Input className="search-input" placeholder="Search" />
                                                    <CiSearch className="search-iconmenu position-absolute" />
                                                </div>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                <BsThreeDots className='fs-20' />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Add Contact</Dropdown.Item>
                                                <Dropdown.Item href="#/action-4">Setting</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                                <div className="chat-tab pt-4">
                                    <ul className="d-flex p-0 m-0">
                                        <li className={`tabs w-100 position-relative ${getActiveClass(1, "active-tabs")}`} onClick={() => toggleTab(1)} >
                                            Chat
                                        </li>
                                        <li className={`tabs w-100 position-relative ${getActiveClass(2, "active-tabs")}`} onClick={() => toggleTab(2)} >
                                            Groups
                                        </li>
                                        <li className={`tabs w-100 position-relative ${getActiveClass(3, "active-tabs")}`} onClick={() => toggleTab(3)} >
                                            Contacts
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`p-4 overflow-y-scroll bg-white content ${getActiveClass(1, "active-content")}`} style={{ height: "570px" }}>
                                <div className='chat-list'>
                                    <Typography.Title className="title-acc fs-14 fw-500 mb-3" level={5} style={{ margin: 0, }}>
                                        Recent
                                    </Typography.Title>
                                    <ul className='p-0 m-0 chat-tab-two'>
                                        <li className={` ${getActiveClass1(1, "active-tabs1")}`} onClick={() => toggleTab1(1)}>
                                            <a href="#">
                                                <div className='d-flex align-items-start'>
                                                    <div className='position-relative me-2'>
                                                        <Avatar size={36} src={<img src={chatone} alt="" />} />
                                                        <Text className='user-status online'></Text>
                                                    </div>
                                                    <div className=''>
                                                        <Typography.Title className="title-acc fs-14 fw-500 mb-1" level={5} style={{ margin: 0, }}>
                                                            Daniel Pickering
                                                        </Typography.Title>
                                                        <Text className='light-grey' style={{ fontSize: "13px" }}>Hey! there I'm available</Text>
                                                    </div>
                                                    <Text className='light-grey ms-auto' style={{ fontSize: "11px" }}>02 min</Text>
                                                </div>
                                            </a>
                                        </li>
                                        <li className={` ${getActiveClass1(2, "active-tabs1")}`} onClick={() => toggleTab1(2)}>
                                            <a href="#">
                                                <div className='d-flex align-items-start'>
                                                    <div className='position-relative me-2'>
                                                        <Avatar style={{ backgroundColor: '#cde8f8', color: '#038edc' }} size={36}>H</Avatar>
                                                        <Text className='user-status online'></Text>
                                                    </div>
                                                    <div className=''>
                                                        <Typography.Title className="title-acc fs-14 fw-500 mb-1" level={5} style={{ margin: 0, }}>
                                                            Helen Harper
                                                        </Typography.Title>
                                                        <Text className='light-grey' style={{ fontSize: "13px" }}>I've finished it! See you so</Text>
                                                    </div>
                                                    <Text className='light-grey ms-auto' style={{ fontSize: "11px" }}>12 min</Text>
                                                </div>
                                            </a>
                                        </li>
                                        <li className={` ${getActiveClass1(3, "active-tabs1")}`} onClick={() => toggleTab1(3)}>
                                            <a href="#">
                                                <div className='d-flex align-items-start'>
                                                    <div className='position-relative me-2'>
                                                        <Avatar size={36} src={<img src={chattwo} alt="" />} />
                                                        <Text className='user-status away'></Text>
                                                    </div>
                                                    <div className=''>
                                                        <Typography.Title className="title-acc fs-14 fw-500 mb-1" level={5} style={{ margin: 0, }}>
                                                            Mary Welch
                                                        </Typography.Title>
                                                        <Text className='light-grey' style={{ fontSize: "13px" }}>This theme is awesome!</Text>
                                                    </div>
                                                    <Text className='light-grey ms-auto' style={{ fontSize: "11px" }}>22 min</Text>
                                                </div>
                                            </a>
                                        </li>
                                        <li className={` ${getActiveClass1(4, "active-tabs1")}`} onClick={() => toggleTab1(4)}>
                                            <a href="#">
                                                <div className='d-flex align-items-start'>
                                                    <div className='position-relative me-2'>
                                                        <Avatar size={36} src={<img src={chatthree} alt="" />} />
                                                        <Text className='user-status'></Text>
                                                    </div>
                                                    <div className=''>
                                                        <Typography.Title className="title-acc fs-14 fw-500 mb-1" level={5} style={{ margin: 0, }}>
                                                            Vicky Garcia
                                                        </Typography.Title>
                                                        <Text className='light-grey' style={{ fontSize: "13px" }}>Nice to meet you</Text>
                                                    </div>
                                                    <Text className='light-grey ms-auto' style={{ fontSize: "11px" }}>01 Hr</Text>
                                                </div>
                                            </a>
                                        </li>
                                        <li className={` ${getActiveClass1(5, "active-tabs1")}`} onClick={() => toggleTab1(5)}>
                                            <a href="#">
                                                <div className='d-flex align-items-start'>
                                                    <div className='position-relative me-2'>
                                                        <Avatar size={36} style={{ backgroundColor: '#cde8f8', color: '#038edc' }}>S</Avatar>
                                                        <Text className='user-status online'></Text>
                                                    </div>
                                                    <div className=''>
                                                        <Typography.Title className="title-acc fs-14 fw-500 mb-1" level={5} style={{ margin: 0, }}>
                                                            Scott Pierce
                                                        </Typography.Title>
                                                        <Text className='light-grey' style={{ fontSize: "13px" }}>Wow that's great</Text>
                                                    </div>
                                                    <Text className='light-grey ms-auto' style={{ fontSize: "11px" }}>04 Hrs</Text>
                                                </div>
                                            </a>
                                        </li>
                                        <li className={` ${getActiveClass1(6, "active-tabs1")}`} onClick={() => toggleTab1(6)}>
                                            <a href="#">
                                                <div className='d-flex align-items-start'>
                                                    <div className='position-relative me-2'>
                                                        <Avatar size={36} style={{ backgroundColor: '#cde8f8', color: '#038edc' }}>R</Avatar>
                                                        <Text className='user-status online'></Text>
                                                    </div>
                                                    <div className=''>
                                                        <Typography.Title className="title-acc fs-14 fw-500 mb-1" level={5} style={{ margin: 0, }}>
                                                            Ray Little
                                                        </Typography.Title>
                                                        <Text className='light-grey' style={{ fontSize: "13px" }}>Hey! there I'm available</Text>
                                                    </div>
                                                    <Text className='light-grey ms-auto' style={{ fontSize: "11px" }}>10 Hrs</Text>
                                                </div>
                                            </a>
                                        </li>
                                        <li className={` ${getActiveClass1(7, "active-tabs1")}`} onClick={() => toggleTab1(7)}>
                                            <a href="#">
                                                <div className='d-flex align-items-start'>
                                                    <div className='position-relative me-2'>
                                                        <Avatar size={36} style={{ backgroundColor: '#cde8f8', color: '#038edc' }}>S</Avatar>
                                                        <Text className='user-status online'></Text>
                                                    </div>
                                                    <div className=''>
                                                        <Typography.Title className="title-acc fs-14 fw-500 mb-1" level={5} style={{ margin: 0, }}>
                                                            Robert Perez
                                                        </Typography.Title>
                                                        <Text className='light-grey' style={{ fontSize: "13px" }}>Thanks</Text>
                                                    </div>
                                                    <Text className='light-grey ms-auto' style={{ fontSize: "11px" }}>Yesterday</Text>
                                                </div>
                                            </a>
                                        </li>
                                        <li className={` ${getActiveClass1(8, "active-tabs1")}`} onClick={() => toggleTab1(8)}>
                                            <a href="#">
                                                <div className='d-flex align-items-start'>
                                                    <div className='position-relative me-2'>
                                                        <Avatar size={36} src={<img src={chatone} alt="" />} />
                                                        <Text className='user-status away'></Text>
                                                    </div>
                                                    <div className=''>
                                                        <Typography.Title className="title-acc fs-14 fw-500 mb-1" level={5} style={{ margin: 0, }}>
                                                            Mary Welch
                                                        </Typography.Title>
                                                        <Text className='light-grey' style={{ fontSize: "13px" }}>This theme is awesome!</Text>
                                                    </div>
                                                    <Text className='light-grey ms-auto' style={{ fontSize: "11px" }}>22 min</Text>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`p-4 overflow-y-scroll bg-white content ${getActiveClass(2, "active-content")}`} style={{ height: "570px" }}>
                                <div className='group-chat-list'>
                                    <div className='d-flex align-items-center'>
                                        <Typography.Title className="title-acc fs-14 fw-500" level={5} style={{ margin: 0, }}>
                                            Groups
                                        </Typography.Title>
                                        <a className='ms-auto' href="#">+ Add New</a>
                                    </div>
                                    <div className='group-chat-list rounded mt-3'>
                                        <ul className='m-0 p-0'>
                                            <li className={` ${getActiveClass2(1, "active-tabs2")}`} onClick={() => toggleTab2(1)}>
                                                <a className='d-flex align-items-center' href="#">
                                                    <div className=' me-3'>
                                                        <Avatar style={{ color: "#038edc", background: "#cde8f8" }}>G</Avatar>
                                                    </div>
                                                    <div>
                                                        <Typography.Title className="title-acc fs-14 fw-500" level={5} style={{ margin: 0, }}>
                                                            General
                                                        </Typography.Title>
                                                        <Text className='light-grey' style={{ fontSize: "13px" }}>12 Members</Text>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className={` ${getActiveClass2(2, "active-tabs2")}`} onClick={() => toggleTab2(2)}>
                                                <a className='d-flex align-items-center' href="#">
                                                    <div className=' me-3'>
                                                        <Avatar style={{ color: "#038edc", background: "#cde8f8" }}>R</Avatar>
                                                    </div>
                                                    <div>
                                                        <Typography.Title className="title-acc fs-14 fw-500" level={5} style={{ margin: 0, }}>
                                                            Reporting
                                                        </Typography.Title>
                                                        <Text className='light-grey' style={{ fontSize: "13px" }}>12 Members</Text>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className={` ${getActiveClass2(3, "active-tabs2")}`} onClick={() => toggleTab2(3)}>
                                                <a className='d-flex align-items-center' href="#">
                                                    <div className=' me-3'>
                                                        <Avatar style={{ color: "#038edc", background: "#cde8f8" }}>M</Avatar>
                                                    </div>
                                                    <div>
                                                        <Typography.Title className="title-acc fs-14 fw-500" level={5} style={{ margin: 0, }}>
                                                            Meeting
                                                        </Typography.Title>
                                                        <Text className='light-grey' style={{ fontSize: "13px" }}>12 Members</Text>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className={` ${getActiveClass2(4, "active-tabs2")}`} onClick={() => toggleTab2(4)}>
                                                <a className='d-flex align-items-center' href="#">
                                                    <div className=' me-3'>
                                                        <Avatar style={{ color: "#038edc", background: "#cde8f8" }}>A</Avatar>
                                                    </div>
                                                    <div>
                                                        <Typography.Title className="title-acc fs-14 fw-500" level={5} style={{ margin: 0, }}>
                                                            Project A
                                                        </Typography.Title>
                                                        <Text className='light-grey' style={{ fontSize: "13px" }}>12 Members</Text>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className={` ${getActiveClass2(5, "active-tabs2")}`} onClick={() => toggleTab2(5)}>
                                                <a className='d-flex align-items-center' href="#">
                                                    <div className=' me-3'>
                                                        <Avatar style={{ color: "#038edc", background: "#cde8f8" }}>U</Avatar>
                                                    </div>
                                                    <div>
                                                        <Typography.Title className="title-acc fs-14 fw-500" level={5} style={{ margin: 0, }}>
                                                            Project B
                                                        </Typography.Title>
                                                        <Text className='light-grey' style={{ fontSize: "13px" }}>12 Members</Text>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={`p-4 overflow-y-scroll bg-white content ${getActiveClass(3, "active-content")}`} style={{ height: "570px" }}>
                                <div className='contact-list'>
                                    <div className='d-flex align-items-center '>
                                        <Typography.Title className="title-acc fs-14 fw-500" level={5} style={{ margin: 0, }}>
                                            Contacts
                                        </Typography.Title>
                                        <a className='ms-auto' href="#">+ Add New</a>
                                    </div>
                                    <div className='mt-4 '>
                                        <ul className='m-0 p-0'>
                                            <Text className='fs-14 grey-color'>A</Text>
                                            <li className={` ${getActiveClass3(1, "active-tabs2")}`} onClick={() => toggleTab3(1)}>
                                                <a className='d-block' href="#">
                                                    <Typography.Title className="grey-color fs-14 fw-500" level={5} style={{ margin: 0, }}>
                                                        Adam Miller
                                                    </Typography.Title>
                                                </a>
                                            </li>
                                            <li className={` ${getActiveClass3(2, "active-tabs2")}`} onClick={() => toggleTab3(2)}>
                                                <a className='d-block' href="#">
                                                    <Typography.Title className="grey-color fs-14 fw-500" level={5} style={{ margin: 0, }}>
                                                        Alfonso Fisher
                                                    </Typography.Title>
                                                </a>
                                            </li>
                                            <Text className='fs-14 grey-color'>B</Text>
                                            <li className={` ${getActiveClass3(3, "active-tabs2")}`} onClick={() => toggleTab3(3)}>
                                                <a className='d-block' href="#">
                                                    <Typography.Title className="grey-color fs-14 fw-500" level={5} style={{ margin: 0, }}>
                                                        Bonnie Harney
                                                    </Typography.Title>
                                                </a>
                                            </li>
                                            <Text className='fs-14 grey-color'>C</Text>
                                            <li className={` ${getActiveClass3(4, "active-tabs2")}`} onClick={() => toggleTab3(4)}>
                                                <a className='d-block' href="#">
                                                    <Typography.Title className="grey-color fs-14 fw-500" level={5} style={{ margin: 0, }}>
                                                        Charles Brown
                                                    </Typography.Title>
                                                </a>
                                            </li>
                                            <li className={` ${getActiveClass3(5, "active-tabs2")}`} onClick={() => toggleTab3(5)}>
                                                <a className='d-block' href="#">
                                                    <Typography.Title className="grey-color fs-14 fw-500" level={5} style={{ margin: 0, }}>
                                                        Carmella Jones
                                                    </Typography.Title>
                                                </a>
                                            </li>
                                            <li className={` ${getActiveClass3(6, "active-tabs2")}`} onClick={() => toggleTab3(6)}>
                                                <a className='d-block' href="#">
                                                    <Typography.Title className="grey-color fs-14 fw-500" level={5} style={{ margin: 0, }}>
                                                        Carrie Williams
                                                    </Typography.Title>
                                                </a>
                                            </li>
                                            <Text className='fs-14 grey-color'>D</Text>
                                            <li className={` ${getActiveClass3(7, "active-tabs2")}`} onClick={() => toggleTab3(7)}>
                                                <a className='d-block' href="#">
                                                    <Typography.Title className="grey-color fs-14 fw-500" level={5} style={{ margin: 0, }}>
                                                        Dolores Minter
                                                    </Typography.Title>
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Col>
                    <Col className='gutter-row' lg={16} xl={18} md={16} sm={24} xs={24} >
                        <div className={`chart-box content ${getActiveClass(1, "active-content")}`}>
                            <div className={`content ${getActiveClass1(1, "active-content")}`}>
                                <div className='p-3 border-bottom'>
                                    <div className='d-flex align-items-center'>
                                        <div className=' me-3'>
                                            <Avatar size={52} src={<img className='img-thumbnail rounded-circle' src={chatone} alt="avatar" />} />
                                            <Text className='user-status online'></Text>
                                        </div>
                                        <div className=''>
                                            <Typography.Title className="title-acc fs-14 fw-500 mb-1" level={5} style={{ margin: 0, }}>
                                                Daniel Pickering
                                            </Typography.Title>
                                            <Text className='light-grey d-flex align-items-center' style={{ fontSize: "13px" }}><GoDotFill className='fs-14 me-1 online-text' />Online</Text>
                                        </div>
                                        <div className='ms-auto'>
                                            <div className='d-flex align-items-center'>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                        <CiSearch style={{ fontSize: "20px" }} />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropmenu-component position-absolute w-50">
                                                        <div className="position-relative search-icon bg-white">
                                                            <Input className="search-input" placeholder="Search" />
                                                            <CiSearch className="search-iconmenu position-absolute" />
                                                        </div>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                        <BsThreeDots className='fs-20' />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Add Contact</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-4">Setting</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-3 overflow-y-scroll' style={{ height: "530px" }}>
                                    <Divider className='m-0 mb-4 grey-color fs-14 fw-normal'>Today</Divider>
                                    <div>
                                        <ul className='p-0 m-0'>
                                            <li>
                                                <div className='d-flex align-items-start justify-content-end mb-4'>
                                                    <Dropdown className='chat-dropmenu'>
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                            <BsThreeDotsVertical className='fs-14' style={{ color: "#038edc" }} />
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">Copy</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Save</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Forward</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-4">Delete</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                    <div className='chat-content rounded text-end position-relative me-2'>
                                                        <Typography.Title className="d-flex align-items-center justify-content-end fw-500 grey-color" level={5} style={{ margin: 0, fontSize: "13px" }}>
                                                            <Text className='light-grey d-flex align-items-center fs-14 fw-normal me-1' >02-04-20 10:30</Text>Henry Wells
                                                        </Typography.Title>
                                                        <Text className='light-grey text-end' style={{ fontSize: "13px" }}>Hello!</Text>
                                                    </div>
                                                    <div>
                                                        <Avatar size={32} src={<img src={accimg} alt="avatar" />} />
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='d-flex align-items-start justify-content-end mb-4'>
                                                    <Dropdown className='chat-dropmenu'>
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                            <BsThreeDotsVertical className='fs-14' style={{ color: "#038edc" }} />
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">Copy</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Save</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Forward</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-4">Delete</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                    <div className='chat-content rounded text-end position-relative me-2'>
                                                        <Typography.Title className="d-flex align-items-center justify-content-end fw-500 grey-color" level={5} style={{ margin: 0, fontSize: "13px" }}>
                                                            <Text className='light-grey d-flex align-items-center fs-14 fw-normal me-1' >02-04-20 10:31</Text>Henry Wells
                                                        </Typography.Title>
                                                        <Text className='light-grey text-end' style={{ fontSize: "13px" }}>How are you ?</Text>
                                                    </div>
                                                    <div>
                                                        <Avatar size={32} src={<img src={accimg} alt="avatar" />} />
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='d-flex align-items-start mb-4'>
                                                    <div>
                                                        <Avatar size={32} src={<img src={accimg} alt="avatar" />} />
                                                    </div>

                                                    <div className='chat-content-two rounded position-relative ms-2'>
                                                        <Typography.Title className="d-flex align-items-center fw-500 grey-color" level={5} style={{ margin: 0, fontSize: "13px" }}>
                                                            Henry Wells<Text className='light-grey d-flex align-items-center fs-14 fw-normal ms-1' >02-04-20 10:31</Text>
                                                        </Typography.Title>
                                                        <Text className='light-grey text-end' style={{ fontSize: "13px" }}>I am fine, What about you ?</Text>
                                                    </div>
                                                    <Dropdown className='chat-dropmenu'>
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                            <BsThreeDotsVertical className='fs-14' style={{ color: "#038edc" }} />
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">Copy</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Save</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Forward</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-4">Delete</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='p-3 chat-input-msg d-flex align-items-center'>
                                    <Input className='input-chat grey-color' placeholder="Enter Message..." />
                                    <Button className='d-flex justify-content-center align-items-center send-btn ms-4' value="large" >Send<IoSend className='ms-3' /></Button>
                                </div>
                            </div>
                            <div className={`content ${getActiveClass1(2, "active-content")}`}>
                                <h2>chat-2</h2>
                            </div>
                            <div className={`content ${getActiveClass1(3, "active-content")}`}>
                                <h2>chat-3</h2>
                            </div>
                            <div className={`content ${getActiveClass1(4, "active-content")}`}>
                                <h2>chat-4</h2>
                            </div>
                            <div className={`content ${getActiveClass1(5, "active-content")}`}>
                                <h2>chat-5</h2>
                            </div>
                        </div>
                        <div className={`chart-box content ${getActiveClass(2, "active-content")}`}>
                            <div className={`content ${getActiveClass2(1, "active-content")}`}>
                                <div className='p-3 border-bottom'>
                                    <div className='d-flex align-items-center'>
                                        <div className=' me-3'>
                                            <Avatar style={{ color: "#038edc", background: "#cde8f8" }}>G</Avatar>
                                            <Text className='user-status online'></Text>
                                        </div>
                                        <div className=''>
                                            <Typography.Title className="title-acc fs-14 fw-500 mb-1" level={5} style={{ margin: 0, }}>
                                                Daniel Pickering
                                            </Typography.Title>
                                            <Text className='light-grey d-flex align-items-center' style={{ fontSize: "13px" }}><GoDotFill className='fs-14 me-1 online-text' />Online</Text>
                                        </div>
                                        <div className='ms-auto'>
                                            <div className='d-flex align-items-center'>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                        <CiSearch style={{ fontSize: "20px" }} />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropmenu-component position-absolute w-50">
                                                        <div className="position-relative search-icon bg-white">
                                                            <Input className="search-input" placeholder="Search" />
                                                            <CiSearch className="search-iconmenu position-absolute" />
                                                        </div>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                        <BsThreeDots className='fs-20' />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Add Contact</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-4">Setting</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-3 overflow-y-scroll' style={{ height: "530px" }}>
                                    <Divider className='m-0 mb-4 grey-color fs-14 fw-normal'>Today</Divider>
                                    <div>
                                        <ul className='p-0 m-0'>
                                            <li>
                                                <div className='d-flex align-items-start justify-content-end mb-4'>
                                                    <Dropdown className='chat-dropmenu'>
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                            <BsThreeDotsVertical className='fs-14' style={{ color: "#038edc" }} />
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">Copy</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Save</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Forward</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-4">Delete</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                    <div className='chat-content rounded text-end position-relative me-2'>
                                                        <Typography.Title className="d-flex align-items-center justify-content-end fw-500 grey-color" level={5} style={{ margin: 0, fontSize: "13px" }}>
                                                            <Text className='light-grey d-flex align-items-center fs-14 fw-normal me-1' >02-04-20 10:30</Text>Henry Wells
                                                        </Typography.Title>
                                                        <Text className='light-grey text-end' style={{ fontSize: "13px" }}>Hello!</Text>
                                                    </div>
                                                    <div>
                                                        <Avatar size={32} src={<img src={accimg} alt="avatar" />} />
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='d-flex align-items-start justify-content-end mb-4'>
                                                    <Dropdown className='chat-dropmenu'>
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                            <BsThreeDotsVertical className='fs-14' style={{ color: "#038edc" }} />
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">Copy</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Save</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Forward</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-4">Delete</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                    <div className='chat-content rounded text-end position-relative me-2'>
                                                        <Typography.Title className="d-flex align-items-center justify-content-end fw-500 grey-color" level={5} style={{ margin: 0, fontSize: "13px" }}>
                                                            <Text className='light-grey d-flex align-items-center fs-14 fw-normal me-1' >02-04-20 10:31</Text>Henry Wells
                                                        </Typography.Title>
                                                        <Text className='light-grey text-end' style={{ fontSize: "13px" }}>How are you ?</Text>
                                                    </div>
                                                    <div>
                                                        <Avatar size={32} src={<img src={accimg} alt="avatar" />} />
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='d-flex align-items-start mb-4'>
                                                    <div>
                                                    <Avatar style={{ color: "#038edc", background: "#cde8f8" }}>G</Avatar>
                                                    </div>

                                                    <div className='chat-content-two rounded position-relative ms-2'>
                                                        <Typography.Title className="d-flex align-items-center fw-500 grey-color" level={5} style={{ margin: 0, fontSize: "13px" }}>
                                                            Henry Wells<Text className='light-grey d-flex align-items-center fs-14 fw-normal ms-1' >02-04-20 10:31</Text>
                                                        </Typography.Title>
                                                        <Text className='light-grey text-end' style={{ fontSize: "13px" }}>I am fine, What about you ?</Text>
                                                    </div>
                                                    <Dropdown className='chat-dropmenu'>
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                            <BsThreeDotsVertical className='fs-14' style={{ color: "#038edc" }} />
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">Copy</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Save</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Forward</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-4">Delete</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='p-3 chat-input-msg d-flex align-items-center'>
                                    <Input className='input-chat grey-color' placeholder="Enter Message..." />
                                    <Button className='d-flex justify-content-center align-items-center send-btn ms-4' value="large" >Send<IoSend className='ms-3' /></Button>
                                </div>
                            </div>
                            <div className={`content ${getActiveClass2(2, "active-content")}`}>
                                <div className='bg-success'>
                                    12
                                </div>
                            </div>
                            <div className={`content ${getActiveClass2(3, "active-content")}`}>
                                <div className='bg-dark'>
                                    13
                                </div>
                            </div>
                            <div className={`content ${getActiveClass2(4, "active-content")}`}>
                                <div className='bg-warning'>
                                    14
                                </div>
                            </div>
                            <div className={`content ${getActiveClass2(5, "active-content")}`}>
                                <div className='bg-light'>
                                    15
                                </div>
                            </div>
                        </div>
                        <div className={`chart-box content ${getActiveClass(3, "active-content")}`}>
                            <div className={`content ${getActiveClass3(1, "active-content")}`}>
                                <div className='p-3 border-bottom'>
                                    <div className='d-flex align-items-center'>
                                        <div className=' me-3'>
                                            <Avatar style={{ color: "#038edc", background: "#cde8f8" }}>A</Avatar>
                                            <Text className='user-status online'></Text>
                                        </div>
                                        <div className=''>
                                            <Typography.Title className="title-acc fs-14 fw-500 mb-1" level={5} style={{ margin: 0, }}>
                                                Adam Miller
                                            </Typography.Title>
                                            <Text className='light-grey d-flex align-items-center' style={{ fontSize: "13px" }}><GoDotFill className='fs-14 me-1 online-text' />Online</Text>
                                        </div>
                                        <div className='ms-auto'>
                                            <div className='d-flex align-items-center'>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                        <CiSearch style={{ fontSize: "20px" }} />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropmenu-component position-absolute w-50">
                                                        <div className="position-relative search-icon bg-white">
                                                            <Input className="search-input" placeholder="Search" />
                                                            <CiSearch className="search-iconmenu position-absolute" />
                                                        </div>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                        <BsThreeDots className='fs-20' />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Add Contact</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-4">Setting</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-3 overflow-y-scroll' style={{ height: "530px" }}>
                                    <Divider className='m-0 mb-4 grey-color fs-14 fw-normal'>Today</Divider>
                                    <div>
                                        <ul className='p-0 m-0'>
                                            <li>
                                                <div className='d-flex align-items-start justify-content-end mb-4'>
                                                    <Dropdown className='chat-dropmenu'>
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                            <BsThreeDotsVertical className='fs-14' style={{ color: "#038edc" }} />
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">Copy</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Save</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Forward</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-4">Delete</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                    <div className='chat-content rounded text-end position-relative me-2'>
                                                        <Typography.Title className="d-flex align-items-center justify-content-end fw-500 grey-color" level={5} style={{ margin: 0, fontSize: "13px" }}>
                                                            <Text className='light-grey d-flex align-items-center fs-14 fw-normal me-1' >02-04-20 10:30</Text>Henry Wells
                                                        </Typography.Title>
                                                        <Text className='light-grey text-end' style={{ fontSize: "13px" }}>Hello!</Text>
                                                    </div>
                                                    <div>
                                                        <Avatar size={32} src={<img src={accimg} alt="avatar" />} />
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='d-flex align-items-start justify-content-end mb-4'>
                                                    <Dropdown className='chat-dropmenu'>
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                            <BsThreeDotsVertical className='fs-14' style={{ color: "#038edc" }} />
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">Copy</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Save</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Forward</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-4">Delete</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                    <div className='chat-content rounded text-end position-relative me-2'>
                                                        <Typography.Title className="d-flex align-items-center justify-content-end fw-500 grey-color" level={5} style={{ margin: 0, fontSize: "13px" }}>
                                                            <Text className='light-grey d-flex align-items-center fs-14 fw-normal me-1' >02-04-20 10:31</Text>Henry Wells
                                                        </Typography.Title>
                                                        <Text className='light-grey text-end' style={{ fontSize: "13px" }}>How are you ?</Text>
                                                    </div>
                                                    <div>
                                                        <Avatar size={32} src={<img src={accimg} alt="avatar" />} />
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='d-flex align-items-start mb-4'>
                                                    <div>
                                                        <Avatar style={{ color: "#038edc", background: "#cde8f8" }}>A</Avatar>
                                                    </div>

                                                    <div className='chat-content-two rounded position-relative ms-2'>
                                                        <Typography.Title className="d-flex align-items-center fw-500 grey-color" level={5} style={{ margin: 0, fontSize: "13px" }}>
                                                            Henry Wells<Text className='light-grey d-flex align-items-center fs-14 fw-normal ms-1' >02-04-20 10:31</Text>
                                                        </Typography.Title>
                                                        <Text className='light-grey text-end' style={{ fontSize: "13px" }}>I am fine, What about you ?</Text>
                                                    </div>
                                                    <Dropdown className='chat-dropmenu'>
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                            <BsThreeDotsVertical className='fs-14' style={{ color: "#038edc" }} />
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">Copy</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Save</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Forward</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-4">Delete</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='p-3 chat-input-msg d-flex align-items-center'>
                                    <Input className='input-chat grey-color' placeholder="Enter Message..." />
                                    <Button className='d-flex justify-content-center align-items-center send-btn ms-4' value="large" >Send<IoSend className='ms-3' /></Button>
                                </div>
                            </div>
                            <div className={`content ${getActiveClass3(2, "active-content")}`}>
                                <div className='bg-danger'>
                                    12
                                </div>
                            </div>
                            <div className={`content ${getActiveClass3(3, "active-content")}`}>
                                <div className='bg-danger'>
                                    13
                                </div>
                            </div>
                            <div className={`content ${getActiveClass3(4, "active-content")}`}>
                                <div className='bg-danger'>
                                    14
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>


            </div>
            {/* <div>
                <ul className="">
                    <li className={`tabs ${getActiveClass(1, "active-tabs")}`} onClick={() => toggleTab(1)}>
                        Tab 1
                    </li>
                    <li className={`tabs ${getActiveClass(2, "active-tabs")}`} onClick={() => toggleTab(2)} >
                        Tab 2
                    </li>
                    <li className={`tabs ${getActiveClass(3, "active-tabs")}`} onClick={() => toggleTab(3)} >
                        Tab 3
                    </li>
                </ul>
                <div className="">
                    <div className={`content ${getActiveClass(1, "active-content")}`}>
                        <ul>
                            <li className={`tabs ${getActiveClass1(1, "active-tabs")}`} onClick={() => toggleTab1(1)}>1</li>
                            <li className={`tabs ${getActiveClass1(2, "active-tabs")}`} onClick={() => toggleTab1(2)}>2</li>
                            <li className={`tabs ${getActiveClass1(3, "active-tabs")}`} onClick={() => toggleTab1(3)}>3</li>
                            <li className={`tabs ${getActiveClass1(4, "active-tabs")}`} onClick={() => toggleTab1(4)}>4</li>
                            <li className={`tabs ${getActiveClass1(5, "active-tabs")}`} onClick={() => toggleTab1(5)}>5</li>
                        </ul>
                    </div>
                    <div className={`content ${getActiveClass(2, "active-content")}`}>
                        <li className={`tabs ${getActiveClass2(1, "active-tabs")}`} onClick={() => toggleTab2(1)}>10</li>
                        <li className={`tabs ${getActiveClass2(2, "active-tabs")}`} onClick={() => toggleTab2(2)}>6</li>
                        <li className={`tabs ${getActiveClass2(3, "active-tabs")}`} onClick={() => toggleTab2(3)}>7</li>
                        <li className={`tabs ${getActiveClass2(4, "active-tabs")}`} onClick={() => toggleTab2(4)}>8</li>
                        <li className={`tabs ${getActiveClass2(5, "active-tabs")}`} onClick={() => toggleTab2(5)}>9</li>
                    </div>
                    <div className={`content ${getActiveClass(3, "active-content")}`}>
                        <li className={`tabs ${getActiveClass3(1, "active-tabs")}`} onClick={() => toggleTab3(1)}>11</li>
                        <li className={`tabs ${getActiveClass3(2, "active-tabs")}`} onClick={() => toggleTab3(2)}>12</li>
                        <li className={`tabs ${getActiveClass3(3, "active-tabs")}`} onClick={() => toggleTab3(3)}>13</li>
                        <li className={`tabs ${getActiveClass3(4, "active-tabs")}`} onClick={() => toggleTab3(4)}>14</li>
                        <li className={`tabs ${getActiveClass3(5, "active-tabs")}`} onClick={() => toggleTab3(5)}>15</li>
                    </div>
                </div>
                <div className={`content ${getActiveClass(1, "active-content")}`}>
                    <div className={`content ${getActiveClass1(1, "active-content")}`}>
                        <h2>1</h2>
                    </div>
                    <div className={`content ${getActiveClass1(2, "active-content")}`}>
                        <h2>2</h2>
                    </div>
                    <div className={`content ${getActiveClass1(3, "active-content")}`}>
                        <h2>3</h2>
                    </div>
                    <div className={`content ${getActiveClass1(4, "active-content")}`}>
                        <h2>4</h2>
                    </div>
                    <div className={`content ${getActiveClass1(5, "active-content")}`}>
                        <h2>5</h2>
                    </div>
                </div>
                <div className={`content ${getActiveClass(2, "active-content")}`}>
                    <div className={`content ${getActiveClass2(1, "active-content")}`}>
                        <h2>11</h2>
                    </div>
                    <div className={`content ${getActiveClass2(2, "active-content")}`}>
                        <h2>12</h2>
                    </div>
                    <div className={`content ${getActiveClass2(3, "active-content")}`}>
                        <h2>13</h2>
                    </div>
                    <div className={`content ${getActiveClass2(4, "active-content")}`}>
                        <h2>14</h2>
                    </div>
                    <div className={`content ${getActiveClass2(5, "active-content")}`}>
                        <h2>15</h2>
                    </div>
                </div>
                <div className={`content ${getActiveClass(3, "active-content")}`}>
                    <div className={`content ${getActiveClass3(1, "active-content")}`}>
                        <h2>21</h2>
                    </div>
                    <div className={`content ${getActiveClass3(2, "active-content")}`}>
                        <h2>22</h2>
                    </div>
                    <div className={`content ${getActiveClass3(3, "active-content")}`}>
                        <h2>23</h2>
                    </div>
                    <div className={`content ${getActiveClass3(4, "active-content")}`}>
                        <h2>24</h2>
                    </div>
                    <div className={`content ${getActiveClass3(5, "active-content")}`}>
                        <h2>25</h2>
                    </div>
                </div>
            </div> */}


        </div >
    )
}


export default Message