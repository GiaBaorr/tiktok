// classnames
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
// Hooks
import { useState, useEffect, useRef } from 'react';
// basic
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import AccountItem from '~/Components/AccountItem';
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchIcon } from '~/Components/Icons';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
// Component
import { Wrapper as PoppersWrapper } from '~/Components/Poppers';

const cx = classNames.bind(styles);

function Search() {
    // state
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResults, setShowResults] = useState(true);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        fetch(
            `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
                searchValue,
            )}&type=less`,
        )
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [searchValue]);
    // ref and variable
    const inputRef = useRef();
    // handle function
    const handleOnChange = (e) => {
        setSearchValue(e.target.value);
    };
    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };
    const handleHideResults = () => {
        setShowResults(false);
    };
    return (
        <>
            <HeadlessTippy
                visible={showResults && searchResult.length > 0}
                interactive
                onClickOutside={handleHideResults}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PoppersWrapper>
                            <h3 className={cx('search-title')}>Accounts</h3>
                            {searchResult.map((result) => {
                                return <AccountItem key={result.id} data={result} />;
                            })}
                        </PoppersWrapper>
                    </div>
                )}
            >
                <div className={cx('search-bar')}>
                    <input
                        ref={inputRef}
                        placeholder="Search account and videos"
                        spellCheck={false}
                        onChange={(e) => handleOnChange(e)}
                        value={searchValue}
                        onFocus={() => setShowResults(true)}
                    ></input>
                    {!!searchValue && !loading && (
                        <>
                            <button className={cx('clear')} onClick={handleClear}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        </>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </>
    );
}

export default Search;
