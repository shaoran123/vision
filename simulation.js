console.log("hi");
//Credit to Sabrina for helping with js 🫶//

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
const achromatopsiaLight = document.getElementById('achromatopsiaLight');
const diabeticLight = document.getElementById('diabeticLight');
const emojis = ['🥕', '🕶️', '🥼', '👓', '🚭', '🏞️', '🥬', '🐟','👁️'];
const colors = ['#EDE2FF', '#F8E9B5', '#FFDECC', '#BBECC3', '#A5F3F3'];
const button = document.getElementsByClassName('button');
const AMDArticle = document.getElementById('AMDArticle');
const cataractsArticle = document.getElementById('cataractsArticle');
const achromatopsiaArticle = document.getElementById('achromatopsiaArticle');
const glaucomaArticle = document.getElementById('glaucomaArticle');
const diabeticArticle = document.getElementById('diabeticArticle');
const mainElement = document.querySelector('main');
const AMDbtn = document.getElementById('AMDbtn');
const stopp = document.getElementById('stopp');
const preventBtn = document.getElementById('prevent');
const closeBtn = document.getElementById('closearticle');
const overlay = document.getElementById('overlay');
const canvas = document.querySelector("canvas-target");
const prevent = document.querySelector("confetti-button")
const jsConfetti = new JSConfetti({canvas});


//mouse position

// Glaucoma click 
glaucoma.onclick = () => {
    if (activeLight != glaucomaLight) {
		closeAllLight()
		closeAricle();
		mainElement.style.opacity=100;
        glaucomaLight.style.display = 'block';
        activeLight = glaucomaLight;
		activeArticle = glaucomaArticle;
		glaucomaArticle.style.display = 'block';
        animationActive = true;
		glaucoma.style.backgroundColor = '#EDE2FF';
		stopBtn.src = "https://shaoran123.github.io/vision/assets/Intersect-outline.png";
		stopBtn.style.transform = "scale(1.4)";
		stopp.style.opacity = 100;

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
    if (activeLight != AMDLight) {
		closeAllLight()
		closeAricle();
		mainElement.style.opacity=100;
        AMDLight.style.display = 'block';
        activeLight = AMDLight;
        animationActive = true;
		activeArticle = AMDArticle;
		AMDArticle.style.display = 'block';
		AMD.style.backgroundColor = '#EDE2FF';
		stopBtn.src = "https://shaoran123.github.io/vision/assets/Intersect-outline.png";
		stopBtn.style.transform = "scale(1.4)";
		stopp.style.opacity = 100;

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
    if (activeLight != cataractsLight) {
		closeAllLight()
		closeAricle();
		mainElement.style.opacity=100;
        cataractsLight.style.display = 'block';
        activeLight = cataractsLight;
        animationActive = true;
		activeArticle = cataractsArticle;
		cataractsArticle.style.display = 'block';
		cataracts.style.backgroundColor = '#EDE2FF';
		// cataracts.style.backgroundColor = "#FFFCB7";
		stopBtn.style.transform = "scale(1.4)";
		stopBtn.src = "https://shaoran123.github.io/vision/assets/Intersect-outline.png";
		stopp.style.opacity = 100;

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

achromatopsia.onclick = () => {
    if (activeLight != achromatopsiaLight) {
		closeAllLight()
		closeAricle();
		mainElement.style.opacity=100;
        achromatopsiaLight.style.display = 'block';
        activeLight = achromatopsiaLight;
        animationActive = true;
		activeArticle = achromatopsiaArticle;
		achromatopsiaArticle.style.display = 'block';
		achromatopsia.style.backgroundColor = '#EDE2FF';	
		stopBtn.style.transform = "scale(1.4)";
		stopBtn.src = "https://shaoran123.github.io/vision/assets/Intersect-outline.png";
		stopp.style.opacity = 100;
		// achromatopsia.style.backgroundColor = "#FFFCB7";

		document.addEventListener('mousemove', e =>{
			achromatopsiaLight.style.setProperty('--x', e.clientX + 'px');
			achromatopsiaLight.style.setProperty('--y', e.clientY + 'px');
		});

    } else {
		closeAllLight();
		closeAricle();
		// achromatopsia.style.backgroundColor = 'rgb(239, 239, 239)';
    }
}

// diabetic click 
diabetic.onclick = () => {

    if (activeLight != diabeticLight) {
		closeAllLight();
		closeAricle();
		mainElement.style.opacity=100;
        diabeticLight.style.display = 'block';
        activeLight = diabeticLight;
        animationActive = true;
		activeArticle = diabeticArticle;
		diabeticArticle.style.display = 'block';
		diabetic.style.backgroundColor = '#EDE2FF'
		stopBtn.style.transform = "scale(1.4)";
		stopBtn.src = "https://shaoran123.github.io/vision/assets/Intersect-outline.png";
		stopp.style.opacity = 100;

		document.addEventListener('mousemove', e =>{
			diabeticLight.style.left = e.clientX-(diabeticLight.clientWidth/2.5) + 'px';
			diabeticLight.style.top = e.clientY-(diabeticLight.clientHeight/2.5) + 'px';
		});

    } else {
		closeAllLight();
		closeAricle();
    }
}

// Close All light
function closeAllLight() {
	AMDLight.style.display = 'none';
	glaucomaLight.style.display = 'none';
	cataractsLight.style.display = 'none';
	achromatopsiaLight.style.display = 'none';
	diabeticLight.style.display = 'none';
	activeLight = null;
	animationActive = false;
	stopBtn.style.transform = "scale(1.0)";
	stopp.style.opacity = 0;
	stopBtn.src = "/assets/Intersect.png";
}

// Close articles 

function closeAricle() {
	mainElement.style.opacity=0;
	glaucoma.style.backgroundColor = 'rgb(239, 239, 239)';
	AMD.style.backgroundColor = 'rgb(239, 239, 239)';
	cataracts.style.backgroundColor = 'rgb(239, 239, 239)';
	achromatopsia.style.backgroundColor = 'rgb(239, 239, 239)';
	diabetic.style.backgroundColor = 'rgb(239, 239, 239)';
	glaucomaArticle.style.display ='none';
	AMDArticle.style.display ='none';
	cataractsArticle.style.display ='none';
	achromatopsiaArticle.style.display ='none';
	diabeticArticle.style.display ='none';
	stopBtn.style.transform = "scale(1.0)";
	stopBtn.src = "/assets/Intersect.png";
}

// Stop click 
stopBtn.onclick = () => {
    closeAllLight();
	stopBtn.style.transform = "scale(1.0)";
}

//emoji & circle shuffle
function shuffleEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    document.getElementById('emoji').textContent = emojis[randomIndex];
}

function shuffleCircle(){
	const randomIndex = Math.floor(Math.random() * colors.length);
	document.getElementsByClassName('circle')[0].style.backgroundColor = colors[randomIndex];
}

// Shuffle when refresh
document.addEventListener('DOMContentLoaded', function() {
    shuffleEmoji();
    shuffleCircle();
});

// Shuffle when clicked
document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', function() {
        shuffleEmoji();
        shuffleCircle();
    });
});



//Click to original article

AMDbtn.onclick  = () => {
	AMDbtn.style.backgroundColor = '#EDE2FF'
	// window.location.href = "https://www.aao.org/eye-health/diseases/amd-macular-degeneration";
}

//Click to open article about prevent

function shuffleColors(){
	const randomIndex = Math.floor(Math.random() * colors.length);
	document.getElementById('overlay').style.backgroundColor = colors[randomIndex];
}

preventBtn.onclick = () =>{
	preventarticle.style.display = 'block';
	overlay.style.display = 'block';
	overlay.style.opacity = '0.7'
	shuffleColors();
	jsConfetti.addConfetti({
		emojis:['🥕', '🕶️', '🥼', '👓', '🚭', '🏞️', '🥬', '🐟','👁️'],
		emojiSize: 100,
		confettiNumber: 100,
		// origin: { x: 0.5, y: -1 }
	})

}



closeBtn.onclick = () =>{
	preventarticle.style.display = 'none';
	overlay.style.display = 'none';
}


//Credit to Sabrina for helping with debug 🫶//






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
