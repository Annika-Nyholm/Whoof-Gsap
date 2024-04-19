const goBtn = document.getElementById('goBtn');
const line = document.getElementById('line');
const curve = document.getElementById('curve');
const againBtn = document.getElementById('again');

goBtn.addEventListener('click', handleClick);
againBtn.addEventListener('click', goAgain);

function handleClick() {
    pushLine();
    lineFly();
    rotateW();
}

function rotateW() {
    gsap.to('#www', {
        rotation: 90,
        duration: 1,
    })
}

function wBack() {
    gsap.to('#www', {
        rotation: 0,
        duration: 0.5,
        ease: 'bounce'
    })
}

function pushLine() {

    gsap.fromTo('#dot', {
        duration: 0.5,
        y: -15,
        ease: 'bounce.out'
    },
    {
        y: 0,
        duration: 0.5,
    });
}

function lineFly() {

    gsap.to('#line', {
        delay: 0.1,
        duration: 1.5,
        y: -200,
        x: 200,
        rotation: 180,
        opacity: 0.5,
        onComplete: moveCurve 
    });
}

function hideLine() {
    line.classList.add('hidden');
}

function moveCurve() {
    curve.classList.remove('hidden');
    gsap.fromTo('#curve', {
        y: 200,
        x: 200,
        rotation: 0,
        opacity: 0.5,
        duration:2
    },
    {
        y: 0,
        x: -95,
        rotation: 360,
        opacity: 1,
        duration: 2

    });
}  

function lineBack() {
    gsap.to('#line', {
        duration: 0.2,
        x: 0,
        y: 0,
        opacity: 1,
        rotation: 360
    });
}

function goAgain() {
   line.classList.remove('hidden');
   curve.classList.add('hidden');
   lineBack();
   wBack(); 
}





