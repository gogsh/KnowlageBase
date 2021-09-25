import Link from 'next/link';
import classes from './Navigation.module.scss';

function Navigation() {
  return (
    <div className={classes.Navigation}>
      <Link href="/">
        <a>Главная</a>
      </Link>
      <Link href="/users">
        <a>Пользователи</a>
      </Link>
    </div>

  );
}

export default Navigation;
