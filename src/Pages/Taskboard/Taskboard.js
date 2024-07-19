

import '../../Pages/Taskboard/Taskboard.css';
import { Avatar, Breadcrumb, Button, Checkbox, Col, Row, Tag, Tooltip, Typography } from 'antd';
import logoimg from '../../Assets/icon/logosmall.png';
import accimg from '../../Assets/icon/acc.jpg';
import imgavtar from '../../Assets/icon/c1.jpg';
import { Dropdown } from 'react-bootstrap';
import { BsThreeDots } from 'react-icons/bs';

const { Paragraph } = Typography;


export default function Taskboard() {


    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    return (
        <div className="main-homepage">
            <div className="d-flex justify-content-between align-items-center pb-4">
                <Typography.Title className="title-acc fs-18 fw-500" level={5} style={{ margin: 0, }}>
                    Kanban Board
                </Typography.Title>
                <Breadcrumb className="breadcrumb m-0"
                    items={[
                        { href: '', title: "Apps", },
                        {
                            title: 'Kanban Board',
                        },
                    ]}
                />
            </div>
            <div className='taskboard-main'>
                <div className='d-flex align-items-center flex-sm-nowrap flex-wrap pb-4 mb-4 border-bottom'>
                    <div style={{ backgroundColor: '#f5f6f8', height: "48px", width: "48px" }} className='p-1 d-flex justify-content-center align-items-center rounded-circle me-3'>
                        <Avatar size={30} src={<img src={logoimg} alt="avatar" />} />
                    </div>
                    <div>
                        <Typography.Title className="grey-color fs-18 fw-500" level={5} style={{ margin: 0, }}>6
                            Dashonic Admin Dashboard
                        </Typography.Title>
                        <Paragraph className='fs-14 light-grey m-0'>Lorem ipsum dolor sit amet adipiscing elit</Paragraph>
                    </div>
                    <Avatar.Group className='ms-sm-auto mt-sm-0 mt-3'>
                        <a href="https://ant.design">
                            <Avatar style={{ backgroundColor: '#038edc' }}>E</Avatar>
                        </a>
                        <Avatar src={<img src={accimg} alt="avatar" />} />
                        <Tooltip title="Ant User" placement="top">
                            <Avatar style={{ backgroundColor: '#5fd0f3' }} icon="" >L</Avatar>
                        </Tooltip>
                        <Avatar className='fw-bold' style={{ backgroundColor: '#f5f6f8', color: '#038edc' }} icon="" >+</Avatar>
                    </Avatar.Group>
                </div>
                <div>
                    <Row gutter={[20, 20]}>
                        <Col className="gutter-row" xxl={8} xl={8} lg={8} md={8} sm={12} xs={24}>
                            <div className='  rounded task-box-one'>
                                <div className='p-3 d-flex justify-content-between align-items-center'>
                                    <Typography.Title className="grey-color fs-16 fw-500" level={5} style={{ margin: 0, }}>
                                        Toda(03)
                                    </Typography.Title>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            <BsThreeDots className='fs-20' />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className='p-3'>
                                    <Button className='w-100 text-white' size={'large'} style={{ background: "#038edc" }}>
                                        + Add New
                                    </Button>
                                </div>
                                <div className='p-3'>
                                    <div className='task-box rounded bg-white mb-3'>
                                        <div className='p-3 border-bottom'>
                                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                                <Checkbox style={{ color: "#038edc" }} onChange={onChange}>DS-045</Checkbox>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                        <BsThreeDots style={{ color: "#038edc" }} className='fs-20' />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">View</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Remove</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div>
                                                <Typography.Title className="grey-color fs-14 fw-500" level={5} style={{ margin: 0, }}>
                                                    Dashboard UI
                                                </Typography.Title>
                                                <Paragraph className='fs-14 light-grey'>Sed ut perspiciatis unde omnis iste.</Paragraph>
                                            </div>
                                            <div>
                                                <Avatar style={{ backgroundColor: '#038edc' }} icon="" >E</Avatar>

                                            </div>
                                        </div>
                                        <div className='p-3 d-flex justify-content-between align-items-center'>
                                            <Paragraph className='fs-14 m-0 light-grey'>09 Mar, 2020</Paragraph>
                                            <Tag color="blue">Open</Tag>
                                        </div>
                                    </div>
                                    <div className='task-box rounded bg-white mb-3'>
                                        <div className='p-3 border-bottom'>
                                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                                <Checkbox style={{ color: "#038edc" }} onChange={onChange}>DS-046</Checkbox>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                        <BsThreeDots style={{ color: "#038edc" }} className='fs-20' />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">View</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Remove</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div>
                                                <Typography.Title className="grey-color fs-14 fw-500" level={5} style={{ margin: 0, }}>
                                                    Calendar App Page
                                                </Typography.Title>
                                                <Paragraph className='fs-14 light-grey'>Neque porro quisquam est.</Paragraph>
                                            </div>
                                            <div>

                                                <Avatar.Group>
                                                    <Avatar src={imgavtar} />
                                                    <Avatar style={{ backgroundColor: '#038edc' }} icon="" >E</Avatar>
                                                </Avatar.Group>
                                            </div>
                                        </div>
                                        <div className='p-3 d-flex justify-content-between align-items-center'>
                                            <Paragraph className='fs-14 m-0 light-grey'>08 Mar, 2020</Paragraph>
                                            <Tag color="blue">Open</Tag>
                                        </div>
                                    </div>
                                    <div className='task-box rounded bg-white mb-3'>
                                        <div className='p-3 border-bottom'>
                                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                                <Checkbox style={{ color: "#038edc" }} onChange={onChange}>DS-046</Checkbox>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                        <BsThreeDots style={{ color: "#038edc" }} className='fs-20' />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">View</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Remove</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div>
                                                <Typography.Title className="grey-color fs-14 fw-500" level={5} style={{ margin: 0, }}>
                                                    Authentication Page Design
                                                </Typography.Title>
                                                <Paragraph className='fs-14 light-grey'>In enim justo rhoncus ut.</Paragraph>
                                            </div>
                                            <div>
                                                <Avatar style={{ backgroundColor: '#f34e4e' }} icon="" >E</Avatar>

                                            </div>
                                        </div>
                                        <div className='p-3 d-flex justify-content-between align-items-center'>
                                            <Paragraph className='fs-14 m-0 light-grey'>08 Mar, 2020</Paragraph>
                                            <Tag color="blue">Open</Tag>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col className="gutter-row"xxl={8} xl={8} lg={8} md={8} sm={12} xs={24}>
                            <div className='  rounded task-box-one'>
                                <div className='p-3 d-flex justify-content-between align-items-center'>
                                    <Typography.Title className="grey-color fs-16 fw-500" level={5} style={{ margin: 0, }}>
                                        Toda(03)
                                    </Typography.Title>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            <BsThreeDots className='fs-20' />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className='p-3'>
                                    <Button className='w-100 text-white' size={'large'} style={{ background: "#038edc" }}>
                                        + Add New
                                    </Button>
                                </div>
                                <div className='p-3'>
                                    <div className='task-box rounded bg-white mb-3'>
                                        <div className='p-3 border-bottom'>
                                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                                <Checkbox style={{ color: "#038edc" }} onChange={onChange}>DS-044</Checkbox>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                        <BsThreeDots style={{ color: "#038edc" }} className='fs-20' />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">View</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Remove</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div>
                                                <Typography.Title className="grey-color fs-14 fw-500" level={5} style={{ margin: 0, }}>
                                                    Component Pages       </Typography.Title>
                                                <Paragraph className='fs-14 light-grey'>Donec quam felis ultricies nec.</Paragraph>
                                            </div>
                                            <div>
                                                <Avatar src={imgavtar} icon="" />

                                            </div>
                                        </div>
                                        <div className='p-3 d-flex justify-content-between align-items-center'>
                                            <Paragraph className='fs-14 m-0 light-grey'>09 Mar, 2020</Paragraph>
                                            <Tag color="gold">Inprogress</Tag>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col className="gutter-row"xxl={8} xl={8} lg={8} md={8} sm={12} xs={24}>
                            <div className='  rounded task-box-one'>
                                <div className='p-3 d-flex justify-content-between align-items-center'>
                                    <Typography.Title className="grey-color fs-16 fw-500" level={5} style={{ margin: 0, }}>
                                        Toda(03)
                                    </Typography.Title>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            <BsThreeDots className='fs-20' />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className='p-3'>
                                    <Button className='w-100 text-white' size={'large'} style={{ background: "#038edc" }}>
                                        + Add New
                                    </Button>
                                </div>
                                <div className='p-3'>
                                    <div className='task-box rounded bg-white mb-3'>
                                        <div className='p-3 border-bottom'>
                                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                                <Checkbox style={{ color: "#038edc" }} onChange={onChange}>DS-041</Checkbox>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                        <BsThreeDots style={{ color: "#038edc" }} className='fs-20' />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">View</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Remove</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div>
                                                <Typography.Title className="grey-color fs-14 fw-500" level={5} style={{ margin: 0, }}>
                                                    Admin Layout Design
                                                </Typography.Title>
                                                <Paragraph className='fs-14 light-grey'>At vero eos et accusamus et .</Paragraph>
                                            </div>
                                            <div>

                                                <Avatar.Group>
                                                    <Avatar src={imgavtar} />
                                                    <Avatar style={{ backgroundColor: '#5fd0f3' }} icon="" >L</Avatar>
                                                </Avatar.Group>

                                            </div>
                                        </div>
                                        <div className='p-3 d-flex justify-content-between align-items-center'>
                                            <Paragraph className='fs-14 m-0 light-grey'>06 Mar, 2020</Paragraph>
                                            <Tag color="green">Completed</Tag>
                                        </div>
                                    </div>
                                    <div className='task-box rounded bg-white mb-3'>
                                        <div className='p-3 border-bottom'>
                                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                                <Checkbox style={{ color: "#038edc" }} onChange={onChange}>DS-042</Checkbox>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                        <BsThreeDots style={{ color: "#038edc" }} className='fs-20' />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">View</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Remove</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div>
                                                <Typography.Title className="grey-color fs-14 fw-500" level={5} style={{ margin: 0, }}>
                                                Brand Logo Design 
                                                </Typography.Title>
                                                <Paragraph className='fs-14 light-grey'>Nemo enim ipsam voluptatem.</Paragraph>
                                            </div>
                                            <div>

                                                <Avatar style={{ backgroundColor: '#038edc' }} icon="" >E</Avatar>
                                            </div>
                                        </div>
                                        <div className='p-3 d-flex justify-content-between align-items-center'>
                                            <Paragraph className='fs-14 m-0 light-grey'>07 Mar, 2020</Paragraph>
                                            <Tag color="green">Completed</Tag>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Col>

                    </Row>
                </div>

            </div>
        </div>
    )
}