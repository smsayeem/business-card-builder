const isValidEmail= (emailId) => {
  let atPos = emailId.indexOf('@');
  let dotPos = emailId.lastIndexOf('.');
  
  if( atPos < 1 || (dotPos - atPos < 2) ){
    return false;
  }
  return true;
}
export default isValidEmail;