console.log("hi");

//state
let animationActive = false;
let activeLight = null;

//get elements
const glaucoma = document.getElementById('glaucoma');
const AMD = document.getElementById('AMD');
const stopBtn = document.getElementById('stop');
const glaucomaLight = document.getElementById('glaucomaLight');
const AMDLight = document.getElementById('AMDLight');
const cataractsLight = document.getElementById('cataractsLight');
const deuteranopiaLight = document.getElementById('deuteranopiaLight');
const diabeticLight = document.getElementById('diabeticLight');
const emojis = ['🥕', '🕶️', '🥼', '👓', '🚭', '🏞️', '🥬', '🐟'];
const Button = document.getElementsByClassName('button');


//mouse position

// Glaucoma click 
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

// AMD click 
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

// cataractsLight click 
cataracts.onclick = () => {
    if (activeLight != cataractsLight) {
		closeAll()
        cataractsLight.style.display = 'block';
        activeLight = cataractsLight;
        animationActive = true;
		// cataracts.style.backgroundColor = "#FFFCB7";

		document.addEventListener('mousemove', e =>{
			cataractsLight.style.setProperty('--x', e.clientX + 'px');
			cataractsLight.style.setProperty('--y', e.clientY + 'px');
		});

    } else {
		closeAll();
		// cataracts.style.backgroundColor = 'rgb(239, 239, 239)';
    }
}

// deuteranopia click 
// deuteranopia.onclick = () => {
//     if (activeLight != deuteranopiaLight) {
// 		closeAll()
//         deuteranopiaLight.style.display = 'block';
//         activeLight = deuteranopiaLight;
//         animationActive = true;
// 		deuteranopiaLight.style.filter = 'url(#deuteranopiaFilter)';
		
// 		document.addEventListener('mousemove', e =>{
// 			deuteranopiaLight.style.left = e.clientX-(deuteranopiaLight.clientWidth/2.5) + 'px';
// 			deuteranopiaLight.style.right = e.clientX-(deuteranopiaLight.clientHeight/2.5) + 'px';
// 		});

//     } else {
// 		closeAll();
//     }
// }

document.getElementById('deuteranopia').addEventListener('click', () => {
    if (activeLight != deuteranopiaLight) {
        closeAll();
        deuteranopiaLight.style.display = 'block';
        activeLight = deuteranopiaLight;
        animationActive = true;

        // Assuming rgblind exposes a function to apply colorblind simulation
        // Replace 'document.body' with the specific element you want to apply the simulation on
        rgblind.simulate(document.body, 'deuteranopia');
    } else {
        closeAll();
    }
});

// diabetic click 
diabetic.onclick = () => {
    if (activeLight != diabeticLight) {
		closeAll()
        diabeticLight.style.display = 'block';
        activeLight = diabeticLight;
        animationActive = true;

		document.addEventListener('mousemove', e =>{
			diabeticLight.style.left = e.clientX-(diabeticLight.clientWidth/2.5) + 'px';
			diabeticLight.style.top = e.clientY-(diabeticLight.clientHeight/2.5) + 'px';
		});

    } else {
		closeAll();
    }
}

// Close All 
function closeAll() {
	AMDLight.style.display = 'none';
	glaucomaLight.style.display = 'none';
	cataractsLight.style.display = 'none';
	deuteranopiaLight.style.display = 'none';
	diabeticLight.style.display = 'none';
	activeLight = null;
	animationActive = false;
}

// Stop click 
stopBtn.onclick = () => {
    closeAll();
}

//emoji shuffle
function shuffleEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    document.getElementById('emoji').textContent = emojis[randomIndex];
}

// Shuffle emoji when refresh
document.addEventListener('DOMContentLoaded', shuffleEmoji);

// Shuffle the emoji when button is clicked
Array.from(Button).forEach((button) => {
    button.addEventListener('click', shuffleEmoji);
});

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
