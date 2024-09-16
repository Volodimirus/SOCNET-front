import React, { useState, useEffect } from "react";

import ContactsBlock from "./contacts-block/ContactsBlock";
import SalesBlock from "./sales-block/SalesBlock";

import ThemeProviderInterface from "../../interfaces/ThemeProviderInterface";

import "./ContactsAndSales.scss";

export default function ContactsAndSales({
    isDark,
    onChange,
}: ThemeProviderInterface) {
    const [theme, setTheme] = useState<string>("light");

    useEffect(() => {
        if (isDark) setTheme("dark");
        else setTheme("light");
    }, [isDark]);

    return (
        <div className="contacts-and-sales container">
            <ContactsBlock
                isDark={theme === "dark" ? true : false}
                onChange={onChange}
            />
            <SalesBlock
                isDark={theme === "dark" ? true : false}
                onChange={onChange}
            />
        </div>
    );
}
