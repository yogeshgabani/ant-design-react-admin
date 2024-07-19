import React from 'react';
import "../Login/Login.css";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Typography } from 'antd';
import logo_image from "../../Assets/icon/logo.png";
import { Link } from 'react-router-dom';
const { Title, Text } = Typography;


export default function Login() {
    return (
        <>
            <div className="bg-image overflow-y-hidden">
                <div className="bg-overlay main-part">
                    {/* <div className="login-data">
                        <div className="logo-img text-center">
                            <img src={logo_image} alt="" />
                        </div>
                        <div className="login_title text-center">
                            <h5>Welcome Back !</h5>
                            <p>Sign in to continue to Dashonic.</p>
                        </div>
                        <div className='position-relative user-input w-100 mb-16'>
                            <input className='username w-100' type="email" />
                            <Input className='username w-100' type="email" placeholder="Basic usage" />
                            <label className='position-absolute' htmlFor="login">Username</label>
                            <UsergroupAddOutlined className='position-absolute user-icon' />
                        </div>
                        <div className='position-relative user-input w-100 mb-16'>
                            <Input className='username w-100' type="password" />
                            <label className='position-absolute' htmlFor="login">Password</label>
                            <LockOutlined className='position-absolute user-icon' />
                        </div>
                        <Checkbox className='checkbox'>Remember me</Checkbox>
                        <div className='mt-24'>
                            <Button className='login-btn' type=" w-100">Log In</Button>
                        </div>
                        <div className='forget-link mt-24 text-center'>
                            <a href="#">Forgot your password?</a>
                        </div>
                        <div className='sign-up-link text-center'>
                            <p>Don't have an account ? <a href="#">Signup</a> </p>

                        </div>
                    </div> */}
                    <div className="container">
                        <div className="d-flex flex-column justify-content-center align-items-center px-3 pt-4">
                            <div className="width-input">

                                <div className="logo-img text-center">
                                    <img src={logo_image} alt="" />
                                </div>
                                <div className='login-title text-center mb-5'>
                                    <Title level={5}>Welcome Back !</Title>
                                    <Text>Sign in to continue to Dashonic.</Text>
                                </div>
                                <div>
                                    {/* <Form name="basic" labelCol={{ span: 8, }} wrapperCol={{ span: 16, }} style={{ maxWidth: 600, }} initialValues={{ remember: true, }}>
                                        <Form.Item className='labelname' label="Username" name="username" rules={[
                                            { required: true, message: 'Please input your username!', },]}>
                                            <Input className='username' />
                                        </Form.Item>

                                        <Form.Item label="Password" name="password" rules={[
                                            { required: true, message: 'Please input your password!', },]}>
                                            <Input.Password className='username' />
                                        </Form.Item>

                                        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16, }}>
                                            <Checkbox>Remember me</Checkbox>
                                        </Form.Item>
                                        <Button type="" className='login-btn w-100' htmlType="submit">Submit</Button>
                                    </Form> */}
                                    <Form>
                                        <div className="position-relative mb-3">
                                            {/* <label className="hello">Email</label> */}
                                            <Input className='input-text' placeholder="Email" />
                                            <UserOutlined className="icon-singup" />
                                        </div>
                                        <div className="position-relative mb-3">
                                            {/* <label className="hello">Email</label> */}
                                            <Input type='password' className='input-text' placeholder="Password" />
                                            <LockOutlined className="icon-singup" />
                                        </div>
                                        <Form.Item name="remember" valuePropName="checked">
                                            <Checkbox>Remember me</Checkbox>
                                        </Form.Item>
                                        <Link to="/maincontant">
                                            <Button className="login-btn w-100" type="">Submit</Button>
                                        </Link>
                                        <div className='text-center mt-4'>
                                            <Link to="/forgot">
                                                <a className='forgot-link  text-text-decoration-underline' href="#">Forgot your password?</a>
                                            </Link>
                                        </div>
                                    </Form>
                                </div>
                                <div className='text-center mt-4 text-tnc'>
                                    <Link to="/signup">
                                        <Text className='create-link'>Don't have an account ?<a className='forgot-link fw-medium text-text-decoration-underline' href="#"> Signup</a></Text>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}