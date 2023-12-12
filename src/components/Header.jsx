import { NavLink } from "react-router-dom";
import style from "../css/modules/Header.module.css"

const links = [
    {
        label: 'Home',
        url: '/'
    },
    {
        label: 'Blog',
        url: '/blog'
    },
];

export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.logo_title}>
                <h1>Un blog spaziale</h1>
                <img src="/logo.svg" alt="" />
            </div>

            <div>
                <div className={style.navList}>
                    {links.map((link, i) => (
                        <div key={i}>
                            <NavLink to={link.url}>{link.label}</NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </header>
    );
}