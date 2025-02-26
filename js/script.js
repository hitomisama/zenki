// 提交数据，并做出评价
let numberStepControls = document.getElementsByClassName('number-step-control'); // 获取所有评分输入框

document.getElementById('score-confirm-btn').addEventListener('click', function () {
    let total = 0; // 总评分初始化为0
    for (let i = 0; i < numberStepControls.length; i++) {
        total += parseInt(numberStepControls[i].value) || 0; // 累加每个评分框的值，防止 NaN
    }

    // 根据评分总和判断评价
    if (total >= 51) {
        document.getElementById('score').innerHTML = 'A';
    } else if (total >= 36 && total < 51) {
        document.getElementById('score').innerHTML = 'B';
    } else if (total >= 0 && total < 36) {
        document.getElementById('score').innerHTML = '人生は点数で測るべきではない。';
    }

    console.log('total', total); // 打印总评分
    document.getElementById('overlay').style.display = 'flex'; // 显示弹窗
});

// 控制弹窗开关
document.getElementById('overlay-close-btn').addEventListener('click', function () {
    document.getElementById('overlay').style.display = 'none'; // 点击关闭按钮隐藏弹窗
});

// 控制 input 框里的值为数字，并限制最大最小值，点击左右按钮让框里的数字+1或-1
function numberProcess(value) {
    if (/\D+/.test(value)) { // 如果输入非数字，返回0
        return 0;
    }
    if (value > 10) { // 如果值大于10，返回10
        return 10;
    } else if (value < 0) { // 如果值小于0，返回0
        return 0;
    } else {
        return value; // 返回有效值
    }
}

// 限制手动输入的值
for (let i = 0; i < numberStepControls.length; i++) {
    numberStepControls[i].addEventListener('input', function (e) {
        e.target.value = numberProcess(e.target.value); // 限制输入框值
    });
}

// 点击“减”按钮
let numberStepControlDown = document.getElementsByClassName('number-step-down');
for (let i = 0; i < numberStepControlDown.length; i++) {
    numberStepControlDown[i].addEventListener('click', function (e) {
        let selfNumber = parseInt(e.target.parentElement.children[1].value); // 获取当前值
        selfNumber -= 1; // 值减1
        e.target.parentElement.children[1].value = numberProcess(selfNumber); // 更新值
    });
}

// 点击“加”按钮
let numberStepControlUp = document.getElementsByClassName('number-step-up');
for (let i = 0; i < numberStepControlUp.length; i++) {
    numberStepControlUp[i].addEventListener('click', function (e) {
        let number = parseInt(e.target.parentElement.children[1].value); // 获取当前值
        number += 1; // 值加1
        e.target.parentElement.children[1].value = numberProcess(number); // 更新值
        console.log(number); // 打印更新后的值
    });
}

// 点击进行翻页

document.addEventListener('DOMContentLoaded', () => {
    let scrollValue = 0; // 初始化滚动值
    const scrollView = document.getElementById('scroll-view'); // 滚动视图
    let isActiveSection = false; // 标记是否在目标区域

    if (!scrollView) {
        console.error('scrollView 未找到，请检查 HTML 中的 #scroll-view 是否存在');
        return;
    }

    // 键盘翻页操作
    const handleKeyNavigation = (event) => {
        if (isActiveSection) { // 判断是否激活
            const keyAction = {
                'ArrowLeft': () => { // 左箭头向左滚动
                    scrollValue = (scrollValue + 100) % 500;
                    scrollView.style.transform = `translateX(-${scrollValue}%)`;
                    scrollView.style.transition = scrollValue === 0 ? 'none' : 'transform 0.3s ease';
                },
                'ArrowRight': () => { // 右箭头向右滚动
                    scrollValue = (scrollValue - 100 + 500) % 500;
                    scrollView.style.transform = `translateX(-${scrollValue}%)`;
                    scrollView.style.transition = scrollValue === 400 ? 'none' : 'transform 0.3s ease';
                }
            };

            const action = keyAction[event.key];
            if (action) {
                action(); // 执行操作
                console.log(`执行按键操作: ${event.key}, 当前 scrollValue: ${scrollValue}`);
            }

            if (keyAction[event.key]) {
                event.preventDefault(); // 阻止默认行为
                keyAction[event.key](); // 执行自定义逻辑
                console.log(`关闭默认左右滑动`);
            }
        }
    };

    // 添加键盘事件监听
    document.addEventListener('keydown', handleKeyNavigation);

    // 使用 IntersectionObserver 检测用户是否位于特定部分
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            isActiveSection = entry.isIntersecting; // 判断目标部分是否在视口中
            console.log(`目标部分 ${entry.target.className} 可见状态: ${isActiveSection}`);
        });
    }, {
        root: null, // 视口为根
        threshold: 0.1 // 目标部分至少有 10% 进入视口时触发
    });

    // 设置观察目标部分
    const targetSection = document.querySelector('.share'); // 使用 .share 作为目标部分
    if (targetSection) {
        observer.observe(targetSection); // 开始观察
    } else {
        console.error('.share 部分未找到，请检查 HTML 中的类名是否正确');
    }

    // 添加左右按钮的点击事件
    document.getElementById('move-left').addEventListener('click', () => {
        scrollValue = (scrollValue + 100) % 500;
        scrollView.style.transform = `translateX(-${scrollValue}%)`;
        scrollView.style.transition = scrollValue === 0 ? 'none' : 'transform 0.3s ease';
    });

    document.getElementById('move-right').addEventListener('click', () => {
        scrollValue = (scrollValue - 100 + 500) % 500;
        scrollView.style.transform = `translateX(-${scrollValue}%)`;
        scrollView.style.transition = scrollValue === 400 ? 'none' : 'transform 0.3s ease';
    });
});



// 页面加载时初始化预览区域的内容
const codeInput = document.getElementById('code');
if (codeInput) {
    codeInput.value = `
<p>私が好きな食べ物</p>
<ul>
  <li>スイカ</li>
  <li>りんご</li>
  <li>みかん</li>
</ul>
`;
    document.getElementById('priview').innerHTML = codeInput.value; // 更新预览

    // 实时更新预览
    codeInput.addEventListener('input', function (e) {
        document.getElementById('priview').innerHTML = e.target.value; // 更新预览区域内容
        console.log(e.target.value); // 打印实时输入内容
    });
}