(function () {
  var STORAGE_KEY = "tstm_restricted_access";
  if (localStorage.getItem(STORAGE_KEY) !== "granted") {
    window.location.href = "../";
    return;
  }

  var logout = document.getElementById("logout-btn");
  if (!logout) return;

  logout.addEventListener("click", function () {
    localStorage.removeItem(STORAGE_KEY);
    window.location.href = "../";
  });
})();
