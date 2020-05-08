const ROUTES = [
    {
        path: '/',
        exact: true,
        component: require('../views/home').default,
    },
    {
        path: '/home',
        exact: true,
        component: require('../views/home').default,
    },
    {
        path: '*',
        exact: true,
        component: require('../views/error').default,
    },
];

export default ROUTES;
