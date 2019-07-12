var clickHere = document.querySelector('div');
clickHere.onclick = function() {
	if(clickHere.textContent === 'You will receive an email when the bomb drops!') {
		clickHere.textContent = 'Chill!'
	} else {
		clickHere.textContent = 'You will receive an email when the bomb drops!';
	}
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