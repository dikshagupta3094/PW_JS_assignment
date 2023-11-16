const Books = [
    {
        author: 'haruki murakami',
        title: 'After Dark',
        year: 2006
    },

    {
        author: 'agatha christine',
        title: 'The murder at the win carrage',
        year: 2011
    },

    {
        author: 'amish tripati',
        title: 'Warrior of mithila',
        year: 2005
    },

    {
        author: 'chitra Banerjee',
        title: 'The palace of illusion',
        year: 2012
    },
    {
        author: 'jane auston',
        title: 'Pride and prejudice',
        year: 2010
    }
]

function logTitles(bookTitles){
  bookTitles.sort();
  console.log(bookTitles);
}

function books(Books,callback){
  let titles = Books.map((Book)=>Book.title)
  return logTitles(titles)
}

books(Books,logTitles)