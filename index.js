var kittens = [
  "Milo",
  "Otis",
  "Garfield",
] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(){
  kittens = [...kittens, "Ralph"]
}

function destructivelyPrependKitten(){
  kittens = ["Bob", ...kittens]
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(){
  return [...kittens, "Broom"]
}

function prependKitten(){
  return ["Broom", ...kittens]
}