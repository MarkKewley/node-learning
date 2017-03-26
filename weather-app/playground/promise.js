const asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (typeof a === 'number' && typeof b === 'number') {
              resolve(a + b);
          } else {
              reject('Arguments must BOTH be numbers');
          }
      }, 1500);
  })
};

asyncAdd(1, 2)
    .then(
        result => console.log('Result: ', result),
        error => console.log('Error: ', error)
    );

asyncAdd(1, '2')
    .then(
        result => console.log('Result: ', result),
        error => console.log('Error: ', error)
    );

// chaining
asyncAdd(5, 7)
    .then(res => {
        console.log('Result: ', res);
       return asyncAdd(res, 33)
    })
    .then(res => {
        console.log('Should be 45');
        console.log(res);
    })
    .catch(err => {
        console.log(err)
    });

// const somePromise = new Promise((resolve, reject) => {
//     // setTimeout(() => resolve('Hey. It Worked!'), 2500);
//     setTimeout(() => reject('Unable to fulfill promise.'), 2500);
// });
//
// somePromise
//     .then(
//         message => console.log('Success: ', message),
//         errorMessage => console.log('Error: ', errorMessage)
//     );