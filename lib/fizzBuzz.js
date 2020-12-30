module.exports = (items) => {
    const resultsArr = [];
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let f = item % 3 === 0;
        let b = item % 5 === 0;
        resultsArr.push(
            isNaN(item) || item === "" ? 'Invalid Item' :
                f ? b ? 'FizzBuzz' :
                    'Fizz' :
                    b ? 'Buzz' :
                        [`Divided ${item} by 3`, `Divided ${item} by 5`]
        );
    }
    return resultsArr.flat();
};
