Vue.config.devtools = true;

var app = new Vue ({
  el: '#root',
  data:{
    search:'',
    movies:[],
    link: 'https://api.themoviedb.org/3',
    apiKey:'06aaa03812e7863dd3760e09e85808b3',
    language: [],
  },//fine data
  mounted() {
  },//fine mounted
  methods:{
    searchMovie: function() {
      axios.get(`${this.link}/search/movie?api_key=${this.apiKey}&query=${this.search}`)
        .then((response) => {
          this.movies = [...this.movies, ...response.data.results];
          this.search = '';
        });
        axios.get(`${this.link}/search/tv?api_key=${this.apiKey}&query=${this.search}`)
          .then((response) => {
            this.movies = [...this.movies, ...response.data.results];
            this.search = '';
          });
            this.movies= '';


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
