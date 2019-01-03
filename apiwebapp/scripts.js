const app = document.getElementById('root');
//const logo = document.createElement('img');
//logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

//app.appendChild(logo);
app.appendChild(container);


// request to api below

//creates a request variable and assigned the new xmlhttprequest object to it
let request = new XMLHttpRequest();

//opens new connection, with GET request on url endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {
    //begin accessing json data here
  if(request.status >= 200 && request.status< 400){
    let data = JSON.parse(this.response);
    data.map(movie => {
        //create a div with a card class
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        //h1 and set text content to the films title
        const h1 = document.createElement('h1');
        h1.textContent = movie.title;

        //p and set the textContent to filmd description
        const p = document.createElement('p');
        movie.description = movie.description.substr(0,300); //limit of 300 characters
        p.textContent = `${movie.description}...`;

        //append the cards to container element
        container.appendChild(card);

        //each card will contain h1/p
        card.appendChild(h1);
        card.appendChild(p);

    });
  } else{
      const errorMsg = document.createElement('marquee');
      errorMsg.textContent = `not working`
      app.appendChild(errorMsg);
  }
}
//send request finally
request.send();


