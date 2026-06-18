const SITE_PASSWORD = "blade17";

const gateHTML = `
<div id="passwordGate" class="password-gate">
  <div class="password-card">
    <div class="password-label">PRIVATE ACCESS</div>

    <h1>ENTER PASSWORD</h1>

    <input id="passwordInput" type="password" placeholder="PASSWORD">

    <button id="passwordButton">
      OPEN
    </button>

    <p id="passwordError"></p>
  </div>
</div>
`;

document.body.insertAdjacentHTML(
  "afterbegin",
  gateHTML
);

const gate =
  document.getElementById("passwordGate");

const input =
  document.getElementById("passwordInput");

const button =
  document.getElementById("passwordButton");

const error =
  document.getElementById("passwordError");

function unlockSite() {
  gate.classList.add("is-unlocked");

  localStorage.setItem(
    "siteUnlocked",
    "true"
  );
}

function checkPassword() {
  if (
    input.value.trim() === SITE_PASSWORD
  ) {
    unlockSite();
  } else {
    error.textContent =
      "PASSWORD ERROR";
    input.value = "";
  }
}

if (
  localStorage.getItem("siteUnlocked")
  === "true"
) {
  unlockSite();
}

button.addEventListener(
  "click",
  checkPassword
);

input.addEventListener(
  "keydown",
  (e) => {
    if (e.key === "Enter") {
      checkPassword();
    }
  }
);