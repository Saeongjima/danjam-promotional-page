let inRange = false; // 스크롤이 범위 내에 있는지 여부를 추적하는 변수

document.addEventListener('scroll', function() {
    const scrollY = window.scrollY;

    // 범위 안에 있을 때만 애니메이션 실행
    if (scrollY >= 300 && scrollY <= 1800) {
        inRange = true; // 스크롤이 범위 내에 있음을 표시
        showElements('.section2-shortline, .section2-group');

        // 애니메이션이 실행되지 않은 경우에만 애니메이션 실행
        if (!animationExecuted) {
            console.log('ScrollY:', scrollY);
            restartAnimation('.section2-shortline, .section2-group');
            animationExecuted = true; // 애니메이션이 실행되었음을 표시
        }
    } else {
        // 범위를 벗어나면 애니메이션 실행 여부를 재설정
        inRange = false;
        animationExecuted = false;
        hideElements('.section2-shortline, .section2-group');
    }

    // 범위를 벗어나서 다시 범위 내에 들어왔을 때 애니메이션을 다시 실행
    if (!animationExecuted && inRange) {
        console.log('ScrollY:', scrollY);
        restartAnimation('.section2-shortline, .section2-group');
        animationExecuted = true; // 애니메이션이 실행되었음을 표시
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
