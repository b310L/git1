

const inp =document.querySelector('#inp');
const  handleSubmit = (event) => {
console.log(inp.value);
  const p=inp.value;
  alert('A form was submitted: ali ' );
  axios.post('http://localhost:5000/submit',{
  name:p
})
event.preventDefault();

}

