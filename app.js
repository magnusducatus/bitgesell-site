let prevScrollpos = window.scrollY;
const transitionAnim = document.querySelectorAll('.transition-anim');
const opacityAnim = document.querySelectorAll('.opacity-anim');

window.addEventListener('scroll', scrolling);
window.addEventListener('scroll', animOnScroll);
document
  .querySelector('.navbar-toggler')
  .addEventListener('click', hamburgerAnim);

function hamburgerAnim() {
  let hamburger = document.querySelector('.hamburger');
  if (hamburger.classList.contains('open')) {
    document.querySelector('.hamburger').classList.add('close');
    document.querySelector('.hamburger').classList.remove('open');
    document.body.style.overflow = 'auto';
    return;
  }
  document.querySelector('.hamburger').classList.remove('close');
  document.querySelector('.hamburger').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function animOnScroll() {
  for (let index = 0; index < transitionAnim.length; index++) {
    const animItem = transitionAnim[index];
    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).top;
    const animStart = 100;

    let animItemPoint = window.innerHeight - animItemHeight / animStart;
    if (animItemHeight > window.innerHeight) {
      animItemPoint = window.innerHeight - window.innerHeight / animStart;
    }

    if (
      window.scrollY > animItemOffset - animItemPoint &&
      window.scrollY < animItemOffset + animItemHeight
    ) {
      animItem.classList.add('active');
    }
  }
  for (let index = 0; index < opacityAnim.length; index++) {
    const animItem = opacityAnim[index];
    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).top;
    const animStart = 100;

    let animItemPoint = window.innerHeight - animItemHeight / animStart;
    if (animItemHeight > window.innerHeight) {
      animItemPoint = window.innerHeight - window.innerHeight / animStart;
    }

    if (
      window.scrollY > animItemOffset - animItemPoint &&
      window.scrollY < animItemOffset + animItemHeight
    ) {
      animItem.classList.add('active');
    }
  }
}

function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXoffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYoffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

function scrolling() {
  let currentScrollPos = window.scrollY;
  if (window.scrollY < 150) {
    document.querySelector('.navbar').classList.add('opacity');
    return;
  } else {
    document.querySelector('.navbar').classList.remove('opacity');
  }
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.navbar').classList.remove('hide');
  } else {
    document.querySelector('.navbar').classList.add('hide');
  }
  prevScrollpos = currentScrollPos;
}

scrolling();
animOnScroll();
