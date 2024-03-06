const myarray = [1, 2, 3, 4, 5, 6]
const newArray = []
for (let i = 0; i < myarray.length; i++) {
    newArray.push(myarray[i] * 2);
}
console.log(newArray);

//map
const array2 = [2, 3, 4, 5, 6, 7]
const ans = array2.map((i) => {
    return i * 4
})
console.log(ans);
