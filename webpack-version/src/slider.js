// Set initial slider index
let sliderIndex = 1;

export default function hourlySlider(index = 0) {
  sliderIndex = sliderIndex + index;
  console.log(sliderIndex);
  if (sliderIndex === 0) {
    sliderIndex = 4;
  } 
  if (sliderIndex === 5) {
    sliderIndex = 1;
  }

  let hourlyDivs = document.querySelectorAll(`.hours`);
  hourlyDivs.forEach((div) => {
    div.style.display = 'none';
  });

  // Calculate the start and end indices for the range of divs to display
  const start = (sliderIndex - 1) * 6;
  const end = start + 6;

  // Display the selected range of hourly divs
  for (let i = start; i < end; i++) {
    if (hourlyDivs[i]) {
      hourlyDivs[i].style.display = 'flex';
    }
  }

  const dots = document.getElementsByClassName("dot");
  for (let x = 0; x < dots.length; x++) {
    dots[x].className = dots[x].className.replace(" active", "");
  }
  dots[sliderIndex - 1].className += " active";
}