let ranges = [
    { start: 1000, end: 3000, elements: '.section2-shortline, .section2-group' },
    { start: 2000, end: 4000, elements: '.section3-group, .section3-down-arrow, .section3-shortline' },
    { start: 3000, end: 5000, elements: '.section4-shortline, .section4-group1, .section4-group2, .section4-group3'},
    { start: 4000, end: 6000, elements: '.single-image, .section5-table1, .section5-table2, .section5-table3, .section5-table4, .section5-table5, .section5-table6, .section5-table7, .section5-table8, .section5-table9, .section5-table10'}
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
