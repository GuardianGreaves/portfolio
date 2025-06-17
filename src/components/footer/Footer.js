import "./style.css"

import vk from "./../../img/icons/vk.svg"
import gitHub from "./../../img/icons/gitHub.svg"
import linkedIn from "./../../img/icons/linkedIn.svg"
import tg from "./../../img/icons/telegram.svg"

const Footer = () => {
    return (       
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="https://vk.com/oniqu"><img src={vk} alt="Link"/></a></li>
                        <li className="social__item"><a href="https://github.com/GuardianGreaves"><img src={gitHub} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={linkedIn} alt="Link"/></a></li>
                        <li className="social__item"><a href="https://t.me/savvyinthis"><img src={tg} alt="Link"/></a></li>
                    </ul>
                    <div className="copyright">
                        <p></p>
                    </div>
                </div>
            </div>
        </footer>
 );
}
 
export default Footer;