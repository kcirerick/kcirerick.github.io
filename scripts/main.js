var clickHere = document.querySelector('button');
clickHere.onclick = function() {
	var myEmail = prompt('Enter your email to get notified when the bomb drops!');
  localStorage.setItem('email', myEmail);
  alert('We will let you know when you can secure the bag!');
}

var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cover.jpeg') {
      myImage.setAttribute ('src','images/fire.jpeg');
    } else {
      myImage.setAttribute ('src','images/cover.jpeg');
    }
}