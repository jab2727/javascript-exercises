const findTheOldest = function (array) {
  return array.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );
    // return oldestAge < currentAge ? currentPerson : oldest;
    return "test";
  });
};

const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

// const findTheOldest = function(list) {
//   // console.log(list.length);
//   for (i=0; i<list.length; i++){
//       if (!("yearOfDeath" in list[i])){
//           list[i].yearOfDeath = 2024;
//       }
//       list[i].age = list[i].yearOfDeath - list[i].yearOfBirth;
//   }

//   // console.table(list);

//   function compareAge(a,b){
//       if (a.age>b.age) return -1;
//       // if (a.age=b.age) return 0;
//       if (a.age<b.age) return 1;
//   }

//   list.sort(compareAge);
//   // console.table(list);
//   return "test";
// };

module.exports = findTheOldest;
