let numberStepControls = document.getElementsByClassName('number-step-control')

document.getElementById('score-confirm-btn').addEventListener('click', function () {
    let total = 0;
    for (let i = 0; i < numberStepControls.length; i++) {
        total = total + parseInt(numberStepControls[i].value)
    }
    console.log('total', total)
    document.getElementById('overlay').style.display = 'flex'
})

document.getElementById('overlay-close-btn').addEventListener('click', function () {
    document.getElementById('overlay').style.display = 'none'
})

function numberProcess(value) {
    if (/\D+/.test(value)) {
        return 0
    }

    if (value > 10) {
        return 10
    } else if (value < 0) {
        return 0
    } else {
        return value
    }
}


for (let i = 0; i < numberStepControls.length; i++) {
    numberStepControls[i].addEventListener('input', function (e) {
        e.target.value = numberProcess(e.target.value)
    })
}

let numberStepControlDown = document.getElementsByClassName('number-step-down')
for (let i = 0; i < numberStepControlDown.length; i++) {
    numberStepControlDown[i].addEventListener('click', function (e) {
        let selfNumber = parseInt(e.target.parentElement.children[1].value);
        selfNumber = selfNumber - 1
        e.target.parentElement.children[1].value = numberProcess(selfNumber)
    })
}

// let numberStepControlup = document.getElementsByClassName('number-step-up')
// for (let i = 0; i < numberStepControlup.length; i++) {
//     numberStepControlup[i].addEventListener('click', function (e) {
//         let number = e.target.parentElement.children[1].value
//         number = number + 1
//         e.target.parentElement.children[1].value = numberProcess(number)
//         console.log(number)

//     })
// }
let numberStepControlup = document.getElementsByClassName('number-step-up');
for (let i = 0; i < numberStepControlup.length; i++) {
    numberStepControlup[i].addEventListener('click', function (e) {
        let number = parseInt(e.target.parentElement.children[1].value);
        number = number + 1;
        e.target.parentElement.children[1].value = numberProcess(number);
        console.log(number);
    });
}


let scrollValue = 0
document.getElementById('move-left').addEventListener('click', function () {
    scrollValue = scrollValue + 100
    if (scrollValue === 400) {
        scrollValue = 0
    }
    document.getElementById('scroll-view').style.transform = 'translateX(-' + scrollValue + '%)'
})


document.getElementById('code').value = '<p>这是一段文本<p>'
document.getElementById('code').addEventListener('input', function (e) {
    document.getElementById('priview').innerHTML = e.target.value
})