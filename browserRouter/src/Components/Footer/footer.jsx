import style from "./Footer.module.css";

function Footer() {
    return (
        <footer className={style.footer}>
            <h2>Bazaar</h2>
            <p>&copy; 2026 Bazaar. All Rights Reserved.</p>
            <p>Designed & Developed by Anurag</p>
        </footer>
    );
}

export default Footer;