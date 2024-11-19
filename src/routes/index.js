// Layouts
import { HeaderOnly } from "@app/layouts";
import config from "@app/config";

import Home from "@app/pages/Home";
import Following from "@app/pages/Following";
import Profile from "@app/pages/Profile";
import Upload from "@app/pages/Upload";
import Search from "@app/pages/Search";

// không cần đăng nhập vẫn xem đc
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

// phải đăng nhập mới xem đc, nếu ko đăng nhập thì lái sang trang login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
