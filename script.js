var vh, vw;

var scrollEl = document.querySelector('.container');
var rows = document.querySelectorAll('.row');

var xi = 0;
var yi = 0;

var xLen = rows[0].children.length;
var yLen = rows.length;

for (var row of rows) {
	++yi;
	for (var cell of row.children) {
		++xi;
		//cell.innerHTML = `y:${yi} x:${xi}`;
		//cell.setAttribute('data-x', xi);
		//cell.setAttribute('data-y', yi);
	}
	xi = 0;
}

document.addEventListener('DOMContentLoaded', function() {
	document.body.classList.remove('loading');
	var rx = getRandomInt(0, xLen);
	var ry = getRandomInt(0, yLen);
	//elevator(rx,ry);
	elevator(7, 44);
});

function elevator(y, x) {
	console.log(`Taking the elevator to x: ${x}, y: ${y}!`);
	scrollEl.scroll({
		left: vw * x,
		top: vh * y,
		behavior: 'smooth'
	});
}

function update() {
	vh = window.innerHeight;
	vw = window.innerWidth;
}

window.onresize = function() {
	update();
};

update();

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
