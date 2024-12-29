import { FaPersonRifle } from "react-icons/fa6";
import portfolio1 from "../assets/images/portfolio-01.jpg";
import portfolio2 from "../assets/images/portfolio-02.jpg";
import portfolio3 from "../assets/images/portfolio-03.jpg";
import portfolio4 from "../assets/images/portfolio-04.jpg";
import portfolio5 from "../assets/images/portfolio-05.jpg";
import portfolio6 from "../assets/images/portfolio-06.jpg";

const Projects = () => {
    return (
        <section className="section my-work" data-section="section3">
        <div className="container">
            <div className="section-heading text-center mb-16">
            <h2 className="text-3xl font-bold">My Work</h2>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-orange-500 to-purple-600 my-4 rounded mx-auto" />
            <div className="line-dec"></div>
            <span>
                Aenean sollicitudin ex mauris, lobortis lobortis diam euismod sit
                amet. Duis ac elit vulputate, lobortis arcu quis, vehicula mauris.
            </span>
            </div>
            <div className="row">
            <div className="isotope-wrapper ">
                <div className="isotope-box grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="isotope-item">
                    <figure className="snip1321 relative group overflow-hidden">
                    <img
                        className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                        src={portfolio1}
                        alt="sq-sample26"
                    />
                    <figcaption className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="text-center text-white">
                        <a
                            className="block text-xl mb-2"
                            href="assets/images/portfolio-01.jpg"
                            data-lightbox="image-1"
                            data-title="Caption"
                        >
                            <FaPersonRifle className='text-center mx-auto' size={24} />
                        </a>
                        <h4 className="text-lg font-bold">First Title</h4>
                        <span className="text-sm">Description</span>
                        </div>
                    </figcaption>
                    </figure>
                </div>
                <figure className="relative group overflow-hidden">
                    <img
                    src={portfolio2}
                    alt="portfolio-item"
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                    />
                    <figcaption className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="text-center text-white">
                        <a
                        href="assets/images/portfolio-01.jpg"
                        data-lightbox="image-1"
                        data-title="Caption"
                        className="block text-xl mb-2"
                        >
                        <FaPersonRifle className='text-center mx-auto' size={24} />
                        </a>
                        <h4 className="text-lg font-bold">First Title</h4>
                        <span className="text-sm">Description</span>
                    </div>
                    </figcaption>
                </figure>

                <figure className="relative group overflow-hidden">
                    <img
                    src={portfolio3}
                    alt="portfolio-item"
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                    />
                    <figcaption className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="text-center text-white">
                        <a
                        href="assets/images/portfolio-01.jpg"
                        data-lightbox="image-1"
                        data-title="Caption"
                        className="block text-xl mb-2"
                        >
                        <FaPersonRifle className='text-center mx-auto' size={24} />
                        </a>
                        <h4 className="text-lg font-bold">First Title</h4>
                        <span className="text-sm">Description</span>
                    </div>
                    </figcaption>
                </figure>

                <div className="isotope-item">
                    <figure className="relative group overflow-hidden">
                    <img
                        src={portfolio4}
                        alt="portfolio-item"
                        className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                    />
                    <figcaption className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="text-center text-white">
                        <a
                            href="assets/images/portfolio-01.jpg"
                            data-lightbox="image-1"
                            data-title="Caption"
                            className="block text-xl mb-2"
                        >
                            <FaPersonRifle className='text-center mx-auto' size={24} />
                        </a>
                        <h4 className="text-lg font-bold">First Title</h4>
                        <span className="text-sm">Description</span>
                        </div>
                    </figcaption>
                    </figure>
                </div>

                <div className="isotope-item">
                    <figure className="relative group overflow-hidden">
                    <img
                        src={portfolio5}
                        alt="portfolio-item"
                        className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                    />
                    <figcaption className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="text-center text-white">
                        <a
                            href="assets/images/portfolio-01.jpg"
                            data-lightbox="image-1"
                            data-title="Caption"
                            className="block text-xl mb-2"
                        >
                            <FaPersonRifle className='text-center mx-auto' size={24} />
                        </a>
                        <h4 className="text-lg font-bold">First Title</h4>
                        <span className="text-sm">Description</span>
                        </div>
                    </figcaption>
                    </figure>
                </div>

                <div className="isotope-item">
                    <figure className="relative group overflow-hidden">
                    <img
                        src={portfolio6}
                        alt="portfolio-item"
                        className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                    />
                    <figcaption className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="text-center text-white">
                        <a
                            href="assets/images/portfolio-01.jpg"
                            data-lightbox="image-1"
                            data-title="Caption"
                            className="block text-xl mb-2"
                        >
                            <FaPersonRifle className='text-center mx-auto' size={24} />
                        </a>
                        <h4 className="text-lg font-bold">First Title</h4>
                        <span className="text-sm">Description</span>
                        </div>
                    </figcaption>
                    </figure>
                </div>
                </div>
            </div>
            </div>
        </div>
        <hr className="w-full bg-[#ffffff4d] border-0 h-[2px] my-20" />
        </section>
    );
};

export default Projects;
