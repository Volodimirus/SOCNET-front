import React, { useState, useEffect } from "react";

import ThemeProviderInterface from "../../../interfaces/ThemeProviderInterface";

import QRImage from "../../../assets/images/qr.png";
import DarkQRImage from "../../../assets/images/qr_dark.png";

import "./SalesBlock.scss";

export default function SalesBlock({
    isDark,
    onChange,
}: ThemeProviderInterface) {
    const [theme, setTheme] = useState<string>("light");

    useEffect(() => {
        if (isDark) setTheme("dark");
        else setTheme("light");
    }, [isDark]);

    return (
        <div className="sales contacts-and-sales--item">
            <div className="sales--left">
                <h3 className="sales--title">Промокоды и акции</h3>
                <p>Также актуальные новости о нашем проекте</p>
                <p>Прямо из Telegram! Подписывайтесь!</p>
            </div>
            <div className="sales--right">
                <img src={theme === "dark" ? DarkQRImage : QRImage} />
            </div>
        </div>
    );
}
