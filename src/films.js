const { movies } = require("./data");

// Exercise 1: Get the array of all directors.
const getAllDirectors = (array) => array.map(movie => movie.director);

// Exercise 2: Get the films of a certain director
const getMoviesFromDirector = (array, director) => array.filter(movie => movie.director === director);

// Exercise 3: Calculate the average of the films of a given director.
const moviesAverageOfDirector = (array, director) => {
  const moviesFromDirector = getMoviesFromDirector(array, director);
  const scoreAverage = moviesFromDirector.reduce((acc,curr)=>acc+curr.score,0) / moviesFromDirector.length;;
  return scoreAverage;
}

// Exercise 4:  Alphabetic order by title 
const orderAlphabetically = (array) => array.map(movie => movie.title).sort((a, b)=>(a).localeCompare(b)).slice(0,20);

// Exercise 5: Order by year, ascending
const orderByYear = (array) => [...array].sort((a,b)=> a.year - b.year || (a.title).localeCompare(b.title));

// Exercise 6: Calculate the average of the movies in a category
const moviesAverageByCategory = (array, category) => {
  const moviesByCategory = array.filter(movie => movie.genre.includes(category));
  const scoreAverage = moviesByCategory.reduce((acc, movie)=>acc+movie.score, 0)/moviesByCategory.length;
  return Math.round(scoreAverage * 100) / 100;
}

// Exercise 7: Modify the duration of movies to minutes
const hoursToMinutes = (array) => array.map(movie => {
  const duration = movie.duration;
  const hours = duration.includes('h')? parseInt(duration.split(' ')[0]) : 0;
  const minutes = duration.includes('min')? parseInt(duration.split(' ')[1]) : 0;
  return {...movie, duration: hours*60 + minutes};
});

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
