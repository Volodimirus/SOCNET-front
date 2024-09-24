import React from "react";

import CatalogSection from "./catalog-section/CatalogSection";

import "./CatalogList.scss";

//                     // {
//                     //     title: "Facebook Авторег",
//                     //     price: 2.3,
//                     //     count: 228,
//                     //     sells: 52,
//                     //     avatar: "",
//                     //     isPremium: false,
//                     //     boost: false,
//                     //     text: "Excellent quality. Login:Pass:Email:EmailPass:Auth_token Confirmation by email + mail included I Format:",
//                     // },
//                     // {
//                     //     title: "Facebook Авторег",
//                     //     price: 2.3,
//                     //     count: 228,
//                     //     sells: 52,
//                     //     avatar: "",
//                     //     isPremium: false,
//                     //     boost: false,
//                     //     text: "Excellent quality. Login:Pass:Email:EmailPass:Auth_token Confirmation by email + mail included I Format:",
//                     // },

// // export default function CatalogList() {
// //     return (
// //         <div className="catalog-list">
// //             <CatalogSection
// //                 title="Facebook - Аккаунты"
// //                 catalogItems={[]}
// //             />
// //         </div>
// //     );
// // }

export default function CatalogList() {
    return (
        <div className="catalog-list">
            <CatalogSection
                title="Facebook - Аккаунты"
                catalogItems={[
                    {
                        title: "Facebook Autoreg",
                        price: 2.3,
                        count: 228,
                        sells: 52,
                        avatar: "",
                        isPremium: false,
                        boost: false,
                        text: "Excellent quality. Login:Pass:Email:EmailPass:Auth_token Confirmation by email + mail included I Format:",
                    },
                    {
                        title: "Facebook Autoreg",
                        price: 2.3,
                        count: 228,
                        sells: 52,
                        avatar: "",
                        isPremium: false,
                        boost: false,
                        text: "Excellent quality. Login:Pass:Email:EmailPass:Auth_token Confirmation by email + mail included I Format:",
                    },
                    {
                        title: "Facebook Autoreg",
                        price: 2.3,
                        count: 228,
                        sells: 52,
                        avatar: "",
                        isPremium: false,
                        boost: false,
                        text: "Excellent quality. Login:Pass:Email:EmailPass:Auth_token Confirmation by email + mail included I Format:",
                    },
                ]}
            />
        </div>
    );
}
