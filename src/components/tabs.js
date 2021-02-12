// import axios

import axios from 'axios'

const Tabs = (topics) => {
  // TASK 3
  
  /*
  <div class="topics">
    <div class="tab">javascript</div>
    <div class="tab">bootstrap</div>
    <div class="tab">technology</div>
  </div>
  */

  // Create elements:

  // Create "topics" (div) && define class

  const topicsContainer = document.createElement('div');
  topicsContainer.classList.add('topics');

  // Create "tab" (div)

  topics.forEach(topic => {
    // for each topic: create, define class, set content (topic), append to topics container
    const topicTab = document.createElement('div');
    topicTab.classList.add('tab');
    topicTab.textContent = topic;
    topicsContainer.appendChild(topicTab);
  })

  // Return topics container

  return topicsContainer;
}

// TASK 4

const tabsAppender = (selector) => {

  // Fetch array, pass in data to Tabs, append Tabs to 'selector' , && add error and success messages

  axios.get(`https://lambda-times-api.herokuapp.com/topics`)
  .then(res =>{
    document.querySelector(selector).appendChild(Tabs(res.data.topics));
  })
  .catch(err => {
    console.log(err, 'Oops! An error!');
  })
  .then(() => {
    console.log('Success.');
  })
}

export { Tabs, tabsAppender }
