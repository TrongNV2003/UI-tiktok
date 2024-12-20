import PropTypes from "prop-types";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useState } from "react";

import { Wrapper as PopperWrapper } from "@app/component/Popper";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItems";
import Header from "./Header";

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx("menu-popper")}>
                {/* Nếu đang ở cấp 2 thì hiện Header Menu back*/}
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className={cx("menu-body")}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    // Reset to first page
    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            interactive
            delay={[0, 200]}
            offset={[8, 12]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={renderResult}
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
