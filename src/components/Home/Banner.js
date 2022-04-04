const Banner = () => {
  return (
    <div className="container mx-auto py-9 md:py-12 px-4 md:px-6">
        <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
            <div className="flex flex-col md:flex-row items-strech justify-between bg-gray-50 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
                <div className="flex flex-col justify-center md:w-1/2">
                    <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">Headline News</h1>
                    <p className="text-base lg:text-xl text-gray-800 mt-2">
                        Make you stay <span className="font-bold">up to date</span>
                    </p>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMDHf-gMg3COKVbqFGY2tuxAlpekvILf_wUA&usqp=CAU" alt="" />
                </div>
            </div>
            <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-50 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
                <div className="xl:invisible lg:invisible md:visible sm:visible xs:visible flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">Popular News</h1>
                    <p className="text-base lg:text-xl text-gray-800">
                        Keeping the <span className="font-bold">most popular</span>
                    </p>
                </div>
                <div className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
                    <img src="https://cdn2.iconfinder.com/data/icons/popular-badges-colored/48/JD-11-512.png" alt="" className="md:w-20 md:h-20 lg:w-full lg:h-full" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
