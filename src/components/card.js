import axios from "axios";

const Card = (article) => {
  // TASK 5

  /*
  <div class="card">
    <div class="headline">{ headline }</div>
    <div class="author">
      <div class="img-container">
        <img src={ authorPhoto }>
      </div>
      <span>By { authorName }</span>
    </div>
  </div>
  */

  // Create elements

  const card = document.createElement('div');
  const headline = document.createElement('div');
  const authorContainer = document.createElement('div');
  const imgContainer = document.createElement('div');
  const authorImg = document.createElement('img');
  const author = document.createElement('span');

  // Define classes

  card.classList.add('card');
  headline.classList.add('headline');
  authorContainer.classList.add('author');
  imgContainer.classList.add('img-container');

  // Set content

  headline.textContent = article.headline;
  authorImg.setAttribute('src', article.authorPhoto);
  author.textContent = `By ${article.authorName}`;

  // Append elements

  imgContainer.appendChild(authorImg);
  authorContainer.appendChild(imgContainer);
  authorContainer.appendChild(author);
  card.appendChild(headline);
  card.appendChild(authorContainer);

  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.

  card.addEventListener(`click`, e => {
    console.log(article.headline);
  })

  // Return card

  return card;
}

// TASK 6 - Create a card from each and every article object in the response, using the Card component.
// ******* this doesn't work because the node topic is node.js and the node category is node. Do not have time to fix ********

const cardAppender = (selector) => {

  axios
  .get(`https://lambda-times-api.herokuapp.com/articles`) // Article obj contains topics, which contain articles
  .then(res => {
    // .forEach through topic categories
    // then .forEach through articles
    axios.get(`https://lambda-times-api.herokuapp.com/topics`) // Get topics, because can't loop through Obj :(
    .then(res2 => {
      res2.data.topics.forEach(topic => {
        res.data.articles[topic].forEach(item => {
          document.querySelector(selector).appendChild(Card(item)); // Append each card to the selector passed to the function
        })        
      })
    })
    .catch(err => {
      console.log(err, 'Hmm, something went wrong!');
    })
    .then(() => {
      console.log('It looks like everything is working! ...For now.');
    });
  })
  .catch(err => {
    console.log(err, 'Hmm, something didn\'t work!');
  })
  .then(() => {
    console.log('Everything worked! Nooice!');
  });
}

export { Card, cardAppender }
