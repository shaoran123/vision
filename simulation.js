console.log("hi shaoran");

//state
let animationActive = false;

//get elements from html dom
const glaucoma = document.getElementById('glaucoma');
const stopBtn = document.getElementById('stop');
const glaucomaLight = document.getElementById('glaucomaLight');

//mouse position
let pos = document.documentElement;
pos.addEventListener('mousemove', e =>{
	pos.style.setProperty('--x', e.clientX + 'px');
	pos.style.setProperty('--y', e.clientY + 'px');
});

//click
// glaucoma.onclick = () => {
// 	if (animationActive == true) {
// 		glaucomaLight.style.display='none';
// 		animationActive = false;
// 	} else {
// 		glaucomaLight.style.display='block';
// 		animationActive = true;
// 	}
// }
glaucoma.onclick = () => {
	if (animationActive == false) {
		glaucomaLight.style.display = 'block';
		animationActive = true;
	} else {
		glaucomaLight.style.display='none';
		animationActive = false;
	}
}

//stop
stopBtn.onclick = () => {
	animationActive = false;
	glaucomaLight.style.display='none';
}