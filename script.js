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
const displaySubmission = (list) => {
    const submissionsContainer = document.querySelector("#submissionsContainer");
    const allSubmissions = list.map((item) => {
        return `<a class="submission" href="details.html?id=${item.id}">
        <img src=${item.images} alt=${item.title} class="submissions-img" />
        <div class="submissions-info">
          <p>${item.title} - ${item.name}</p>
          <p class="sub-see-more">see more</p>
        </div>
        </a>`
    });

    console.log(allSubmissions);
    submissionsContainer.innerHTML = allSubmissions.join("");
}

window.onload = function() {
    displaySubmission(imageSets);
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
        menuIcon.style.color="rgb(53, 50, 50)"
        h2.style.color = "black"
        p.style.color = "black"
      }else{
        body.style.backgroundColor="var(--primary-color)"
        themeButton.innerHTML="Light Mode"
        menuIcon.style.color="white"
        h2.style.color = "white"
        p.style.color = "white"
      }

      aboutBtn.classList.toggle("hollow-btn");
}

themeButton.onclick = toggleTheme;


//ADD NEW SUBMISSION 

const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", (e) => {
    //Prevent default function of the form
    e.preventDefault();

    //Get values from the form
    const name = document.querySelector(`input[name="name"]`).value;
    const title = document.querySelector(`input[name="title"]`).value;
    const images = document.querySelector(`input[name="images"]`).value;

    //Create new submission div
    const newSubmission = document.createElement("div");
    newSubmission.innerHTML = `<div class="submission">
    <img src=${images} alt=${title} class="submissions-img" />
    <div class="submissions-info">
      <p>${title} - ${name}</p>
      <p class="sub-see-more">see more</p>
    </div>
    </div>`

    //Add new meal div to submissions container
    const submissionsContainer = document.querySelector("#submissionsContainer");
    submissionsContainer.insertBefore(newSubmission, submissionsContainer.firstChild);

    //Reset form inputs 
    document.querySelector(`input[name="name"]`).value = "";
    document.querySelector(`input[name="entry-title"]`).value = "";
    document.querySelector(`input[name="imageUrl"]`).value = "";



});
