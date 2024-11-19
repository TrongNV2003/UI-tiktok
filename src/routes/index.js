// Layouts
import { HeaderOnly } from "@app/component/Layouts";
import routesConfig from "@app/config/routes";

import Home from "@app/pages/Home";
import Following from "@app/pages/Following";
import Profile from "@app/pages/Profile";
import Upload from "@app/pages/Upload";
import Search from "@app/pages/Search";

// không cần đăng nhập vẫn xem đc
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];

// phải đăng nhập mới xem đc, nếu ko đăng nhập thì lái sang trang login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
