// Styles
import s from './Header.scss';

// Packages
import Link from 'next/link'

// Code
const HeaderClass = () => (
    <div>
        <Link href="/">
          <a className={s.link}>Anasayfa</a>
        </Link>
        <Link href="/list" as="/haberler">
          <a className={s.link}>Haberler</a>
        </Link>
        <Link href="/detail?newsId=1" as="/haber-detay/1">
          <a className={s.link}>Haber Detay 1</a>
        </Link>
    </div>
)

export const Header = HeaderClass
