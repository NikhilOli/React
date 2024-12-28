import firstIcon from '../assets/images/first-white-icon.png'
import secondIcon from '../assets/images/second-white-icon.png'
import thirdIcon from '../assets/images/third-white-icon.png'
import fourthIcon from '../assets/images/fourth-white-icon.png'
import firstMainIcon from '../assets/images/first-main-icon.png'
import secondMainIcon from '../assets/images/second-main-icon.png'
import thirdMainIcon from '../assets/images/third-main-icon.png'
import fourthMainIcon from '../assets/images/fourth-main-icon.png'
const Services = () => {
    return (
    <section className="section my-services" id='section2' data-section="section2">
        <div className="container">
        <div className="section-heading text-center mb-16">
            <h2 className="text-3xl font-bold">What I’m good at?</h2>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-orange-500 to-purple-600 my-4 rounded mx-auto" />
            <div className="line-dec"></div>
            <span>
            Curabitur leo felis, rutrum vitae varius eu, malesuada a tortor.
            Vestibulum congue leo et tellus aliquam, eu viverra nulla semper.
            Nullam eu faucibus diam. Donec eget massa ante.
            </span>
        </div>
        <div className="row grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="service-item  bg-white/10 rounded-sm shadow-lg p-14 transition-all ease-in duration-300 hover:bg-white hover:text-black group">
                <div className="first-service-icon service-icon mb-4">
                    <img src={firstIcon} alt="" className='group-hover:hidden'/>
                    <img src={firstMainIcon} alt="" className='hidden group-hover:block'/>
                </div>
                <h4 className='text-[26px] my-2 font-bold'>HTML5 &amp; CSS3</h4>
                <p>
                Phasellus non convallis dolor. Integer tempor hendrerit arcu at
                bibendum. Sed ac ante non metus vehicula congue quis eget eros.
                </p>
            </div>
            <div className="service-item  bg-white/10 rounded-sm shadow-lg p-14 transition-all ease-in duration-300 hover:bg-white hover:text-black group">
                <div className="second-service-icon service-icon mb-4">
                <img src={secondIcon} alt="" className='group-hover:hidden'/>
                <img src={secondMainIcon} alt="" className='hidden group-hover:block'/>
                </div>
                <h4 className='text-[26px] my-2'>Creative Ideas</h4>
                <p>
                Proin lacus massa, eleifend sed fermentum in, dignissim vel
                metus. Nunc accumsan leo nec felis porttitor, ultricies faucibus
                purus mollis.
                </p>
            </div>
            <div className="service-item  bg-white/10 rounded-sm shadow-lg p-14 transition-all ease-in duration-300 hover:bg-white hover:text-black group">
                <div className="third-service-icon service-icon mb-4">
                <img src={thirdIcon} alt="" className='group-hover:hidden'/>
                <img src={thirdMainIcon} alt="" className='hidden group-hover:block'/>
                </div>
                <h4 className='text-[26px] my-2'>Easy Customize</h4>
                <p>
                Integer suscipit condimentum aliquet. Nam quis risus metus.
                Nullam faucibus quam eget arcu pretium tincidunt. Nam libero
                dui.
                </p>
            </div>
            <div className="service-item  bg-white/10 rounded-sm shadow-lg p-14 transition-all ease-in duration-300 hover:bg-white hover:text-black group">
                <div className="fourth-service-icon service-icon mb-4">
                <img src={fourthIcon} alt="" className='group-hover:hidden'/>
                <img src={fourthMainIcon} alt="" className='hidden group-hover:block'/>
                </div>
                <h4 className='text-[26px] my-2'>Admin Dashboard</h4>
                <p>
                Vivamus et dui a massa venenatis fringilla. Proin lacus massa,
                eleifend sed fermentum in, dignissim vel metus. Nunc accumsan
                leo nec felis porttitor.
                </p>
            </div>
        </div>
        </div>
        <hr className="w-full bg-[#ffffff4d] border-0 h-[2px] my-20" />
    </section>
    );
};

export default Services;
