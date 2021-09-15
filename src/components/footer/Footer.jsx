import "./footer.scss";

const Footer = () => {

    const currentYear = new Date();

    return (
        <div className="footer">
           dapsino007 | copyright © {currentYear.getFullYear()}
        </div>
    )
}

export default Footer
