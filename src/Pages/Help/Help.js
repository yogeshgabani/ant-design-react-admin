

import { CiMail } from 'react-icons/ci';
import '../../Pages/Help/Help.css';
import { Avatar, Button, Col, Collapse, Input, Row, Typography } from 'antd';
import { FaTwitter } from 'react-icons/fa';
import { BsQuestionCircle } from 'react-icons/bs';
import { IoLogoUsd } from 'react-icons/io5';
import { TbCircleKey } from 'react-icons/tb';


const { Paragraph, Text } = Typography;


export default function Help() {


    const items = [
        {
            key: '1',
            label: 'What is Lorem Ipsum ?',
            children: <p>To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what occidental separate existence.</p>,
        },
        {
            key: '2',
            label: 'Why do we use it ?',
            children: <p>To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what occidental separate existence.</p>,
        },
        {
            key: '3',
            label: 'Where does it come from ?',
            children: <p>For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation.</p>,
        },
    ]
    const items2 = [
        {
            key: '1',
            label: 'Where can I get some ?',
            children: <p>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages</p>,
        },
        {
            key: '2',
            label: 'Why do we use it ?',
            children: <p>To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what occidental separate existence.</p>,
        },
        {
            key: '3',
            label: 'Where does it come from ?',
            children: <p>For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation.</p>,
        },
        {
            key: '4',
            label: 'What is Lorem Ipsum ?',
            children: <p>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages</p>,
        },
    ]
    const items3 = [
        {
            key: '1',
            label: 'Where does it come from ?',
            children: <p>To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what occidental separate existence.</p>,
        },
        {
            key: '2',
            label: 'Why do we use it ?',
            children: <p>To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what occidental separate existence.</p>,
        },
    ]



    return (
        <div className="main-homepage ">
            <div className="bg-help position-relative p-5 mt-n4 mx-n4">
                <div className='bg-overlay11 bg-gradient bg-dark'></div>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='help-title text-center'>
                        <Typography.Title className="text-white fs-18 fw-500" level={5} style={{ margin: 0, }}>
                            How can we help you?
                        </Typography.Title>
                        <Paragraph className='fs-14'>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual</Paragraph>
                        <div className='d-flex justify-content-center align-items-center'>
                            <Button className='me-2' type="primary" size={'large'}>
                                <CiMail className='me-2' />Email Us
                            </Button>
                            <Button className='btn btn-info text-white' size={'large'}>
                                <FaTwitter className='me-2' />Send us atweet
                            </Button>
                        </div>
                        <div className='my-5 d-flex align-items-center'>
                            <Input className='rounded-start' size='large' placeholder="Find keywords to find answer" />
                            <Button className='rounded-end' type="primary" size={'large'}>
                                Search
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-n4'>
                <Row gutter={[20, 20]}>
                    <Col xl={8} lg={12} md={12} sm={12} >
                        <div className='card-h-100 rounded bg-white'>
                            <div className='card-header d-flex align-items-center'>
                                <Avatar size={32} className='me-2' style={{ background: "#038edc" }} icon={<BsQuestionCircle className='fs-18' />} />
                                <Typography.Title className="grey-color fs-14 mb-0 fw-500" level={5} style={{ margin: 0, }}>
                                    General Questions
                                </Typography.Title>
                            </div>
                            <div className='p-4 accordion-menu'>
                                <Collapse accordion items={items} defaultActiveKey={['1']} />
                            </div>
                        </div>
                    </Col>
                    <Col xl={8} lg={12} md={12} sm={12} >
                        <div className='card-h-100 rounded bg-white'>
                            <div className='card-header d-flex align-items-center'>
                                <Avatar size={32} className='me-2' style={{ background: "#038edc" }} icon={<TbCircleKey className='fs-18' />} />
                                <Typography.Title className="grey-color fs-14 mb-0 fw-500" level={5} style={{ margin: 0, }}>
                                    Privacy Policy
                                </Typography.Title>
                            </div>
                            <div className='p-4 accordion-menu'>
                                <Collapse accordion items={items2} defaultActiveKey={['1']} />
                            </div>
                        </div>
                    </Col>
                    <Col xl={8} lg={12} md={12} sm={12} >
                        <div className='card-h-100 rounded bg-white'>
                            <div className='card-header d-flex align-items-center'>
                                <Avatar size={32} className='me-2' style={{ background: "#038edc" }} icon={<IoLogoUsd className='fs-18' />} />
                                <Typography.Title className="grey-color fs-14 mb-0 fw-500" level={5} style={{ margin: 0, }}>
                                    Pricing & Plans
                                </Typography.Title>
                            </div>
                            <div className='p-4 accordion-menu'>
                                <Collapse accordion items={items3} defaultActiveKey={['1']} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}