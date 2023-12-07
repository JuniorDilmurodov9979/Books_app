// const elList = document.querySelector('.list');

// function render(array) {
//     elList.innerHTML = '';
//     array.forEach(function(item){
//         const liElement = document.createElement('li');
//         liElement.classList.add('item');

//         const countryElement = document.createElement('p');
//         countryElement.classList.add('country');
//         countryElement.textContent = item.country;

//         const authorElement = document.createElement('blockquote');
//         authorElement.classList.add('author');
//         authorElement.textContent = item.author;

//         const linkElement = document.createElement('a');
//         linkElement.classList.add('link');
// 		linkElement.setAttribute('href', item.link)
//         linkElement.textContent = item.link;

//         const pagesElement = document.createElement('span');
//         pagesElement.classList.add('pages');
//         pagesElement.textContent = item.pages

//         const titleElement = document.createElement('h2');
//         titleElement.classList.add('title');
//         titleElement.textContent = item.title;

//         liElement.append(titleElement,countryElement,authorElement,linkElement,pagesElement,);
//         elList.appendChild(liElement);
//     })
// }
// render(books);

