import "./menu.scss";

const Menu = ({menuOpen, setMenuOpen}) => {
    const handleMenu = ()=>{
        menuOpen? setMenuOpen(false) : setMenuOpen(true)
    }
    return (
        <div className={"menu " + (menuOpen && "active") }>
            <ul>
                <li onClick={handleMenu}><a href="#home">Home</a></li>
                <li onClick={handleMenu}><a href="#portfolio">Portfolio</a></li>
                <li onClick={handleMenu}><a href="#works">Works</a></li>
                <li onClick={handleMenu}><a href="#testimonials">Testimonials</a></li>
                <li onClick={handleMenu}><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default Menu
