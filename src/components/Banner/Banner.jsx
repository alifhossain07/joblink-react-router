const Banner = () => {
    return (
        <div className="flex items-center mb-36 justify-center w-10/12 mx-auto mt-24">

        {/* Banner Content */}
            <div className=" space-y-5">
                <h1 className="text-4xl font-bold">One Step Closer To Your <span className="text-sky-700">Dream Job</span></h1>
                <p className="text-base text-gray-600">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn btn-info">Get Started</button>
            </div>

        {/* Image */}
            <div>
                <img className="" src="/src/assets/images/user.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;