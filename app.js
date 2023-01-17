

// in the name of Allah
const  handleSubmit = (event) => {
console.log('ali');
  const p='ali';
  alert('A form was submitted: ali ' );
  axios.post('http://localhost:5000/submit',{
  name:p
})
event.preventDefault();

}

