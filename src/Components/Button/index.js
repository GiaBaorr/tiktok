import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  onClick,
  primary = false,
  outline = false,
  text = false,
  disable = false,
  small = false,
  large = false,
  rounded = false,
  className,
  children,
  leftIcon,
  rightIcon,
  ...passProps
}) {
  let Comp = 'button';

  const props = {
    onClick: onClick,
    ...passProps,
  };
  // BUTTON TYPE
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }
  // DISABLE LOGIC
  if (disable) {
    delete props.disable;
  }
  // CLasses
  const classes = cx('wrapper', {
    primary: primary,
    outline: outline,
    small: small,
    large: large,
    text: text,
    disable: disable,
    rounded: rounded,
    [className]: className,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
