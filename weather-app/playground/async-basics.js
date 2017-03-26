console.log('Staring app');

setTimeout(() => console.log('Inside of callback'), 2000);

setTimeout(() => console.log('Inside of callback two'), 0);

console.log('Finishing up');