import { Avatar, Breadcrumb, Col, Progress, Row, Table, Tag, Typography } from 'antd';
import { Dropdown } from 'react-bootstrap';
import { MdKeyboardArrowDown } from 'react-icons/md';
import '../../Pages/Analytics/Analytics.css';
import { GoArrowUpRight } from 'react-icons/go';
import Chart from 'react-apexcharts';
import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { FaChartArea, FaChrome, FaEdge, FaFirefox, FaHourglassStart, FaSafari, FaStopwatch, FaUser } from 'react-icons/fa';
import { FiArrowDownLeft } from 'react-icons/fi';
import f1img from "../../Assets/icon/f1.jpg";
import f2img from "../../Assets/icon/f2.jpg";
import f3img from "../../Assets/icon/f3.jpg";
import f4img from "../../Assets/icon/f4.jpg";

const { Paragraph, Text } = Typography;

export default function Analytics() {

    const [area, setarea] = useState({
        series: [{
            type: 'area',
            data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 47, 54]
        }],
        options: {
            chart: {
                type: 'area',
                height: 350,
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            fill: {
                type: 'solid',
                opacity: [0.35, 1],

            },


            colors: ['#4285F4'],

            xaxis: {
                type: 'date',
                categories: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan"]
            },

            tooltip: {
                x: {
                    format: 'dd/MM'
                },
            },
            yaxis: {
                // opposite: true
            },
            legend: {
                horizontalAlign: 'left'
            }
        }
    })

    // chart-1
    const [chart1, setchart1] = useState({
        series: [{
            name: "Desktops",
            data: [21, 65, 32, 80, 42, 25]
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            }
        },
    })

    // chart-2
    const [chart2, setchart2] = useState({
        series: [{
            name: "Desktops",
            data: [40, 30, 51, 33, 63, 50]
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            }
        },
    })

    // chart-3
    const [chart3, setchart3] = useState({
        series: [{
            name: "Desktops",
            data: [21, 55, 32, 80, 42, 25]
        }],
        options: {
            chart: {
                height: 350,
                type: 'area',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            }
        },
    })

    //chart-4 pie chart

    const options1 = {
        chart: {
            type: 'donut',
        },
        dataLabels: {
            enabled: false
        },
        labels: ["Social", "Direct", "Other"],
        colors: ["#038edc", "#dfe2e6", "#5fd0f3"],
        legend: {
            position: 'bottom'
        },

    };

    const series1 = [44, 25, 19]

    // colum chart-4
    const [column, setcolumn] = useState({
        series: [{
            name: 'Previous Month',
            data: ["25.5k", "22.4k", "38.2k", "30.5k", "26.4k", "30.4k"]
        }, {
            name: 'This Month',
            data: ["36.5k", "12.5k", "20.2k", "18.5k", "40.4k", "25.4k"]
        },],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                toolbar: {
                    show: true
                },
                zoom: {
                    enabled: true
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0
                    }
                }
            }],
            dataLabels: {
                formatter: (val) => {
                    return val + 'K'
                }
            },
            dataLabels: {
                enabled: false,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    borderRadius: 8,
                    columnWidth: '30%',
                    borderRadiusApplication: 'end', // 'around', 'end'
                    borderRadiusWhenStacked: 'last', // 'all', 'last'
                    horizontal: false,
                    dataLabels: {
                        total: {
                            style: {
                                fontSize: '8px',
                            }
                        }
                    }
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
                //    labels: { show: false }

            },
            yaxis: {

                tickAmount: 2, // Adjust this value as needed
                labels: {
                    formatter: function (val) {
                        if (val === 1) return '1k';
                        if (val === 35) return '35k';
                        if (val === 70) return '70k';
                        return `${val}k`;
                    }
                },
                min: 0,
                max: 70,
                // show: false, 
            },

            colors: ['#90CAF9', '#4285F4'],
            fill: {
                opacity: 1,

            }
        },
    })


    // main chart
    const options = {
        chart: {
            type: 'area',
            height: 350
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: [
                '2022-01-01', '2022-01-02', '2022-01-03', '2022-01-04', '2022-01-05',
                '2022-01-06', '2022-01-07', '2022-01-08', '2022-01-09', '2022-01-10',
                '2022-01-11', '2022-01-12'
            ],
            labels: {
                format: 'dd MMM'
            }
        },
        yaxis: {
            labels: {
                formatter: function (val) {
                    return val.toFixed(0);
                }
            }
        },
        tooltip: {
            x: {
                format: 'dd MMM'
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100]
            }
        },
        colors: ['#4285F4']
    };

    const series = [
        {
            name: "Data",
            data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 47, 54]
        }
    ];


    // table

    const columns = [
        {
          title: 'Sources',
          dataIndex: 'source',
          render: (text, stat) => {
            return (
                <h5  className="grey-color fs-14 m-0">{stat.source}</h5>  
            )
          }
        },
        {
          title: 'Sessions',
          dataIndex: 'session',
          render: (text, stat) => {
            return (
                <p className="fs-14 light-grey m-0">{stat.session}</p>
            )
          }
        },
        {
          title: 'Users',
          dataIndex: 'user',
          render: (text, stat) => {
            return (
                <p className="fs-14 light-grey m-0">{stat.user}</p>
            )
          }
        },
        {
            title: 'Bounce Rate',
            dataIndex: 'bounce',
            render: (text, stat) => {
                return (
                    <Text style={{color: '#51d28c'}} className="fs-14">{stat.bounce}</Text>
                 
                )
              }
          },
      ];

      const data = [
        {
          key: '1',
          source: 'Social',
          session: 648,
          user: 432,
          bounce: '23.38%'
        },
        {
            key: '2',
            source: 'Direct',
            session: 524,
            user: 385,
            bounce: '23.38%'
          },
          {
            key: '3',
            source: 'Email',
            session: 432,
            user: 390,
            bounce: '23.38%'
          },
          {
            key: '4',
            source: 'Referral',
            session: 521,
            user: 423,
            bounce: '23.38%'
          },
          {
            key: '5',
            source: 'Others',
            session: 602,
            user: 553,
            bounce: '23.38%'
          },
        
      ];


    return (
        <div>
            <div className="main-homepage">
                <div className="d-flex justify-content-between align-items-center pb-4">
                    <Typography.Title className="title-acc fs-18 fw-500" level={5} style={{ margin: 0, }}>
                        Analytics
                    </Typography.Title>
                    <Breadcrumb className="breadcrumb m-0"
                        items={[
                            { href: '', title: "dashonic", },
                            {
                                title: 'Analytics',
                            },
                        ]}
                    />
                </div>
                <Row gutter={[20, 20]}>
                    <Col xxl={18} xl={17} lg={17} md={24} sm={24} xs={24}>
                        <div className='revenue-box bg-white rounded'>
                            <div className="d-flex justify-content-between align-items-center border-bottom p-3">
                                <Typography.Title className="grey-color fs-16 fw-500 m-0 text-capitalize">daily active users</Typography.Title>
                                <Dropdown className="d-flex align-items-center fs-14">Sort By :
                                    <Dropdown.Toggle className="light-grey" variant="success" id="dropdown-basic">
                                        Yearly<MdKeyboardArrowDown className="fs-14" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item className="light-grey" href="#/action-2">Monthly</Dropdown.Item>
                                        <Dropdown.Item className="light-grey" href="#/action-3">Weekly</Dropdown.Item>
                                        <Dropdown.Item className="light-grey" href="#/action-1">Early</Dropdown.Item>
                                        <Dropdown.Item className="light-grey" href="#/action-4">Today</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className='p-3 d-flex flex-md-nowrap flex-wrap justify-content-between align-items-end border-bottom'>
                                <div>
                                    <Paragraph className='light-grey fs-14 mb-2'>Total Visitors</Paragraph>
                                    <Typography.Title className="grey-color fs-21 fw-500 m-0">18.2 k
                                        <Text className='light-grey fs-12 ms-2 me-1'>1.4%</Text><GoArrowUpRight className='text-success fs-12' />
                                    </Typography.Title>
                                </div>
                                <div>
                                    <ul className="list-unstyled p-0 sales-list m-0">
                                        <li className="border-0">
                                            <Typography.Title className="sales-title fw-500 m-0" style={{ color: "#038edc" }}>3.85k
                                                <Text className="light-grey fw-normal fs-14 ps-2">sessions</Text>
                                            </Typography.Title>
                                        </li>
                                        <li>
                                            <Typography.Title className="sales-title grey-color fw-500 m-0">24.03%
                                                <Text className="light-grey fw-normal fs-14 ps-2">Bounce Rate</Text>
                                            </Typography.Title>
                                        </li>
                                        <li>
                                            <Typography.Title className="sales-title grey-color fw-500 m-0">52k
                                                <Text className="light-grey fw-normal fs-14 ps-2">Users</Text>
                                            </Typography.Title>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='p-3'>
                                <div className="ana-chart m-2" id="chart">
                                    <Chart options={area.options} series={area.series} type="line" height={400} />
                                </div>
                                {/* <div className="chart1">
                                    <Chart options={options} series={series} type="area" height={350} />
                                </div> */}
                            </div>
                        </div>
                    </Col>
                    <Col xxl={6} xl={7} lg={7} md={24} sm={24} xs={24}>
                        <div className='revenue-box bg-white rounded'>
                            <div className='py-3 px-xxl-4 px-3 d-flex align-items-center border-bottom'>
                                <Avatar className='me-3' style={{ background: "#038edc" }} size={32} icon={<FaUser />} />
                                <div className='flex-grow-1'>
                                    <Paragraph className='light-grey fs-14 m-0'>Users</Paragraph>
                                    <Typography.Title className="title-acc fs-16 fw-500" level={5} style={{ margin: 0, }}>
                                        2.2 K
                                    </Typography.Title>
                                </div>
                                <div className='align-self-end'>
                                    <Tag className='border-0' color='green'>1.2% <GoArrowUpRight className='text-success fs-12' /></Tag>
                                </div>
                            </div>
                            <div className='py-3 px-xxl-4 px-3 d-flex align-items-center border-bottom'>
                                <Avatar className='me-3' style={{ background: "#038edc" }} size={32} icon={<FaHourglassStart />} />
                                <div className='flex-grow-1'>
                                    <Paragraph className='light-grey fs-14 m-0'>Sessions</Paragraph>
                                    <Typography.Title className="title-acc fs-16 fw-500" level={5} style={{ margin: 0, }}>
                                        3.85 K
                                    </Typography.Title>
                                </div>
                                <div className='align-self-end'>
                                    <Tag className='border-0' color='red'>1.2% <FiArrowDownLeft className='text-danger fs-12' /></Tag>
                                </div>
                            </div>
                            <div className='py-3 px-xxl-4 px-3 d-flex align-items-center border-bottom'>
                                <Avatar className='me-3' style={{ background: "#038edc" }} size={32} icon={<FaStopwatch />} />
                                <div className='flex-grow-1'>
                                    <Paragraph className='light-grey fs-14 m-0'>Session Duration</Paragraph>
                                    <Typography.Title className="title-acc fs-16 fw-500" level={5} style={{ margin: 0, }}>
                                        1 Min
                                    </Typography.Title>
                                </div>
                                <div className='align-self-end'>
                                    <Tag className='border-0' color='red'>1.1% <FiArrowDownLeft className='text-danger fs-12' /></Tag>
                                </div>
                            </div>
                            <div className='py-3 px-xxl-4 px-3 d-flex align-items-center border-bottom'>
                                <Avatar className='me-3' style={{ background: "#038edc" }} size={32} icon={<FaChartArea />} />
                                <div className='flex-grow-1'>
                                    <Paragraph className='light-grey fs-14 m-0'>Bounce Rate</Paragraph>
                                    <Typography.Title className="title-acc fs-16 fw-500" level={5} style={{ margin: 0, }}>
                                        24.03 %
                                    </Typography.Title>
                                </div>
                                <div className='align-self-end'>
                                    <Tag className='border-0' color='green'>1.2% <GoArrowUpRight className='text-success fs-12' /></Tag>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4 revenue-box bg-white rounded'>
                            <div className='p-3 d-flex justify-content-between align-items-center'>
                                <Typography.Title className="grey-color fs-16 fw-500" level={5} style={{ margin: 0, }}>
                                    User Activity
                                </Typography.Title>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        <BsThreeDots className='fs-20' />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-2">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Another Action</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div id="chart">
                                <Chart options={column.options} series={column.series} type="bar" height={220} />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='pt-4' gutter={[20, 20]}>
                    <Col xl={6} lg={12} md={12} sm={24} xs={24}>
                        <div className='revenue-box bg-white rounded p-3'>
                            <div className='border-bottom d-flex justify-content-between align-items-center'>
                                <div>
                                    <Paragraph className='light-grey fs-14 mb-2'>New Visitors</Paragraph>
                                    <Typography.Title className="grey-color fs-21 fw-500 m-0">1.2 k
                                        <Text className='light-grey fs-12 ms-2 me-1'>0.2%</Text><GoArrowUpRight className='text-success fs-12' />
                                    </Typography.Title>
                                </div>
                                <div className='chart-one' id="chart">
                                    <Chart options={chart1.options} series={chart1.series} type="area" width={200} height={100} />
                                </div>
                            </div>
                            <div className='border-bottom d-flex justify-content-between align-items-center'>
                                <div>
                                    <Paragraph className='light-grey fs-14 mb-2'>Users</Paragraph>
                                    <Typography.Title className="grey-color fs-21 fw-500 m-0">2.2 k

                                    </Typography.Title>
                                </div>
                                <div className='chart-one' id="chart">
                                    <Chart options={chart2.options} series={chart2.series} type="area" width={200} height={100} />
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <Paragraph className='light-grey fs-14 mb-2'>Sessions</Paragraph>
                                    <Typography.Title className="grey-color fs-21 fw-500 m-0">3.85 k
                                        <Text className='light-grey fs-12 ms-2 me-1'>1.2%</Text><GoArrowUpRight className='text-success fs-12' />
                                    </Typography.Title>
                                </div>
                                <div className='chart-one' id="chart">
                                    <Chart options={chart3.options} series={chart3.series} type="area" width={200} height={100} />
                                </div>
                            </div>

                        </div>
                    </Col>
                    <Col xl={6} lg={12} md={12} sm={24} xs={24}>
                        <div className='revenue-box bg-white rounded'>
                            <div className='p-3 d-flex justify-content-between align-items-center'>
                                <Typography.Title className="grey-color fs-16 fw-500" level={5} style={{ margin: 0, }}>
                                    Visitors by Browser
                                </Typography.Title>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        <BsThreeDots className='fs-20' />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-2">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Another Action</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div>
                                <ul className='m-0 p-0 list-unstyled'>
                                    <li className='py-3 px-4'>
                                        <div className='d-flex align-items-center'>
                                            <div className='me-3'>
                                                <Avatar style={{ backgroundColor: "#f5f6f8" }} size={32} icon={<FaChrome className='fs-18' style={{ color: "#038edc" }} />} />
                                            </div>
                                            <div className='w-100'>
                                                <Text className='fs-16px light-grey'>Chrome</Text>
                                                <Progress percent={82} status="active" />
                                            </div>
                                        </div>
                                    </li>
                                    <li className='py-3 px-4'>
                                        <div className='d-flex align-items-center'>
                                            <div className='me-3'>
                                                <Avatar style={{ backgroundColor: "#f5f6f8" }} size={32} icon={<FaFirefox className='fs-18' style={{ color: "#038edc" }} />} />
                                            </div>
                                            <div className='w-100'>
                                                <Text className='fs-16px light-grey'>Firefox</Text>
                                                <Progress percent={70} status="active" />
                                            </div>
                                        </div>
                                    </li>
                                    <li className='py-3 px-4'>
                                        <div className='d-flex align-items-center'>
                                            <div className='me-3'>
                                                <Avatar style={{ backgroundColor: "#f5f6f8" }} size={32} icon={<FaSafari className='fs-18' style={{ color: "#038edc" }} />} />
                                            </div>
                                            <div className='w-100'>
                                                <Text className='fs-16px light-grey'>Safari</Text>
                                                <Progress percent={76} status="active" />
                                            </div>
                                        </div>
                                    </li>
                                    <li className='py-3 px-4'>
                                        <div className='d-flex align-items-center'>
                                            <div className='me-3'>
                                                <Avatar style={{ backgroundColor: "#f5f6f8" }} size={32} icon={<FaEdge className='fs-18' style={{ color: "#038edc" }} />} />
                                            </div>
                                            <div className='w-100'>
                                                <Text className='fs-16px light-grey'>Edge</Text>
                                                <Progress percent={67} status="active" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </Col>
                    <Col xl={6} lg={12} md={12} sm={24} xs={24}>
                        <div className='revenue-box bg-white rounded'>
                            <div className='p-3 d-flex justify-content-between align-items-center'>
                                <Typography.Title className="grey-color fs-16 fw-500" level={5} style={{ margin: 0, }}>
                                    Visitors Source
                                </Typography.Title>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        <BsThreeDots className='fs-20' />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-2">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Another Action</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="chart mb-3">
                                <Chart options={options1} series={series1} type="donut" height={320} />
                            </div>
                        </div>
                    </Col>
                    <Col xl={6} lg={12} md={12} sm={24} xs={24}>
                        <div className='revenue-box bg-white rounded'>
                            <div className='p-3 d-flex justify-content-between align-items-center'>
                                <Typography.Title className="grey-color fs-16 fw-500" level={5} style={{ margin: 0, }}>
                                    Traffic Source
                                </Typography.Title>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        <BsThreeDots className='fs-20' />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-2">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Another Action</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className='py-3 px-4 d-flex align-items-center'>
                                <Avatar className='me-3' style={{ background: "#f5f6f8", color: "#038edc" }} size={32}>#1</Avatar>
                                <div className='flex-grow-1'>
                                    <Paragraph className='light-grey fs-14 m-0'>www.abc.com</Paragraph>
                                    <Typography.Title className="title-acc fs-16 fw-500" level={5} style={{ margin: 0, }}>
                                        3.82kK
                                    </Typography.Title>
                                </div>
                                <div className='align-self-end'>
                                    <Tag className='border-0' color='green'>1.2% <GoArrowUpRight className='text-success fs-12' /></Tag>
                                </div>
                            </div>
                            <div className='py-3 px-4 d-flex align-items-center'>
                                <Avatar className='me-3' style={{ background: "#f5f6f8", color: "#038edc" }} size={32}> #2</Avatar>
                                <div className='flex-grow-1'>
                                    <Paragraph className='light-grey fs-14 m-0'>www.xyz.com</Paragraph>
                                    <Typography.Title className="title-acc fs-16 fw-500" level={5} style={{ margin: 0, }}>
                                        3.04K
                                    </Typography.Title>
                                </div>
                                <div className='align-self-end'>
                                    <Tag className='border-0' color='red'>1.2% <FiArrowDownLeft className='text-danger fs-12' /></Tag>
                                </div>
                            </div>
                            <div className='py-3 px-4 d-flex align-items-center'>
                                <Avatar className='me-3' style={{ background: "#f5f6f8", color: "#038edc" }} size={32}>#3</Avatar>
                                <div className='flex-grow-1'>
                                    <Paragraph className='light-grey fs-14 m-0'>www.abc123.com</Paragraph>
                                    <Typography.Title className="title-acc fs-16 fw-500" level={5} style={{ margin: 0, }}>
                                        2.64k
                                    </Typography.Title>
                                </div>
                                <div className='align-self-end'>
                                    <Tag className='border-0' color='red'>1.1% <FiArrowDownLeft className='text-danger fs-12' /></Tag>
                                </div>
                            </div>
                            <div className='py-3 px-4 d-flex align-items-center mb-3'>
                                <Avatar className='me-3' style={{ background: "#f5f6f8", color: "#038edc" }} size={32}>#4</Avatar>
                                <div className='flex-grow-1'>
                                    <Paragraph className='light-grey fs-14 m-0'>www.xyz.com</Paragraph>
                                    <Typography.Title className="title-acc fs-16 fw-500" level={5} style={{ margin: 0, }}>
                                        2.06k
                                    </Typography.Title>
                                </div>
                                <div className='align-self-end'>
                                    <Tag className='border-0' color='green'>1.2% <GoArrowUpRight className='text-success fs-12' /></Tag>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='pt-4' gutter={[20, 20]}>
                    <Col xl={16} lg={15} md={24} sm={24} xs={24}>
                        <div className='revenue-box bg-white rounded p-3'>
                            <div className="d-flex justify-content-between  align-items-center mb-4">
                                <Typography.Title className="grey-color fs-16 fw-500 m-0">Visitors By Location</Typography.Title>
                                <Dropdown className="d-flex align-items-center justify-content-end flex-sm-nowrap flex-wrap">Report By :
                                    <Dropdown.Toggle className="light-grey p-sm-2 p-0" variant="success" id="dropdown-basic">
                                        Monthly<MdKeyboardArrowDown className="fs-16" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item className="light-grey" href="#/action-2">Monthly</Dropdown.Item>
                                        <Dropdown.Item className="light-grey" href="#/action-3">Weekly</Dropdown.Item>
                                        <Dropdown.Item className="light-grey" href="#/action-1">Early</Dropdown.Item>
                                        <Dropdown.Item className="light-grey" href="#/action-4">Today</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <Row>
                                <Col xl={13} lg={24} md={24} sm={24} xs={24}>
                                    <div>

                                    </div>
                                </Col>
                                <Col xl={11} lg={24} md={24} sm={24} xs={24}>
                                    <div className='flag-box'>
                                        <div className='py-3 px-4 d-flex align-items-center'>
                                            <Avatar className='me-3' style={{ background: "#f5f6f8" }} src={<img src={f1img} style={{ height: "10px", width: '15px' }} />} />
                                            <div className='flex-grow-1'>
                                                <Paragraph className='light-grey fs-14 m-0'>United States</Paragraph>
                                                <Typography.Title className="title-acc fs-16 fw-500" level={5} style={{ margin: 0, }}>
                                                    81%
                                                </Typography.Title>
                                            </div>
                                            <div className='align-self-start'>
                                                <Tag className='border-0' color='green'>0.02% <GoArrowUpRight className='text-success fs-12' /></Tag>
                                            </div>
                                        </div>
                                        <div className='py-3 px-4 d-flex align-items-center'>
                                            <Avatar className='me-3' style={{ background: "#f5f6f8" }} src={<img src={f2img} style={{ height: "10px", width: '15px' }} />} />
                                            <div className='flex-grow-1'>
                                                <Paragraph className='light-grey fs-14 m-0'>Spain</Paragraph>
                                                <Typography.Title className="title-acc fs-16 fw-500" level={5} style={{ margin: 0, }}>
                                                    77%
                                                </Typography.Title>
                                            </div>
                                            <div className='align-self-start'>
                                                <Tag className='border-0' color='green'>0.01% <GoArrowUpRight className='text-success fs-12' /></Tag>
                                            </div>
                                        </div>
                                        <div className='py-3 px-4 d-flex align-items-center'>
                                            <Avatar className='me-3' style={{ background: "#f5f6f8" }} src={<img src={f3img} style={{ height: "10px", width: '15px' }} />} />
                                            <div className='flex-grow-1'>
                                                <Paragraph className='light-grey fs-14 m-0'>Germany</Paragraph>
                                                <Typography.Title className="title-acc fs-16 fw-500" level={5} style={{ margin: 0, }}>
                                                    80%
                                                </Typography.Title>
                                            </div>
                                            <div className='align-self-start'>
                                                <Tag className='border-0' color='green'>0.03% <GoArrowUpRight className='text-success fs-12' /></Tag>
                                            </div>
                                        </div>
                                        <div className='py-3 px-4 d-flex align-items-center'>
                                        <Avatar className='me-3' style={{ background: "#f5f6f8" }} src={<img src={f4img} style={{height: "10px", width: '15px'}} />} />
                                        <div className='flex-grow-1'>
                                            <Paragraph className='light-grey fs-14 m-0'>Italy</Paragraph>
                                            <Typography.Title className="title-acc fs-16 fw-500" level={5} style={{ margin: 0, }}>
                                                73%
                                            </Typography.Title>
                                        </div>
                                        <div className='align-self-start'>
                                            <Tag className='border-0' color='green'>0.01% <GoArrowUpRight className='text-success fs-12' /></Tag>
                                        </div>
                                    </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xl={8} lg={9} md={24} sm={24} xs={24}>
                        <div className='revenue-box bg-white rounded p-3'>
                            <div className="d-flex justify-content-between  align-items-center mb-4">
                                <Typography.Title className="grey-color fs-16 fw-500 m-0">Channels</Typography.Title>
                                <Dropdown className="d-flex align-items-center justify-content-end flex-sm-nowrap flex-wrap">Report By :
                                    <Dropdown.Toggle className="light-grey p-sm-2 p-0" variant="success" id="dropdown-basic">
                                        Monthly<MdKeyboardArrowDown className="fs-16" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item className="light-grey" href="#/action-2">Monthly</Dropdown.Item>
                                        <Dropdown.Item className="light-grey" href="#/action-3">Weekly</Dropdown.Item>
                                        <Dropdown.Item className="light-grey" href="#/action-1">Early</Dropdown.Item>
                                        <Dropdown.Item className="light-grey" href="#/action-4">Today</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div>
                            <Table columns={columns} dataSource={data}  />
                            </div>

                        </div>
                    </Col>
                </Row>

            </div>
        </div>
    )
}