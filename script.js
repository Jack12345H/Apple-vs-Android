//Android Button
document
  .getElementById("android-btn")
  .addEventListener("click", changeToAndroid);

function changeToAndroid() {
  document.getElementById("AndroidApple").src = "images/Android-Logo.jpg";
  document.getElementById("link").innerHTML = "Android Home";
  document.getElementById("link").style.backgroundColor = "#a4c93b";
  document.getElementById("link").href = "https://www.android.com/";
  document.getElementById("html").style.backgroundColor = "#a4c93b";
  document.getElementById("BaseFont").style.fontFamily = "roboto, sans serif";
  document.getElementById("android-btn").classList.add = "active";
  document.getElementById("apple-btn").classList.remove = "active";
}

// document.getElementById("image-id").src = "images/newPic.png"

//Apple Button
document.getElementById("apple-btn").addEventListener("click", changeToApple);

function changeToApple() {
  document.getElementById("AndroidApple").src = "images/Apple-Logo.jpg";
  document.getElementById("link").innerHTML = "Apple Home";
  document.getElementById("link").style.backgroundColor = "#b6bcca";
  document.getElementById("link").href = "https://www.apple.com/";
  document.getElementById("html").style.backgroundColor = "#b6bcca";
  document.getElementById("BaseFont").style.fontFamily = "Brygada 1918, serif";
  document.getElementById("apple-btn").classList.add = "active";
  document.getElementById("android-btn").classList.remove = "active";
}
