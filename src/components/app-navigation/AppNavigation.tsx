import { AngleSmallDown, Cube } from "react-flaticons";
import RuIcon from "../../assets/images/ru.png";
import ThemeProviderInterface from "../../interfaces/ThemeProviderInterface";
import ThemeButton from "../theme-button/ThemeButton";
import "./AppNavigation.scss";

export default function AppNavigation({
    isDark,
    onChange,
}: ThemeProviderInterface) {
    return (
        <nav className="app-navigation container">
            <div className="left-side">
                <button className="left-side__button left-side__catalog">
                    <div className="left-side__catalog-menu">
                        <span>Каталог</span>
                        <AngleSmallDown />
                    </div>
                </button>
                <ThemeButton
                    isDark={isDark}
                    onChange={onChange}
                    className="left-side__button"
                />
                <button className="left-side__button left-side__lang-toggler">
                    <img src={RuIcon} alt="Change language" />
                    <AngleSmallDown />
                </button>
            </div>
            <div className="middle-side">
                <button className="middle-side__button middle-side__news">
                    <a href="https://t.me/accsforyou_shop">Новости</a>
                </button>
                <button className="middle-side__button middle-side__rules">
                    <span>Правила</span>
                </button>
                <button className="middle-side__button middle-side__help">
                    <span>Помощь</span>
                    <AngleSmallDown />
                </button>
            </div>
            <div className="right-side">
                <button className="right-side__button right-side__for-sellers">
                    <span>Для продавцов</span>
                    <Cube />
                </button>
            </div>
        </nav>
    );
}
