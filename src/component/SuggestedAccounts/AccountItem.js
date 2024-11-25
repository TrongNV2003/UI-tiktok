import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";

import { Wrapper as PopperWrapper } from "@app/component/Popper";
import AccountPreview from "./AccountPreview";
import styles from "./SuggestedAccounts.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} placement="bottom" offset={[-20, 0]} render={renderPreview}>
                <div className={cx("account-item")}>
                    <img className={cx("avatar")} src="" alt="" />
                    <div className={cx("item-info")}>
                        <p className={cx("nickname")}>
                            <strong>Trongdz</strong>
                            <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
                        </p>
                        <p className={cx("name")}>Trọng</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    // Props validation
};
export default AccountItem;
