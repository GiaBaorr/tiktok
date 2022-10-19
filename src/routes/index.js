//layout
import { HeaderOnly } from '~/Components/Layouts';

//pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';
//
import routesConfig from '~/config/routes';

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.nickname, component: Profile },
    { path: routesConfig.search, component: Search, layout: null },
];

// already login
const privateRoutes = [];

export { privateRoutes, publicRoutes };
