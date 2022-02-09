module.exports = getQuntityPostsByAuthor;

function getQuntityPostsByAuthor(list, name) {
    if (typeof list !== 'object' || typeof name !== 'string' || !list || !name) {
        return 'Incorrect input data'
    }
    let countMess = 0;
    let countComm = 0;

    list.forEach((item) => {
        if (item['author'] === name) {
            countMess++;
        }
        if (item.hasOwnProperty('comments')) {
            item['comments'].forEach((elem) => {
                if (elem['author'] === name) {
                    countComm++;
                }
            })
        }
    });
    return 'result -> post - ' + countMess + ' comments - ' + countComm;
}


let listOfPosts2 = [
    {
        id: 1,
        post: 'some post1',
        title: 'title 1',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            }]
    },
    {
        id: 2,
        post: 'some post2',
        title: 'title 2',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            },
            {
                id: 1.3,
                comment: 'some comment3',
                title: 'title 3',
                author: 'Rimus'
            }]
    },
    {
        id: 3,
        post: 'some post3',
        title: 'title 3',
        author: 'Rimus'
    },
    {
        id: 4,
        post: 'some post4',
        title: 'title 4',
        author: 'Uncle'
    }
];

console.log(getQuntityPostsByAuthor(listOfPosts2, 'Uncle')); 