document.addEventListener('scroll', function() {
    const scrollY = window.scrollY;

    showElements('.section2-shortline, .section2-group');
    
    if (scrollY >= 600 && scrollY <= 1800) {
        console.log('ScrollY:', scrollY);
        restartAnimation('.section2-shortline, .section2-group');
    }
    

    if (scrollY < 100 || scrollY > 2000) {
        hideElements('.section2-shortline, .section2-group');
    }

});

// 애니메이션을 다시 시작하는 함수
function restartAnimation(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.style.animation = 'none'; // 현재 애니메이션을 중지
        void element.offsetWidth; // 리플로우 트리거
        element.style.animation = null; // 애니메이션을 다시 시작
    });
}

// 요소를 표시하는 함수
function showElements(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.style.display = ''; // 기본값으로 설정하여 요소를 표시
    });
}

// 요소를 숨기는 함수
function hideElements(selector) {
const elements = document.querySelectorAll(selector);
elements.forEach(element => {
    element.style.display = 'none';
});
}
