document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.sidebar nav ul li a');
    const sections = document.querySelectorAll('section'); // 섹션 선택 시 올바른 선택자

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // 기본 앵커 동작 방지

            // 모든 섹션 숨기기
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // 모든 링크 비활성화
            links.forEach(link => {
                link.classList.remove('active-link');
            });

            // 클릭한 링크 활성화
            const targetSectionId = link.getAttribute('data-section'); // data-section 값 가져오기
            const targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                targetSection.classList.add('active'); // 해당 섹션 보이기
            }

            // 클릭한 링크에도 활성화 스타일 추가
            link.classList.add('active-link');
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // 홈 화면 이미지와 섹션 ID 연결
    const bannerImages = document.querySelectorAll('.banner-image');

    bannerImages.forEach((image) => {
        image.addEventListener('click', () => {
            // attractions 섹션으로 스크롤 이동
            const attractionsSection = document.querySelector('#attractions');
            if (attractionsSection) {
                attractionsSection.scrollIntoView({ behavior: 'smooth' });
            }

            // 모든 섹션 비활성화
            const sections = document.querySelectorAll('.content-section');
            sections.forEach(section => section.classList.remove('active'));

            // attractions 섹션 활성화
            attractionsSection.classList.add('active');

            // 사이드바 링크 활성화 상태 업데이트
            const links = document.querySelectorAll('.sidebar nav ul li a');
            links.forEach(link => link.classList.remove('active-link'));
            const attractionsLink = document.querySelector('a[data-section="attractions"]');
            if (attractionsLink) {
                attractionsLink.classList.add('active-link');
            }
        });
    });
});
