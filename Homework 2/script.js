const numberOfFilms = +prompt('Cколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

// for ( let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

    
//     if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error')
//         i--;
//     }
// }
let i = 0;
// while ( i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
//     i++;
// }

do {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
    i++;
} while (i < 2)

if (personalMovieDB.count <= 10) {
    alert('Просмотрено мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
    alert('Вы классный зритель!');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

console.log(personalMovieDB);
