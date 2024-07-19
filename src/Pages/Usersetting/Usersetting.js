import { Avatar, Breadcrumb, Button, Col, Form, Input, Row, Select} from 'antd';
import '../../Pages/Usersetting/Usersetting.css';
import { Typography } from 'antd';
import accimg from '../../Assets/icon/acc.jpg';
import { MdEdit, MdModeEdit } from 'react-icons/md';
import TextArea from 'antd/es/input/TextArea';
import { useState } from 'react';
const { Paragraph } = Typography;

export default function Usersetting() {


    const OPTIONS = ['Illustrator', 'HTML', 'CSS', 'Javascript', 'Photoshop', "Figma", 'Php', 'Python'];
    const [selectedItems, setSelectedItems] = useState([]);
    const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

    return (
        <div className="main-homepage">
            <div className="d-flex justify-content-between align-items-center pb-4">
                <Typography.Title className="title-acc fs-18 fw-500" level={5} style={{ margin: 0, }}>
                    User Setting
                </Typography.Title>
                <Breadcrumb className="breadcrumb m-0"
                    items={[
                        { href: '', title: "Apps", },
                        {
                            title: 'User Setting',
                        },
                    ]}
                />
            </div>
            <Row gutter={[10, 20]}>
                <Col xxl={6} xl={7} lg={8} md={8} sm={24} xs={24} >
                    <div className='profile-section bg-white' style={{height: "1021px"}}>
                        <div className='profile-bg position-relative'>
                            <div className='bg-overlay1 bg-gradient1 bg-dark'></div>
                            <div className='p-3 text-end'>
                                <Button type="primary" >
                                    <MdModeEdit className='me-2' />Edit
                                </Button>
                            </div>
                        </div>
                        <div className='text-center'>
                            <div className='mt-n5 mb-4 position-relative d-inline-block mx-auto'>
                                <div>
                                    <Avatar size={75} src={<img src={accimg} className='p-1 img-thumbnail rounded-circle' alt="avatar" />} />
                                </div>
                                <a href="#" className='position-absolute bottom-0 end-0'>
                                    <div>
                                        <Avatar style={{ background: '#f5f6f8' }} size={30} icon={<MdEdit style={{ color: "#038edc" }} />} />
                                    </div>
                                </a>
                            </div>
                            <Typography.Title className="grey-color fs-16 fw-500 mb-1" level={5} style={{ margin: 0, }}>
                                Katie Sharpe
                            </Typography.Title>
                            <Paragraph className='light-grey fs-14'>Full Stack Developer</Paragraph>
                        </div>
                        <hr className='my-4'></hr>
                        <div>
                            <Typography.Title className="grey-color fs-16 fw-500 mb-1" level={5} style={{ margin: 0, }}>
                                Info:
                            </Typography.Title>
                            <div className='mt-4'>
                                <Paragraph className='light-grey fs-14 m-0'>Name :</Paragraph>
                                <Typography.Title className="grey-color fs-14 fw-500 mb-1" level={5} style={{ margin: 0, }}>
                                    Katie Sharpe
                                </Typography.Title>
                            </div>
                            <div className='mt-4'>
                                <Paragraph className='light-grey fs-14 m-0'>Email :</Paragraph>
                                <Typography.Title className="grey-color fs-14 fw-500 mb-1" level={5} style={{ margin: 0, }}>
                                    katie@dashonic.com
                                </Typography.Title>
                            </div>
                            <div className='mt-4'>
                                <Paragraph className='light-grey fs-14 m-0'>Location :</Paragraph>
                                <Typography.Title className="grey-color fs-14 fw-500 mb-1" level={5} style={{ margin: 0, }}>
                                    California, United States
                                </Typography.Title>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col  xxl={18} xl={17} lg={16} md={16} sm={24} xs={24} >
                    <div className='profile-section bg-white'>
                        <Typography.Title className="fs-16 grey-color fw-500 mb-4" level={5} style={{ margin: 0, }}>
                            Setting
                        </Typography.Title>
                        <div>
                            <div className='border rounded-1 mb-4'>
                                <div className='setting-header d-flex align-items-center border-bottom'>
                                    <Avatar className='me-3' style={{ background: "#038edc" }} size={32} />
                                    <Typography.Title className="fs-16 grey-color fw-500" level={5} style={{ margin: 0, }}>
                                        General Info
                                    </Typography.Title>
                                </div>
                                <div className='setting-text p-20'>
                                    <Row gutter={[20, 20]}>
                                        <Col className="gutter-row" md={12}>
                                            <Form.Item className='flex-column mb-0' label="Name">
                                                <Input placeholder="Enter Name" />
                                            </Form.Item>
                                        </Col>
                                        <Col className="gutter-row" md={12}>
                                            <Form.Item className='flex-column mb-0' label="Designation">
                                                <Input placeholder="Enter Designation" />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Form.Item className='mb-0' label="Description">
                                        <TextArea rows={4} />
                                    </Form.Item>
                                    <Form.Item className='m-0' label="Skills">
                                        <Select
                                            mode="multiple"
                                            placeholder="Select Your Skills"
                                            value={selectedItems}
                                            onChange={setSelectedItems}
                                            style={{
                                                width: '100%',
                                            }}
                                            options={filteredOptions.map((item) => ({
                                                value: item,
                                                label: item,
                                            }))}
                                        />
                                    </Form.Item>
                                </div>

                            </div>
                            <div className='border rounded-1 mb-4'>
                                <div className='setting-header d-flex align-items-center border-bottom'>
                                    <Avatar className='me-3' style={{ background: "#038edc" }} size={32} />
                                    <Typography.Title className="fs-16 grey-color fw-500" level={5} style={{ margin: 0, }}>
                                        Contact Info
                                    </Typography.Title>
                                </div>
                                <div className='setting-text p-20'>
                                    <Form.Item className='mb-0' label="Email">
                                        <Input placeholder="Enter Email" />
                                    </Form.Item>
                                    <Row gutter={[20, 20]}>
                                        <Col className="gutter-row" md={12}>
                                            <Form.Item className='flex-column mb-0' label="Website">
                                                <Input placeholder="Enter Your Website" />
                                            </Form.Item>
                                        </Col>
                                        <Col className="gutter-row" md={12}>
                                            <Form.Item className='flex-column mb-0' label="Location">
                                                <Input placeholder="Enter Address" />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </div>

                            </div>
                            <div className='border rounded-1'>
                                <div className='setting-header d-flex align-items-center border-bottom'>
                                    <Avatar className='me-3' style={{ background: "#038edc" }} size={32} />
                                    <Typography.Title className="fs-16 grey-color fw-500" level={5} style={{ margin: 0, }}>
                                        Experience
                                    </Typography.Title>
                                </div>
                                <div className='setting-text p-20'>

                                    <Row gutter={[20, 20]}>
                                        <Col className="gutter-row" md={12}>
                                            <Form.Item className='flex-column mb-0' label="Designation">
                                                <Input placeholder="Enter Title" />
                                            </Form.Item>
                                        </Col>
                                        <Col className="gutter-row" md={12}>
                                            <Form.Item className='flex-column mb-0' label="Company">
                                                <Input placeholder="Enter Company Name" />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Form.Item className='mb-0' label="Year">
                                        <Input />
                                    </Form.Item>
                                </div>

                            </div>
                        </div>
                        <div className='d-flex justify-content-end'>
                        <Button type="primary" className='mt-3'  size={32}>
                           Submit
                        </Button>
                        </div>
                    </div>
                </Col>


            </Row>

        </div>
    )
}