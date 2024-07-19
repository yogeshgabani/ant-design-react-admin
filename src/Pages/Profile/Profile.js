import { Avatar, Breadcrumb, Button, Form, Input } from "antd";
import '../../Pages/Profile/Profile.css';
import { Typography } from 'antd';
import accimg from '../../Assets/icon/acc.jpg';
import { useState } from "react";
const { Text } = Typography;

export default function Profile() {

    const [alert, setalert] = useState(false)
    const button = () => {
        setalert(!alert)
    };


    return (
        <div className="">
            <div className="main-homepage">
                <div className="d-flex justify-content-between align-items-center pb-4">
                    <Typography.Title className="title-acc fs-18 fw-500" level={5} style={{ margin: 0, }}>
                        Profile
                    </Typography.Title>
                    <Breadcrumb className="breadcrumb m-0"
                        items={[
                            { href: '', title: "dashonic", }, 
                            {
                                title: 'Profile',
                            },
                        ]}
                    />
                </div>
                <div className={alert ? "fs-14 px-4 py-3 alert alert-success fade  show" : "d-none"}>
                Profile Updated Successfully
                </div>
                <div className="revenue-box rounded p-sm-3 p-2 bg-white d-flex">
                    <div className="ms-sm-3 ms-0">
                        <Avatar size={66} src={<img className="rounded-circle p-1" style={{ border: "1px solid #eff0f2", background: "#f7f8fa" }} src={accimg} alt="avatar" />} />
                    </div>
                    <div className="d-flex flex-column ms-3">
                        <Typography.Title className="title-acc fs-18 fw-500 mb-2" level={2} style={{ margin: 0, }}>
                            Admin
                        </Typography.Title>
                        <Text className="light-grey">admin@themesbrand.com</Text>
                        <Text className="light-grey">Id no: #</Text>
                    </div>
                </div>
                <Typography.Title className="title-acc fs-16 fw-500 mb-2 mt-4" level={2} style={{ margin: 0, }}>
                    Change User Name
                </Typography.Title>
                <div className="revenue-box rounded mt-4 p-sm-3 p-2 bg-white">
                    <div className=" ms-3 updat-user">
                        <Form name="trigger" layout="vertical" autoComplete="off">
                            <Form.Item className="fw-500"
                                hasFeedback
                                label="User Name"
                                name="field_a"
                                validateTrigger="onBlur"
                                rules={[{ max: 3 }]}
                            >
                                <Input placeholder="Admin" />
                            </Form.Item>
                        </Form>
                    </div>
                    <div className="d-flex justify-content-center mt-4 mb-2">
                        <Button className="px-3 py-2 d-flex justify-content-center align-items-center" type="primary" danger style={{height: "40px"}} onClick={button}>Update User Name</Button>
                    </div>

                </div>
            </div>


        </div>
    )
}