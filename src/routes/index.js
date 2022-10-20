//layout
import { HeaderOnly } from '~/layouts';

//pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';
//
import config from '~/config';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.nickname, component: Profile },
    { path: config.routes.search, component: Search, layout: null },
];

// already login
const privateRoutes = [];

export { privateRoutes, publicRoutes };
