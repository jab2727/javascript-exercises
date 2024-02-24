// const findTheOldest = function(list) {
//     // console.log(list.length);
//     for (i=0; i<list.length; i++){
//         if (!("yearOfDeath" in list[i])){
//             list[i].yearOfDeath = 2024;
//         }
//         list[i].age = list[i].yearOfDeath - list[i].yearOfBirth;
//     }

//     // console.table(list);

//     function compareAge(a,b){
//         if (a.age>b.age) return -1;
//         // if (a.age=b.age) return 0;
//         if (a.age<b.age) return 1;
//     }

//     list.sort(compareAge);
//     // console.table(list);
//     return list[0].name;
// };

const findTheOldest = function (list) {
  return 1;
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
