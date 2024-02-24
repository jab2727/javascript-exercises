function outer() {
  const outerVar = "Hey I am the outer var";
  return function inner() {
    const innerVar = "Hey I am an inner var";
    console.log(innerVar);
    console.log(outerVar);
  };
}

const innerFn = outer();
