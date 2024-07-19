import { IoMenuSharp } from "react-icons/io5";
import '../../Pages/Pagemain/Pagemain.css';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Forgot from "../Forgot/Forgot";
import Resetpassword from "../Resetpassword/Resetpassword";
import Message from "../Message/Message";
import Profile from "../Profile/Profile";
import Sidebar from "../../Component/Sidebar/Sidebar";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import Maincontant from "../../Component/Maincontant/Maincontant";
import Pageerror from "../../Component/Pageerror";
import Taskboard from "../Taskboard/Taskboard";
import Help from "../Help/Help";
import Usersetting from "../Usersetting/Usersetting";
import Lockscreen from "../Lockscreen/Lockscreen";
import Analytics from "../Analytics/Analytics";


function Pagemain() {
    const [showmenu, setshowmenu] = useState(true);
    const closemenu = () => {
        setshowmenu(!showmenu); 
    };

    const location = useLocation();
    const showHeaderAndSidebar = !['/', '/404' ,  '/signup', '/forgot', '/resetpassword', '/lockscreen'].includes(location.pathname);

    return (
        <div className={!showmenu ? "hide" : "show"}> 
            {showHeaderAndSidebar && (
                <div className="" style={{ width: "255px" }}>
                    <Sidebar />
                    <div className="">
                        <IoMenuSharp className="position-fixed menu-icon-main d-lg-block d-none" onClick={closemenu} />
                    </div>
                </div>
            )}
            {showHeaderAndSidebar && (
                <div className="position-relative">
                    <Header />
                    {/* <IoMenuSharp className="position-absolute  menu-icon-main d-lg-block d-none" onClick={closemenu} /> */}
                </div>
            )}
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="/forgot" element={<Forgot />} />
                    <Route path="/resetpassword" element={<Resetpassword />} />
                    <Route path="lockscreen" element={<Lockscreen />} />
                    <Route path="/404" element={<Pageerror />} />
                    <Route path="*" element={ <Navigate to="/404" replace />} />
                    <Route path="/maincontant" element={<Maincontant />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/message" element={<Message />} />
                    <Route path="/taskboard" element={<Taskboard />} />
                    <Route path="/help" element={<Help />}/>
                    <Route path="/setting" element={<Usersetting />}/>
                    <Route path="/analytics" element={<Analytics />}/>
                    {/* <Route path="/chart" element={<Chat />}/> */}
                </Routes>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Pagemain;
