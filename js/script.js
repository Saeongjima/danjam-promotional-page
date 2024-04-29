let ranges = [
    { start: 300, end: 1800, elements: '.section2-shortline, .section2-group' },
    { start: 1500, end: 2500, elements: '.section3-group, .section3-down-arrow, .section3-shortline' }
];

let animationExecuted = false; // 애니메이션이 실행되었는지 여부를 추적하는 변수

document.addEventListener('scroll', function() {
    const scrollY = window.scrollY;

    ranges.forEach(range => {
        const { start, end, elements } = range;

        if (scrollY >= start && scrollY <= end) {
            showElements(elements);

            if (!animationExecuted && scrollY >= start && scrollY <= end) {
                console.log('ScrollY:', scrollY);
                restartAnimation(elements);
                animationExecuted = true;
            }
        } else {
            hideElements(elements);
        }
    });
});

function restartAnimation(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.style.animation = 'none';
        void element.offsetWidth;
        element.style.animation = null;
    });
}

function showElements(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.style.display = '';
    });
}

function hideElements(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.style.display = 'none';
    });
}
