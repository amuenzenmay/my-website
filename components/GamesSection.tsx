import React from 'react'
import Image from "next/image"
import Link from "next/link"

const sports_games = [
    { game: "NFL Grid", link: "https://www.immaculategrid.com/football" },
    { game: "MLB Grid", link: "https://www.immaculategrid.com/" },
    { game: "NHL Grid", link: "https://www.immaculategrid.com/hockey" },
    { game: "Soccer Grid", link: "https://www.immaculatefooty.com/" },
    { game: "NBA Grid", link: "https://www.immaculategrid.com/basketball/mens" },
    { game: "WNBA Grid", link: "https://www.immaculategrid.com/basketball/womens" },
    { game: "NFL Grid 2", link: "https://dynasty-daddy.com/gridiron" },
    { game: "NFL Player", link: "https://www.weddlegame.com/" },
    { game: 'MLB Player', link: "https://www.mlbpickle.com/" }, { game: 'NBA Player', link: "https://poeltl.dunk.town/" },
    { game: 'NHL Player', link: "https://www.hertl.app/" }
]

const geo_games = [
    { game: "Worldle", link: "https://worldle.teuteuf.fr/" },
    { game: "Travle", link: "https://imois.in/games/travle/" },
    { game: "Travle (USA)", link: "https://imois.in/games/travle/usa/" },
    { game: "Globle", link: "https://globle-game.com/" },
    { game: "US States", link: "https://www.sporcle.com/games/g/states" },
    { game: "Countries", link: "https://www.sporcle.com/games/g/world" }
]

const nyt_games = [
    { game: "Crossword", link: "https://www.nytimes.com/crosswords" },
    { game: "Mini Crossword", link: "https://www.nytimes.com/crosswords/game/mini" },
    { game: "Connections", link: "https://www.nytimes.com/games/connections" },
    { game: "Wordle", link: "https://www.nytimes.com/games/wordle/index.html" },
    { game: "Spelling Bee", link: "https://www.nytimes.com/puzzles/spelling-bee" },
    { game: "Sudoku", link: "https://www.nytimes.com/puzzles/sudoku" }
]

const word_games = [
    {game: "Weaver", link: "https://wordwormdormdork.com/"},
    {game: "Quordle", link: "https://quordle-wordle.com/"},
    {game: "Octordle", link: "https://octordlegame.io/"},
    {game: "Lewdle", link: "https://lewdlegame.io/"},

]

const general_games = [
    {game: "The Dozen", link: "https://dailydozentrivia.com/"},
    {game: "Heardle", link: "https://heardle-wordle.com/"},
    {game: "Framed", link: "https://framed.wtf/"},
    {game: "Sporcle Dailys", link: "https://www.sporcle.com/events/games/"},
    {game: "Movie Grid", link: "https://www.moviegrid.io/"},
    {game: "Plotwords", link: "https://plotwords.com/daily"}

]

const all_games = [{ category: "Sports", games: sports_games },
{ category: "NYT", games: nyt_games }, { category: "Geography", games: geo_games },
{ category: "Words", games: word_games }, { category: "General Trivia", games: general_games }]

const GamesSection = () => {
    return (
        <section id="Games">
            <div className="my-12 pb-12 pt-16 sm:pb-48">
                <h1 className='text-center font-bold text-4xl'>
                    Games
                    <hr className="w-32 h-1 mx-auto my-4 bg-purple-500 border-0 rounded"></hr>
                </h1>
                {all_games.map((item) => {
                    return (
                        <div key={item.category} className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left mb-4 rounded border-2 border-white dark:border-slate-600 hover:border-purple-500">
                            <div className=''>
                                <h1 className="text-center text-2xl font-bold mb-6 md:text-center">{item.category}</h1>
                                <div className="flex flex-wrap flex-row justify-center md:justify-center pb-8">
                                    {item.games.map((item, i) => {
                                        return (

                                            <div key={item.game}
                                                className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded"
                                            ><Link  href={item.link} target="_blank">
                                                    {item.game}</Link></div>
                                        )
                                    })}
                                </div>
                            </div>

                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default GamesSection