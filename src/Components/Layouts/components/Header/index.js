// tools
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
//Tippy
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
// Material
import images from '~/assets/images';
// React Hooks
import { useEffect, useState } from 'react';
// component
import { Wrapper as PoppersWrapper } from '~/Components/Poppers';
import AccountItem from '~/Components/AccountItem';
import Button from '~/Components/Button';
import Menu from '~/Components/Poppers/Menu';
import Image from '~/Components/Image';
// Icons
import { UploadIcon, SearchIcon, InboxIcon, MessageIcon } from '~/Components/Icons';
// END IMPORT
const imgUrl =
    'https://scontent.xx.fbcdn.net/v/t39.30808-1/311114567_111104371772728_6210893300346458364_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=109&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=CDdXxg1K2zIAX-M3_BL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=00_AT9W3D_su69NglhnfBNVb6mYd1b-NBSndKD7dladGOs4Rw&oe=634DA4C2';
const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
// header
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    // is user login active
    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                console.log(1);
                break;
            default:
        }
    };
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/settings',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* TIKTOK LOGO */}
                <img src={images.logo} alt="TikTok" />
                {/* SEARCH BAR */}
                <HeadlessTippy
                    visible={searchResult.length > 0}
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PoppersWrapper>
                                <h3 className={cx('search-title')}>Accounts</h3>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PoppersWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search-bar')}>
                        <input placeholder="Search account and videos" spellCheck={false}></input>
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <SearchIcon />
                        </button>
                    </div>
                </HeadlessTippy>
                {/* Actions - User section */}
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[200, 200]}
                                content="Upload video"
                                placement="bottom"
                                animation="shift-away"
                            >
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[200, 200]}
                                content="Messages"
                                placement="bottom"
                                animation="shift-away"
                            >
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[200, 200]}
                                content="Inbox"
                                placement="bottom"
                                animation="shift-away"
                            >
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                            {/* faEllipsisVertical */}
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image src={imgUrl} className={cx('user-avatar')} alt="user name" />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
