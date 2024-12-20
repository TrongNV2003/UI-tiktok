import PropTypes from "prop-types";
import Header from "@app/layouts/components/Header";
import styles from "./DefaultLayout.module.scss";
import Sidebar from "@app/layouts/components/Sidebar";

import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <Header />
            <div className={cx("container")}>
                <Sidebar />
                <div className={cx("content")}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
