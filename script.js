function changeImage(x,image)
{
if (x==1)
{image.src="img/rishic.png"}
if (x==2)
{image.src="img/rishiraj 1.png"}
if (x==3)
{image.src="img/anshikac.png"}
if (x==4)
{image.src="img/image 13.png"}

if (x==5)
{image.src="img/gauric.png"}
if (x==6)
{image.src="img/image 16.png"}
if (x==7)
{image.src="img/akhilc.png"
image.style.width="305px"
image.style.height="450px"}
if (x==8)
{image.src="img/image 6.png"}
if (x==9)
{image.src="img/samratc.png"}
if (x==10)
{image.src="img/image 3.png"}
if (x==11)
{image.src="img/nobelc.png"}
if (x==12)
{image.src="img/image 9.png"}}

document.getElementById('navbar-toggler').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
})

    document.querySelector('.menu-icon').addEventListener('click', function() {
        this.classList.toggle('active');
      })