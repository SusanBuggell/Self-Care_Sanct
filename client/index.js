let btnCatMeditationYoga = document.getElementById("cat-meditation-yoga");
let formCatMeditationYoga = document.getElementById("form-cat-meditation-yoga");

const meditationYoga = (e) => {
    e.preventDefault();
    axios
      .get('/Meditation_Yoga.html')
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
            res.sendFile(__dirname + '/Meditation_Yoga.html')
        //   window.location.replace("http://localhost:3000/Meditation_Yoga.html");
        }
      })
      .catch((error) => {
        console.log(error)
        // console.log(res.status)
        alert(
          `I'm sorry. Your request to view this page has been unsuccessful.  Please try again later. `
        );
      });
  };

console.log(formCatMeditationYoga)
formCatMeditationYoga.addEventListener("submit", meditationYoga);