import { IoHeart } from "react-icons/io5";
import { Typography } from 'antd';
import '../Footer/Footer.css';
const { Text } = Typography;

export default function Footer() {
    return (

        <div className="main-footer">
            <div className="px-3 py-4 d-flex justify-content-between align-items-center">
                <Text className="fs-14 grey-color">2024 © Dashonic.</Text>
                <Text className="fs-14 grey-color">Crafted with <IoHeart className="text-danger" /> Pichforest</Text>
            </div>
        </div>
    )
}