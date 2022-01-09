const getQuntityPostsByAuthor = require('.././getQuntityPostsByAuthor.js');

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

describe('getQuntityPostsByAuthor', () => {
    
    test('Rimus', () => {
        expect(getQuntityPostsByAuthor(listOfPosts2, 'Rimus')).toBe('result -> post - 1 comments - 3');
    });

    test('Uncle', () => {
        expect(getQuntityPostsByAuthor(listOfPosts2, 'Uncle')).toBe('result -> post - 1 comments - 2');
    });

    test('Only list', () => {
        expect(getQuntityPostsByAuthor(listOfPosts2)).toBe('Incorrect input data');
    });

    test('Emptu string', () => {
        expect(getQuntityPostsByAuthor(listOfPosts2, '')).toBe('Incorrect input data');
    });
})