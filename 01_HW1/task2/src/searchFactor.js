//Найти факториал числа

module.exports = searchFactor;

function searchFactor(n) {

    if (typeof n !== 'number' || n < 0) {
        return 'Icorrect input data';
    }

    let fact = 1;
    for (let i = 1; i <= n; i++)
    {
        fact = fact * i; 
    }
    return fact; 
}
console.log(searchFactor(0));
