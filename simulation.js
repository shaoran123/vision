console.log("hi shaoran");

//state
let animationActive = false;
let activeLight = null;

//get elements from html dom
const glaucoma = document.getElementById('glaucoma');
const AMD = document.getElementById('AMD');
const stopBtn = document.getElementById('stop');
const glaucomaLight = document.getElementById('glaucomaLight');
const AMDLight = document.getElementById('AMDLight');

//mouse position




// glaucoma.onclick = () => {
// 	if (animationActive == false) {
// 		glaucomaLight.style.display = 'block';
// 		animationActive = true;
// 	} else {
// 		glaucomaLight.style.display='none';
// 		animationActive = false;
// 	}
// }

// AMD.onclick = () =>{
// 	if (animationActive == false) {
// 		AMDLight.style.display = 'block';
// 		animationActive = true;
// 	} else {
// 		AMDLight.style.display='none';
// 		animationActive = false;
// 	}
// }

// //stop
// stopBtn.onclick = () => {
// 	animationActive = false;
// 	glaucomaLight.style.display='none';
// 	AMDLight.style.display='none';
// }

// Glaucoma click event
glaucoma.onclick = () => {
    if (activeLight != glaucomaLight) {
		closeAll()
        glaucomaLight.style.display = 'block';
        activeLight = glaucomaLight;
        animationActive = true;

		document.addEventListener('mousemove', e => {
			glaucomaLight.style.setProperty('--x', e.clientX + 'px');
			glaucomaLight.style.setProperty('--y', e.clientY + 'px');
		});
    } else {
		closeAll();
    }
}

// AMD click event
AMD.onclick = () => {
    if (activeLight != AMDLight) {
		closeAll()
        AMDLight.style.display = 'block';
        activeLight = AMDLight;
        animationActive = true;

		document.addEventListener('mousemove', e =>{
			console.log('Moving AMDLight');
			AMDLight.style.left = e.clientX-(AMDLight.clientWidth/2.5) + 'px';
			AMDLight.style.top = e.clientY-(AMDLight.clientHeight/2.5) + 'px';
		});

    } else {
		closeAll();
    }
}

function closeAll() {
	AMDLight.style.display = 'none';
	glaucomaLight.style.display = 'none';
	activeLight = null;
	animationActive = false;
}

// Stop click event
stopBtn.onclick = () => {
    closeAll();
}
