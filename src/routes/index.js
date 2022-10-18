//layout
import { HeaderOnly } from '~/Components/Layouts';

//pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/@:nickname', component: Profile },
    { path: '/search', component: Search, layout: null },
];

// already login
const privateRoutes = [];

export { privateRoutes, publicRoutes };
