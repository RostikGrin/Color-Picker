const button = document.querySelector('.header__button');
const header = document.querySelector('.header');

const randomColor = () => {
	let r = Math.floor(Math.random() * (256)),
		g = Math.floor(Math.random() * (256)),
		b = Math.floor(Math.random() * (256));
	let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
	button.innerHTML = color;
	return color;
}

button.onclick = () => {
	header.style.backgroundColor = randomColor();
	button.classList.add('active');
	setTimeout(function () {
		button.classList.remove('active');
	}, 100);
}