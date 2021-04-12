Vue.config.devtools = true;

var app = new Vue ({
  el: '#root',
  data:{
    search:'',
    movies:[],
  },//fine data
  mounted() {

  },//fine mounted
  methods:{
    searchMovie: function() {
      axios.get(`https://api.themoviedb.org/3/search/movie/?api_key=06aaa03812e7863dd3760e09e85808b3`,
      {params:
        {
          query: this.search
        }
      }
    )
      .then((response) => {
        this.movies = response.data.results;
        this.search = '';
      });
    },
  }//fine methods
})// fine vue


// https://api.themoviedb.org/3/search/movie/?api_key=06aaa03812e7863dd3760e09e85808b3&query=''
