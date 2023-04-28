"use strict";

const starsWrap = document.getElementsByClassName("stars-wrap")[0];
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const bigCircle = document.querySelector(".big-circle");
// const carousel = document.querySelector(".circle-wrap");
// const carousel = document.querySelector(".image-circle-wrap");
const carousel = document.querySelector(".images");
const carouselImage = document.querySelectorAll(".image");
// const mainImage = document.querySelector(".main-image");
const plate = document.querySelector(".plate");
const namePlate = document.querySelectorAll(".nameplate");
const nameH2 = document.querySelector(".nameH2");
const jobH3 = document.querySelector(".jobH3");
const descWrap = document.querySelector(".desc-wrap");
const bookBtn = document.querySelector(".book-btn");
const ratingWrap = document.querySelector(".rating-wrap");
const circleWrap = document.querySelector(".circle-wrap_2");
const leftSide = document.querySelector(".left-side");

const mainImages = document.getElementsByClassName("main-image");

for (const img of mainImages) {
  img.setAttribute("data-status", "unknown");
}
console.log(mainImages[0]);

// let mainImage = document.createElement("img");
// mainImage.src = "./img/PranKur.png";
// // mainImage.dataset = "active";

// let img_1 = document.createElement("img");
// img_1.src = ".img/Keshav.png";

// let img_2 = document.createElement("img");
// img_2.src = "./img/Saurav.png";

// let img_3 = document.createElement("img");
// img_3.src = "./img/Saumya.png";

// let img_4 = document.createElement("img");
// img_4.src = "./img/Ankita.png";

// const imgs = [mainImage, img_1, img_2, img_3, img_4];

const Data = [
  {
    id: 1,
    name: "PranKur Gupta",
    rating: 4.9,
    position: "SDE @Amazon",
    description: `I am PranKur Gupta, I am working as a software Development
    Engineer at Amazon. I can also guide you throughout your
    preparation phase. Trust me when I tell you this this I know
    the exact recipe to crack the coding interview rounds of top
    companies for the SDE role.`,
    image: "./img/PranKur.png",
    darkGreen: false,
  },
  {
    id: 2,
    name: "Saurav Pal",
    rating: 5.0,
    position: "SDE-2 @Amazon",
    description: `I am a Senior Software Developer American Express. Have been passionately solving Leetcode, HackerRank, Codechef, Codeforces problems, and enthusiastically solving problems with the analysis of space.`,
    image: "./img/Saurav.png",
    darkGreen: true,
  },
  {
    id: 3,
    name: "Saumya Singh",
    rating: 5.0,
    position: "Software Engineer @Red Hat",
    description: `Engineer @RedHat | Program Manager'20 @GirlScript | GHCI Scholar | International Open Source Award finalist by Red Hat | Winner SIH, 21U21 Award | Google Connect Winner'19 | Mentor GCI`,
    image: "./img/Saumya.png",
    darkGreen: false,
  },
  {
    id: 4,
    name: "Keshav Bathla",
    rating: 5.0,
    position: "SDE-1 @Groww",
    description: `A curious learner, on a way to become a kickass developer who writes Python, Java, Javascript and Go | Software Engineer @Groww | Ex-Software Engineer @Grofers | Tech Consultant | Freelancer | Open Source Developer | Coding Instructor`,
    image: "./img/Keshav.png",
    darkGreen: true,
  },
  {
    id: 5,
    name: "Ankita",
    rating: 5.0,
    position: "ML Engineer @Firework",
    description: `Working my way to build the world's future product. Machine Learning Engineer, Data and Technology Evangelist I breathe in developing software with intelligence. I have been involved with startups like DailyHunt, Firework Hq, MagilHub to build the AI end of their products.`,
    image: "./img/Ankita.png",
    darkGreen: false,
  },
];

// 1. add an event listener
// 2. function inside the no. one
// 3. create a varaible and save the map
// 4. map through and return the img src
// 5. call the div to be displayed
// 6. display with innerHtml
// 7. create a variable and assign to num e.g let num = 1
// 8. onclick of the button the coynter should increase by one num+=1
// 9. create if num is = to the id display flex else display none

const getstars = (num) => {
  // 5 || 5.0 - [1, 1, 1, 1, 1]
  // 4.5 - [1, 1, 1, 1, 0.5]
  // 3.9 - [1, 1, 1, 0.5]

  const starsArr = [];
  while (num > 0) {
    if (num >= 1) {
      starsArr.push(1);
      num--;
    } else {
      starsArr.push(0.5);
      num = 0;
    }
  }
  return starsArr;
};

// 2. Create a function to that will loop over the arrray
// and display the stars in full and half

const createStars = (num) => {
  let arr = getstars(num);
  // console.log(arr);
  let starsElement = "";

  for (const ar of arr) {
    if (ar === 1) {
      starsElement += `<img src='./img/star.png' alt='' class=''></img>`;
    } else {
      starsElement += `<img src='./img/half-star.png' alt='' class=''></img>`;
    }
  }
  // return `<div class='stars'>${starsElement}</div>`;
  return starsElement;
};
// console.log(createStars(4.5));

starsWrap.innerHTML = createStars(4.5);

// left side display
function containerRows(val) {
  // leftSide.innerHTML = ""
  val++;
  let map = Data.map((each) => {
    const { id, name, rating, position, description, image } = each;
    return `
      <div class="content ${id === val ? "show" : "noShow"}">
        <div class="rating-wrap">
          <p>${rating.toFixed(1)}</p>
        </div>
        <div class="stars-wrap">
          ${createStars(rating)}
        </div>
        <div class="name-wrap">
          <h2 class="nameH2">${name}</h2>
        </div>
        <div class="job-wrap">
          <h3 class="jobH3">${position}</h3>
        </div>
        <article class="desc-wrap">
          <p>
          ${description}
          </p>
        </article>
        <div class="btn-track">
          <button class="book-btn">
            <p>Book a session</p>
          </button>
        </div>
      </div>
  `;
  });
  leftSide.innerHTML = map.join("");
}

// nameplate
namePlate.forEach((each) => {
  each.classList.add("noShow");
});

function nameRow(dataIndex) {
  namePlate.forEach((each, idx) => {
    console.log(dataIndex);
    each.style.transform = `translateX(${100 * dataIndex}%)`;
  });

  namePlate[dataIndex].classList.remove("noShow");
  namePlate[dataIndex].classList.add("show");

  namePlate[currentIndex].classList.add("noShow");
  namePlate[currentIndex].classList.remove("show");

  // namePlate[0].style.transform = `translateX(${100 * (dataIndex)}%)`
  // namePlate[1].style.transform = `translateX(${100 * (dataIndex)}%)`
}

// 3.

let currentIndex;
let dataIndex = 0;
let carouselRotation = 0;
let imgRotation = 0;

// const SEPARATING_ANGLE = document.querySelector('.separating-angle')
// const SEPARATING_ANGLE = getComputedStyle(
//   document.documentElement
// ).getPropertyValue("--separating-angle");

// To get the initial angle at which the pics are vertically placed
const imgRotationArr = [];
const SEPARATING_ANGLE = 40; // `${40}deg`;
// console.log(SEPARATING_ANGLE);
for (let i = 0; i < carouselImage.length; i++) {
  let index = (i + dataIndex) % carouselImage.length;
  console.log(index);
  let rotateValue =
    index * SEPARATING_ANGLE * -1 -
    carouselRotation +
    SEPARATING_ANGLE * dataIndex;
  // console.log(rotateValue);
  carouselImage[i].style.transform = `rotate(${rotateValue}deg)`;
  imgRotationArr.push(rotateValue);
}
console.log(imgRotationArr);

// console.log(3 % 9);

mainImages[dataIndex].dataset.status = "active";
namePlate[dataIndex].classList.remove("noShow");
namePlate[dataIndex].classList.add("show");

prevBtn.addEventListener("click", handleCarouselPrev);
nextBtn.addEventListener("click", handleCarouselNext);

function handleCarouselPrev() {
  currentIndex = dataIndex;
  dataIndex + 1 > 4 ? (dataIndex = 0) : dataIndex++;

  carouselRotation = dataIndex * -40;
  // imgRotation = carouselRotation * -1;
  // 1.
  carousel.style.transform = `rotate(${carouselRotation}deg)`;
  carousel.style.transition = `all 500ms ease-in-out`;

  // // 2.
  // // This was working in the previous arragement
  // carouselImage.forEach((img) => {
  //   img.style.transform = `rotate(${imgRotation}deg)`;
  //   console.log(carouselImage);
  // });

  carouselImage.forEach((img, i) => {
    console.log(imgRotationArr[i] - carouselRotation);
      img.style.transform = `rotate(${imgRotationArr[i] - carouselRotation}deg)`;
      // console.log(carouselImage);
      // console.log(img);
    });


  console.log(imgRotation);

  // 3.
  console.log(currentIndex);

  if (mainImages[currentIndex].getAttribute("data-status") === "active") {
    // for previous
    mainImages[currentIndex].dataset.status = "inactive-from-prev";

    // for current
    mainImages[dataIndex].dataset.status = "ready-for-prev";

    // for current
    setTimeout(() => {
      mainImages[dataIndex].dataset.status = "active";

      nameRow(dataIndex);

      // namePlate[dataIndex].classList.remove("noShow");
      // namePlate[dataIndex].classList.add("show");
      // namePlate[dataIndex].style.transform = `translateX(${-50}%)`;

      // plate.innerHTML = `<p class="nameplate">${Data[dataIndex].name}</p>`  ;
    }, 0);
  }

  // // 4.
  // namePlate.textContent = Data[dataIndex].name;

  // // 5.
  // nameH2.textContent = Data[dataIndex].name;

  // // 6.
  // jobH3.textContent = Data[dataIndex].position;

  // // 7.
  // descWrap.firstElementChild.textContent = Data[dataIndex].description;

  // // 8.
  // ratingWrap.firstElementChild.textContent = Data[dataIndex].rating.toFixed(1);
  // // console.log(Data[dataIndex].rating.toFixed(1));

  // // 9.
  // starsWrap.innerHTML = createStars(Data[dataIndex].rating);

  // leftSide.innerHTML = "";
  containerRows(dataIndex);

  // 9.
  // bookBtn.style.opacity = `0`
  // bookBtn.style.transition = `opacity 500ms ease-in-out`;

  // console.log(bookBtn.dataIndex);

  // console.log(`rotate(${-1 * carouselRotation}}deg)`);
  // console.log(`rotate(${carouselRotation}deg)`);

  // bookBtn.style.transition = "backgroundColor 400ms ease-in-out";
  // bookBtn.style.backgroundColor = "green";

  // console.log(mainImage);
  console.log(mainImages[dataIndex].dataset.status);

  // console.log(mainImages[dataIndex + 1]);
  // console.log(mainImages[dataIndex]);

  bigCircle.style.backgroundColor = Data[dataIndex].darkGreen
    ? `#7ABD87`
    : `#C5F8C7`;
}

function handleCarouselNext() {
  currentIndex = dataIndex;
  dataIndex - 1 < 0 ? (dataIndex = 4) : dataIndex--;

  carouselRotation = dataIndex * -40;
  // imgRotation = carouselRotation * -1;
  // 1.
  carousel.style.transform = `rotate(${carouselRotation}deg)`;
  carousel.style.transition = `all 500ms ease-in-out`;

  // 2.
  // this worked at the first case we used it for
  // carouselImage.forEach((img) => {
  //   img.style.transform = `rotate(${imgRotation}deg)`;
  // });

  carouselImage.forEach((img, i) => {
    console.log(imgRotationArr[i] - carouselRotation);
      img.style.transform = `rotate(${imgRotationArr[i] - carouselRotation}deg)`;
    });

  // 3.
  console.log(currentIndex);

  if (mainImages[currentIndex].getAttribute("data-status") === "active") {
    // for previous
    mainImages[currentIndex].dataset.status = "inactive-from-prev";

    // for current
    mainImages[dataIndex].dataset.status = "ready-for-prev";

    // for current
    setTimeout(() => {
      mainImages[dataIndex].dataset.status = "active";

      nameRow(dataIndex);
    }, 0);
  }
  containerRows(dataIndex);

  bigCircle.style.backgroundColor = Data[dataIndex].darkGreen
    ? `#7ABD87`
    : `#C5F8C7`;
}

// function handleCarouselPrev() {
//   index++;
//   // images.innerHTML = "";
//   images.innerHTML = imageArr
//     .map((item, idx) => {
//       if (index === imageArr.length) index = 0;
//       if (item.id === index + 1) {
//         console.log(img);
//         console.log(img.src);
//         img.src = item.image;
//         // return `
//         // <img src="${item.image}" alt="" />
//         // `;
//       }
//       // images.innerHTML = html;
//     })
//     .join("");
//   console.log(index);
//   // console.log(html);
// }
