import authorImage from '../assets/images/author-image.jpg'
export default function Sidebar() {
  return (
    <div className="responsive-nav">
        <i className="fa fa-bars" id="menu-toggle"></i>
        <div id="menu" className="menu">
          <i className="fa fa-times" id="menu-close"></i>
          <div className="container">
            <div className="image">
              <a href="#"><img src={authorImage} alt="" /></a>
            </div>
            <div className="author-content">
              <h4>Reflux Me</h4>
              <span>Web Designer</span>
            </div>
            <nav className="main-nav" role="navigation">
              <ul className="main-menu">
                <li><a href="#section1">About Me</a></li>
                <li><a href="#section2">What I’m good at</a></li>
                <li><a href="#section3">My Work</a></li>
                <li><a href="#section4">Contact Me</a></li>
              </ul>
            </nav>
            <div className="social-network">
              <ul className="soial-icons">
                {/* <li>
                  <a href="https://fb.com/templatemo"
                    ><i className="fa fa-facebook"></i
                  ></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-dribbble"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-rss"></i></a>
                </li> */}
              </ul>
            </div>
            <div className="copyright-text">
              <p>Copyright 2019 Reflux Design</p>
            </div>
          </div>
        </div>
      </div>
  )
}