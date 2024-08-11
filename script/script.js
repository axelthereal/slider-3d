const sliderItems = document.querySelectorAll('.slider-items li');
const sliderDots = document.querySelectorAll('.slider-dots li');
const navNext = document.querySelector('.slider-nav.next');
const navPrev = document.querySelector('.slider-nav.prev');

let selectedItem = 0;

function setItemSlider(index) {
  selectedItem = index;

  sliderItems.forEach((item, idx) => {
    let offset = idx - selectedItem;
    if (offset < 0) offset += sliderItems.length;

    item.classList.remove(...item.classList); 
    item.classList.add(`item-${offset + 1}`); 
  });

  sliderDots[selectedItem].classList.add('active');
  for (let dot of sliderDots) {
    if (dot !== sliderDots[selectedItem]) {
      dot.classList.remove('active');
    }
  }
}

sliderItems.forEach(item => item.addEventListener('click', () => setItemSlider(item.dataset.index)));
sliderDots.forEach(dot => dot.addEventListener('click', () => setItemSlider(dot.dataset.index)));

navNext.addEventListener('click', () => {
  selectedItem = selectedItem < sliderItems.length - 1 ? ++selectedItem : 0;
  setItemSlider(selectedItem);
});

navPrev.addEventListener('click', () => {
  selectedItem = selectedItem >= 1 ? --selectedItem : sliderItems.length - 1;
  setItemSlider(selectedItem);
});
