import "../Resetpassword/Resetpassword.css";
import logo_image from "../../Assets/icon/logo.png";
import { Button, Form, Input, Typography } from "antd";
import { CheckCircleFilled, LockFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Text } = Typography;

export default function Resetpassword() {
    return (
        <>
            <div className="bg-image overflow-y-hidden">
                <div className=" bg-overlay">
                    <div className="container">
                        <div className="d-flex flex-column  justify-content-center align-items-center vh-100 px-3 pt-4 ">

                            <div className="text-center width-input">
                                <div className="logo-img text-center">
                                    <img src={logo_image} alt="" />
                                </div>
                                <div className='login-title text-center mb-5'>
                                    <Typography.Title level={5}>Forgot Password</Typography.Title>
                                    <Text>Forgot Your Password?</Text>
                                </div>

                                <Form>
                                    <div className="position-relative mb-3">
                                        {/* <label className="hello">Email</label> */}
                                        <Input className='input-text' placeholder="New Password" />
                                        <LockFilled className="icon-singup" />
                                    </div>
                                    <div className="position-relative mb-3">
                                        {/* <label className="hello">Email</label> */}
                                        <Input className='input-text' placeholder="New Password" />
                                        <CheckCircleFilled className="icon-singup" />
                                    </div>
                                    <Button className="login-btn w-100" type="">Reset</Button>
                                </Form>
                                <div className="mt-5 text-tnc mb-3">
                                    <Link to="/">
                                        <Text className="">Remenber it?<a className="text-decoration-underline fw-medium" href="#" target="_blank" rel="noopener noreferrer"> Signin </a></Text>
                                    </Link>
                                </div>

                            </div>

                        </div>
                    </div>
                </div >
            </div >

        </>
    );
}