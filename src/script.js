import _, { range } from 'lodash';

import  {paginate}  from './paginate.js';
const gallery = document.getElementById("gallery");
const paginationEl = document.getElementById("pagination");
const images = [
 "./images/1663156590-yrt07PRfUaHM6QdL.png" ,
  "./images/1663584046-mciSjd1g9jIwcWd4.jpg",
   "./images/1663757482-82n7T1vl3Zro3Q9M.jpg",
    "./images/1664704905-GjA0BDfLU1VG8DhO.jpg",
    "./images/1665215065-axMwwcjSK4Wzoj1s.jpg",
    "./images/1665482030-op6A1XSLXuRxn3oy.jpg",
    "./images/1665812625-TrRu29JlS4KzEQ3l.jpg",
    "./images/1665816086-Oie6fMRL2KdgwCLQ.jpg"
]
let imagesPage;
const totalCourse = images.length;
const perPage = 2;
const pageCount = Math.ceil(totalCourse / perPage);
let currentPage = 1;
const pages = range(1, pageCount + 1);



//create page number
function pagination() {
    pages.forEach(page => {
        const liElm = document.createElement('li');
        const linkElm = document.createElement('a');
        linkElm.innerHTML = page;
        liElm.appendChild(linkElm);
        linkElm.onclick=()=>onChangePage(parseInt( page))
       
      
        paginationEl.appendChild(liElm);

    })
   
}

function onChangePage(page) {
    currentPage = page;  
    updatePage(currentPage)
}

const updatePage = (currentPage) => {

    imagesPage = paginate(images, currentPage, perPage);
    galleryGenerator()

}
function galleryGenerator() {
    gallery.innerHTML = "";
    imagesPage.forEach(item => {
        const imgElm = document.createElement('img');
        imgElm.src = item;
        gallery.appendChild(imgElm);
    })
}


updatePage();
pagination();
