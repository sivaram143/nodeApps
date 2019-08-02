console.log(module);
/* Approach1 */
function add(first, second){
    return first + second;
}

function sub(first, second){
    return first - second;
}

function multiply(first, second){
    return first * second;
}


// module.exports.addMethod = add;

module.exports = {
    addMethod: add,
    subMethod: sub,
    mulMethod: multiply
}

console.log(module)
