import React from 'react'
import Cart from '../assets/cartimgg.jpg';
import Hotel from '../assets/hotelimg.avif';
import online from '../assets/onlineshoppingimg.png'
import quiz from '../assets/quizimgg.jpg'
import tictactoe from '../assets/tic-tac-toe.png'
import nft from '../assets/nftimg.avif'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: online,
            href: "https://bilalecommerceweb.netlify.app/",
            link: "https://github.com/bilalarshad16/Ecommerce-App"
        },

        {
            id: 2,
            src: Hotel,
            href: "https://bilal-hotel-booking-app.netlify.app/",
            link: "https://github.com/bilalarshad16/Hotel-booking-app"
        },

        {
            id: 3,
            src: Cart,
            href: "https://bilal-shopping-cart.netlify.app/",
            link: "https://github.com/bilalarshad16/Shopping-Cart-App"
        },
        {
            id: 4,
            src: quiz,
            href: "https://bilal-quiz-game.netlify.app/",
            link: "https://github.com/bilalarshad16/Quiz-App"
        },
        {
            id: 5,
            src: tictactoe,
            href: "https://bilal-tictactoe-game.netlify.app/",
            link: "https://github.com/bilalarshad16/TicTacToe-Game"
        },

        {
            id: 6,
            src: nft,
            href: "https://bilal-figma-app.netlify.app/",
            link: "https://github.com/bilalarshad16/Figma-Replica"
        },


    ]

    const handleDemoButtonClick = (href) => {
        window.open(href, '_blank');
    };

    const handleCodeButtonClick = (link) => {
        window.open(link, '_blank');
    };

    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full md:h-full text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8 mt-32">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 justify-center">
                    {portfolios.map(({ id, src, href, link }) => (
                        <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            <div className="flex items-center justify-center">
                                <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => handleDemoButtonClick(href)}>
                                    Demo
                                </button>
                                <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105" onClick={() => handleCodeButtonClick(link)}>
                                    Code
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio