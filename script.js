/*Code for SIDE MENU*/

const closeButton= document.getElementById('close-button');
const sideMenu= document.getElementsByClassName('side-menu');
const hamburgerIcon= document.getElementById('menu-trigger');
hamburgerIcon.addEventListener("click",function(){
sideMenu[0].classList.add('active');
});
closeButton.addEventListener("click",function(){
sideMenu[0].classList.remove('active');
});

/* code for dropdown*/

let shopDD= document.getElementById('shop-Dropdown');
let blogDD= document.getElementById('blog-Dropdown');
let shop=document.getElementById('menu-2-button');
let blog=document.getElementById('menu-3-button');

const header= document.getElementById('top-nav');
header.addEventListener("mouseleave",function(){
  shopDD.style.display='none';
  blogDD.style.display='none';
 });

function showDropdown(dropdown) {
  shopDD.style.display = 'none';
  blogDD.style.display = 'none';
  dropdown.style.display = 'block';
}

function hideDropdown(dropdown){
  dropdown.style.display='none';
}

shop.addEventListener("mouseover", () => showDropdown(shopDD));
shopDD.addEventListener("mouseover",() => showDropdown(shopDD));
shopDD.addEventListener("mouseleave",() => hideDropdown(shopDD));
blog.addEventListener("mouseover", () => showDropdown(blogDD));
blogDD.addEventListener("mouseover",() => showDropdown(blogDD));
blogDD.addEventListener("mouseleave",() => hideDropdown(blogDD));