import PropTypes from 'prop-types';
// Menu
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PoppersWrapper } from '~/Components/Poppers';
import MenuItem from './MenuItem';
// hooks
import { useState } from 'react';
//Tippy
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import Header from './Header';
// cx
const cx = classNames.bind(styles);

// empty function
const defaultFn = () => {};
//MENU
function Menu({ children, items = [], onChange = defaultFn, hideOnClick = true, ...props }) {
    // handle multiple levels menu
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    // render item
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    // handle multiple levels menu
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
    const renderResult = (attrs) => (
        <div className={cx('content')} tabIndex="-1" {...attrs}>
            <PoppersWrapper className={cx('menu-poppers')}>
                {history.length > 1 && (
                    <Header
                        title={current.title}
                        // handle multiple levels menu
                        onBack={() => {
                            setHistory((prev) => prev.slice(0, prev.length - 1));
                        }}
                    />
                )}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PoppersWrapper>
        </div>
    );
    const handleResetFirstPage = () => {
        setHistory((prev) => prev.slice(0, 1));
    };
    // Tippy headless animation
    const onShow = (instance) => {
        instance.popper.style.opacity = 1;
    };
    const onHide = (instance) => {
        instance.popper.style.transitionDuration = '0.5s';
        instance.popper.style.transitionProperty = 'opacity';
        instance.popper.style.opacity = 0;

        setTimeout(handleResetFirstPage, 501);
    };

    return (
        <Tippy
            // visible
            interactive
            delay={[0, 500]}
            animation={true}
            offset={[12, 8]}
            placement="bottom-end"
            hideOnClick={hideOnClick}
            render={renderResult}
            onShow={onShow}
            onHide={onHide}
            {...props}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.bool,
};
export default Menu;
