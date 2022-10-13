import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/0ca816b36575e787f36ec8921115a085~c5_100x100.jpeg?x-expires=1665579600&x-signature=gcPVIhSWTo%2B6HbMrT9kyb0JMEfY%3D"
        alt="ava"
        className={cx('avatar')}
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          Baotg
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('user-name')}>Tran Gia Bao</span>
      </div>
    </div>
  );
}

export default AccountItem;
