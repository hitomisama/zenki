// 提交数据，并做出评价
let numberStepControls = document.getElementsByClassName('number-step-control')

document.getElementById('score-confirm-btn').addEventListener('click', function () {
    let total = 0;
    for (let i = 0; i < numberStepControls.length; i++) {
        total = total + parseInt(numberStepControls[i].value)
    }
    let test = ""
    if (total >= 51) {
        document.getElementById('score').innerHTML = 'A';
    }

    if (total >= 36 && total < 51) {
        document.getElementById('score').innerHTML = 'B';
    }

    if (total >= 0 && total < 36) {
        document.getElementById('score').innerHTML = '人生は点数で測るべきではない。';
    }

    // document.getElementById('score').innerText=total
    console.log('total', total)
    document.getElementById('overlay').style.display = 'flex'
})
// 提交数据，并做出评价


// 控制弹窗开关
document.getElementById('overlay-close-btn').addEventListener('click', function () {
    document.getElementById('overlay').style.display = 'none'
})
// 控制弹窗开关

// 控制input框里的的值为数字，并限制最大最小值，点击左右按钮让框里的数字+1-1
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

let numberStepControlup = document.getElementsByClassName('number-step-up');
for (let i = 0; i < numberStepControlup.length; i++) {
    numberStepControlup[i].addEventListener('click', function (e) {
        let number = parseInt(e.target.parentElement.children[1].value);
        number = number + 1;
        e.target.parentElement.children[1].value = numberProcess(number);
        console.log(number);
    });
}
// 控制input框里的的值为数字，并限制最大最小值，点击左右按钮让框里的数字+1-1

// 点击进行翻页

let scrollValue = 0;
let scrollView = document.getElementById('scroll-view');

document.getElementById('move-left').addEventListener('click', function () {
    scrollValue = (scrollValue + 100) % 500; // 使用取模运算符确保scrollValue在0到300之间
    scrollView.style.transform = 'translateX(-' + scrollValue + '%)';
    if (scrollValue === 0) {
        scrollView.style.transition = 'none'; // 关闭动画
    } else {
        scrollView.style.transition = 'transform 0.3s ease'; // 恢复动画
    }
});

document.getElementById('move-right').addEventListener('click', function () {
    scrollValue = (scrollValue - 100 + 500) % 500; // 使用取模运算符确保scrollValue在0到300之间
    scrollView.style.transform = 'translateX(-' + scrollValue + '%)';
    if (scrollValue === 400) {
        scrollView.style.transition = 'none'; // 关闭动画
    } else {
        scrollView.style.transition = 'transform 0.3s ease'; // 恢复动画
    }    console.log(scrollValue)
})


// 点击进行翻页

document.getElementById('code').value = `
<p>私が好きな食べ物</p>
<ul>
  <li>スイカ</li>
  <li>りんご</li>
  <li>みかん</li>
</ul>
`;
document.getElementById('code').addEventListener('input', function (e) {
    document.getElementById('priview').innerHTML = e.target.value
    console.log(target.value)
})
window.addEventListener('load', function () {
    document.getElementById('priview').innerHTML = document.getElementById('code').value;
});// 页面加载时初始化预览区域的内容



const htmlBtn = document.getElementById('htmlBtn');
const cssBtn = document.getElementById('cssBtn');
const htmlContent = document.getElementById('htmlContent');
const cssContent = document.getElementById('cssContent');