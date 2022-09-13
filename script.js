const overlay = document.querySelector('.mobile-overlay');
const projectBtn = document.querySelectorAll('.project-detail');
const projectPopup = document.querySelector('#project');
const closeBtn = document.querySelector('.close');

function mytoggleMenu() {
  overlay.classList.toggle('hide-js');
}
mytoggleMenu();

projectBtn.forEach(project=>{
  project.addEventListener('click', function(){
    projectPopup.style.display="inline-block";
  })
});

closeBtn.addEventListener('click', function(){
  projectPopup.style.display="none";
});