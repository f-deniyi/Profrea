let forms = document.querySelectorAll('.slide');
let prevButton = document.querySelector('#prev');
let aboutYourselfDiv = document.querySelector('.about-yourself');
let contactInfoDiv = document.querySelector('.contact-info');
let educatonDiv = document.querySelector('.education');
let nextButton = document.querySelector('#next');
let previewButton = document.querySelector('#preview');
let submitButton = document.querySelector('#submit')
let mySaveButton = document.querySelectorAll(".form-save");
var submissionFeedback = document.querySelector('.submission-feedback');
let inputs = document.getElementsByTagName("input");
let deleteSkill=document.querySelector('#delete-skill');
let counter = 0;
let skillCounter=0;
let resumeFeedback=document.querySelector('.resume-feedback');
let documentFeedback=document.querySelector('.document-feedback');

let validateUserInput = (count) => {
  const isFormValid = forms[count].checkValidity();
  let requiredInput = forms[count].querySelectorAll('.required');
  let errorFeedback = forms[count].querySelector('.validation-error-feedback');
  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
 
  if (isFormValid) {
    if (count==0){
      let emailError=document.querySelector('.email-error');
      emailError.textContent='';
      }
    for (var i = 0; i < requiredInput.length; i++) {
       requiredInput[i].style.border = 'none';
      }
      errorFeedback.textContent = '';
      
      submissionFeedback.textContent = 'Details Registered Succesfully';
      showSlide(counter + 1);
      return counter++;

   
  } else {
    if (count==0){
      let email=document.querySelector('#email').value;
      let emailError=document.querySelector('.email-error');
      if(!validateEmail(email)){
        emailError.textContent='Invalid Email';
      }
    }
    errorFeedback.textContent = 'Kindly fill all the required input field';
    for (var i = 0; i < requiredInput.length; i++) {
      if  (requiredInput[i].value === '') {
       requiredInput[i].style.border = 'solid 2px red';

      }
    }
  }
}


const showSlide = (n) => {
  forms[counter].classList.remove('active-slide');
  forms[n].classList.add('active-slide');
  console.log(forms[n]);
  console.log(n);
  let currentSlide = n
  if (currentSlide == 0) {
    prevButton.style.display = 'none';
    previewButton.style.display = 'none';
    submitButton.style.display = 'none';
    aboutYourselfDiv.classList.add('border-bottom');
    contactInfoDiv.classList.remove('border-bottom');
    educatonDiv.classList.remove('border-bottom');
  }
  else if (currentSlide == 1) {
    prevButton.style.display = 'block';
    nextButton.style.display = 'block';
    submitButton.style.display = 'none';
    previewButton.style.display = 'none';
    contactInfoDiv.classList.add('border-bottom');
    aboutYourselfDiv.classList.remove('border-bottom');
    educatonDiv.classList.remove('border-bottom');
  }
  else if (currentSlide == 2) {
    previewButton.style.display = 'block';
    nextButton.style.display = 'none';
    submitButton.style.display = 'none';
    educatonDiv.classList.add('border-bottom');
    contactInfoDiv.classList.remove('border-bottom');
    aboutYourselfDiv.classList.remove('border-bottom');
  }
  else if(currentSlide==3){
    prevButton.style.display = 'block';
    submitButton.style.display = 'block';
    previewButton.style.display = 'none';
    nextButton.style.display = 'none';
    educatonDiv.style.display = 'none';
    contactInfoDiv.style.display = 'none';
    aboutYourselfDiv.style.display = 'none';
  }
}
showSlide(counter);

nextButton.addEventListener('click', () => {
  validateUserInput(counter)
});
previewButton.addEventListener('click', () => {
  validateUserInput(counter);
});
prevButton.addEventListener('click', () => {
  showSlide(counter - 1);
  return counter--;
});


const hidePermanentAddress=()=>{
  let checkbox=document.querySelector('input[type=checkbox]');
let permanentAddress=document.querySelector('.permanent-address');
let sameAddress=document.querySelector('.same-address');
  if(checkbox.checked===true){
    permanentAddress.style.display='none';
    sameAddress.textContent='Same as Mail Address';
  }
 else if(checkbox.checked!=true){
    permanentAddress.style.display='block';
    sameAddress.textContent='';

  }

}



function previewFile() {
  const preview = document.querySelector('img');
  const file = document.querySelector('input[type=file]').files[0];
  var size = document.querySelector('input[type=file]').files[0].size
  var uploadFeedbackError = document.querySelector('.upload-feedback-error');

  const reader = new FileReader();

  reader.addEventListener("load", function () {
    // convert image file to base64 string
    preview.src = reader.result;
    preview.onload = () => {
      width = preview.naturalWidth;
      height = preview.naturalHeight;
    }
  }, false);
  if (size > 60000 && size <= 200000) {
    if (file) {
      reader.readAsDataURL(file);
      uploadFeedbackError.textContent = '';
    }
  } else { 
    if(size<60000){
      uploadFeedbackError.textContent = 'Size of Image choosen is small, The accepted Size is between 60Kb and 200Kb';
    }
    else if(size>200000){
      uploadFeedbackError.textContent = 'Size of Image choosen is big, The accepted Size is between 60Kb and 200Kb';
    }
   
  }

}



function showContent() {
  let dropdownContent = document.querySelector('.dropdown-content');
  dropdownContent.style.display = 'block';
}
function hideContent() {
  let dropdownContent = document.querySelector('.dropdown-content');
  dropdownContent.style.display = 'none';
}

function filterFunction() {
  let input, filter, p;
  input = document.getElementById("select-education");
  filter = input.value.toLowerCase();
  div = document.querySelector(".dropdown-content");
  p = div.getElementsByTagName("p");
  for (var i = 0; i < p.length; i++) {
    txtValue = p[i].textContent || p[i].innerText;
    console.log(p[i])
    if (txtValue.toLowerCase().indexOf(filter) > -1) {
      p[i].style.display = "";
      p[i].addEventListener('click', () => { input.value = txtValue });
      ;
    } else {
      p[i].style.display = "none";
    }
  }
}

let input, filter, p;
input = document.getElementById("select-education");
div = document.querySelector(".dropdown-content");
p = div.getElementsByTagName("p");
for (var i = 0; i < p.length; i++) {
  txtValue = p[i].textContent;
  console.log(p[i])
    p[i].addEventListener('click', () => {txtValue =input.value});
  }


 
 const addNewSkill=()=>{
   skillCounter++;
   let skillContainer=document.querySelector('.skill-container');
   let newSkill =document.createElement('input');
   Object.assign(newSkill,{
     className:'skill',
     placeholder:'Skill',
     id:`skillCounter-${skillCounter}`,
   })
  
   newSkill.setAttribute('class', 'Skill');
   skillContainer.appendChild(newSkill);
   return skillCounter;
 }
 const removeAddedSkill=()=>{
    let skillToBeDeleted=document.getElementById(`skillCounter-${skillCounter}`);
    skillToBeDeleted.parentNode.removeChild(skillToBeDeleted);
    skillCounter--;
    return skillCounter--;
}
const sendResumeFeedback=()=>{
 resumeFeedback.textContent='Resume Uploaded Succesfully';
}
const sendDocumentFeedback=()=>{
  documentFeedback.textContent='Document Uploaded Succesfully';
}