import {
    Home,
    Person,
    FormatListBulleted,
    Edit,
    Notifications
} from '@mui/icons-material'

export const MENU_ITEMS = [
    {
        id: 0,
        icon: <Home fontSize='large'/>,
        link: "/"
    },
    {
        id: 1,
        icon: <FormatListBulleted fontSize='large'/>,
        link: '/groups'
    },
    {
        id: 2,
        icon: <Edit fontSize='large'/>,
        link: '/Edit'
    },
    {
        id: 3,
        icon: <Person fontSize='large' />,
        link: '/spaces'
    },
    {
        id: 4,
        icon: <Notifications fontSize='large'/>,
        link: '/notif'
    }
]