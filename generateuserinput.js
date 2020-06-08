/*Variables on the review page*/
let userProfilePicture = document.querySelector('.user-profile-picture');
let userFirstName = document.querySelector('.first-name');
let userLastName = document.querySelector('.last-name');
let userDateOfBirth = document.querySelector('.date-of-birth');
let userPhoneNumber = document.querySelector('.phone-number');
let userEmail = document.querySelector('.user-email')
let usermailAddress1 = document.querySelector('.user-mail-Address1');
let usermailAddress2 = document.querySelector('.user-mail-Address2');
let usermailCity = document.querySelector('.user-mail-city');
let usermailZipCode = document.querySelector('.user-mail-zipcode');
let usermailState = document.querySelector('.user-mail-state');
let userPermanentAddress1 = document.querySelector('.user-permanent-Address1');
let userPermanentAddress2 = document.querySelector('.user-permanent-Address2');
let userpermanentCity = document.querySelector('.user-permanent-city');
let userPermanentZipCode = document.querySelector('.user-permanent-zipcode');
let userPermanentState = document.querySelector('.user-permanent-state');
let userHigherEducation = document.querySelector('.user-higher-education');
let userResume = document.querySelector('.user-resume');
let userEducationDocument=document.querySelector('.user-education-document');
let userChoosenSkills=document.querySelector('.technical-skill');
let editButton = document.querySelector('.edit');
let registrationFeedback = document.querySelector('.registration-feedback');



function storeUserInput() {
  //About Yourself
  let firstName = document.querySelector('#firstname').value;
  let lastName = document.querySelector('#lastname').value;
  let dateOfBirth = document.querySelector('#DOB').value;
  let phoneNumber = document.querySelector('#phone').value;
  let email = document.querySelector('#email').value;
  let profilePicture = document.querySelector('#output').src;

  /*Contact Info*/
  let mailAddress1 = document.querySelector('#mail-address-1').value;
  let mailAddress2 = document.querySelector('#mail-address-2').value;
  let mailCity = document.querySelector('#mail-city').value;
  let mailState = document.querySelector('#mail-state').value;
  let mailZipCode = document.querySelector('#mail-zipcode').value;
  let permanentAddress1 = document.querySelector('#permanent-address-1').value;
  let permanentAddress2 = document.querySelector('#permanent-address-2').value;
  let permanentCity = document.querySelector('#permanent-city').value;
  let permanentState = document.querySelector('#permanent-state').value;
  let permanentZipCode = document.querySelector('#permanent-zipcode').value;

  /*Education*/
  let higherEducation = document.querySelector('#select-education').value;
  let skills = document.querySelectorAll('.Skill');
  let resume = document.querySelector('.upload-resumee').value;
  let educationDocument = document.querySelector('#document').files;


  let userDetails = {
    educationDocument:[],
    skills:[],
  };

  for(var i=0; i<educationDocument.length; i++){
    userDetails.educationDocument.push(educationDocument[i].name);
  }
  for(var i=0;i<skills.length;i++){
    userDetails.skills.push(skills[i].value);
  }
  userDetails.firstName = firstName;
  userDetails.lastName = lastName;
  userDetails.dateOfBirth = dateOfBirth;
  userDetails.phoneNumber = phoneNumber;
  userDetails.profilePicture = profilePicture;
  userDetails.email = email;


  //contact info
  userDetails.mailAddress1 = mailAddress1;
  userDetails.mailAddress2 = mailAddress2;
  userDetails.mailCity = mailCity;
  userDetails.mailZipCode = mailZipCode;
  userDetails.mailState = mailState;
  userDetails.permanentAddress1 = permanentAddress1;
  userDetails.permanentAddress2 = permanentAddress2;
  userDetails.permanentCity = permanentCity;
  userDetails.permanentZipCode = permanentZipCode;
  userDetails.permanentState = permanentState;

  //Education
  userDetails.higherEducation = higherEducation;
  //userDetails.skills=skills;
  userDetails.resume = resume;
  //userDetails.educationDocument=educationDocument;
  sessionStorage.setItem('userDetails', JSON.stringify(userDetails));
  generatePreviewPage();
}

function generatePreviewPage() {

  var retrievedUserDetails = JSON.parse(sessionStorage.getItem('userDetails'));
  userProfilePicture.src = retrievedUserDetails.profilePicture;
  userFirstName.textContent = retrievedUserDetails.firstName;
  userLastName.textContent = retrievedUserDetails.lastName;
  userDateOfBirth.textContent = retrievedUserDetails.dateOfBirth;
  userPhoneNumber.textContent = retrievedUserDetails.phoneNumber;
  userEmail.textContent = retrievedUserDetails.email;
  usermailAddress1.textContent = retrievedUserDetails.mailAddress1;
  usermailAddress2.textContent = retrievedUserDetails.mailAddress2;
  usermailCity.textContent = retrievedUserDetails.mailCity;
  usermailState.textContent=retrievedUserDetails.mailState;
  usermailZipCode.textContent = retrievedUserDetails.mailZipCode;
  userPermanentAddress1.textContent = retrievedUserDetails.permanentAddress1;
  userPermanentAddress2.textContent = retrievedUserDetails.permanentAddress2;
  userpermanentCity.textContent = retrievedUserDetails.permanentCity;
  userPermanentZipCode.textContent = retrievedUserDetails.permanentZipCode;
  userPermanentState.textContent = retrievedUserDetails.permanentState;
  userHigherEducation.textContent = retrievedUserDetails.higherEducation;
  userResume.textContent = retrievedUserDetails.resume;
  let educationDocs=[];
  let userSkills=[];
  retrievedUserDetails.skills.map(skills=>{
    userSkills.push(`<p>&#10004 ${skills}</p>`);
  })
  retrievedUserDetails.educationDocument.map(Document=>{
    educationDocs.push(`<p>${Document}<p>`);
  })
  userEducationDocument.innerHTML=educationDocs.join('');
  userChoosenSkills.innerHTML=userSkills.join('');
}

const showRegistrationFeedback = () => {
  var retrievedUserDetails = JSON.parse(sessionStorage.getItem('userDetails'));
  registrationFeedback.style.display = 'block';
  let userFullname = document.querySelector('.user-fullname');
  userFullname.textContent = `Dear ${retrievedUserDetails.firstName} ${retrievedUserDetails.lastName}`
}
