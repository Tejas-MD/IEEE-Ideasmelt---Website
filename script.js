  const btn = document.querySelector("#btn");
  const btnText = document.querySelector("#btnText");

  btn.onclick = () => {
      btnText.innerHTML = "Thanks";
      btn.classList.add("active");
      window.open("https://docs.google.com/forms/u/0/?tgif=d", "_self");

  };