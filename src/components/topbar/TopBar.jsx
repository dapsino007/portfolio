import { Mail, Person } from "@material-ui/icons";
import "./topbar.scss";

const TopBar = ({menuOpen, setMenuOpen}) => {
    const handleMenu = ()=>{
        menuOpen? setMenuOpen(false) : setMenuOpen(true)
    }
    return (
        <div className={"topbar " + (menuOpen && "active") }>
            <div className="wrapper">
                <div className="left">
                    <a href="#home" className="logo">
                        <img src='assets/images/logo.png' alt="dapsino"/>
                    </a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+1 123 465 7890</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>007@dapsino.com</span>
                    </div>
                </div>

                <div className="right">
                    <div onClick={handleMenu} className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar
