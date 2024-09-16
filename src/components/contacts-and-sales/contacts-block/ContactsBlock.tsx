import React, { useState, useEffect } from "react";

import ThemeProviderInterface from "../../../interfaces/ThemeProviderInterface";

import GroupImage from "../../../assets/images/group.png";
import DarkGroupImage from "../../../assets/images/group_dark.png";

import "./ContactsBlock.scss";

export default function ContactsBlock({
    isDark,
    onChange,
}: ThemeProviderInterface) {
    const [theme, setTheme] = useState<string>("light");

    useEffect(() => {
        if (isDark) setTheme("dark");
        else setTheme("light");
    }, [isDark]);

    return (
        <div className="contacts contacts-and-sales--item">
            <div className="contacts--left">
                <h3 className="contacts--title">Контакты поддержки</h3>
                <p>На связи каждый день!</p>
                <p>Поможем и ответим на любые вопросы!</p>
            </div>
            <div className="contacts--right">
                <img src={theme === "dark" ? DarkGroupImage : GroupImage} />
            </div>
        </div>
    );
}
