var movies = [
    {
        id: 1,
        title: 'Film o pszczołach',
        desc: 'Taki film że są pszczoły',
        img: 'bee.jpg'
    },
    {
        id: 2,
        title: 'Bambo',
        desc: 'Obywatel Kamerunu ratuje wioske przed zdziczałym jeleniem',
        img: 'bambo.jpg'
    },
    {
        id: 3,
        title: 'Zemsta faraona',
        desc: 'Kapitan Bomba musi ocalić ludzkość przed starożytnymi wojownikami.',
        img: 'zemsta.jpg'
    }
];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id}, 
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src:movie.img})
        );
});

var element = React.createElement('div', {}, 
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)    
);

ReactDOM.render(element, document.getElementById('app'));
