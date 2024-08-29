const listMenus = [
    {
        topic: 'Getting Started',
        icon: '',
        submenu: [
            {
                text: 'Introduce',
                to: '/',
            },
            {
                text: 'Git Clone',
                to: '/gitclone',
            },
            {
                text: 'Installation',
                to: '/installation',
            },
        ],
    },
    {
        topic: 'React Components',
        icon: '',
        submenu: [
            {
                text: 'Component',
                to: '/component',
            },
            {
                text: 'Props',
                to: '/componentsprops',
            },
        ],
    },
    {
        topic: 'React Reduxjs/Toolkit',
        icon: '',
        submenu: [
            {
                text: 'State',
                to: '/reduxjsstate',
            },
            {
                text: 'Reducer',
                to: '/reduxjsreducer',
            },
        ],
    },
    {
        topic: 'React Router',
        icon: '',
        submenu: [
            {
                text: 'Router',
                to: '/reactrouter',
            },
            {
                text: 'Navigate',
                to: '/reactnavigate',
            },
        ],
    },
]

export { listMenus }