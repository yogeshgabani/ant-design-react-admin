import { Link } from 'react-router-dom';
import logoimg from '../Assets/icon/logosmall.png';
import { Button, Typography } from 'antd';
const { Title, Text } = Typography;


export default function Pageerror() {


    return (
        <div className="text-center d-flex justify-content-center align-items-center vh-100">
            <div>
                <Typography.Title className="grey-color fw-500 d-flex align-items-center" level={5} style={{ margin: "0", fontSize: "130px" }}>
                    4
                    <img className='mx-2' src={logoimg} alt="" />
                    4
                </Typography.Title>

                <Typography.Title className="grey-color fs-18 fw-500" level={5} style={{ margin: "0", fontSize: "21px" }}>
                    OPPS, PAGE NOT FOUND
                </Typography.Title>
            <div className='mt-5'>
                <Link to="/maincontant">
                    <Button className="login-btn w-100" type="">Back to Dashboard</Button>
                </Link>
            </div>
            </div>

        </div>
    )
}