const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
 

const galerryRef = document.querySelector('.gallery');


const imgList = images.map(el => `<li><img src='${el.url}' alt='${el.alt}' class='img__item' style='display: block; width: 600px; border-radius: 15px;'></img></li>`);
galerryRef.style.listStyle = 'none';
galerryRef.style.display = 'flex';
galerryRef.style.flexWrap = 'wrap';
galerryRef.style.justifyContent = 'center';
galerryRef.style.gap = '15px';
console.log("imgList", imgList);

galerryRef.insertAdjacentHTML('afterbegin', imgList.join(''));

const itemRef = document.querySelectorAll('.img__item');
// console.log("itemRef", itemRef)

