var movePixels = 1.5;
var delayMs = 10;
var catTimer = null;

// Left to right function

function catWalk() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);

  if (currentLeft > (window.innerWidth-img.width)) {
    movePixels *= -1; // movePixels is now what movePixels was, times -1. (which flips the value).
    img.style.transform = 'scaleX(-1)'; // flip image transform: scaleX(-1);
  } else if (currentLeft < 0) {
			movePixels *= -1;  	
		img.style.transform = 'scaleX(+1)';// flip image back
  }

  img.style.left = (currentLeft + movePixels) + 'px';

}

// Start moving function

function startCatWalk() {
  catTimer = window.setInterval(catWalk, delayMs);
}

var stopCatWalk = function() {
	window.clearInterval(catTimer);
};

var speedCatWalk = function() {
	movePixels *= 1.5;
};

var slowCatwalk = function() {
	movePixels /= 1.5;
};


var startButton = document.getElementById('start-button');
var stopButton = document.getElementById('stop-button');
var speedButton = document.getElementById('speed-button');
var slowButton = document.getElementById('slow-button');

startButton.addEventListener('click', startCatWalk, false);
stopButton.addEventListener('click', stopCatWalk, false);
speedButton.addEventListener('click', speedCatWalk);
slowButton.addEventListener('click', slowCatwalk);


// catWalk()
// startCatWalk()

