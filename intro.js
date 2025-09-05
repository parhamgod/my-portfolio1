window.onload = dark;
function dark() {

  const body = document.body;
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");

  }
  document.getElementById("dark-toggle").addEventListener("click", () => {
    body.classList.toggle("dark")
    if (body.classList.contains("dark")) {
      localStorage.setItem("theme",
        "dark"
      );
    }
    else { localStorage.setItem("theme", "light"); }
  });
  let toggleBtn = document.getElementById("dark-toggle");

  toggleBtn.addEventListener("click",
    function () {

      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");

      }
      else {
        localStorage.setItem("theme", "light");
      }
    }
  );
  window.addEventListener("load",
    function () {
      let savedTheme =
        this.localStorage.getItem("theme");
      if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
      }
    }
  );
}