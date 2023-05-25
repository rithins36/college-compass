import headerBg from '../../images/header-bg.jpg';
import students from '../../images/students.jpg';

export const Carousel = () => {
    return(
        <div id="x-corp-carousel" class="carousel slide hero-slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#x-corp-carousel" data-slide-to="0" class="active"></li>
                <li data-target="#x-corp-carousel" data-slide-to="1"></li>
            </ol>

            <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <img src={headerBg} alt="Hero Slide"/>

                    <div class="container">
                        <div class="carousel-caption">
                            <small class="animated fadeIn">CALL US TODAY</small>
                            <div class="phone animated lightSpeedIn">1-800-1234-567</div>
                            <h1 class="animated lightSpeedIn">KEAM <br/>College Allotment<br/>made easy.</h1>

                            <p class="lead animated lightSpeedIn">This website helps students to apply colleges in KEAM website efficiently and error free.</p>

                            <a class="btn btn-primary animated lightSpeedIn" href="#">Let's get started</a>
                        </div>
                    </div>
                </div>

                <div class="item">
                    <img src={students} alt="Hero Slide"/>

                    <div class="container">
                        <div class="carousel-caption">

                            <h1 class="animated bounceIn">Are you waiting<br/>for KEAM result ?</h1>

                            <p class="lead animated bounceIn">
                                Then what are you waiting for!
                                Find the best Engineering colleges in kerala</p>
                            <a class="btn btn-primary animated bounceIn" href="#">Let's get started</a>
                        </div>
                    </div>
                </div>

            </div>

            <a class="left carousel-control" href="#x-corp-carousel" role="button" data-slide="prev">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#x-corp-carousel" role="button" data-slide="next">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}
