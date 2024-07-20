var numberStepControls = document.getElementsByClassName('number-step-control')

document.getElementById('score-confirm-btn').addEventListener('click', function () {
    var total = 0;
    for (var i = 0; i < numberStepControls.length; i++) {
        // 从元素input的value属性取出的值一般是字符串,字符串和数字进行+运算,默认会拼接
        // 所以input的value属性取出的值需要进行数字运算时,用parseInt转换成数字类型
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


for (var i = 0; i < numberStepControls.length; i++) {
    numberStepControls[i].addEventListener('input', function (e) {
        e.target.value = numberProcess(e.target.value)
    })
}

var numberStepControlDown = document.getElementsByClassName('number-step-down')
for (var i = 0; i < numberStepControlDown.length; i++) {
    numberStepControlDown[i].addEventListener('click', function (e) {
        var selfNumber = e.target.parentElement.children[1].value
        selfNumber = selfNumber - 1
        e.target.parentElement.children[1].value = numberProcess(selfNumber)
    })
}

var scrollValue = 0
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