Vue.config.devtools = true;

var app = new Vue ({
  el: '#root',
  data:{
    movies:[],
  },//fine data
  mounted() {
    axios.get("https://api.themoviedb.org/3/search/movie/?api_key=06aaa03812e7863dd3760e09e85808b3&query=''")
    .then((response) => {
      this.movies = response.data.results;
      console.log(response.data.results );
    })
  }//fine mounted
})// fine vue


// https://api.themoviedb.org/3/search/movie/?api_key=06aaa03812e7863dd3760e09e85808b3&query=''
