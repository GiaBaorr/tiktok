//layout
import { HeaderOnly } from '~/Components/Layouts';

//pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
];

// already login
const privateRoutes = [];

export { privateRoutes, publicRoutes };
