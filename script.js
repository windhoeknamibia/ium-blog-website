// ==== SELECT DOM ELEMENTS =========//

const btn = document.getElementById('readMore');
const searchBtn = document.getElementById('search-box');

// ==== CREATE TEMPLATE ELEMENTS ======//

const btnTemplate = document.createElement('button');
const btnText = document.createTextNode('Load more articles');
btnTemplate.appendChild(btnText);
btnTemplate.setAttribute('id', 'readMore');
btnTemplate.className = 'more-articles';

// ====== FUNCTIONS ======//

const displayNextSection = (e) => {
  const sec2 = document.querySelector('.section2')
  sec2.style.display = 'block';
  sec2.appendChild(btnTemplate);

  //-- remove button ---//
  e.currentTarget.remove();

}

const searchArticles = (e) => {
  console.log(e.currentTarget.value)
}

// ======= EVENTS ============//
// button functinality disabled
// btn.addEventListener('click', displayNextSection)
searchBtn.addEventListener('keyup', searchArticles)

//===== DEBUGGING SECTION =====//

// console.log(searchBtn);
