
class MainHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        header {
          background-color: var(--primary-color, #005A9C);
          color: var(--white, #fff);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: var(--shadow, 0 4px 8px rgba(0,0,0,0.1));
        }
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
        }
        nav a {
          color: var(--white, #fff);
          text-decoration: none;
          margin: 0 1rem;
        }
      </style>
      <header>
        <div class="logo">VT BIO</div>
        <nav>
          <a href="#pipeline">파이프라인</a>
          <a href="#research">연구 현황</a>
          <a href="#video">홍보 영상</a>
        </nav>
      </header>
    `;
  }
}

class HeroSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .hero {
          background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://plus.unsplash.com/premium_photo-1676642738222-949d8a573333?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
          height: 60vh;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: var(--white, #fff);
        }
        .hero-text h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        .hero-text p {
          font-size: 1.2rem;
        }
      </style>
      <section class="hero">
        <div class="hero-text">
          <h1>VT BIO: 혁신적인 기술로 인류의 건강을 선도합니다.</h1>
          <p>차세대 항체 치료제 및 진단 기술 개발</p>
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
        .section {
            background-color: var(--white, #fff);
            margin-bottom: 2rem;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: var(--shadow, 0 4px 8px rgba(0,0,0,0.1));
        }
        .section h2 {
            color: var(--primary-color, #005A9C);
            border-bottom: 2px solid var(--primary-color, #005A9C);
            padding-bottom: 0.5rem;
            margin-bottom: 1.5rem;
        }
        .pipeline-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
        }
        .pipeline-item {
            background-color: var(--light-gray, #f4f4f4);
            padding: 1.5rem;
            border-radius: 8px;
        }
        .pipeline-item h3 {
            color: var(--primary-color, #005A9C);
            margin-top: 0;
        }
      </style>
      <section id="pipeline" class="section">
        <h2>파이프라인</h2>
        <div class="pipeline-grid">
          <div class="pipeline-item">
            <h3>VT-001: 차세대 항체 치료제</h3>
            <p>VT-001은 특정 암세포에만 선택적으로 작용하는 혁신적인 항체 치료제입니다. 기존 항암 치료의 부작용을 최소화하고 치료 효과를 극대화하는 것을 목표로 합니다.</p>
          </div>
          <div class="pipeline-item">
            <h3>VT-002: AI 기반 신약 개발 플랫폼</h3>
            <p>VT-002는 인공지능을 활용하여 신약 후보물질을 신속하고 정확하게 발굴하는 플랫폼입니다. 이를 통해 신약 개발 기간과 비용을 획기적으로 단축시킬 수 있습니다.</p>
          </div>
          <div class="pipeline-item">
            <h3>VT-003: 질병 조기 진단 키트</h3>
            <p>VT-003은 소량의 혈액으로 다양한 질병을 조기에 진단할 수 있는 고감도 진단 키트입니다. 질병의 조기 발견 및 예방에 기여할 것으로 기대됩니다.</p>
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
        .section {
            background-color: var(--white, #fff);
            margin-bottom: 2rem;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: var(--shadow, 0 4px 8px rgba(0,0,0,0.1));
        }
        .section h2 {
            color: var(--primary-color, #005A9C);
            border-bottom: 2px solid var(--primary-color, #005A9C);
            padding-bottom: 0.5rem;
            margin-bottom: 1.5rem;
        }
        .research-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
        }
        .research-item {
            background-color: var(--light-gray, #f4f4f4);
            padding: 1.5rem;
            border-radius: 8px;
        }
        .research-item h3 {
            color: var(--primary-color, #005A9C);
            margin-top: 0;
        }
      </style>
      <section id="research" class="section">
        <h2>연구 현황</h2>
        <div class="research-grid">
            <div class="research-item">
                <h3>항체 라이브러리 구축</h3>
                <p>다양한 질병에 대응할 수 있는 대규모 항체 라이브러리를 구축하고 있습니다. 이는 신약 개발의 핵심 자원으로 활용될 것입니다.</p>
            </div>
            <div class="research-item">
                <h3>전임상 시험 진행</h3>
                <p>VT-001의 전임상 시험을 진행 중이며, 초기 결과에서 긍정적인 데이터를 확보했습니다. 2024년 임상 1상 진입을 목표로 하고 있습니다.</p>
            </div>
            <div class="research-item">
                <h3>AI 알고리즘 고도화</h3>
                <p>VT-002 플랫폼의 AI 알고리즘을 지속적으로 고도화하여 신약 후보물질 발굴의 정확도와 속도를 향상시키고 있습니다.</p>
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
        .section {
            background-color: var(--white, #fff);
            margin-bottom: 2rem;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: var(--shadow, 0 4px 8px rgba(0,0,0,0.1));
        }
        .section h2 {
            color: var(--primary-color, #005A9C);
            border-bottom: 2px solid var(--primary-color, #005A9C);
            padding-bottom: 0.5rem;
            margin-bottom: 1.5rem;
        }
        .video-container {
            position: relative;
            padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
            height: 0;
            overflow: hidden;
            border-radius: 8px;
        }
        .video-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 0;
        }
      </style>
      <section id="video" class="section">
        <h2>알츠하이머와 조절T세포와의 관계</h2>
        <div class="video-container">
          <iframe 
            src="https://www.youtube.com/embed/u3DJyctwSr0?si=zkAWRBS1XrP7_ET4" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
          </iframe>
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
        footer {
            background-color: var(--dark-gray, #555);
            color: var(--white, #fff);
            text-align: center;
            padding: 2rem;
        }
      </style>
      <footer>
        <p>&copy; 2024 VT BIO. All rights reserved.</p>
      </footer>
    `;
  }
}


customElements.define('main-header', MainHeader);
customElements.define('hero-section', HeroSection);
customElements.define('pipeline-section', PipelineSection);
customElements.define('research-section', ResearchSection);
customElements.define('video-section', VideoSection);
customElements.define('main-footer', MainFooter);
