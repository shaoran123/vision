console.log("hi");

//state
let animationActive = false;
let activeLight = null;
let activeArticle = null;

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
const button = document.getElementsByClassName('button');
const AMDArticle = document.getElementById('AMDArticle');
const cataractsArticle = document.getElementById('cataractsArticle');
const deuteranopiaArticle = document.getElementById('deuteranopiaArticle');
const glaucomaArticle = document.getElementById('glaucomaArticle');
const diabeticArticle = document.getElementById('diabeticArticle');
const mainElement = document.querySelector('main');


//mouse position

// Glaucoma click 
glaucoma.onclick = () => {
	mainElement.style.opacity=100;
    if (activeLight != glaucomaLight) {
		closeAllLight()
		closeAricle();
        glaucomaLight.style.display = 'block';
        activeLight = glaucomaLight;
		activeArticle = glaucomaArticle;
		glaucomaArticle.style.display = 'block';
        animationActive = true;
		glaucoma.style.backgroundColor = '#EDE2FF';

		document.addEventListener('mousemove', e => {
			glaucomaLight.style.setProperty('--x', e.clientX + 'px');
			glaucomaLight.style.setProperty('--y', e.clientY + 'px');
		});
    } else {
		closeAllLight();
		closeAricle();
    }
}

// AMD click 
AMD.onclick = () => {
	mainElement.style.opacity=100;
    if (activeLight != AMDLight) {
		closeAllLight()
		closeAricle();
        AMDLight.style.display = 'block';
        activeLight = AMDLight;
        animationActive = true;
		activeArticle = AMDArticle;
		AMDArticle.style.display = 'block';
		AMD.style.backgroundColor = '#EDE2FF';

		document.addEventListener('mousemove', e =>{
			console.log('Moving AMDLight');
			AMDLight.style.left = e.clientX-(AMDLight.clientWidth/2.5) + 'px';
			AMDLight.style.top = e.clientY-(AMDLight.clientHeight/2.5) + 'px';
		});

    } else {
		closeAllLight();
		closeAricle();
    }
}

// cataractsLight click 
cataracts.onclick = () => {
	mainElement.style.opacity=100;
    if (activeLight != cataractsLight) {
		closeAllLight()
		closeAricle();
        cataractsLight.style.display = 'block';
        activeLight = cataractsLight;
        animationActive = true;
		activeArticle = cataractsArticle;
		cataractsArticle.style.display = 'block';
		cataracts.style.backgroundColor = '#EDE2FF'
		// cataracts.style.backgroundColor = "#FFFCB7";

		document.addEventListener('mousemove', e =>{
			cataractsLight.style.setProperty('--x', e.clientX + 'px');
			cataractsLight.style.setProperty('--y', e.clientY + 'px');
		});

    } else {
		closeAllLight();
		closeAricle();
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
	mainElement.style.opacity=100;
    if (activeLight != deuteranopiaLight) {
        closeAllLight();
		closeAricle();
        deuteranopiaLight.style.display = 'block';
        activeLight = deuteranopiaLight;
        animationActive = true;
		activeArticle = deuteranopiaArticle;
		deuteranopiaArticle.style.display = 'block';
		deuteranopia.style.backgroundColor = '#EDE2FF'

        // Assuming rgblind exposes a function to apply colorblind simulation
        // Replace 'document.body' with the specific element you want to apply the simulation on
        rgblind.simulate(document.body, 'deuteranopia');
    } else {
        closeAllLight();
		closeAricle();
    }
});

// diabetic click 
diabetic.onclick = () => {
	mainElement.style.opacity=100;
    if (activeLight != diabeticLight) {
		closeAllLight();
		closeAricle();
        diabeticLight.style.display = 'block';
        activeLight = diabeticLight;
        animationActive = true;
		activeArticle = diabeticArticle;
		diabeticArticle.style.display = 'block';
		diabetic.style.backgroundColor = '#EDE2FF'

		document.addEventListener('mousemove', e =>{
			diabeticLight.style.left = e.clientX-(diabeticLight.clientWidth/2.5) + 'px';
			diabeticLight.style.top = e.clientY-(diabeticLight.clientHeight/2.5) + 'px';
		});

    } else {
		closeAllLight();
		closeAricle();
    }
}

// Close All 
function closeAllLight() {
	AMDLight.style.display = 'none';
	glaucomaLight.style.display = 'none';
	cataractsLight.style.display = 'none';
	deuteranopiaLight.style.display = 'none';
	diabeticLight.style.display = 'none';
	activeLight = null;
	animationActive = false;
}

function closeAricle() {
	mainElement.style.opacity=100;
	glaucoma.style.backgroundColor = 'rgb(239, 239, 239)';
	AMD.style.backgroundColor = 'rgb(239, 239, 239)';
	cataracts.style.backgroundColor = 'rgb(239, 239, 239)';
	deuteranopia.style.backgroundColor = 'rgb(239, 239, 239)';
	diabetic.style.backgroundColor = 'rgb(239, 239, 239)';
	glaucomaArticle.style.display ='none';
	AMDArticle.style.display ='none';
	cataractsArticle.style.display ='none';
	deuteranopiaArticle.style.display ='none';
	diabeticArticle.style.display ='none';
}

// Stop click 
stopBtn.onclick = () => {
    closeAllLight();
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
