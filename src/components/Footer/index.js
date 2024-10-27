import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerItem">
                <a href="https://www.instagram.com/tribunatafc/" target="_blank" rel="noreferrer">
                    <img src="/images/ig.png" alt="instagram logo"/>
                </a>
            </div>
            
            <div className="footerItem">
                <p>TRIBUNATA FC</p>
            </div>

            <div className="footerItem">
                <p>&copy; 2024</p>
            </div>
        </footer>
    )
}

export default Footer
