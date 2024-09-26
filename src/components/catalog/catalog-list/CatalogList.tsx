import CatalogSection from "./catalog-section/CatalogSection";
import catalogItems from "./catalogItems.ts";
import "./CatalogList.scss";

export default function CatalogList() {
    return (
        <div className="catalog-list">
            <CatalogSection
                title="Facebook - Аккаунты"
                catalogItems={catalogItems}
            />
            <CatalogSection
                title="Facebook - Сообщества"
                catalogItems={catalogItems}
            />
        </div>
    );
}
