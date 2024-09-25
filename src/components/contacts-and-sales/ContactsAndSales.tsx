import ContactsBlock from "./contacts-block/ContactsBlock";
import SalesBlock from "./sales-block/SalesBlock";
import ThemeProviderInterface from "../../interfaces/ThemeProviderInterface";
import "./ContactsAndSales.scss";

export default function ContactsAndSales({
    isDark,
    onChange,
}: ThemeProviderInterface) {
    return (
        <div className="contacts-and-sales container">
            <ContactsBlock isDark={isDark ? true : false} onChange={onChange} />
            <SalesBlock isDark={isDark ? true : false} onChange={onChange} />
        </div>
    );
}
