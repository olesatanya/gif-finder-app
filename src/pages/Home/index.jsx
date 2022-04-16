import React from "react"
import { Link } from "wouter"
import { Search } from "../../components/Search/Search"
import "./Home.css"


const popularGifs = ["Matrix", "Cat", "Parrot", "Dog"]

export const Home = () => {
  return (
    <div className="home">
      <Search />
      <h4 className="App-title">Los gifs más populares</h4>
      <ul>
        {popularGifs.map((popularGifs) => (
          <li key={popularGifs}>
            <Link to={`/search/${popularGifs}`}>Gifs de {popularGifs} </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
