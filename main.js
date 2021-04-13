Vue.config.devtools = true;

var app = new Vue ({
  el: '#root',
  data:{
    search:'',
    movies:[],
    tvSeries:[],
    link: 'https://api.themoviedb.org/3',
    apiKey:'06aaa03812e7863dd3760e09e85808b3',
    language: [],
  },//fine data
  mounted() {
  },//fine mounted
  methods:{
    searchAll() {
      this.searchMovie();
      this.searchTvSeries();
      this.movies= '';
      this.tvSeries= '';
    },
    searchMovie: function() {
      axios.get(`${this.link}/search/movie?api_key=${this.apiKey}&query=${this.search}`)
        .then((response) => {
          this.movies = [...this.movies, ...response.data.results];
          this.search = '';
        });
    },
    searchTvSeries:function() {
      axios.get(`${this.link}/search/tv?api_key=${this.apiKey}&query=${this.search}`)
      .then((response) => {
        this.tvSeries = [...this.tvSeries, ...response.data.results];
        this.search = '';
      });
    },
    stars: function(star) {
      return Math.ceil( star.vote_average / 2 );
    },
  }//fine methods
})// fine vue


// https://api.themoviedb.org/3/search/movie/?api_key=06aaa03812e7863dd3760e09e85808b3&query=''

// {params:
//   {
//     query: this.search
//   }
// }


// https://www.countryflags.io
