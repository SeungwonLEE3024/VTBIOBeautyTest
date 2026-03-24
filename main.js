
const sharedStyles = `
  :host {
    display: block;
    --primary: var(--primary);
    --accent: var(--accent);
    --text-bold: var(--text-bold);
    --text-regular: var(--text-regular);
    --bg-surface: var(--bg-surface);
    --shadow-md: var(--shadow-md);
    --shadow-lg: var(--shadow-lg);
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  .animate-in {
    animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

class MainHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    this.render();
  }

  render() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const themeIcon = currentTheme === 'dark' ? '☀️' : '🌙';
    
    this.shadowRoot.innerHTML = `
      <style>
        ${sharedStyles}
        header {
          background: var(--header-bg);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          position: sticky;
          top: 0;
          z-index: 1000;
          border-bottom: 1px solid oklch(0% 0 0 / 5%);
          transition: background 0.3s ease;
        }
        header .container {
          height: 80px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 900;
          color: var(--primary);
          letter-spacing: -0.05em;
        }
        .nav-wrapper {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        nav {
          display: flex;
          gap: 2rem;
        }
        nav a {
          text-decoration: none;
          color: var(--text-bold);
          font-weight: 600;
          font-size: 0.95rem;
          transition: color 0.3s ease;
        }
        nav a:hover {
          color: var(--accent);
        }
        .theme-toggle {
          background: var(--bg-surface);
          border: 1px solid var(--primary);
          color: var(--text-bold);
          padding: 0.5rem;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          box-shadow: var(--shadow-sm);
        }
        .theme-toggle:hover {
          transform: scale(1.1);
          box-shadow: var(--shadow-md);
        }
      </style>
      <header>
        <div class="container">
          <div class="logo">VT BIO</div>
          <div class="nav-wrapper">
            <nav>
              <a href="#pipeline">파이프라인</a>
              <a href="#research">연구 및 기술</a>
              <a href="#video">홍보 영상</a>
              <a href="#partnership">제휴 문의</a>
            </nav>
            <button class="theme-toggle" id="theme-btn">
              ${themeIcon}
            </button>
          </div>
        </div>
      </header>
    `;

    this.shadowRoot.getElementById('theme-btn').addEventListener('click', () => this.toggleTheme());
  }
}

class HeroSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        ${sharedStyles}
        .hero {
          position: relative;
          height: 80vh;
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: oklch(45.2% 0.16 250.2); /* Keep dark blue for hero */
        }
        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.4;
          filter: grayscale(100%) brightness(0.7);
        }
        .content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 900px;
          padding: 0 2rem;
          color: white;
        }
        h1 {
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
          color: white;
        }
        p {
          font-size: clamp(1.1rem, 3vw, 1.5rem);
          opacity: 0.9;
          font-weight: 300;
          max-width: 700px;
          margin: 0 auto;
        }
        .badge {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background: var(--accent);
          color: oklch(45.2% 0.16 250.2);
          border-radius: 100px;
          font-weight: 800;
          font-size: 0.8rem;
          text-transform: uppercase;
          margin-bottom: 2rem;
          letter-spacing: 0.1em;
        }
      </style>
      <section class="hero">
        <img class="hero-bg" src="https://images.unsplash.com/photo-1579154273821-ad82e189f666?q=80&w=2070&auto=format&fit=crop" alt="Biotech Lab">
        <div class="content animate-in">
          <div class="badge">Innovation in Cell Therapy</div>
          <h1>혁신적인 조절T세포 기술로<br>치매 치료의 새 시대를 엽니다.</h1>
          <p>VT BIO는 환자 자신의 면역 세포를 활용하여 알츠하이머의 근본 원인을 해결하는 차세대 세포 치료제를 개발합니다.</p>
        </div>
      </section>
    `;
  }
}

class PipelineSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        ${sharedStyles}
        .section {
          padding: 4rem 0;
        }
        h2 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          text-align: center;
          position: relative;
        }
        h2::after {
          content: '';
          display: block;
          width: 50px;
          height: 4px;
          background: var(--accent);
          margin: 1rem auto;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        .card {
          background: var(--bg-surface);
          padding: 3rem;
          border-radius: 24px;
          box-shadow: var(--shadow-md);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid oklch(0% 0 0 / 10%);
          position: relative;
          overflow: hidden;
        }
        .card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-lg);
          border-color: var(--accent);
        }
        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: var(--primary);
        }
        .status {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--accent);
          text-transform: uppercase;
          margin-bottom: 1rem;
          display: block;
        }
        h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--primary);
        }
        p {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text-regular);
        }
      </style>
      <section id="pipeline" class="section">
        <div class="container animate-in">
          <h2>R&D 파이프라인</h2>
          <div class="grid">
            <div class="card">
              <span class="status">Phase 1/2a (USA)</span>
              <h3>VT301: 조절T세포 치료제</h3>
              <p>환자 본인의 혈액에서 분리한 조절T세포를 배양하여 뇌의 신경 염증을 억제하고 면역 균형을 회복시키는 알츠하이머병 근본 치료제입니다.</p>
            </div>
            <div class="card">
              <span class="status">Pre-clinical</span>
              <h3>VT012: 천연물 기반 치매 치료</h3>
              <p>전통 약재인 육미지황탕가감방(PM012)을 현대 과학으로 재해석하여 인지 기능 개선 및 신경 재생 효과를 입증한 천연물 유래 신약 후보물질입니다.</p>
            </div>
            <div class="card">
              <span class="status">Research</span>
              <h3>면역 조절 플랫폼 기술</h3>
              <p>조절T세포의 체내 이동 및 활성화를 최적화하는 독자적인 플랫폼 기술을 통해 다양한 퇴행성 뇌질환으로의 적응증 확장을 연구합니다.</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

class ResearchSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        ${sharedStyles}
        .section {
          background: oklch(20% 0.05 250);
          color: white;
          padding: 6rem 0;
          margin: 4rem 0;
        }
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        @media (max-width: 768px) {
          .grid { grid-template-columns: 1fr; }
        }
        h2 {
          color: white;
          font-size: 2.5rem;
          margin-bottom: 2rem;
        }
        .feature {
          margin-bottom: 2rem;
        }
        .feature h3 {
          color: var(--accent);
          margin-bottom: 0.5rem;
        }
        .feature p {
          opacity: 0.8;
        }
      </style>
      <section id="research" class="section">
        <div class="container animate-in">
          <div class="grid">
            <div>
              <h2>글로벌 임상 및 기술 경쟁력</h2>
              <p style="margin-bottom: 2rem; opacity: 0.9;">VT BIO는 국내외 최고의 연구진과 협력하여 세포 치료제의 한계를 극복하고 있습니다.</p>
              <div class="feature">
                <h3>미국 FDA 임상 진행</h3>
                <p>국내 바이오 벤처 최초로 조절T세포 기반 치매 치료제의 미국 FDA 임상 1/2a상 승인을 획득하여 글로벌 경쟁력을 입증했습니다.</p>
              </div>
              <div class="feature">
                <h3>독자적 배양 기술</h3>
                <p>세포의 활성도를 유지하면서 대량 배양할 수 있는 독자적인 공정 기술을 보유하여 상용화 가능성을 높였습니다.</p>
              </div>
            </div>
            <div style="background: rgba(255,255,255,0.05); padding: 3rem; border-radius: 24px; border: 1px solid rgba(255,255,255,0.1);">
              <h3 style="color: white; margin-bottom: 1.5rem;">연구 성과</h3>
              <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: 1rem; display: flex; gap: 1rem;">
                  <span style="color: var(--accent);">✔</span>
                  <span>Nature Communications 등 세계적 학술지 논문 게재</span>
                </li>
                <li style="margin-bottom: 1rem; display: flex; gap: 1rem;">
                  <span style="color: var(--accent);">✔</span>
                  <span>조절T세포 동결 및 해동 원천 기술 특허 확보</span>
                </li>
                <li style="margin-bottom: 1rem; display: flex; gap: 1rem;">
                  <span style="color: var(--accent);">✔</span>
                  <span>보건복지부 국가 R&D 과제 수행 기관 선정</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

class VideoSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        ${sharedStyles}
        .section {
          padding: 4rem 0;
          text-align: center;
        }
        h2 {
          margin-bottom: 3rem;
        }
        .video-wrapper {
          max-width: 1000px;
          margin: 0 auto;
          aspect-ratio: 16/9;
          background: #000;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }
        iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
      </style>
      <section id="video" class="section">
        <div class="container animate-in">
          <h2>세포 치료의 원리 이해</h2>
          <div class="video-wrapper">
            <iframe 
              src="https://www.youtube.com/embed/u3DJyctwSr0" 
              title="VT BIO Technology" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </section>
    `;
  }
}

class MainFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        ${sharedStyles}
        footer {
          padding: 6rem 2rem;
          background: oklch(10% 0 0);
          color: rgba(255,255,255,0.6);
          text-align: center;
        }
        .logo {
          color: white;
          font-size: 1.5rem;
          font-weight: 900;
          margin-bottom: 2rem;
          display: block;
        }
        p {
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }
      </style>
      <footer>
        <span class="logo">VT BIO</span>
        <p>서울특별시 강남구 삼성로 76길 23, 4층 (대치동, 비티빌딩)</p>
        <p>Email: contact@vtbio.co.kr | Tel: 02-1234-5678</p>
        <p style="margin-top: 3rem;">&copy; 2024 VT BIO. All rights reserved.</p>
      </footer>
    `;
  }
}

// Theme Initialization
const initTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
};

initTheme();

class DinnerRecommendation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.menus = [
      { 
        name: '비빔밥', 
        desc: '다양한 나물로 영양 균형을 맞춘 건강식',
        img: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=800&auto=format&fit=crop'
      },
      { 
        name: '연어 스테이크', 
        desc: '오메가-3가 풍부한 고단백 식단',
        img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop'
      },
      { 
        name: '된장찌개 정식', 
        desc: '발효 식품으로 장 건강까지 챙기는 전통 한식',
        img: 'https://images.unsplash.com/photo-1628203520023-e1898740f917?q=80&w=800&auto=format&fit=crop'
      },
      { 
        name: '닭가슴살 샐러드', 
        desc: '가볍지만 든든한 저칼로리 고단백 식사',
        img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop'
      },
      { 
        name: '두부 웰빙 볼', 
        desc: '식물성 단백질이 풍부한 담백하고 건강한 메뉴',
        img: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=800&auto=format&fit=crop'
      },
      { 
        name: '전복 보양죽', 
        desc: '지친 몸에 활력을 주는 보양식',
        img: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?q=80&w=800&auto=format&fit=crop'
      }
    ];
  }

  connectedCallback() {
    this.render();
  }

  getRecommendation() {
    const randomIndex = Math.floor(Math.random() * this.menus.length);
    const resultDiv = this.shadowRoot.getElementById('result');
    const menu = this.menus[randomIndex];
    
    resultDiv.style.opacity = '0';
    resultDiv.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
      resultDiv.innerHTML = `
        <img class="menu-img" src="${menu.img}" alt="${menu.name}">
        <div class="menu-name">${menu.name}</div>
        <div class="menu-desc">${menu.desc}</div>
      `;
      resultDiv.style.opacity = '1';
      resultDiv.style.transform = 'translateY(0)';
    }, 300);
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        ${sharedStyles}
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 oklch(65% 0.15 190.1 / 40%); }
          70% { box-shadow: 0 0 0 20px oklch(65% 0.15 190.1 / 0%); }
          100% { box-shadow: 0 0 0 0 oklch(65% 0.15 190.1 / 0%); }
        }

        .section {
          padding: 5rem 2rem;
          background: linear-gradient(135deg, var(--bg-surface), var(--bg-main));
          border-radius: 40px;
          margin: 6rem auto;
          max-width: 900px;
          text-align: center;
          box-shadow: var(--shadow-lg);
          border: 2px solid var(--accent);
          position: relative;
          overflow: hidden;
        }
        
        .section::before {
          content: 'HEALTH';
          position: absolute;
          top: -20px;
          right: -10px;
          font-size: 8rem;
          font-weight: 900;
          opacity: 0.03;
          pointer-events: none;
        }

        h2 { 
          margin-bottom: 1rem;
          font-size: 2.2rem;
          color: var(--primary);
        }

        .intro-text { 
          margin-bottom: 3rem; 
          color: var(--text-regular);
          font-size: 1.1rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .recommend-box {
          min-height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom: 3rem;
          background: oklch(0% 0 0 / 3%);
          border-radius: 32px;
          border: 1px dashed var(--accent);
          padding: 2rem;
        }

        #result {
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .menu-img {
          width: 100%;
          max-width: 450px;
          aspect-ratio: 16/10;
          object-fit: cover;
          border-radius: 20px;
          margin-bottom: 1.5rem;
          box-shadow: var(--shadow-lg);
          border: 4px solid white;
        }

        .menu-name {
          font-size: 2.5rem;
          font-weight: 900;
          color: var(--primary);
          margin-bottom: 0.8rem;
          text-shadow: 0 2px 10px oklch(0% 0 0 / 10%);
        }

        .menu-desc {
          font-size: 1.2rem;
          color: var(--text-bold);
          font-weight: 500;
        }

        .btn-wrapper {
          display: flex;
          justify-content: center;
        }

        .btn {
          background: var(--accent);
          color: var(--primary);
          border: none;
          padding: 1.2rem 3.5rem;
          font-size: 1.3rem;
          font-weight: 800;
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 10px 20px -5px oklch(65% 0.15 190.1 / 30%);
          animation: pulse 2s infinite;
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .btn:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 20px 30px -10px oklch(65% 0.15 190.1 / 50%);
          background: var(--primary);
          color: white;
          animation: none;
        }

        .icon { font-size: 1.5rem; }

        @media (max-width: 600px) {
          .menu-name { font-size: 1.8rem; }
          .menu-img { max-width: 100%; }
          .recommend-box { min-height: 350px; }
        }
      </style>
      <section class="section container animate-in">
        <h2>🍽️ 오늘의 건강한 저녁 추천</h2>
        <p class="intro-text">VT BIO가 제안하는 프리미엄 식단으로 균형 잡힌 하루를 마무리하세요.</p>
        <div class="recommend-box">
          <div id="result">
            <div style="font-size: 4rem; margin-bottom: 1rem;">🥗</div>
            <p style="font-size: 1.1rem; opacity: 0.7;">버튼을 클릭하면 건강한 식단이 나타납니다.</p>
          </div>
        </div>
        <div class="btn-wrapper">
          <button class="btn" id="recommend-btn">
            <span class="icon">✨</span>
            추천 식단 보기
          </button>
        </div>
      </section>
    `;

    this.shadowRoot.getElementById('recommend-btn').addEventListener('click', () => this.getRecommendation());
  }
}

class PartnershipSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        ${sharedStyles}
        .section {
          padding: 8rem 2rem;
          background: var(--bg-surface);
          border-top: 1px solid oklch(0% 0 0 / 5%);
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
        }
        h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: var(--primary);
        }
        p.subtitle {
          text-align: center;
          color: var(--text-regular);
          margin-bottom: 4rem;
          font-size: 1.1rem;
        }
        form {
          display: grid;
          gap: 1.5rem;
          background: var(--bg-main);
          padding: 3rem;
          border-radius: 24px;
          box-shadow: var(--shadow-lg);
          border: 1px solid oklch(0% 0 0 / 5%);
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        label {
          font-weight: 700;
          color: var(--text-bold);
          font-size: 0.9rem;
        }
        input, textarea {
          padding: 1rem;
          border-radius: 12px;
          border: 1px solid oklch(0% 0 0 / 10%);
          background: var(--bg-surface);
          color: var(--text-bold);
          font-family: inherit;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        input:focus, textarea:focus {
          outline: none;
          border-color: var(--accent);
          box-shadow: 0 0 0 4px oklch(65% 0.15 190.1 / 15%);
        }
        button[type="submit"] {
          background: var(--primary);
          color: white;
          border: none;
          padding: 1.2rem;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }
        button[type="submit"]:hover {
          background: var(--accent);
          color: var(--primary);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        @media (max-width: 600px) {
          .grid-2 {
            grid-template-columns: 1fr;
          }
          form {
            padding: 1.5rem;
          }
        }
      </style>
      <section class="section" id="partnership">
        <div class="container animate-in">
          <h2>🤝 제휴 및 협력 문의</h2>
          <p class="subtitle">브이티바이오와 함께 혁신적인 미래를 만들어갈 파트너를 기다립니다.</p>
          
          <form action="https://formspree.io/f/mreynjwr" method="POST">
            <div class="grid-2">
              <div class="form-group">
                <label for="company">회사명/기관명</label>
                <input type="text" id="company" name="company" placeholder="예: (주)브이티바이오" required>
              </div>
              <div class="form-group">
                <label for="name">담당자 성함</label>
                <input type="text" id="name" name="name" placeholder="홍길동" required>
              </div>
            </div>
            
            <div class="grid-2">
              <div class="form-group">
                <label for="email">이메일 주소</label>
                <input type="email" id="email" name="_replyto" placeholder="example@email.com" required>
              </div>
              <div class="form-group">
                <label for="phone">연락처</label>
                <input type="tel" id="phone" name="phone" placeholder="010-1234-5678">
              </div>
            </div>
            
            <div class="form-group">
              <label for="subject">문의 제목</label>
              <input type="text" id="subject" name="_subject" placeholder="제휴 문의 드립니다." required>
            </div>
            
            <div class="form-group">
              <label for="message">문의 내용</label>
              <textarea id="message" name="message" rows="5" placeholder="상세한 문의 내용을 입력해주세요." required></textarea>
            </div>
            
            <button type="submit">문의 메시지 보내기</button>
          </form>
        </div>
      </section>
    `;
  }
}

customElements.define('dinner-recommendation', DinnerRecommendation);
customElements.define('partnership-section', PartnershipSection);
customElements.define('hero-section', HeroSection);
customElements.define('pipeline-section', PipelineSection);
customElements.define('research-section', ResearchSection);
customElements.define('video-section', VideoSection);
customElements.define('main-footer', MainFooter);
