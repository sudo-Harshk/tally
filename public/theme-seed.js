(function () {
  try {
    var t = JSON.parse(localStorage.getItem("settings") || "{}").theme;
    if (
      t === "dark" ||
      (t !== "light" && matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    }
  } catch {
    if (matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    }
  }
})();
