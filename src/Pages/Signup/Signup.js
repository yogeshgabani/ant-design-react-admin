
import "../Signup/Signup.css";
import logo_image from "../../Assets/icon/logo.png";
import { Button, Form, Input, Typography } from 'antd';
import { HeartFilled, LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Text } = Typography;

export default function Signup() {
    return (
        <>
            <div className="bg-image overflow-y-hidden">
                <div className=" bg-overlay">
                    <div className="container">
                        <div className="d-flex flex-column justify-content-center align-items-center vh-100 px-3 pt-4">
                            <div className="text-center width-input">

                                <div className="logo-img text-center">
                                    <img src={logo_image} alt="" />
                                </div>
                                <div className='login-title text-center mb-5'>
                                    <Typography.Title level={5}>Register Account</Typography.Title>
                                    <Text>Get your free Dashonic account now.</Text>
                                </div>
                                <Form>
                                    <div className="position-relative mb-3">
                                        {/* <label className="hello">Email</label> */}
                                        <Input className='input-text' placeholder="Email" />
                                        <MailOutlined className="icon-singup" />
                                    </div>
                                    <div className="position-relative mb-3">
                                        {/* <label className="hello">Email</label> */}
                                        <Input className='input-text' placeholder="Username" />
                                        <UserOutlined className="icon-singup" />
                                    </div>
                                    <div className="position-relative mb-3">
                                        {/* <label className="hello">Email</label> */}
                                        <Input className='input-text' placeholder="Password" />
                                        <LockOutlined className="icon-singup" />
                                    </div>
                                    <div className="text-tnc mb-3">
                                        <Text>Sign in to continue to Dashonic. <a className="text-decoration-underline" href="#" target="_blank" rel="noopener noreferrer">Terms of Use</a></Text>
                                    </div>
                                    <Button className="login-btn w-100" type="">Register</Button>
                                </Form>
                                <div className="mt-5 text-tnc mb-3">
                                    <Link to="/">
                                        <Text className="">Already have an account?<a className="text-decoration-underline fw-medium" href="#" target="_blank" rel="noopener noreferrer"> Signin </a></Text>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className="text-center p-4">
                                <Text className="footer-copyright">© 2024 Dashonic. Crafted with by <HeartFilled className="text-danger" /> Pichforest</Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}