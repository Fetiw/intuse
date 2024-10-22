const cookie = document.querySelector(".cookie");

if (cookie) {
  if (getCookie("useCookie")) {
    cookie.classList.remove("show");
  } else {
    cookie.classList.add("show");
  }

  cookie.addEventListener("click", ({ target }) => {
    const date = new Date();
    const expireTime = new Date(date.setMonth(date.getMonth() + 1));

    if (target.closest("[data-cookie-accept]")) {
      document.cookie = `useCookie=true;expires=${expireTime}`;
      hiddenCookie(cookie);
    }

    if (target.closest("[data-cookie-reject]")) {
      document.cookie = "";
      hiddenCookie(cookie);
    }
  });
}

function hiddenCookie() {
  cookie.classList.remove("show");
  cookie.classList.add("hide");
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"
  ));

  return matches ? decodeURIComponent(matches[1]) : false;
}
