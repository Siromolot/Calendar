import theme from './theme/routes.js';
import auth from './auth/routes.js';

const routes = [
    ...theme,
    ...auth,
];

export default routes;