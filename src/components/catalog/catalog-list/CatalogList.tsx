import CatalogSection from "./catalog-section/CatalogSection";
import catalogItems from "./catalogItems.ts";
import "./CatalogList.scss";

export default function CatalogList() {
    return (
        <div className="catalog-list">
            <CatalogSection
                title="Facebook - Аккаунты"
                catalogItems={catalogItems}
                // catalogItems={[

                //     {
                //         title: "Facebook Autoreg",
                //         price: 2.3,
                //         count: 228,
                //         sells: 52,
                //         avatar: "",
                //         isPremium: false,
                //         boost: false,
                //         text: "Excellent quality. Login:Pass:Email:EmailPass:Auth_token Confirmation by email + mail included I Format:",
                //     },
                // ]}
            />
        </div>
    );
}
