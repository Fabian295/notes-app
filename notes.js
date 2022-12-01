console.log('Running notes.js!');

// module.exports  = {
//    add : (x, y) => {

//   return x + y;
// }
// }

/************** Option 2 ******************/

// module.exports.add  =  (x, y) => {

//  return x + y;
// }

/************** Option 3 ******************/

const add = (x, y) => {

  return x + y;
}

module.exports = {add}