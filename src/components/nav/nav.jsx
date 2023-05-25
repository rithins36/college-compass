import './nav.css'
import logo from '../../images/cclogo.png'

export const Navbar = () => {
    return(
        <nav class="navbar navbar-default navbar-fixed-top" role="navigation">

            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" >
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    </button>
                    <h1 class="logo"><a class="navbar-brand" href="/"><img src={logo} alt=""/></a></h1>
                </div>

                <div class="collapse navbar-collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-right">
                        
                        <li class="active"><a href="index.html">Home</a></li>

                        <li><a href="about-us.html" >About Us</a></li>

                        <li><a href="" > Services </a></li>

                        <li><a href="login.html"> Login </a></li>

                        <li><a href="contact.html">Contact</a></li>

                        <a class="btn btn-primary animated lightSpeedIn" href="#">Let's get started</a>
                    </ul>
                </div>
            </div>
    </nav>
    )
}

