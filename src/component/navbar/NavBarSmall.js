import './NavBar.css';
import { Navbar } from 'react-bootstrap';

const NavBarSmall = () => {

    return (

        <div>
            <div class="container">

                {/* <ul class="primary-menu-links nav navbar-nav">

                    <li><span class="phone">
                        <i class="fa fa-phone"></i> (+603) 2712 3456</span>
                    </li>
                    <li><span class="email">
                        <i class="fa fa-envelope"></i> <a href="mailto:info@avowstech.com" class="__cf_email__">info@avowstech.com</a></span>
                    </li>
                </ul>
                <ul class="primary-social-menu-links">
                    <li><a href="https://www.facebook.com/avowstechnologies/?fref=ts" title="Facebook" target="_blank" class="mdl-button mdl-js-button mdl-js-ripple-effect" data-upgraded=",MaterialButton,MaterialRipple"><i class="fa fa-facebook"></i><span class="mdl-button__ripple-container"><span class="mdl-ripple"></span></span></a></li>
                    <li><a href="https://www.linkedin.com/company/avows-technologies-sdn-bhd/" title="Linkedin" target="_blank" class="mdl-button mdl-js-button mdl-js-ripple-effect" data-upgraded=",MaterialButton,MaterialRipple"><i class="fa fa-linkedin"></i><span class="mdl-button__ripple-container"><span class="mdl-ripple"></span></span></a></li>
                    <li><a href="https://twitter.com/Avowstech" title="Linkedin" target="_blank" class="mdl-button mdl-js-button mdl-js-ripple-effect" data-upgraded=",MaterialButton,MaterialRipple"><i class="fa fa-twitter"></i><span class="mdl-button__ripple-container"><span class="mdl-ripple"></span></span></a></li>
                </ul> */}
            </div>


            <Navbar className="small-nav" bg="dark" variant="dark" >
                <Navbar.Brand className="small-nav-num">(+603) 2712 3456</Navbar.Brand>
                
                <Navbar.Brand className="small-nav-num"><span><a href="mailto:info@avowstech.com" class="__cf_email__">info@avowstech.com</a></span></Navbar.Brand>
                
            </Navbar>
        </div >

    );
}

export default NavBarSmall;