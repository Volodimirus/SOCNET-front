import React, { useEffect, useState } from "react";

import CatalogSettingsPanel from "./catalog-settings-panel/CatalogSettingsPanel";
import ThemeProviderInterface from "../../interfaces/ThemeProviderInterface";

import "./Catalog.scss";

export default function Catalog({ isDark, onChange }: ThemeProviderInterface) {
    const [theme, setTheme] = useState<string>("light");

    useEffect(() => {
        if (isDark) setTheme("dark");
        else setTheme("light");
    }, [isDark]);

    return (
        <div className="catalog container">
            <CatalogSettingsPanel theme={theme} />
        </div>
    );
}
