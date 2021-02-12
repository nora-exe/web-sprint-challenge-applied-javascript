const Header = (title, date, temp) => {
  // TASK 1
  
  /*
    <div class="header">
      <span class="date">{ date }</span>
      <h1>{ title }</h1>
      <span class="temp">{ temp }</span>
    </div>
  */

  // Create elements

  const header = document.createElement('div');
  const headerDate = document.createElement('span');
  const headerTitle = document.createElement('h1');
  const headerTemp = document.createElement('span');

  // Define classes

  header.classList.add('header');
  headerDate.classList.add('date');
  headerTemp.classList.add('temp');

  // Add content

  headerDate.textContent = date;
  headerTitle.textContent = title;
  headerTemp.textContent = temp; 

  // Append elements

  header.appendChild(headerDate);
  header.appendChild(headerTitle);
  header.appendChild(headerTemp);

  // Return!

  return header;

}

// TASK 2

const headerAppender = (selector) => {
  // Select 'selector,' append Header to selector, pass in Header values
  document.querySelector(selector).appendChild(Header('Lambda Times', 'February 12, 2021', '4°'));
}

export { Header, headerAppender }
