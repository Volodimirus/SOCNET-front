import Logo from "../../assets/images/website-logo.png";
import DarkLogo from "../../assets/images/website-logo_dark.png";
import UserBlock from "../user-block/UserBlock";
import { Filter, Search, ShoppingBag, Bell } from "react-flaticons";
import ThemeProviderInterface from "../../interfaces/ThemeProviderInterface";
import "./AppHeader.scss";

export default function AppHeader({ isDark }: ThemeProviderInterface) {
    return (
        <header id="header" className="header container">
            <a href="/">
                <img
                    className="header--logo"
                    src={isDark ? DarkLogo : Logo}
                    alt="Website Logo"
                />
            </a>
            <div className="header--search">
                <Search className="header--search__icon search" />
                <input
                    type="text"
                    name="global-search"
                    className="header--search__input"
                    placeholder="Поиск"
                />
                <button>
                    <Filter className="header--search__icon filter" />
                </button>
            </div>
            <button className="header--button shopping-button">
                <ShoppingBag />
                <div className="header--button__count header--button__basket_count">
                    <span className="header--button__count-value">12</span>
                </div>
            </button>
            <button className="header--button bell-button">
                <Bell />
                <div className="header--button__count header--button__notifications_count">
                    <span className="header--button__count-value">12</span>
                </div>
            </button>
            <UserBlock />
        </header>
    );
}
