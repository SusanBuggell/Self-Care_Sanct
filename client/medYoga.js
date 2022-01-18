let regEmailEvent1 = document.getElementById("reg-email-event1");
console.log(`regEmailEvent1: ${regEmailEvent1}`)
let canEmailEvent1 = document.getElementById("cancel-email-event1");
console.log(`canEmailEvent1: ${canEmailEvent1}`)
let btnRegSubmitEvent1 = document.getElementById("reg-sub-Event1");
console.log(`btnRegSubmitEvent1: ${btnRegSubmitEvent1}`)
let btnCanSubmitEvent1 = document.getElementById("can-sub-event1");
console.log(`btnCanSubmitEvent1: ${btnCanSubmitEvent1}`)
let formRegEvent1 = document.getElementById("form-reg-event1");
console.log(`formRegEvent1: ${formRegEvent1}`)
let formCanEvent1 = document.getElementById("form-can-event1");
console.log(`formCanEvent1: ${formCanEvent1}`)

const handlerRegEvent1 = (e) => {
  e.preventDefault();
  //create body object that pulls in the information from the HTML input value
  let body = { "regEmailEvent1": regEmailEvent1 };
  // let { regEmailEvent1 } = body;
  console.log(`Body: ${body}`)
  // axios
  //   .post("/api/emailEvent1", body)
  //   .then((res) => {
  //     console.log(res.status);
  //     if (res.status === 200) {
  //       console.log(`Then: regEmailEvent1: ${regEmailEvent1}`);
  //       alert("You have successfully registered for Event 1");
  //     }
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     alert(error);
  //   });
};

// const handlerCanEvent1 = (e) => {
//   e.preventDefault();
//   let body = {  "canEmailEvent1": canEmailEvent1 };
//   let { canEmailEvent1 } = body;
//   let { regEvent1 } = body;
//   console.log()
//   axios
//     .delete("/api/emailEvent1", body)
//     .then((res) => {
//       console.log(`regEvent1 before delete: ${regEvent1}`);

//       if (res.status === 200) {
//         console.log(regEvent1);
//         alert("You have successfully canceled your registration for Event 1");
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//       alert(error);
//     });
// };

formRegEvent1.addEventListener('submit', handlerRegEvent1)
// formCanEvent1.addEventListener('submit', handlerCanEvent1)
