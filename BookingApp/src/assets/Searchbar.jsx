import React from 'react'

const Searchbar = () => {
  return (
    <section className="mt-1">
    <div className="bg-teal-500 text-white -skew-y-1">
        <div className=" mx-auto skew-y-1">
            <div className="flex flex-col items-center py-2 text-center lg:py-4">
                <div className="w-full px-4 lg:w-1/2 lg:px-0">
                    <div className="mb-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-3">
                            Looking for a Place?
                        </h2>
                        <p className="text-lg lg:text-xl opacity-80">
                        Where Adventure Awaits
                        </p>
                    </div>

                    <div className="mb-10">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="w-4 h-4 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z">
                                    </path>
                                </svg>
                            </div>

                            <form action="#" method="GET">
                                <input type="search" name="search" placeholder="Search here for threads" className="p-4 pl-10 text-gray-600 rounded w-full border-gray-100"/>
                            </form>
                        </div>
                    </div>

                   
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Searchbar
