import "../Maincontant/Maincontant.css";
import { Avatar, Col, Input, Progress,  Row, Table, Tag, Typography, } from 'antd';
import { Breadcrumb } from 'antd';
import Dropdown from 'react-bootstrap/Dropdown';
import { MdEdit, MdKeyboardArrowDown } from "react-icons/md";
import React, { useState } from "react";
import Chart from 'react-apexcharts';
import { LuAlertTriangle } from "react-icons/lu";
import { IoArrowForward, IoArrowForwardOutline } from "react-icons/io5";
import upgrade_img from "../../Assets/Images/upgrade.png";
import { IoIosMore, IoMdArrowUp} from "react-icons/io";
import { CiCircleCheck, CiSearch } from "react-icons/ci";
import { RiArrowLeftCircleLine, RiDeleteBin6Fill } from "react-icons/ri";
import { RxCrossCircled } from "react-icons/rx";
import image1 from "../../Assets/icon/t1.jpg";
import image2 from "../../Assets/icon/t2.jpg";
import image3 from "../../Assets/icon/t3.jpg";
import image4 from "../../Assets/icon/t4.jpg";
import image5 from "../../Assets/icon/t5.jpg";
import image6 from "../../Assets/icon/t6.jpg";
import image7 from "../../Assets/icon/t7.jpg";
import WorldMap from "https://cdn.skypack.dev/react-world-map@2.3.0";
import { Outlet } from "react-router-dom";
const { Text } = Typography;

export default function Maincontant() {

  // bar chart-1

  const [state, setState] = useState({
    series: [{
      name: '',
      data: [10, 20, 15, 40, 20, 50, 70, 60, 90, 70, 110]
    },],
    options: {
      chart: {
        type: 'bar',
        height: 10
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
      },

      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val;
          }
        }
      }
    },


  })

  // line chart-1
  const [line, setline] = useState({
    series: [{
      name: 'series1',
      data: [10, 90, 30, 60, 50, 90, 25, 55, 30, 40]
    }],
    options: {
      chart: {
        height: 50,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },


    },

  });

  // pie-chart-1
  const [pie, setpie] = useState({
    series: [19, 44, 25],
    options: {
      chart: {
        type: 'donut',
      },
      labels: ["Profit", "Revenue", "Expenses"],
      colors: ["#5fd0f3", "#038edc", "#dfe2e6",],
      responsive: [{
        breakpoint: 1000,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  })

  // analytics chart combo
  const [col, setcol] = useState({
    series: [{
      name: 'Income',
      type: 'column',
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    }, {
      name: 'Sales',
      type: 'column',
      data: [19, 8, 26, 21, 18, 36, 30, 28, 40, 39, 15]
    }, {
      name: 'Conversation Ratio',
      type: 'area',
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    }, {
      name: 'Users',
      type: 'line',
      data: [9, 11, 13, 12, 10, 8, 6, 9, 14, 17, 22]
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        stacked: false,
      },
      // colors: ['#f7f8f9' ],
      colors: ['#77d7f5', '#038edc', '#dfe2e6', '#51d28c'],
      stroke: {
        width: [0, 2, 5],
        curve: 'smooth'
      },
      plotOptions: {
        bar: {
          columnWidth: '50%'
        }
      },

      fill: {
        opacity: [0.85, 0.25, 1, 1],
        gradient: {
          inverseColors: false,
          shade: 'light',
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100]
        }
      },
      labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
        '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
      ],
      markers: {
        size: 0
      },
      xaxis: {
        type: 'datetime'
      },
      fill: {
        colors: ['#77d7f5', '#038edc', '#dfe2e6', '#51d28c']
      },
      yaxis: {
        title: {
          text: 'Sales Analytics',
        },
        min: 0
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }
            return y;

          }
        }
      }
    },
  })

  // table data
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      render: (text, index) => {
        return (
          <>
            <h5 className="fs-14 m-0 fw-500 grey-color">{index.id}</h5>
          </>
        )
      }
    },
    {
      title: 'Date',
      dataIndex: 'date',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (text, stat) => {
        return (
          <div className="d-flex align-items-center" style={{ color: stat.color }}>
            {stat.arrow}
            <Text className="ms-1 light-grey fs-14">{stat.status}</Text>
          </div>
        )
      }
    },
    {
      title: 'Customer',
      dataIndex: 'customer',
      render: (text, record) => {
        return (
          <div className="d-flex align-items-center avtar-table">
            <Avatar style={{ border: '1.5px solid #eff0f2' }} src={record.productimage} />
            <div>
              <Text className="ms-2 grey-color fs-14 fw-500">{record.customername}</Text>
            </div>

          </div>
        );
      },
    },
    {
      title: 'Parchased',
      dataIndex: 'parchase',
    },
    {
      title: 'Revenue',
      dataIndex: 'revenue',
    },
    {
      title: "",
      dataIndex: 'menu',
      render: () => {
        return (
          <>
            <Dropdown className="table-dropmenu">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <IoIosMore className="fs-18" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item className="d-flex align-items-center" href="#/action-1"><MdEdit className="text-success me-2" />Edit</Dropdown.Item>
                <Dropdown.Item className="d-flex align-items-center" href="#/action-2"><RiDeleteBin6Fill className="text-danger me-2" />Delete</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </>
        )
      }
    }
  ];
  const data = [
    {
      key: '1',
      id: "#DK1018",
      date: '1 Jun, 11:21',
      arrow: <CiCircleCheck className="fs-18" />,
      color: "#51d28c",
      status: 'Paid',
      customername: "Alex Fox",
      productimage: image1,
      parchase: 'Wireframing Kit for Figma',
      revenue: '$129.99',
    },
    {
      key: '2',
      id: "#DK1017",
      date: '29 May, 18:36',
      arrow: <CiCircleCheck className="fs-18" />,
      color: "#51d28c",
      status: 'Paid',
      customername: "Joya Calvert",
      productimage: image2,
      parchase: 'astering the Grid +2 more',
      revenue: '$228.88',
    },
    {
      key: '3',
      id: "#DK1016",
      date: '25 May , 08:09',
      arrow: <RiArrowLeftCircleLine className="fs-18" />,
      color: "#f7cc53",
      status: 'Refunded',
      customername: "Gracyn Make",
      productimage: image3,
      parchase: 'Wireframing Kit for Figma',
      revenue: '$9.99',
    },
    {
      key: '4',
      id: "#DK1015",
      id: "#DK1017",
      date: '29 May, 18:36',
      arrow: <CiCircleCheck className="fs-18" />,
      color: "#51d28c",
      status: 'Paid',
      customername: "Monroe Mock",
      productimage: image4,
      parchase: 'Spiashify 2.0',
      revenue: '$44.00',
    },
    {
      key: '5',
      id: "#DK1014",
      date: '10 May , 10:00',
      arrow: <CiCircleCheck className="fs-18" />,
      color: "#51d28c",
      status: 'Paid',
      customername: "Lauren Bond",
      productimage: image5,
      parchase: 'Mastering the Grid',
      revenue: '$75.87',
    },
    {
      key: '6',
      id: "#DK1011",
      date: '29 Apr , 12:46',
      arrow: <RxCrossCircled className="fs-18" />,
      color: "#f34e4e",
      status: 'Changeback',
      customername: "Ricardo Schaefer",
      productimage: image6,
      parchase: 'Spiashify 2.0',
      revenue: '$63.99',
    },
    {
      key: '7',
      id: "#DK1010",
      date: '27 Apr , 10:53',
      arrow: <CiCircleCheck className="fs-18" />,
      color: "#51d28c",
      status: 'Paid',
      customername: "Arvi Hasan",
      productimage: image7,
      parchase: 'Wireframing Kit for Figma',
      revenue: '$51.00',
    },

  ];

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  // maps
  const [selected, onSelect] = React.useState('na');


  return (
    <>

      <div className="">
        <div className="main-homepage">
          <div className="d-flex justify-content-between align-items-center pb-4">
            <Typography.Title className="title-acc fs-5 fw-normal" level={5} style={{ margin: 0, }}>
              Sales Analytics
            </Typography.Title>
            <Breadcrumb className="breadcrumb m-0"
              items={[
                { href: '', title: "dashonic", },
                {
                  title: 'Application',
                },
              ]}
            />
          </div>

          {/* revenue data box */}

          <Row gutter={[20, 20]}>
            <Col className="gutter-row" xl={6} lg={12} sm={12} xs={24}>
              <div className="revenue-box bg-white rounded p-3">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="">
                    <Typography.Title className="revenue-title text-uppercase" style={{ margin: 0, }}>
                      Total Revenue
                    </Typography.Title>
                    <Typography.Title className="revenue-text fs-5 fw-normal" >
                      $46.34k
                    </Typography.Title>
                    <Text style={{ color: "#495057" }}>Earning this month</Text>
                  </div>
                  <div>
                    <Dropdown className="revenue-dropmenu">
                      <Dropdown.Toggle id="dropdown-basic">
                        Monthly<MdKeyboardArrowDown className="ms-2" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Monthly</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Early</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Weekly</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div>
                  <div id="chart" className="mt-3 bar-chart" style={{ height: "120px" }}>
                    <Chart options={state.options} series={state.series} type="bar" height={150} />
                  </div>
                </div>
              </div>
            </Col>
            <Col className="gutter-row" xl={6} lg={12} sm={12} xs={24}>
              <div className="revenue-box bg-white rounded p-3">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="">
                    <Typography.Title className="revenue-title text-uppercase" style={{ margin: 0, }}>
                      Total Refunds
                    </Typography.Title>
                    <Typography.Title className="revenue-text fs-5 fw-normal" >
                      $895.02
                    </Typography.Title>
                    <Text style={{ color: "#495057" }}>Refunds this month</Text>
                  </div>
                  <div>
                    <Dropdown className="revenue-dropmenu">
                      <Dropdown.Toggle id="dropdown-basic">
                        Monthly<MdKeyboardArrowDown className="ms-2" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Monthly</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Early</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Weekly</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div>
                  <div id="chart" className="mt-3 bar-chart" style={{ height: "120px" }}>
                    <Chart options={line.options} series={line.series} type="area" height={150} />
                  </div>
                  <div id="html-dist"></div>
                </div>
              </div>
            </Col>
            <Col className="gutter-row" xl={6} lg={12} sm={12} xs={24}>
              <div className="revenue-box bg-white rounded p-3">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="">
                    <Typography.Title className="revenue-title text-uppercase" style={{ margin: 0, }}>
                      Active Users
                    </Typography.Title>
                    <Typography.Title className="revenue-text fs-5 fw-normal" >
                      6,985
                    </Typography.Title>
                    <Text style={{ color: "#495057" }}>Earning this week</Text>
                  </div>
                  <div>
                    <Dropdown className="revenue-dropmenu">
                      <Dropdown.Toggle id="dropdown-basic">
                        Weekly<MdKeyboardArrowDown className="ms-2" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Monthly</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Early</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Weekly</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div>
                  <div id="chart" className="mt-3 bar-chart" style={{ height: "120px" }}>
                    <Chart options={state.options} series={state.series} type="bar" height={150} />
                  </div>
                  <div id="html-dist"></div>
                </div>
              </div>
            </Col>
            <Col className="gutter-row" xl={6} lg={12} sm={12} xs={24}>
              <div className="revenue-box bg-white rounded p-3">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="">
                    <Typography.Title className="revenue-title text-uppercase" style={{ margin: 0, }}>
                      all time data
                    </Typography.Title>
                    <Typography.Title className="revenue-text fs-5 fw-normal" >
                      12,584
                    </Typography.Title>
                    <Text style={{ color: "#495057" }}>Total Number of Orders</Text>
                  </div>
                  <div>
                    <Dropdown className="revenue-dropmenu">
                      <Dropdown.Toggle id="dropdown-basic">
                        Yearly<MdKeyboardArrowDown className="ms-2" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Monthly</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Early</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Weekly</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div>
                  <div id="chart" className="mt-3 bar-chart" style={{ height: "120px" }}>
                    <Chart options={line.options} series={line.series} type="area" height={150} />
                  </div>
                  <div id="html-dist"></div>
                </div>
              </div>
            </Col>
          </Row>


          <Row gutter={[20, 20]} className="pt-4">

            {/* upgrade account */}

            <Col className="gutter-row" xxl={8} xl={24}>
              <div className="revenue-box rounded p-3 bg-white">
                <div className="d-flex align-items-center w-100 p-3 mb-3 rounded" style={{ background: "#fdf5dd" }}>
                  <LuAlertTriangle className="me-2 text-warning fs-5" />
                  <Text className="fs-14 text-clip" style={{ color: "#635221" }}>Your free trial expired in <b style={{ color: "#635221" }}>21</b> days.</Text>
                  <a className="text-decoration-underline ms-auto fw-bold ps-3" style={{ color: "#635221" }} href="#">Upgrade</a>
                </div>
                <Row gutter={20}>
                  <Col xl={14} lg={14} md={14} sm={14} xs={24}>
                    <Text className="fs-18" style={{ color: "#495057" }}>Upgrade your plan from a <span className="fw-semibold">Free trial</span>, to ‘Premium Plan’ <IoArrowForwardOutline /></Text>
                    <button className="upgrade-btn text-white fs-14 mt-4 mb-2">Upgrade Account!</button>
                  </Col>
                  <Col xl={10} lg={10} md={10} sm={10} xs={24}>
                    <img className="img-fluid" src={upgrade_img} alt="" />
                  </Col>
                </Row>
              </div>

              {/* earning reports */}

              <div className="revenue-box rounded p-3 bg-white mt-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <Typography.Title className="grey-color fs-16 fw-500 m-0">Earning Reports</Typography.Title>
                  <Dropdown className="d-flex align-items-center justify-content-end w-75">Reported By :
                    <Dropdown.Toggle className="light-grey pe-0 ps-0" variant="success" id="dropdown-basic">
                      Monthly<MdKeyboardArrowDown className="fs-16" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item className="light-grey" href="#/action-1">Early</Dropdown.Item>
                      <Dropdown.Item className="light-grey" href="#/action-2">Monthly</Dropdown.Item>
                      <Dropdown.Item className="light-grey" href="#/action-3">Weekly</Dropdown.Item>
                      <Dropdown.Item className="light-grey" href="#/action-4">Today</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <Row gutter={20}>
                  <Col xl={14} sm={16} xs={24} >
                    <div className="d-flex align-items-center justify-content-sm-start justify-content-between mb-4">
                      <div className="pe-2">
                        <Text className="light-grey fs-14">This Month</Text>
                        <Typography.Title className="grey-color mt-2 fs-18 fw-500 m-0">$12,582<Tag className="ms-2 border-0" color="green">+15%</Tag></Typography.Title>
                      </div>
                      <div className="ps-2">
                        <Text className="light-grey fs-14">Last Month</Text>
                        <Typography.Title className="grey-color mt-2 fs-18 fw-500 m-0">$98,741</Typography.Title>
                      </div>
                    </div>
                    <div className="mb-4">
                      <Text className="d-flex align-items-center light-grey" ><Tag className="d-flex align-items-center bg-white border-0" color="green">25.02 %<IoMdArrowUp className="fs-18" /></Tag>From previous period</Text>
                    </div>
                    <button className="generate-btn">Generate Reports <IoArrowForward /></button>
                  </Col>
                  <Col xl={10} sm={8} xs={24} >
                    <div className="d-flex justify-content-sm-start justify-content-center mt-2">
                      <div id="chart" className="bar-chart">
                        <Chart options={pie.options} series={pie.series} type="donut" width="200" />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col className="gutter-row" xxl={16} xl={24} sm={24} xs={24}>

              {/* sales analytics */}

              <div className="revenue-box rounded p-3 bg-white">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <Typography.Title className="grey-color fs-16 fw-500 m-0">Sales Analytics</Typography.Title>
                  <Dropdown className="d-flex align-items-center">Sort By :
                    <Dropdown.Toggle className="light-grey" variant="success" id="dropdown-basic">
                      Yearly<MdKeyboardArrowDown className="fs-16" />
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
                  <ul className="list-unstyled p-0 sales-list text-center">
                    <li className="border-0">
                      <Typography.Title className="sales-title fw-500 m-0" style={{ color: "#038edc" }}>$3.82k
                        <Text className="light-grey fw-medium fs-14 ps-2">income</Text>
                      </Typography.Title>
                    </li>
                    <li>
                      <Typography.Title className="sales-title grey-color fw-500 m-0">258
                        <Text className="light-grey fw-medium fs-14 ps-2">Sales</Text>
                      </Typography.Title>
                    </li>
                    <li>
                      <Typography.Title className="sales-title grey-color fw-500 m-0">52k
                        <Text className="light-grey fw-medium fs-14 ps-2">Users</Text>
                      </Typography.Title>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="ana-chart" id="chart">
                    <Chart options={col.options} series={col.series} type="line" height={335} />
                  </div>
                </div>

              </div>
            </Col>

          </Row>

          {/* order table data */}

          <Row gutter={[20, 20]} className="pt-4">
            <Col className="gutter-row" xl={16}>
              <div className="revenue-box rounded p-3 bg-white">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <Typography.Title className="grey-color fs-16 fw-500 m-0">orders</Typography.Title>
                  <div className="d-flex align-items-center">
                    <Dropdown>
                      <Dropdown.Toggle className="p-sm-2 p-0" variant="success" id="dropdown-basic">
                        <CiSearch style={{ fontSize: "20px" }} />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropmenu-component position-absolute">
                        <div className="position-relative search-icon bg-white">
                          <Input className="search-input" placeholder="Search" />
                          <CiSearch className="search-iconmenu position-absolute" />
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="d-flex align-items-center">Reported By :
                      <Dropdown.Toggle className="light-grey p-sm-2 p-0" variant="success" id="dropdown-basic">
                        Monthly<MdKeyboardArrowDown className="fs-16" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item className="light-grey" href="#/action-1">Early</Dropdown.Item>
                        <Dropdown.Item className="light-grey" href="#/action-2">Monthly</Dropdown.Item>
                        <Dropdown.Item className="light-grey" href="#/action-3">Weekly</Dropdown.Item>
                        <Dropdown.Item className="light-grey" href="#/action-4">Today</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div className="overflow-auto">
                  <Table className="analytic-table" rowSelection={rowSelection} columns={columns} dataSource={data} />
                </div>
              </div>
            </Col>

            {/* sales by country */}

            <Col className="gutter-row" xl={8}>
              <div className="revenue-box rounded p-3 bg-white">
                <div className="d-flex justify-content-between  align-items-center mb-4">
                  <Typography.Title className="grey-color fs-16 fw-500 m-0">Sales By Country</Typography.Title>
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
                <div className="mt-5">
                  <WorldMap className="maps-svg" selected={selected} onSelect={onSelect} />
                </div>
                <div className="mt-4">
                  <Tag className="border-0 bg-transparent fs-14 grey-color fw-500">USA</Tag>
                  <Progress className="mb-2" percent={75} status="active" />
                  <Tag className="border-0 bg-transparent fs-14 grey-color fw-500">Russia</Tag>
                  <Progress className="mb-2" percent={55} status="active" />
                  <Tag className="border-0 bg-transparent fs-14 grey-color fw-500">Australia</Tag>
                  <Progress className="mb-2" percent={85} status="active" />
                </div>
              </div>
            </Col>

          </Row>

        </div>
        <Outlet />



      </div>

    </>
  )
}
