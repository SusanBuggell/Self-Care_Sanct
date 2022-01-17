

let regEmailEvent1 = document.getElementById(reg-email-event1)
let canEmailEvent1 = document.getElementById(cancel-email-event1)

let regSubmitEvent1 = document.getElementById('reg-sub-Event1')
let canSubmitEvent1 = document.getElementById('can-sub-event1')

let formRegEvent1 = document.getElementById ('form-reg-event1')
let formCanEvent1 = document.getElementById ('form-can-event1')

const meditationYoga = () => axios.get('http://localhost:3000/Meditation_Yoga').then( res => {
  if(res.status === 200){
    window.location.replace('http://localhost:3000/index.html')
  }
}).catch(error => {
  console.log(error)
  alert(`I'm sorry. Your request to view this page has been unsuccessful.  Please try again later. `)
})

const regEvent1 = body => axios.post('http://localhost:3000/api/emailEvent1', body).then( res => {
  if(res.status === 200){
    alert('You have successfully registered for Event 1')
  }
}).catch(error => {
  console.log(error)
  alert(error)
})

const canEvent1 = body => axios.delete('http://localhost:3000/api/emailEvent1', body).then( res => {
  if(res.status === 200){
    alert('You have successfully canceled your registration for Event 1')
  }
}).catch(error => {
  console.log(error)
  alert(error)
})
meditationYoga()
formRegEvent1.addEventListener('submit', regEvent1)
formCanEvent1.addEventListener('submit', canEvent1)