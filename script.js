  const btn = document.querySelector("#btn");
  const btnText = document.querySelector("#btnText");

  btn.onclick = () => {
      btnText.innerHTML = "Thanks";
      btn.classList.add("active");
      window.open("https://www.google.com/forms/", "_blank");

  };