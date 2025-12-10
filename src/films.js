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
function orderAlphabetically(array) {
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

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
