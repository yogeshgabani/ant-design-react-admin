
import { Avatar, Button, Form, Input, Typography } from 'antd';
import logo_image from "../../Assets/icon/logo.png";
import accimg from "../../Assets/icon/t7.jpg";
import { LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Lockscreen() {
    return (
        <div className="bg-image overflow-y-hidden">
            <div className="bg-overlay main-part">
                <div className="container">
                    <div className="d-flex flex-column justify-content-center align-items-center px-3 pt-4">
                        <div className="width-input">
                            <div className="logo-img text-center">
                                <img src={logo_image} alt="" />
                            </div>
                            <div className="text-center">
                                <Avatar size={90} src={<img src={accimg} alt="avatar" />} />
                                <Typography.Title className="grey-color fs-16 fw-500 mt-2 mb-4" level={5} style={{ margin: 0, }}>
                                    Kate Dudley
                                </Typography.Title>
                            </div>
                            <div>
                                <Form>
                                    <div className="position-relative mb-3">
                                        {/* <label className="hello">Email</label> */}
                                        <Input type="password" className='input-text' placeholder="Password" />
                                        <LockOutlined className="icon-singup" />
                                    </div>
                                    <Link to="/maincontant">
                                        <Button className="login-btn w-100" type="">Unlock</Button>
                                    </Link>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}