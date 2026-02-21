(function () {
  // This is a client-side passcode gate for convenience, not strong security.
  var PASSCODE = "TSTM-ACCESS";
  var STORAGE_KEY = "tstm_restricted_access";

  var form = document.getElementById("access-form");
  var input = document.getElementById("passcode");
  var message = document.getElementById("access-message");

  if (!form || !input || !message) return;

  if (localStorage.getItem(STORAGE_KEY) === "granted") {
    window.location.href = "./portal/";
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var value = (input.value || "").trim();

    if (value === PASSCODE) {
      localStorage.setItem(STORAGE_KEY, "granted");
      window.location.href = "./portal/";
      return;
    }

    message.textContent = "Incorrect passcode. Please try again.";
  });
})();
