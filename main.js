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
    //funzione che racchiude le 2 funzioni per cercare film e serietv
    searchAll() {
      this.searchMovie();
      this.searchTvSeries();
      this.movies= '';
      this.tvSeries= '';
    },
    //funzione per richiamare i film dall'api
    searchMovie: function() {
      axios.get(`${this.link}/search/movie?api_key=${this.apiKey}&query=${this.search}`)
        .then((response) => {
          this.movies = [...this.movies, ...response.data.results];
          this.search = '';
        });
    },
    //funzione per richiamare le serie TV dall'api
    searchTvSeries:function() {
      axios.get(`${this.link}/search/tv?api_key=${this.apiKey}&query=${this.search}`)
      .then((response) => {
        this.tvSeries = [...this.tvSeries, ...response.data.results];
        this.search = '';
      });
    },
    //funzione per calcolare le stelle da 1 a 5 in base al voto
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
