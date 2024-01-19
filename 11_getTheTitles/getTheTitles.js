const getTheTitles = function(list) {
    let names = list.map(item => item.title);
    return(names);
};

// const books = [
//     {
//       title: 'Book',
//       author: 'Name'
//     },
//     {
//       title: 'Book2',
//       author: 'Name2'
//     }
//   ]

// console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
