import Navigation from "./Navigation";

export default function Layout({ children }) {
    return (
        <>
            <Navigation />
            <div className="body__container">{children}</div>
        </>
    );
}
