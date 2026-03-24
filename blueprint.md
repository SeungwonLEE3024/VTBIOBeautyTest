# **VT BIO Intro Project Blueprint**

## **Project Overview**
VT BIO의 혁신적인 조절T세포(Treg) 치료제 기술을 소개하는 모던하고 전문적인 웹사이트입니다.

## **Features & Design**

### **Design Strategy**
*   **Aesthetics:** 신뢰감을 주는 Deep Blue (`oklch(45.2% 0.16 250.2)`)와 혁신을 상징하는 Medical Teal (`oklch(65% 0.15 190.1)`) 컬러 팔레트 사용.
*   **Modern CSS:** OKLCH 컬러 공간, Container Queries, Cascade Layers (`@layer`) 활용.
*   **Interactive UI:** Shadow DOM 기반의 Web Components로 캡슐화된 컴포넌트 개발.
*   **Dark Mode Support:** 사용자의 기본 설정 및 수동 토글을 통한 다크/화이트 모드 지원. `localStorage`를 통한 테마 상태 유지.

### **Core Components**
*   **`main-header`**: 상단 고정 네비게이션 및 테마 토글 버튼.
*   **`hero-section`**: 강렬한 비주얼과 메인 슬로건.
*   **`pipeline-section`**: R&D 진행 상황을 보여주는 카드형 레이아웃.
*   **`research-section`**: 기술적 우위와 연구 성과 요약.
*   **`dinner-recommendation`**: 건강한 저녁 메뉴를 무작위로 추천해주는 대화형 섹션.
*   **`video-section`**: 유튜브 API 연동 홍보 영상 섹션.
*   **`main-footer`**: 기업 정보 및 연락처.

## **Implementation Details**

### **Theme System**
*   `style.css`의 `:root`와 `[data-theme="dark"]`를 통해 전역 CSS 변수 관리.
*   `main.js`의 `sharedStyles`에서 전역 변수를 참조하여 Web Components의 Shadow DOM 내 스타일 동기화.
*   `localStorage`를 사용하여 사용자 테마 선호도 저장.

### **Tech Stack**
*   **HTML5 / CSS3 (Baseline)**
*   **Vanilla JavaScript (ES Modules, Web Components)**
*   **Google Fonts (Noto Sans KR)**

## **Completed Tasks**
*   [x] `main.js`에 `DinnerRecommendation` 컴포넌트 구현.
*   [x] `index.html`에 추천 섹션 배치.
*   [x] 다크모드/화이트모드 호환성 검토 및 적용.
*   [x] Git을 통한 변경사항 커밋 및 푸시.
*   [x] `main.js`에 `PartnershipSection` Web Component 구현.
*   [x] Formspree 연동을 위한 폼 구조 및 유효성 검사 추가.
*   [x] 기존 디자인 시스템(OKLCH, Dark Mode)을 따르는 스타일링.
*   [x] `index.html`에 `<partnership-section>` 배치.
*   [x] 네비게이션에 '제휴 문의' 링크 추가.
