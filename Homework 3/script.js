let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Cколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == ''  || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Cколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


function rememberMyFilms() {
    for ( let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        alert('Просмотрено мало фильмов');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        alert('Вы классный зритель!');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    } else {
        console.log('Нет доступа');
    }
} 

showMyDB(personalMovieDB.privat);

function writeYourGenres() {100
    for ( let i = 1; i <= 3; i++) {
        const a = prompt( `Ваш любимый жанр под номером ${i}`);
        
        if (a != null && a != '' && isNaN(a) ) {
            personalMovieDB.genres[i - 1] = a;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

writeYourGenres();