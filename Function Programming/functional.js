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


// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add (arr, bookName) {
  let newArr = [...arr];

   newArr.push(bookName);
  return newArr;
  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove (arr, bookName) {
  let newArr = [...arr];

  if (newArr.indexOf(bookName) >= 0) {
    newArr.splice(newArr.indexOf(bookName), 1);
    return newArr;
    // Add your code above this line
    }
}
var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
console.log(newBookList);
console.log(newerBookList);
console.log(newestBookList);
