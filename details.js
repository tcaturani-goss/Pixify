const imageSets = [
  {
    id:1,  
    name: 'Andrew Smith',
    title: 'Innocence',
    images: [
      'https://images.unsplash.com/photo-1512540315028-2c1a6497da04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1543332143-4e8c27e3256f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80',
      'https://images.unsplash.com/photo-1612209246511-5b81949e5fdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      'https://images.unsplash.com/photo-1492680967812-4b9226a079de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80'
    ],
  },
  {
    id:2,
    name: 'Jane Doe',
    title: 'Nature Adventures',
    images: [
      'https://images.unsplash.com/photo-1533692328991-08159ff19fca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
      'https://images.unsplash.com/photo-1508515803898-7bb2d7703093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1503557122744-b650066ba62f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1598726668148-99946ef1cb42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1732&q=80'
    ],
  },
  {
    id:3,
    name: 'Irna Tawsen',
    title: 'Faces of the World',
    images: [
      'https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80',
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
      'https://images.unsplash.com/photo-1604186837056-8e7c2867b6f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    ],
  },
  {
    id:4,
    name: 'Mark Dale',
    title: 'Wild Animals',
    images: [
      'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
      'https://images.unsplash.com/photo-1504173010664-32509aeebb62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1654&q=80',
      'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      'https://images.unsplash.com/photo-1531494391841-6ac2ef3859b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    ]
  }

];

let currentId;
let i = 0;

window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  currentId = urlParams.get("id");
  console.log(currentId);
  const currentSubmission = imageSets.filter(item => item.id == currentId);
  console.log(currentSubmission)
  console.log(currentSubmission[0]);
  
  let currentImage = currentSubmission[0].images;

  const submission = `<div class="details-container">
  <h2>${currentSubmission[0].title}</h2>
  <h3>${currentSubmission[0].name}</h3>
  <img
    src=${currentSubmission[0].images}
    alt=${currentSubmission[0].title}
    class="details-img"
  />
  <p id="count-text">1 of 5</p>
  <nav class="details-btn-nav">
    <button class="details-btn" id="prev-btn">Previous</button>
    <button class="details-btn" id="next-btn">Next</button>
  </nav>
</div>`;

  const submissionsContainer = document.querySelector("main");
  submissionsContainer.innerHTML = submission;
  const previousBtn = document.querySelector("#prev-btn");
  const nextBtn = document.querySelector("#next-btn");
  let imgSlider = document.querySelector(".details-img");
  const countText = document.getElementById("count-text");
 
  //IMAGE SLIDER PREVIOUS/NEXT BUTTONS
  function goPrevious() {
    if(i > 0){
        i--;
      } else {
        i = currentImage.length - 1;
      }
      imgSlider.src = currentImage[i];
      countText.innerHTML = `${i + 1} of ${currentImage.length}`
  }
  
  
  function goNext() {
      i++;
      if(i >= currentImage.length){
          i = 0;
          imgSlider.src = currentImage[i];
      } else {
          imgSlider.src = currentImage[i];
          countText.innerHTML = `${i + 1} of ${currentImage.length}`
      }   
  }
  
  previousBtn.addEventListener("click", function () {
    goPrevious()
  });
  nextBtn.addEventListener("click", function () {
    goNext()
  });

}


//HAMBURGER MENU
const menuIcon = document.querySelector("#menu-icon");
const openNav = () => {
  const navContainer = document.querySelector("nav");
  navContainer.classList.toggle("menuToggle");
}

menuIcon.onclick = openNav

//THEME TOGGLE
const themeButton = document.querySelector(".theme-btn");
const toggleTheme = () => {
  const body = document.querySelector("body");
  const aboutBtn = document.querySelector("#about-submit-btn");
  const h2 = document.querySelector("h2");
  const p = document.querySelector("p");
  const submissionsInfo = document.querySelector(".submissions-info");
 

  if(body.style.backgroundColor==="var(--primary-color)"){
      body.style.backgroundColor="white"
      themeButton.innerHTML="Dark Mode"
      menuIcon.style.color="var(--text-primary-color)"
      h2.style.color = "var(--primary-color)"
      p.style.color = "var(--primary-color)"
    }else{
      body.style.backgroundColor="var(--primary-color)"
      themeButton.innerHTML="Light Mode"
      menuIcon.style.color="var(--text-primary-color)"
      h2.style.color = "var(--text-primary-color)"
      p.style.color = "var(--text-primary-color)"
    }
}

themeButton.onclick = toggleTheme;