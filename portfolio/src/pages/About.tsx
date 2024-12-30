import leftImg from '../assets/images/left-image.jpg'
import rightImg from '../assets/images/right-image.jpg'
const About = () => {
  return (
    <section  className="section about-me" id='about' data-section="section1">
        <div className="container">
          <div className="section-heading text-center mb-16 mt-4">
            <h2 className="text-3xl font-bold">About Me</h2>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-orange-500 to-purple-600 my-4 rounded mx-auto" />
            <div className="line-dec"></div>
            <span
              >This is a Bootstrap v4.2.1 CSS Template for you. Edit and use
              this layout for your site. Updated on 21 May 2019 for repeated main menu HTML code.</span
            >
          </div>
          <div className="left-image-post">
            <div className="row flex flex-col md:flex-row gap-6 items-center">
              <div className="col-md-6 my-8">
                <div className="left-image">
                  <img className='rounded-md ' width={1650} height={200} src={leftImg} alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-text">
                  <h4 className='text-3xl font-bold'>Reflux HTML CSS Template</h4>
                  <p className='py-10'>
                    Donec tristique feugiat lacus, at sollicitudin nunc euismod
                    sed. Mauris viverra, erat non sagittis gravida, elit dui
                    mollis ante, sit amet eleifend purus ligula eget eros. Sed
                    tincidunt quam vitae neque pharetra dignissim eget ut
                    libero.
                  </p>
                  <div className="white-button ">
                    <a href="#"><button className='py-2 px-4 uppercase font-bold bg-white text-[#a43f49] hover:bg-[#a43f49] hover:text-white transition-colors duration-300'>Read More</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="w-full bg-[#ffffff4d] border-0 h-[1px] my-10" />
          <div className="right-image-post">
            <div className="row flex flex-col md:flex-row gap-6 items-center">
              <div className="col-md-6 text-center my-10 ">
                <div className="left-text text-left">
                  <h4 className="text-3xl font-bold">Sed sagittis rhoncus velit</h4>
                  <p className='py-10 '>
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Vestibulum fermentum
                    eleifend nibh, vitae sodales elit finibus pretium.
                    Suspendisse potenti. Ut sollicitudin risus a sollicitudin
                    semper.
                  </p>
                  <div className="white-button">
                  <a href="#"><button className='py-2 px-4 uppercase font-bold bg-white text-[#a43f49] hover:bg-[#a43f49] hover:text-white transition-colors duration-300'>Read More</button></a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-image">
                <img className='rounded-md ' width={1650} height={200} src={rightImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full bg-[#ffffff4d] border-0 h-[2px] my-20" />
      </section>
      
  );
}

export default About