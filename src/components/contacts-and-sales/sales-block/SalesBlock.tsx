import ThemeProviderInterface from "../../../interfaces/ThemeProviderInterface";
import QRImage from "../../../assets/images/qr.png";
import DarkQRImage from "../../../assets/images/qr_dark.png";
import "./SalesBlock.scss";

export default function SalesBlock({ isDark }: ThemeProviderInterface) {
    return (
        <div className="sales contacts-and-sales--item">
            <div className="sales--left">
                <h3 className="sales--title">Промокоды и акции</h3>
                <p>Также актуальные новости о нашем проекте</p>
                <p>Прямо из Telegram! Подписывайтесь!</p>
            </div>
            <div className="sales--right">
                <img src={isDark ? DarkQRImage : QRImage} alt="" />
            </div>
        </div>
    );
}
