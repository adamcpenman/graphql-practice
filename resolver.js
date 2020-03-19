const resolvers = {
  Query: {
    hello: () => true,
    getBooks: () => [
      {
        title: 'Game of Thrones',
        author: {
          firstName: 'Georgy'
        },
        pageCount: 500,
        genre: 'FANTASY'
      },
      {
        title: 'Harry Potter',
        author: 'Rowling',
        pageCount: 500,
        genre: 'FANTASY'
      },
      {
        title: 'Shade of Grey',
        author: 'Someone',
        pageCount: 500,
        genre: 'ROMANCE'
      }
    ]
  }
};

module.exports = resolvers;
