import ThemeProviderInterface from "../../../interfaces/ThemeProviderInterface";
import GroupImage from "../../../assets/images/group.png";
import DarkGroupImage from "../../../assets/images/group_dark.png";
import "./ContactsBlock.scss";

export default function ContactsBlock({ isDark }: ThemeProviderInterface) {
    return (
        <div className="contacts contacts-and-sales--item">
            <div className="contacts--left">
                <h3 className="contacts--title">Контакты поддержки</h3>
                <p>На связи каждый день!</p>
                <p>Поможем и ответим на любые вопросы!</p>
            </div>
            <div className="contacts--right">
                <img src={isDark ? DarkGroupImage : GroupImage} alt="" />
            </div>
        </div>
    );
}
