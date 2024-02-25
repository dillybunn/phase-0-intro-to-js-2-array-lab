// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function logCats(cats) {
    console.log("cats", cats)
}
logCats(cats);

function destructivelyAppendCat(name){
    cats.push(name)
  }

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name){
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}

function appendCat(name){
    // const copyOfCats = [...cats]
    // copyOfCats.push(name)
    // return copyOfCats
    return [...cats, name]
}

function prependCat(name) {
    return [name, ...cats]
}
function removeLastCat(name) {
    const copyOfCats = cats.slice(0, 2);
    return copyOfCats
}

function removeFirstCat(name) {
    const copyOfCats = cats.slice(1);
    return copyOfCats
}