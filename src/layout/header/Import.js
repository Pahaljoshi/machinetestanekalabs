import RoutesMap from '../../route_control/RouteControl'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Dropdown } from 'antd'
import img_nf from '../../assets/images/default.jpg'
import dayjs from 'dayjs'
import { ChangePassword } from '../../pages/user'
import { SessionManager } from '../../utils'
import { KeyRound, Languages, ListCollapse, Power, UserPen } from 'lucide-react'
import { toggleChangePasswordModal } from '../../redux/slices/globalSlice'
import { useTranslation } from 'react-i18next'

export const HeaderImport = {
    RoutesMap,
    useNavigate,
    useDispatch,
    Dropdown,
    img_nf,
    dayjs,
    ChangePassword,
    SessionManager,
    KeyRound,
    Languages,
    ListCollapse,
    Power,
    UserPen,
    toggleChangePasswordModal,
    useTranslation
}