import { useEffect, useState } from 'react'
import { HeaderImport } from './Import'
const { RoutesMap, useNavigate, useDispatch, Dropdown, KeyRound, Languages, ListCollapse, Power, UserPen, img_nf, dayjs, ChangePassword, toggleChangePasswordModal, SessionManager, useTranslation } = HeaderImport

export default function Header(props) {

    const { collapsed, setCollapsed, drawerOpen, setDrawerOpen, isMobileOrTablet } = props
    const [date, setDate] = useState(new Date().toDateString())
    const [time, setTime] = useState(dayjs().format("HH:mm:ss"))
    const { t, i18n } = useTranslation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    let cookieUser = SessionManager.getCookie("user");
    let user_details = cookieUser ? JSON.parse(cookieUser) : null;
    // console.log(user_details)

    const lang_option = {
        items: [
            { key: 'en', label: 'English' },
        ],
        selectable: true,
        defaultSelectedKeys: [i18n?.language],
        onClick: ({ key }) => {
            i18n.changeLanguage(key)
        },
    };

    const settings_option = [
        {
            key: '1',
            label: 'Profile',
            icon: <UserPen size={16} />,
            onClick: () => navigate('/profile')
        },
        {
            key: '2',
            label: 'Change Password',
            icon: <KeyRound size={16} />,
            onClick: () => changePasswordModal()
        },
        {
            type: 'divider',
        },
        {
            key: '3',
            label: 'Log Out',
            icon: <Power size={16} />,
            onClick: () => logout()
        },
    ];

    const changePasswordModal = () => dispatch(toggleChangePasswordModal())

    const logout = () => {
        SessionManager.removeCookie("user_token");
        navigate(RoutesMap.LOGIN.path)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(dayjs().format("HH:mm:ss"));
        }, 1000);

        return () => clearInterval(interval);
    }, [])

    return (
        <>
            <nav className={`navbar fixed-top ${isMobileOrTablet ? 'navbar_mobile_view' : collapsed ? "navbar_body_collapsed" : "navbar_body_notcollapsed"}`} >
                <div className="container-fluid">
                    <span className="navbar-brand d-flex align-items-center">
                        <ListCollapse onClick={() => isMobileOrTablet ? setDrawerOpen(!drawerOpen) : setCollapsed(!collapsed)} style={{ cursor: 'pointer' }} />
                        <span className='d-flex flex-column ms-3'>
                            <span style={{ fontSize: '12px' }} className="fw-bold">Welcome, {user_details ? `${user_details.user_first_name || ""} ${user_details.user_last_name || ""}` : "Guest"}!</span>
                            <span style={{ fontSize: '10px' }} className='text-secondary'>{date}</span>
                        </span>
                    </span>

                    <div className='d-flex align-items-center'>

                        <span className='text-dark fw-medium' style={{ fontSize: '13px' }}>🕒 {time}</span>

                        <span className='ms-2 me-2'>|</span>

                        <Dropdown
                            menu={lang_option}
                            placement="bottom"
                        >
                            <Languages size={20} style={{ cursor: 'pointer' }} />
                        </Dropdown>

                        <span className='ms-2 me-2'>|</span>

                        <span className='fw-medium dark_blue' style={{ cursor: 'pointer', fontSize: '13px' }} onClick={() => window.open('https://www.techlene.com/', '_blank')}>Techlene Software Solutions Pvt. Ltd.</span>

                        <span className='ms-2 me-2'>|</span>

                        <Dropdown
                            menu={{ items: settings_option }}
                            placement="bottom"
                        >
                            <img
                                src={img_nf}
                                alt="admin"
                                className='img-fluid header_profile_img'
                                style={{ cursor: 'pointer' }}
                                onError={(e) => { e.target.onerror = null; e.target.src = img_nf }}
                            />
                        </Dropdown>
                    </div>
                </div>
            </nav>

            <ChangePassword />
        </>
    )
}
