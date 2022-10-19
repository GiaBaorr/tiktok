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

    return (
        <Tippy
            {...props}
            // visible
            interactive
            offset={[12, 8]}
            delay={[0, 500]}
            placement="bottom-end"
            hideOnClick={hideOnClick}
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PoppersWrapper className={cx('menu-poppers')}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                // handle multiple levels menu
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PoppersWrapper>
                </div>
            )}
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
