const Contacts = () => {
    return (
        <section className="section contact-me" data-section="section4" id='section4'>
        <div className="container">
            <div className="section-heading text-center mb-16">
            <h2 className="text-3xl font-bold">Contact Me</h2>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-orange-500 to-purple-600 my-4 rounded mx-auto" />
            <div className="line-dec"></div>
            <span>
                Fusce eget nibh nec justo interdum condimentum. Morbi justo ex,
                efficitur at ante ac, tincidunt maximus ligula. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
            </span>
            </div>
            <div className="row">
            <div className="right-content">
                <div className="container">
                <form className="" id="contact" action="" method="post">
                    <div className="row flex flex-col gap-8">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-1/2">
                        <fieldset>
                            <input
                            name="name"
                            type="text"
                            className="form-control w-full p-[8px] bg-white/10 outline-none border border-white"
                            id="name"
                            placeholder="Your name..."
                            required={false}
                            />
                        </fieldset>
                        </div>
                        <div className="w-full md:w-1/2">
                        <fieldset>
                            <input
                            name="email"
                            type="text"
                            className="form-control w-full p-[8px] bg-white/10 outline-none border border-white"
                            id="email"
                            placeholder="Your email..."
                            required={false}
                            />
                        </fieldset>
                        </div>
                    </div>
                    <div className="w-full">
                        <fieldset>
                        <input
                            name="subject"
                            type="text"
                            className="form-control w-full p-[8px] bg-white/10 outline-none border border-white"
                            id="subject"
                            placeholder="Subject..."
                            required={false}
                        />
                        </fieldset>
                    </div>
                    <div className="w-full">
                        <fieldset>
                        <textarea
                            name="message"
                            rows={6}
                            className="form-control w-full p-[8px] bg-white/10 outline-none border border-white"
                            id="message"
                            placeholder="Your message..."
                            required={false}
                        ></textarea>
                        </fieldset>
                    </div>
                    <div className="w-full text-center">
                        <a href="#">
                        <button className="py-2 px-4 uppercase font-bold bg-white text-[#a43f49] hover:bg-[#a43f49] hover:text-white transition-colors duration-300">
                            Send Message
                        </button>
                        </a>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};

export default Contacts;
