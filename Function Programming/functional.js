// /**
//  * A long process to prepare tea.
//  * @return {string} A cup of tea.
//  **/
// const prepareTea = () => 'greenTea';
//
// /**
//  * Get given number of cups of tea.
//  * @param {number} numOfCups Number of required cups of tea.
//  * @return {Array<string>} Given amount of tea cups.
//  **/
// const getTea = (numOfCups) => {
//   const teaCups = [];
//
//   for(let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }
//
//   return teaCups;
// };
//
// const tea4TeamFCC = getTea(40); // :(
//
// //Should print 40 cups of 'greenTea'
// console.log(tea4TeamFCC);


// /**
//  * A long process to prepare green tea.
//  * @return {string} A cup of green tea.
//  **/
// const prepareGreenTea = () => 'greenTea';
//
// /**
//  * A long process to prepare black tea.
//  * @return {string} A cup of black tea.
//  **/
// const prepareBlackTea = () => 'blackTea';
//
// /**
//  * Get given number of cups of tea.
//  * @param {function():string} prepareTea The type of tea preparing function.
//  * @param {number} numOfCups Number of required cups of tea.
//  * @return {Array<string>} Given amount of tea cups.
//  **/
// const getTea = (prepareTea, numOfCups) => {
//   const teaCups = [];
//
//   for(let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }
//
//   return teaCups;
// };
//
// // Add your code below this line
//
// const tea4GreenTeamFCC = getTea(prepareGreenTea, 27); // :(
// const tea4BlackTeamFCC = getTea(prepareBlackTea, 13); // :(
//
// // Add your code above this line
//
// console.log(
//   tea4GreenTeamFCC,
//   tea4BlackTeamFCC
// );

//
// // tabs is an array of titles of each site open within the window
// var Window = function(tabs) {
//   this.tabs = tabs; // we keep a record of the array inside the object
// };
//
// // When you join two windows into one window
// Window.prototype.join = function (otherWindow) {
//   this.tabs = this.tabs.concat(otherWindow.tabs);
//   return this;
// };
//
// // When you open a new tab at the end
// Window.prototype.tabOpen = function (tab) {
//   this.tabs.push('new tab'); // let's open a new tab for now
//   return this;
// };
//
// // When you close a tab
// Window.prototype.tabClose = function (index) {
//   var tabsBeforeIndex = this.tabs.splice(0, index); // get the tabs before the tab
//   var tabsAfterIndex = this.tabs.splice(index); // get the tabs after the tab
//
//   this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // join them together
//   return this;
//  };
//
// // Let's create three browser windows
// var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
// var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
// var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); //  Entertainment sites
//
// // Now perform the tab opening, closing, and other operations
// var finalTabs = socialWindow
//                     .tabOpen() // Open a new tab for cat memes
//                     .join(videoWindow.tabClose(2).tabOpen()) // Close third tab in video window, and join
//                     .join(workWindow.tabClose(1).tabOpen());
//
// console.log(finalTabs);
// // alert(finalTabs.tabs);


// // the global variable
// var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
//
// /* This function should add a book to the list and return the list */
// // New parameters should come before the bookName one
//
// // Add your code below this line
// function add (arr, bookName) {
//   let newArr = [...arr];
//
//    newArr.push(bookName);
//   return newArr;
//   // Add your code above this line
// }
//
// /* This function should remove a book from the list and return the list */
// // New parameters should come before the bookName one
//
// // Add your code below this line
// function remove (arr, bookName) {
//   let newArr = [...arr];
//
//   if (newArr.indexOf(bookName) >= 0) {
//     newArr.splice(newArr.indexOf(bookName), 1);
//     return newArr;
//     // Add your code above this line
//     }
// }
// var newBookList = add(bookList, 'A Brief History of Time');
// var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
// var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
//
// console.log(bookList);
// console.log(newBookList);
// console.log(newerBookList);
// console.log(newestBookList);


// // the global variable
// var watchList = [
//                  {
//                    "Title": "Inception",
//                    "Year": "2010",
//                    "Rated": "PG-13",
//                    "Released": "16 Jul 2010",
//                    "Runtime": "148 min",
//                    "Genre": "Action, Adventure, Crime",
//                    "Director": "Christopher Nolan",
//                    "Writer": "Christopher Nolan",
//                    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
//                    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//                    "Language": "English, Japanese, French",
//                    "Country": "USA, UK",
//                    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//                    "Metascore": "74",
//                    "imdbRating": "8.8",
//                    "imdbVotes": "1,446,708",
//                    "imdbID": "tt1375666",
//                    "Type": "movie",
//                    "Response": "True"
//                 },
//                 {
//                    "Title": "Interstellar",
//                    "Year": "2014",
//                    "Rated": "PG-13",
//                    "Released": "07 Nov 2014",
//                    "Runtime": "169 min",
//                    "Genre": "Adventure, Drama, Sci-Fi",
//                    "Director": "Christopher Nolan",
//                    "Writer": "Jonathan Nolan, Christopher Nolan",
//                    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//                    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//                    "Language": "English",
//                    "Country": "USA, UK",
//                    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//                    "Metascore": "74",
//                    "imdbRating": "8.6",
//                    "imdbVotes": "910,366",
//                    "imdbID": "tt0816692",
//                    "Type": "movie",
//                    "Response": "True"
//                 },
//                 {
//                    "Title": "The Dark Knight",
//                    "Year": "2008",
//                    "Rated": "PG-13",
//                    "Released": "18 Jul 2008",
//                    "Runtime": "152 min",
//                    "Genre": "Action, Adventure, Crime",
//                    "Director": "Christopher Nolan",
//                    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//                    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//                    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//                    "Language": "English, Mandarin",
//                    "Country": "USA, UK",
//                    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//                    "Metascore": "82",
//                    "imdbRating": "9.0",
//                    "imdbVotes": "1,652,832",
//                    "imdbID": "tt0468569",
//                    "Type": "movie",
//                    "Response": "True"
//                 },
//                 {
//                    "Title": "Batman Begins",
//                    "Year": "2005",
//                    "Rated": "PG-13",
//                    "Released": "15 Jun 2005",
//                    "Runtime": "140 min",
//                    "Genre": "Action, Adventure",
//                    "Director": "Christopher Nolan",
//                    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//                    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//                    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//                    "Language": "English, Urdu, Mandarin",
//                    "Country": "USA, UK",
//                    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//                    "Metascore": "70",
//                    "imdbRating": "8.3",
//                    "imdbVotes": "972,584",
//                    "imdbID": "tt0372784",
//                    "Type": "movie",
//                    "Response": "True"
//                 },
//                 {
//                    "Title": "Avatar",
//                    "Year": "2009",
//                    "Rated": "PG-13",
//                    "Released": "18 Dec 2009",
//                    "Runtime": "162 min",
//                    "Genre": "Action, Adventure, Fantasy",
//                    "Director": "James Cameron",
//                    "Writer": "James Cameron",
//                    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//                    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//                    "Language": "English, Spanish",
//                    "Country": "USA, UK",
//                    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//                    "Metascore": "83",
//                    "imdbRating": "7.9",
//                    "imdbVotes": "876,575",
//                    "imdbID": "tt0499549",
//                    "Type": "movie",
//                    "Response": "True"
//                 }
// ];
//
//
// // maps over each item (i)
// // arrow function points to an...
// // object with 2 key: value pairs (title and rating)
// // title: i['Title'] == the value of the key 'title' is the object/element at the index of i who matches 'Title'
// // rating: i['imbdRating'] == the value of the key 'rating' is the object/element at the index of i who mathes 'imbdRating'
// var rating = watchList.map( (i) => ({title: i['Title'], rating: i['imdbRating']}) );
//
// console.log(rating);


//Implement map on a Prototype


// // the global Array
// var s = [23, 65, 98, 5];
//
//
// // callback = a function you pass into another function
// // this refers to the calling object
// // for each item in the array/object calling this method (.mymap)
// // execute the callback function (.mymap(xyz))
// // and push it into the newarray
// // returns a new array representing new values
// Array.prototype.myMap = function(callback) {
//   let new_array = [];
//
//   this.forEach((item) => new_array.push(callback(item)));
//
//   return new_array;
// };
//
// let new_s = s.myMap(function(item) {
//   return item * 2
// })
//
// console.log(new_s);


//Use the filter Method to Extract Data from an Array

// the global variable
// var watchList = [
//                  {
//                    "Title": "Inception",
//                    "Year": "2010",
//                    "Rated": "PG-13",
//                    "Released": "16 Jul 2010",
//                    "Runtime": "148 min",
//                    "Genre": "Action, Adventure, Crime",
//                    "Director": "Christopher Nolan",
//                    "Writer": "Christopher Nolan",
//                    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
//                    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//                    "Language": "English, Japanese, French",
//                    "Country": "USA, UK",
//                    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//                    "Metascore": "74",
//                    "imdbRating": "8.8",
//                    "imdbVotes": "1,446,708",
//                    "imdbID": "tt1375666",
//                    "Type": "movie",
//                    "Response": "True"
//                 },
//                 {
//                    "Title": "Interstellar",
//                    "Year": "2014",
//                    "Rated": "PG-13",
//                    "Released": "07 Nov 2014",
//                    "Runtime": "169 min",
//                    "Genre": "Adventure, Drama, Sci-Fi",
//                    "Director": "Christopher Nolan",
//                    "Writer": "Jonathan Nolan, Christopher Nolan",
//                    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//                    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//                    "Language": "English",
//                    "Country": "USA, UK",
//                    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//                    "Metascore": "74",
//                    "imdbRating": "8.6",
//                    "imdbVotes": "910,366",
//                    "imdbID": "tt0816692",
//                    "Type": "movie",
//                    "Response": "True"
//                 },
//                 {
//                    "Title": "The Dark Knight",
//                    "Year": "2008",
//                    "Rated": "PG-13",
//                    "Released": "18 Jul 2008",
//                    "Runtime": "152 min",
//                    "Genre": "Action, Adventure, Crime",
//                    "Director": "Christopher Nolan",
//                    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//                    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//                    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//                    "Language": "English, Mandarin",
//                    "Country": "USA, UK",
//                    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//                    "Metascore": "82",
//                    "imdbRating": "9.0",
//                    "imdbVotes": "1,652,832",
//                    "imdbID": "tt0468569",
//                    "Type": "movie",
//                    "Response": "True"
//                 },
//                 {
//                    "Title": "Batman Begins",
//                    "Year": "2005",
//                    "Rated": "PG-13",
//                    "Released": "15 Jun 2005",
//                    "Runtime": "140 min",
//                    "Genre": "Action, Adventure",
//                    "Director": "Christopher Nolan",
//                    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//                    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//                    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//                    "Language": "English, Urdu, Mandarin",
//                    "Country": "USA, UK",
//                    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//                    "Metascore": "70",
//                    "imdbRating": "8.3",
//                    "imdbVotes": "972,584",
//                    "imdbID": "tt0372784",
//                    "Type": "movie",
//                    "Response": "True"
//                 },
//                 {
//                    "Title": "Avatar",
//                    "Year": "2009",
//                    "Rated": "PG-13",
//                    "Released": "18 Dec 2009",
//                    "Runtime": "162 min",
//                    "Genre": "Action, Adventure, Fantasy",
//                    "Director": "James Cameron",
//                    "Writer": "James Cameron",
//                    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//                    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//                    "Language": "English, Spanish",
//                    "Country": "USA, UK",
//                    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//                    "Metascore": "83",
//                    "imdbRating": "7.9",
//                    "imdbVotes": "876,575",
//                    "imdbID": "tt0499549",
//                    "Type": "movie",
//                    "Response": "True"
//                 }
// ];
//
// // The variable watchList holds an array of objects with information on several movies. Use a combination of filter and map to return a new array of objects with only title and rating keys, but where imdbRating is greater than or equal to 8.0. Note that the rating values are saved as strings in the object and you may want to convert them into numbers to perform mathematical operations on them.
//
// // Add your code below this line
//
// // title and rating keys where rating is >= 8.0 - convert rating values into numbers
//
// var filteredList = watchList
// .filter((item) => (item['imdbRating'] >= 8.0))
// .map((item) => ({title: item['Title'], rating: item['imdbRating']}))
//
// // Add your code above this line
//
// console.log(filteredList);

//implement the filter method

// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];

  this.forEach((item) =>
(callback(item) == false) ? newArray.splice(item, 1) : newArray.push(item));

  // if (callback(item) == false) {
  //   newArray.splice(item, 1)
  // } else {
  //   newArray.push(item));
  // };

  return newArray;
};



var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});


console.log(new_s);
