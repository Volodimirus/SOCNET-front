import React from "react";

import AppHeader from "../../components/app-header/AppHeader";
import AppNavigation from "../../components/app-navigation/AppNavigation";
import AdBlock from "../../components/ad-block/AdBlock";
import Catalog from "../../components/catalog/Catalog";

import { ThemeContext, themes } from "../../contexts/ThemeContext";
import ContactsAndSales from "../../components/contacts-and-sales/ContactsAndSales";

export default function MainPage() {
    return (
        <ThemeContext.Consumer>
            {({ theme, setTheme }: any) => {
                return (
                    <>
                        <AppHeader
                            isDark={theme === themes.dark}
                            onChange={() => {
                                if (theme === themes.light)
                                    setTheme(themes.dark);
                                if (theme === themes.dark)
                                    setTheme(themes.light);
                            }}
                        />
                        <AppNavigation
                            isDark={theme === themes.dark}
                            onChange={() => {
                                if (theme === themes.light)
                                    setTheme(themes.dark);
                                if (theme === themes.dark)
                                    setTheme(themes.light);
                            }}
                        />
                        <ContactsAndSales
                            isDark={theme === themes.dark}
                            onChange={() => {
                                if (theme === themes.light)
                                    setTheme(themes.dark);
                                if (theme === themes.dark)
                                    setTheme(themes.light);
                            }}
                        />
                        <AdBlock />
                        <Catalog
                            isDark={theme === themes.dark}
                            onChange={() => {
                                if (theme === themes.light)
                                    setTheme(themes.dark);
                                if (theme === themes.dark)
                                    setTheme(themes.light);
                            }}
                        />
                    </>
                );
            }}
        </ThemeContext.Consumer>
    );
}
