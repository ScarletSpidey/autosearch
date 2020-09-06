import React from 'react';

const Header = () => {
   return(
        <header className="text-white bg-gray-900 body-font mb-24">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0" href="/">
                
                <svg  viewBox="0 0 20 20" fill="currentColor"><path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" /><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clipRule="evenodd" /></svg>
                <svg className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 20 20" fill="currentColor" ><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                <span className="ml-3 text-xl">Autocomplete Search</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                </nav>
            </div>
        </header>

    );
};

export default Header