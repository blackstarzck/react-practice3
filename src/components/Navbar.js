import React, { useState } from 'react'; // react는 한번만 실행해야 한다.
// import { 아이콘이름 } from 'react-icons/fa' 이렇게 표시할 경우 사용할 아이콘을 하나씩 정의해야 하기 때문에 엄청 길어지게 된다.
import * as FaIcons from 'react-icons/fa'; // { 아이콘이름 }을 FaIcons라는 객체로 대채하겠다는 의미.
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {  SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons'; // icon들을 커스터마이즈할 수 있다. 모든 태그를 감싸야 하기 때문에 제일 상단에 있어야 한다.

function Navbar() {
    const [sidebar, setSidebar] = useState(false); // sidebar의 초기값이 false이므로 nav태그에 있는 삼항연산자에서 'nav-menu'가 className으로 설정된다.
    const showSidebar = () => setSidebar(!sidebar); // onClick함수로 인해 sidsebar값의 초기(default)값을 false의 반대로 설정해 준다.

    return (
        <>
            <IconContext.Provider value={{color: 'red' }}>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar}/> 
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" >
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bar" onClick={showSidebar}>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return(
                            <li key={index} className={item.cName} >
                                <Link to={item.path} onClick={showSidebar}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
