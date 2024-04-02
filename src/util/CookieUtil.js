//sets the cookie
export const setCookie = (name, value, expires) => {
  console.log("expires: " + expires.toUTCString());
  document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
};

//returns the cookie
export const getCookie = (name) => {
  let decodedCookie = decodeURIComponent(document.cookie);
  let cookies = decodedCookie.split(";");

  let value = "";
  for (let i = 0; i < cookies.length; i++) {
    let keyValueData = cookies[i].split("=");
    //console.log("keyValueData: " + keyValueData[0]);
    if (keyValueData[0].includes(name)) {
      value = keyValueData[1];
    }
  }
  return value;
};
