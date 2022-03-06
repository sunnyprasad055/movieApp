import React, {useEffect, useState} from 'react'
import SearchIcon from './search.svg'
import './App.css'
import Card from './Card'
    
const API_URL = ' http://www.omdbapi.com/?i=tt3896198&apikey=767e5df6';


const App = () => {
    
    

     const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);
   
   
     
    const movieList = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    
        setMovies(data.Search)
        
    }

    // 

    useEffect(() => {
        movieList("superman")
    },[])

  return (
    <div className='app'>
        <h1 >Movie Description</h1> 

        <div className='search'>
            <input
            placeholder='Search For Movies'
            value = {searchTerm}
            // type= 'search'
            onChange={(e)=> setSearchTerm(e.target.value)}
            />   
            <img
            src= {SearchIcon}
            alt= 'search-icon'
            onClick={()=> movieList(searchTerm)}
            />

             
        </div> 
        {
            movies?.length > 0 ?(
                 <div className='container' >
                    
                    {movies.map((movie) =>(
                        <Card movie = {movie} />
                    ))}
                   
                </div> 
            ) : (
                <div className='empty'>
                    <h2>No Movies Found</h2>
                </div>
            )
        }
       
    </div>
  )
}

export default App