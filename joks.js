document.querySelector("#btn").addEventListener("click", function (e) {
  e.preventDefault();
  let input = document.getElementById("input").value;
  const xhr = new XMLHttpRequest();

  xhr.open("GET", `http://api.icndb.com/jokes/random/${input}`, true);
  xhr.onload = function () {
    if (this.status === 200) {
      let response = JSON.parse(this.responseText);
      if (response.type === "success") {
        let output = "";
        let responseArry = response.value;
        console.log(responseArry);
        responseArry.forEach((joke) => {
          console.log(joke.joke);
          output += `<li>${joke.joke}</li>`;
          document.querySelector("#jokes").innerHTML = output;
        });
      } else {
        output += `<li>Something went wrong</li>`;
        document.querySelector("#jokes").innerHTML = output;
      }
    }
  };
  xhr.send();
});
