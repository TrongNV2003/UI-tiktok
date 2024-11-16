// Layouts
import { HeaderOnly } from "@app/component/Layouts";

import Home from "@app/pages/Home";
import Following from "@app/pages/Following";
import Profile from "@app/pages/Profile";
import Upload from "@app/pages/Upload";
import Search from "@app/pages/Search";

// không cần đăng nhập vẫn xem đc
const publicRoutes = [
    { path: "/", component: Home },
    { path: "/following", component: Following },
    { path: "/profile", component: Profile },
    { path: "/upload", component: Upload, layout: HeaderOnly },
    { path: "/search", component: Search, layout: null },
];

// phải đăng nhập mới xem đc, nếu ko đăng nhập thì lái sang trang login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
