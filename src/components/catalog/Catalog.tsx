import CatalogSettingsPanel from "./catalog-settings-panel/CatalogSettingsPanel";
import CatalogFilterPanel from "./catalog-filter-panel/CatalogFilterPanel";
import CatalogList from "./catalog-list/CatalogList";
import ThemeProviderInterface from "../../interfaces/ThemeProviderInterface";
import "./Catalog.scss";

export default function Catalog({ isDark }: ThemeProviderInterface) {
    return (
        <div className="catalog container">
            <CatalogSettingsPanel isDark={isDark} />
            <CatalogFilterPanel />
            <CatalogList />
        </div>
    );
}
