document.querySelector('.move_left').addEventListener('click', function() {
    document.querySelector('.award_content').scrollLeft -= 100; // 向左滚动
});

document.querySelector('.move_right').addEventListener('click', function() {
    document.querySelector('.award_content').scrollLeft += 100; // 向右滚动
});
