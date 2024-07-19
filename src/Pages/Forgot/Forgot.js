import "../Forgot/Forgot.css";
import logo_image from "../../Assets/icon/logo.png";
import { Button, Form, Input, Typography } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";


const { Text } = Typography;


export default function Forgot() {
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
                                        <Typography.Title level={5}>Reset Password</Typography.Title>
                                        <Text>Re-Password with Dashonic.</Text>
                                    </div>
                                    <div className="text-center mb-4 text-success px-3 py-2 border border-success rounded bg-">
                                        <Text className="text-success">Enter your Email and instructions will be sent to you!</Text>
                                    </div>
                                    <Form>
                                        <div className="position-relative mb-3">
                                            {/* <label className="hello">Email</label> */}
                                            <Input className='input-text' placeholder="Email" />
                                            <MailOutlined className="icon-singup" />
                                        </div>
                                        <Link to="/resetpassword">
                                        <Button className="login-btn w-100" type="">Send Request</Button>
                                        </Link>
                                    </Form>

                                </div>
                           
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}