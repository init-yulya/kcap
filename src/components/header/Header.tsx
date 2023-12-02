export const pages = [
    {
        name: "Главная",
        path: "/",
        id: 1,
    },
    {
        name: "О компании",
        path: "/about",
        id: 2,
    },
    {
        name: "Продукция",
        path: "/products",
        id: 3,
    },
    {
        name: "Закупки",
        path: "/purchase",
        id: 4,
    },
    {
        name: "Вакансии",
        path: "/",
        id: 5,
    },
];

export default function Header() {
    return (
        <>
            <header className="fixed top-0 left-0 right-0 transition-all duration-500 w-full z-10 mx-auto px-5 lg:px-0 lg:w-4/5 3xl:w-2/3">
                <nav className="z-30 py-2.5">
                    <div className="flex flex-wrap justify-between items-center mx-auto">
                        <a href="/" className="flex items-center">
                            {/* <img src="" className="mr-3 h-6 sm:h-9" alt="KCAP Logo" /> */}
                            <span className="self-center text-xl whitespace-nowrap text-white">
                                KCAP
                            </span>
                        </a>
                        <div className="flex items-center lg:order-2 text-sm">
                            <a
                                href="#"
                                className="text-white focus:ring-4 focus:ring-primary-300 rounded-lg  px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
                            >
                                Оставить заявку
                            </a>
                            <button
                                data-collapse-toggle="mobile-menu-2"
                                type="button"
                                className="inline-flex items-center p-2 ml-1 text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                aria-controls="mobile-menu-2"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Открыть меню</span>
                                <svg
                                    className="w-6 h-6"
                                    //fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        //fill-rule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <svg
                                    className="hidden w-6 h-6"
                                    //fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        //fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div
                            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 text-sm"
                            id="mobile-menu-2"
                        >
                            <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
                                {pages.map((page) => (
                                    <li key={page.id}>
                                        <a
                                            href={page.path}
                                            className="block py-2 pr-4 pl-3 rounded lg:p-0 text-white"
                                            aria-current="page"
                                        >
                                            {page.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}