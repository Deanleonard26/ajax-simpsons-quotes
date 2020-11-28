
function fetchSimpson() {
    const url = 'https://simpsons-quotes-api.herokuapp.com/quotes'
    axios.get(url)
      .then(function(simpson) {
        return simpson.data; 
      })
      .then(function(simpson) {
        console.log('data decoded from JSON:', simpson);

        const simpsonHtml = `
        <h3><strong>${simpson[0].character}</strong></h3>
          <p><strong>${simpson[0].quote}</strong></p>
          <img src="${simpson[0].image}" />
        `;
        document.querySelector('#simpson').innerHTML = simpsonHtml;
      });
  }
  
  fetchSimpson();

  const btn = document.getElementById('btn')
  btn.addEventListener('click', function(){
    fetchSimpson()
  })