var movies = [
  { 
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    image: 'https://vignette.wikia.nocookie.net/harrypotter/images/9/9d/Harry-Potter-Wizarding-World-Weekly.jpg/revision/latest/scale-to-width-down/670?cb=20160914202759'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    image: 'http://wywrota.pl:8080/pliki/site_images/8848bded_jpeg-lg'
  },
  {
    id: 3,
    title: 'Baby Driver',
    desc: 'Baby Driver is a 2017 action comedy crime film written and directed by Edgar Wright. It stars Ansel Elgort, Kevin Spacey, Lily James, Eiza González, Jon Hamm, Jamie Foxx, and Jon Bernthal. The plot follows Baby, a young getaway driver and music lover who must work for a kingpin in helping perform several heists alongside seasoned robbers, putting himself and his waitress girlfriend under increasing danger.',
    image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3MjQ1MzkxNl5BMl5BanBnXkFtZTgwODk1ODgyMjI@._V1_UX182_CR0,0,182,268_AL_.jpg'
  },
  {
    id: 4,
    title: 'Interstellar',
    desc: 'Interstellar is a 2014 epic science fiction film directed, co-written, and co-produced by Christopher Nolan. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Casey Affleck, Ellen Burstyn, John Lithgow, and Michael Caine. Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole in search of a new home for humanity.',
    image: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg'
  },
];


var MoviesList = React.createClass({
  render : function () {
    return (
      React.createElement('h1', {}, 'Lista filmów' )
      )
  }
})
var MovieTitle = React.createClass({
  render : function () {
    return (
      React.createElement('h2', {}, this.props.title)
      )  
  }
})
var MovieDescription = React.createClass({
  render : function () {
    return (
      React.createElement('p', {}, this.props.desc)
      )
  }
})
var MovieImage = React.createClass({
  render : function () {
    return (
      React.createElement('img', {src: this.props.image}, )
      )
  }
})
var movie = React.createClass ({
  render: function () {
    return (
      React.createElement('li', {key: this.props.id}, 
        React.createElement(MovieTitle, {title: this.props.title}),
        React.createElement(MovieDescription, {desc: this.props.desc}),
        React.createElement(MovieImage, {image: this.props.image},)
        )
      ) 
  }
})
var Movies = React.createClass({
  propTypes: {},

  render: function () {
    return (
      React.createElement('div', {}, React.createElement(MoviesList),
        React.createElement('ul', {}, movies.map(function(film){
          return React.createElement(movie, {image: film.image, desc: film.desc, title: film.title} )
        })
        )
        )
      )
  }   
});
var element = React.createElement(Movies);
ReactDOM.render(element, document.getElementById('app'));