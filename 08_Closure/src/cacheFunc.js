module.exports = cache;

function cache(func) {
    let memo = {};

    return function(str1, str2) {
        let key = str1 + " " + str2;
        if (!(key in memo)) {
            memo[key] = str1 + " " + str2;
            return 'To  cache: ' + memo[key];
        }

        return 'From cache: ' + memo[key];

    }
}

