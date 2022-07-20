function receivesAFunction(spy) {
  return spy();
}

receivesAFunction(spy());

function returnsANamedFunction() {
  return function doesSomething() {};
}

function returnsAnAnonymousFunction() {
  return function () {};
}
