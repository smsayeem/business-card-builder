import isValidEmail from './isValidEmail';

const isvalidForm=(e)=>{
  const {givenname, surname, email, phone, houseno, street, suburb, state, postcode, country} = e.target;
  const phWithoutSpaceAsString = phone.value.split(' ').join('');
  const phAsNumber = parseInt(phWithoutSpaceAsString);

  if(givenname.value === '' || givenname.value.length < 2){
    alert('Please provide givenname (minimum length is 2)');
    givenname.focus();
    return false;
  }
  if(surname.value === '' || surname.value.length < 2){
    alert('Please provide surname (minimum length is 2)');
    surname.focus();
    return false;
  }
  if(email.value === '' || !isValidEmail(email.value)){
    alert('Please provide a valid email i.e test@test.com');
    email.focus();
    return false;
  }
  // eslint-disable-next-line eqeqeq
  if(phAsNumber === '' || phWithoutSpaceAsString != phAsNumber || phWithoutSpaceAsString.length !== 10 ){
    alert('Please provide 10 digit phone number i.e. 04xx xxx xxx 0r 02 xxxx xxxx');
    phone.focus();
    return false;
  }
  if(houseno.value === ''){
    alert('Please provide a valid house name or number');
    houseno.focus();
    return false;
  }
  if(street.value === ''){
    alert('Please provide a valid strret name');
    street.focus();
    return false;
  }
  if(suburb.value === '' || suburb.value.length < 4){
    alert('Please provide correct suburb name');
    suburb.focus();
    return false;
  }
  if(state.value === '-1'){
    alert('Please select your state');
    state.focus();
    return false;
  }
  if(postcode.value === '' || postcode.value.length !== 4){
    alert('Please provide correct postcode name (length is 4)');
    postcode.focus();
    return false;
  }
  if(country.value === '' || country.value.length < 4){
    alert('Please provide correct country name (minimum length is 4)');
    country.focus();
    return false;
  }
  return true;
}
export default isvalidForm;