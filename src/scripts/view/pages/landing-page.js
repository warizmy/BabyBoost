import changeDynamicContent from '../../utils/dynamic-content-changer';

class LandingPage {
  constructor() {
    this.dynamicContent = document.getElementById('dynamic-content');
    this._render();
  }

  _render() {
    document.title = 'BabyBoost - Saatnya Penuhi Gizi Anak Sekarang!';

    const content = document.createElement('div');
    content.className = 'content-container';
    content.innerHTML = `
      <section class="hero" style="background-image: url(./images/bg-hero.png)">
        <div class="hero-text">
          <h4>Jaga Asupan Gizi Anak Bersama</h4>
          <h1>BabyBoost</h1>
        </div>
        <div class="hero-img">
          <img src="./images/Kids.png" alt="hero-img">
        </div>
      </section>

      <section id="main-content">
      <div class="waiting-indicator-cat" id="waitingIndicatorCat" style="display: none;">
          <div class="spinner-waiting-cat"></div>
      </div>
        <h3>Bagaimana BabyBoost membantu menjaga gizi anak</h3>
        <div class="button-cta">
          <button id="cta-1">1</button>
          <button id="cta-2">2</button>
          <button id="cta-3">3</button>
        </div>
        <div class="row-content" id="dynamic-content">
        <img data-src="./images/img-content-1.png" alt="img-content-1" class="lazyload"/>
        <div class="content-text">
          <h2>Menghitung kebutuhan kalori sesuai kondisi anak</h2>
          <p>
            BabyBoost membantu kamu untuk memenuhi kebutuhan kalori anak dan
            memberikan rekomendasi bahan makanan yang disertai informasi gizi
          </p>
          <div class="btn-cta-anchor">
            <a href="#/kalkulatorgizi" id="cta-content-1">
              Kalkulator Gizi &#8599;
            </a>
          </div>
        </div>
        </div>
      </section>

      <div id="carouselExampleIndicators" class="carousel slide">
      <img src="./images/bg-food-recommendation.png" alt="bg-food-recommendation" class="bg-food-recommendation">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

    <div class="carousel-inner" id="custom-carousel">
      <div class="text-carousel">
        <h4>Rekomendasi Bahan</h4>
        <a href="/#/rekomendasibahan">Lihat Semua</a>
      </div>
        <div class="carousel-item active" id="item-karbohidratLandingPage">
            <div class="card-container">
                <div class="card">
                  <div class="card-body">
                    <img alt="img-food" id="item-karbohidratLandingPage-gambar-bahan-karbo-1" class="lazyload">
                    <div class="card-body-details">
                      <h5 id="item-karbohidratLandingPage-nama-bahan-karbo-1"></h5>
                      <h6 class="type-of-food" id="item-karbohidratLandingPage-type-of-food-karbo-1"></h6>
                      <div class="dose-detail">
                          <svg width="22" height="20" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.0874 0C21.216 0 22.13 0.915076 22.13 2.0426V4.426C22.13 6.48572 21.4916 8.49481 20.3026 10.1767C19.1137 11.8587 17.4327 13.1308 15.491 13.818V14.9378C15.491 15.3779 15.3161 15.8001 15.0049 16.1114C14.6936 16.4226 14.2714 16.5975 13.8312 16.5975H8.29875C7.85856 16.5975 7.43639 16.4226 7.12513 16.1114C6.81387 15.8001 6.639 15.3779 6.639 14.9378V13.818C4.69729 13.1308 3.01629 11.8587 1.82736 10.1767C0.638435 8.49481 2.501e-05 6.48572 0 4.426V2.0426C0 0.913969 0.915075 0 2.0426 0H20.0874Z" fill="#7C766B"/>
                          </svg>
                          <h6 id="item-karbohidratLandingPage-takaran-bahan-karbo-1"></h6>
                      </div>
                      <div class="weight-detail">
                          <svg width="23" height="21" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0674 5.39741C11.5207 5.39741 11.901 5.24381 12.2082 4.93661C12.5154 4.62941 12.6684 4.24968 12.6674 3.79741C12.6674 3.34408 12.5138 2.96381 12.2066 2.65661C11.8994 2.34941 11.5196 2.19635 11.0674 2.19741C10.614 2.19741 10.2338 2.35101 9.92657 2.65821C9.61937 2.96541 9.46631 3.34515 9.46737 3.79741C9.46737 4.25075 9.62097 4.63101 9.92817 4.93821C10.2354 5.24541 10.6151 5.39848 11.0674 5.39741ZM13.8034 5.39741H17.557C18.213 5.39741 18.7783 5.60755 19.253 6.02781C19.7266 6.44808 20.0092 6.98355 20.101 7.63421L22.1042 21.6662C22.2172 22.4406 22.0167 23.1233 21.5026 23.7142C20.9884 24.303 20.3303 24.5974 19.5282 24.5974H2.60657C1.80444 24.5974 1.14631 24.3025 0.632174 23.7126C0.118041 23.1227 -0.0824925 22.4401 0.0305742 21.6646L2.03377 7.63421C2.12551 6.98355 2.40817 6.44808 2.88177 6.02781C3.35751 5.60755 3.92337 5.39741 4.57937 5.39741H8.33298C8.19217 5.17128 8.07964 4.92168 7.99537 4.64861C7.91004 4.37448 7.86737 4.09075 7.86737 3.79741C7.86737 2.89501 8.17511 2.13608 8.79057 1.52061C9.40604 0.905146 10.165 0.597412 11.0674 0.597412C11.9698 0.597412 12.7287 0.905146 13.3442 1.52061C13.9596 2.13608 14.2674 2.89501 14.2674 3.79741C14.2674 4.09075 14.2252 4.37448 14.141 4.64861C14.0567 4.92168 13.9442 5.17128 13.8034 5.39741Z" fill="#7C766B"/>
                          </svg>
                          <h6 id="item-karbohidratLandingPage-berat-bahan-karbo-1"></h6>
                      </div>
                      <div class="cals-detail">
                          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                            <path fill="#7c766b" d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"/>
                          </svg>
                          <h6 id="item-karbohidratLandingPage-kalori-bahan-karbo-1"></h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <img alt="img-food" id="item-karbohidratLandingPage-gambar-bahan-karbo-2" class="lazyload">
                    <div class="card-body-details">
                      <h5 id="item-karbohidratLandingPage-nama-bahan-karbo-2"></h5>
                      <h6 class="type-of-food" id="item-karbohidratLandingPage-type-of-food-karbo-2"></h6>
                      <div class="dose-detail">
                          <svg width="22" height="20" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.0874 0C21.216 0 22.13 0.915076 22.13 2.0426V4.426C22.13 6.48572 21.4916 8.49481 20.3026 10.1767C19.1137 11.8587 17.4327 13.1308 15.491 13.818V14.9378C15.491 15.3779 15.3161 15.8001 15.0049 16.1114C14.6936 16.4226 14.2714 16.5975 13.8312 16.5975H8.29875C7.85856 16.5975 7.43639 16.4226 7.12513 16.1114C6.81387 15.8001 6.639 15.3779 6.639 14.9378V13.818C4.69729 13.1308 3.01629 11.8587 1.82736 10.1767C0.638435 8.49481 2.501e-05 6.48572 0 4.426V2.0426C0 0.913969 0.915075 0 2.0426 0H20.0874Z" fill="#7C766B"/>
                          </svg>
                          <h6 id="item-karbohidratLandingPage-takaran-bahan-karbo-2"></h6>
                      </div>
                      <div class="weight-detail">
                          <svg width="23" height="21" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0674 5.39741C11.5207 5.39741 11.901 5.24381 12.2082 4.93661C12.5154 4.62941 12.6684 4.24968 12.6674 3.79741C12.6674 3.34408 12.5138 2.96381 12.2066 2.65661C11.8994 2.34941 11.5196 2.19635 11.0674 2.19741C10.614 2.19741 10.2338 2.35101 9.92657 2.65821C9.61937 2.96541 9.46631 3.34515 9.46737 3.79741C9.46737 4.25075 9.62097 4.63101 9.92817 4.93821C10.2354 5.24541 10.6151 5.39848 11.0674 5.39741ZM13.8034 5.39741H17.557C18.213 5.39741 18.7783 5.60755 19.253 6.02781C19.7266 6.44808 20.0092 6.98355 20.101 7.63421L22.1042 21.6662C22.2172 22.4406 22.0167 23.1233 21.5026 23.7142C20.9884 24.303 20.3303 24.5974 19.5282 24.5974H2.60657C1.80444 24.5974 1.14631 24.3025 0.632174 23.7126C0.118041 23.1227 -0.0824925 22.4401 0.0305742 21.6646L2.03377 7.63421C2.12551 6.98355 2.40817 6.44808 2.88177 6.02781C3.35751 5.60755 3.92337 5.39741 4.57937 5.39741H8.33298C8.19217 5.17128 8.07964 4.92168 7.99537 4.64861C7.91004 4.37448 7.86737 4.09075 7.86737 3.79741C7.86737 2.89501 8.17511 2.13608 8.79057 1.52061C9.40604 0.905146 10.165 0.597412 11.0674 0.597412C11.9698 0.597412 12.7287 0.905146 13.3442 1.52061C13.9596 2.13608 14.2674 2.89501 14.2674 3.79741C14.2674 4.09075 14.2252 4.37448 14.141 4.64861C14.0567 4.92168 13.9442 5.17128 13.8034 5.39741Z" fill="#7C766B"/>
                          </svg>
                          <h6 id="item-karbohidratLandingPage-berat-bahan-karbo-2"></h6>
                      </div>
                      <div class="cals-detail">
                          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                            <path fill="#7c766b" d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"/>
                          </svg>
                          <h6 id="item-karbohidratLandingPage-kalori-bahan-karbo-2"></h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                <div class="card-body">
                  <img alt="img-food" id="item-karbohidratLandingPage-gambar-bahan-karbo-3" class="lazyload">
                  <div class="card-body-details">
                    <h5 id="item-karbohidratLandingPage-nama-bahan-karbo-3"></h5>
                    <h6 class="type-of-food" id="item-karbohidratLandingPage-type-of-food-karbo-3"></h6>
                    <div class="dose-detail">
                        <svg width="22" height="20" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.0874 0C21.216 0 22.13 0.915076 22.13 2.0426V4.426C22.13 6.48572 21.4916 8.49481 20.3026 10.1767C19.1137 11.8587 17.4327 13.1308 15.491 13.818V14.9378C15.491 15.3779 15.3161 15.8001 15.0049 16.1114C14.6936 16.4226 14.2714 16.5975 13.8312 16.5975H8.29875C7.85856 16.5975 7.43639 16.4226 7.12513 16.1114C6.81387 15.8001 6.639 15.3779 6.639 14.9378V13.818C4.69729 13.1308 3.01629 11.8587 1.82736 10.1767C0.638435 8.49481 2.501e-05 6.48572 0 4.426V2.0426C0 0.913969 0.915075 0 2.0426 0H20.0874Z" fill="#7C766B"/>
                        </svg>
                        <h6 id="item-karbohidratLandingPage-takaran-bahan-karbo-3"></h6>
                    </div>
                    <div class="weight-detail">
                        <svg width="23" height="21" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.0674 5.39741C11.5207 5.39741 11.901 5.24381 12.2082 4.93661C12.5154 4.62941 12.6684 4.24968 12.6674 3.79741C12.6674 3.34408 12.5138 2.96381 12.2066 2.65661C11.8994 2.34941 11.5196 2.19635 11.0674 2.19741C10.614 2.19741 10.2338 2.35101 9.92657 2.65821C9.61937 2.96541 9.46631 3.34515 9.46737 3.79741C9.46737 4.25075 9.62097 4.63101 9.92817 4.93821C10.2354 5.24541 10.6151 5.39848 11.0674 5.39741ZM13.8034 5.39741H17.557C18.213 5.39741 18.7783 5.60755 19.253 6.02781C19.7266 6.44808 20.0092 6.98355 20.101 7.63421L22.1042 21.6662C22.2172 22.4406 22.0167 23.1233 21.5026 23.7142C20.9884 24.303 20.3303 24.5974 19.5282 24.5974H2.60657C1.80444 24.5974 1.14631 24.3025 0.632174 23.7126C0.118041 23.1227 -0.0824925 22.4401 0.0305742 21.6646L2.03377 7.63421C2.12551 6.98355 2.40817 6.44808 2.88177 6.02781C3.35751 5.60755 3.92337 5.39741 4.57937 5.39741H8.33298C8.19217 5.17128 8.07964 4.92168 7.99537 4.64861C7.91004 4.37448 7.86737 4.09075 7.86737 3.79741C7.86737 2.89501 8.17511 2.13608 8.79057 1.52061C9.40604 0.905146 10.165 0.597412 11.0674 0.597412C11.9698 0.597412 12.7287 0.905146 13.3442 1.52061C13.9596 2.13608 14.2674 2.89501 14.2674 3.79741C14.2674 4.09075 14.2252 4.37448 14.141 4.64861C14.0567 4.92168 13.9442 5.17128 13.8034 5.39741Z" fill="#7C766B"/>
                        </svg>
                        <h6 id="item-karbohidratLandingPage-berat-bahan-karbo-3"></h6>
                    </div>
                    <div class="cals-detail">
                          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                            <path fill="#7c766b" d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"/>
                          </svg>
                          <h6 id="item-karbohidratLandingPage-kalori-bahan-karbo-3"></h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div class="carousel-item" id="item-lemak">
            <div class="card-container">
                <div class="card">
                <div class="card-body">
                <img alt="img-food" id="item-lemak-gambar-bahan-lemak-1" class="lazyload">
                <div class="card-body-details">
                  <h5 id="item-lemak-nama-bahan-lemak-1"></h5>
                  <h6 class="type-of-food" id="item-lemak-type-of-food-lemak-1"></h6>
                  <div class="dose-detail">
                      <svg width="22" height="20" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.0874 0C21.216 0 22.13 0.915076 22.13 2.0426V4.426C22.13 6.48572 21.4916 8.49481 20.3026 10.1767C19.1137 11.8587 17.4327 13.1308 15.491 13.818V14.9378C15.491 15.3779 15.3161 15.8001 15.0049 16.1114C14.6936 16.4226 14.2714 16.5975 13.8312 16.5975H8.29875C7.85856 16.5975 7.43639 16.4226 7.12513 16.1114C6.81387 15.8001 6.639 15.3779 6.639 14.9378V13.818C4.69729 13.1308 3.01629 11.8587 1.82736 10.1767C0.638435 8.49481 2.501e-05 6.48572 0 4.426V2.0426C0 0.913969 0.915075 0 2.0426 0H20.0874Z" fill="#7C766B"/>
                      </svg>
                      <h6 id="item-lemak-takaran-bahan-lemak-1"></h6>
                  </div>
                  <div class="weight-detail">
                      <svg width="23" height="21" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0674 5.39741C11.5207 5.39741 11.901 5.24381 12.2082 4.93661C12.5154 4.62941 12.6684 4.24968 12.6674 3.79741C12.6674 3.34408 12.5138 2.96381 12.2066 2.65661C11.8994 2.34941 11.5196 2.19635 11.0674 2.19741C10.614 2.19741 10.2338 2.35101 9.92657 2.65821C9.61937 2.96541 9.46631 3.34515 9.46737 3.79741C9.46737 4.25075 9.62097 4.63101 9.92817 4.93821C10.2354 5.24541 10.6151 5.39848 11.0674 5.39741ZM13.8034 5.39741H17.557C18.213 5.39741 18.7783 5.60755 19.253 6.02781C19.7266 6.44808 20.0092 6.98355 20.101 7.63421L22.1042 21.6662C22.2172 22.4406 22.0167 23.1233 21.5026 23.7142C20.9884 24.303 20.3303 24.5974 19.5282 24.5974H2.60657C1.80444 24.5974 1.14631 24.3025 0.632174 23.7126C0.118041 23.1227 -0.0824925 22.4401 0.0305742 21.6646L2.03377 7.63421C2.12551 6.98355 2.40817 6.44808 2.88177 6.02781C3.35751 5.60755 3.92337 5.39741 4.57937 5.39741H8.33298C8.19217 5.17128 8.07964 4.92168 7.99537 4.64861C7.91004 4.37448 7.86737 4.09075 7.86737 3.79741C7.86737 2.89501 8.17511 2.13608 8.79057 1.52061C9.40604 0.905146 10.165 0.597412 11.0674 0.597412C11.9698 0.597412 12.7287 0.905146 13.3442 1.52061C13.9596 2.13608 14.2674 2.89501 14.2674 3.79741C14.2674 4.09075 14.2252 4.37448 14.141 4.64861C14.0567 4.92168 13.9442 5.17128 13.8034 5.39741Z" fill="#7C766B"/>
                      </svg>
                      <h6 id="item-lemak-berat-bahan-lemak-1"></h6>
                  </div>
                  <div class="cals-detail">
                          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                            <path fill="#7c766b" d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"/>
                          </svg>
                          <h6 id="item-lemak-kalori-bahan-lemak-1"></h6>
                  </div>
                </div>
              </div>
                </div>
                <div class="card">
                <div class="card-body">
                <img alt="img-food" id="item-lemak-gambar-bahan-lemak-2" class="lazyload">
                <div class="card-body-details">
                  <h5 id="item-lemak-nama-bahan-lemak-2"></h5>
                  <h6 class="type-of-food" id="item-lemak-type-of-food-lemak-2"></h6>
                  <div class="dose-detail">
                      <svg width="22" height="20" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.0874 0C21.216 0 22.13 0.915076 22.13 2.0426V4.426C22.13 6.48572 21.4916 8.49481 20.3026 10.1767C19.1137 11.8587 17.4327 13.1308 15.491 13.818V14.9378C15.491 15.3779 15.3161 15.8001 15.0049 16.1114C14.6936 16.4226 14.2714 16.5975 13.8312 16.5975H8.29875C7.85856 16.5975 7.43639 16.4226 7.12513 16.1114C6.81387 15.8001 6.639 15.3779 6.639 14.9378V13.818C4.69729 13.1308 3.01629 11.8587 1.82736 10.1767C0.638435 8.49481 2.501e-05 6.48572 0 4.426V2.0426C0 0.913969 0.915075 0 2.0426 0H20.0874Z" fill="#7C766B"/>
                      </svg>
                      <h6 id="item-lemak-takaran-bahan-lemak-2"></h6>
                  </div>
                  <div class="weight-detail">
                      <svg width="23" height="21" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0674 5.39741C11.5207 5.39741 11.901 5.24381 12.2082 4.93661C12.5154 4.62941 12.6684 4.24968 12.6674 3.79741C12.6674 3.34408 12.5138 2.96381 12.2066 2.65661C11.8994 2.34941 11.5196 2.19635 11.0674 2.19741C10.614 2.19741 10.2338 2.35101 9.92657 2.65821C9.61937 2.96541 9.46631 3.34515 9.46737 3.79741C9.46737 4.25075 9.62097 4.63101 9.92817 4.93821C10.2354 5.24541 10.6151 5.39848 11.0674 5.39741ZM13.8034 5.39741H17.557C18.213 5.39741 18.7783 5.60755 19.253 6.02781C19.7266 6.44808 20.0092 6.98355 20.101 7.63421L22.1042 21.6662C22.2172 22.4406 22.0167 23.1233 21.5026 23.7142C20.9884 24.303 20.3303 24.5974 19.5282 24.5974H2.60657C1.80444 24.5974 1.14631 24.3025 0.632174 23.7126C0.118041 23.1227 -0.0824925 22.4401 0.0305742 21.6646L2.03377 7.63421C2.12551 6.98355 2.40817 6.44808 2.88177 6.02781C3.35751 5.60755 3.92337 5.39741 4.57937 5.39741H8.33298C8.19217 5.17128 8.07964 4.92168 7.99537 4.64861C7.91004 4.37448 7.86737 4.09075 7.86737 3.79741C7.86737 2.89501 8.17511 2.13608 8.79057 1.52061C9.40604 0.905146 10.165 0.597412 11.0674 0.597412C11.9698 0.597412 12.7287 0.905146 13.3442 1.52061C13.9596 2.13608 14.2674 2.89501 14.2674 3.79741C14.2674 4.09075 14.2252 4.37448 14.141 4.64861C14.0567 4.92168 13.9442 5.17128 13.8034 5.39741Z" fill="#7C766B"/>
                      </svg>
                      <h6 id="item-lemak-berat-bahan-lemak-2"></h6>
                  </div>
                  <div class="cals-detail">
                          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                            <path fill="#7c766b" d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"/>
                          </svg>
                          <h6 id="item-lemak-kalori-bahan-lemak-2"></h6>
                  </div>
                </div>
              </div>
                </div>
                <div class="card">
                <div class="card-body">
                <img alt="img-food" id="item-lemak-gambar-bahan-lemak-3" class="lazyload"> 
                <div class="card-body-details">
                  <h5 id="item-lemak-nama-bahan-lemak-3"></h5>
                  <h6 class="type-of-food" id="item-lemak-type-of-food-lemak-3"></h6>
                  <div class="dose-detail">
                      <svg width="22" height="20" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.0874 0C21.216 0 22.13 0.915076 22.13 2.0426V4.426C22.13 6.48572 21.4916 8.49481 20.3026 10.1767C19.1137 11.8587 17.4327 13.1308 15.491 13.818V14.9378C15.491 15.3779 15.3161 15.8001 15.0049 16.1114C14.6936 16.4226 14.2714 16.5975 13.8312 16.5975H8.29875C7.85856 16.5975 7.43639 16.4226 7.12513 16.1114C6.81387 15.8001 6.639 15.3779 6.639 14.9378V13.818C4.69729 13.1308 3.01629 11.8587 1.82736 10.1767C0.638435 8.49481 2.501e-05 6.48572 0 4.426V2.0426C0 0.913969 0.915075 0 2.0426 0H20.0874Z" fill="#7C766B"/>
                      </svg>
                      <h6 id="item-lemak-takaran-bahan-lemak-3"></h6>
                  </div>
                  <div class="weight-detail">
                      <svg width="23" height="21" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0674 5.39741C11.5207 5.39741 11.901 5.24381 12.2082 4.93661C12.5154 4.62941 12.6684 4.24968 12.6674 3.79741C12.6674 3.34408 12.5138 2.96381 12.2066 2.65661C11.8994 2.34941 11.5196 2.19635 11.0674 2.19741C10.614 2.19741 10.2338 2.35101 9.92657 2.65821C9.61937 2.96541 9.46631 3.34515 9.46737 3.79741C9.46737 4.25075 9.62097 4.63101 9.92817 4.93821C10.2354 5.24541 10.6151 5.39848 11.0674 5.39741ZM13.8034 5.39741H17.557C18.213 5.39741 18.7783 5.60755 19.253 6.02781C19.7266 6.44808 20.0092 6.98355 20.101 7.63421L22.1042 21.6662C22.2172 22.4406 22.0167 23.1233 21.5026 23.7142C20.9884 24.303 20.3303 24.5974 19.5282 24.5974H2.60657C1.80444 24.5974 1.14631 24.3025 0.632174 23.7126C0.118041 23.1227 -0.0824925 22.4401 0.0305742 21.6646L2.03377 7.63421C2.12551 6.98355 2.40817 6.44808 2.88177 6.02781C3.35751 5.60755 3.92337 5.39741 4.57937 5.39741H8.33298C8.19217 5.17128 8.07964 4.92168 7.99537 4.64861C7.91004 4.37448 7.86737 4.09075 7.86737 3.79741C7.86737 2.89501 8.17511 2.13608 8.79057 1.52061C9.40604 0.905146 10.165 0.597412 11.0674 0.597412C11.9698 0.597412 12.7287 0.905146 13.3442 1.52061C13.9596 2.13608 14.2674 2.89501 14.2674 3.79741C14.2674 4.09075 14.2252 4.37448 14.141 4.64861C14.0567 4.92168 13.9442 5.17128 13.8034 5.39741Z" fill="#7C766B"/>
                      </svg>
                      <h6 id="item-lemak-berat-bahan-lemak-3"></h6>
                  </div>
                  <div class="cals-detail">
                          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                            <path fill="#7c766b" d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"/>
                          </svg>
                          <h6 id="item-lemak-kalori-bahan-lemak-3"></h6>
                  </div>
                </div>
              </div>
                </div>
            </div>
        </div>
        
        <div class="carousel-item" id="item-protein">
            <div class="card-container">
                <div class="card">
                <div class="card-body">
                <img alt="img-food" id="item-protein-gambar-bahan-protein-1" class="lazyload">
                <div class="card-body-details">
                  <h5 id="item-protein-nama-bahan-protein-1"></h5>
                  <h6 class="type-of-food" id="item-protein-type-of-food-protein-1"></h6>
                  <div class="dose-detail">
                      <svg width="22" height="20" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.0874 0C21.216 0 22.13 0.915076 22.13 2.0426V4.426C22.13 6.48572 21.4916 8.49481 20.3026 10.1767C19.1137 11.8587 17.4327 13.1308 15.491 13.818V14.9378C15.491 15.3779 15.3161 15.8001 15.0049 16.1114C14.6936 16.4226 14.2714 16.5975 13.8312 16.5975H8.29875C7.85856 16.5975 7.43639 16.4226 7.12513 16.1114C6.81387 15.8001 6.639 15.3779 6.639 14.9378V13.818C4.69729 13.1308 3.01629 11.8587 1.82736 10.1767C0.638435 8.49481 2.501e-05 6.48572 0 4.426V2.0426C0 0.913969 0.915075 0 2.0426 0H20.0874Z" fill="#7C766B"/>
                      </svg>
                      <h6 id ="item-protein-takaran-bahan-protein-1"></h6>
                  </div>
                  <div class="weight-detail">
                      <svg width="23" height="21" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0674 5.39741C11.5207 5.39741 11.901 5.24381 12.2082 4.93661C12.5154 4.62941 12.6684 4.24968 12.6674 3.79741C12.6674 3.34408 12.5138 2.96381 12.2066 2.65661C11.8994 2.34941 11.5196 2.19635 11.0674 2.19741C10.614 2.19741 10.2338 2.35101 9.92657 2.65821C9.61937 2.96541 9.46631 3.34515 9.46737 3.79741C9.46737 4.25075 9.62097 4.63101 9.92817 4.93821C10.2354 5.24541 10.6151 5.39848 11.0674 5.39741ZM13.8034 5.39741H17.557C18.213 5.39741 18.7783 5.60755 19.253 6.02781C19.7266 6.44808 20.0092 6.98355 20.101 7.63421L22.1042 21.6662C22.2172 22.4406 22.0167 23.1233 21.5026 23.7142C20.9884 24.303 20.3303 24.5974 19.5282 24.5974H2.60657C1.80444 24.5974 1.14631 24.3025 0.632174 23.7126C0.118041 23.1227 -0.0824925 22.4401 0.0305742 21.6646L2.03377 7.63421C2.12551 6.98355 2.40817 6.44808 2.88177 6.02781C3.35751 5.60755 3.92337 5.39741 4.57937 5.39741H8.33298C8.19217 5.17128 8.07964 4.92168 7.99537 4.64861C7.91004 4.37448 7.86737 4.09075 7.86737 3.79741C7.86737 2.89501 8.17511 2.13608 8.79057 1.52061C9.40604 0.905146 10.165 0.597412 11.0674 0.597412C11.9698 0.597412 12.7287 0.905146 13.3442 1.52061C13.9596 2.13608 14.2674 2.89501 14.2674 3.79741C14.2674 4.09075 14.2252 4.37448 14.141 4.64861C14.0567 4.92168 13.9442 5.17128 13.8034 5.39741Z" fill="#7C766B"/>
                      </svg>
                      <h6 id="item-protein-berat-bahan-protein-1"></h6>
                  </div>
                  <div class="cals-detail">
                          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                            <path fill="#7c766b" d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"/>
                          </svg>
                          <h6 id="item-protein-kalori-bahan-protein-1"></h6>
                  </div>
                </div>
              </div>
                </div>
                <div class="card">
                <div class="card-body">
                <img alt="img-food" id="item-protein-gambar-bahan-protein-2" class="lazyload">
                <div class="card-body-details">
                  <h5 id="item-protein-nama-bahan-protein-2"></h5>
                  <h6 class="type-of-food" id="item-protein-type-of-food-protein-2"></h6>
                  <div class="dose-detail">
                      <svg width="22" height="20" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.0874 0C21.216 0 22.13 0.915076 22.13 2.0426V4.426C22.13 6.48572 21.4916 8.49481 20.3026 10.1767C19.1137 11.8587 17.4327 13.1308 15.491 13.818V14.9378C15.491 15.3779 15.3161 15.8001 15.0049 16.1114C14.6936 16.4226 14.2714 16.5975 13.8312 16.5975H8.29875C7.85856 16.5975 7.43639 16.4226 7.12513 16.1114C6.81387 15.8001 6.639 15.3779 6.639 14.9378V13.818C4.69729 13.1308 3.01629 11.8587 1.82736 10.1767C0.638435 8.49481 2.501e-05 6.48572 0 4.426V2.0426C0 0.913969 0.915075 0 2.0426 0H20.0874Z" fill="#7C766B"/>
                      </svg>
                      <h6 id ="item-protein-takaran-bahan-protein-2"></h6>
                  </div>
                  <div class="weight-detail">
                      <svg width="23" height="21" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0674 5.39741C11.5207 5.39741 11.901 5.24381 12.2082 4.93661C12.5154 4.62941 12.6684 4.24968 12.6674 3.79741C12.6674 3.34408 12.5138 2.96381 12.2066 2.65661C11.8994 2.34941 11.5196 2.19635 11.0674 2.19741C10.614 2.19741 10.2338 2.35101 9.92657 2.65821C9.61937 2.96541 9.46631 3.34515 9.46737 3.79741C9.46737 4.25075 9.62097 4.63101 9.92817 4.93821C10.2354 5.24541 10.6151 5.39848 11.0674 5.39741ZM13.8034 5.39741H17.557C18.213 5.39741 18.7783 5.60755 19.253 6.02781C19.7266 6.44808 20.0092 6.98355 20.101 7.63421L22.1042 21.6662C22.2172 22.4406 22.0167 23.1233 21.5026 23.7142C20.9884 24.303 20.3303 24.5974 19.5282 24.5974H2.60657C1.80444 24.5974 1.14631 24.3025 0.632174 23.7126C0.118041 23.1227 -0.0824925 22.4401 0.0305742 21.6646L2.03377 7.63421C2.12551 6.98355 2.40817 6.44808 2.88177 6.02781C3.35751 5.60755 3.92337 5.39741 4.57937 5.39741H8.33298C8.19217 5.17128 8.07964 4.92168 7.99537 4.64861C7.91004 4.37448 7.86737 4.09075 7.86737 3.79741C7.86737 2.89501 8.17511 2.13608 8.79057 1.52061C9.40604 0.905146 10.165 0.597412 11.0674 0.597412C11.9698 0.597412 12.7287 0.905146 13.3442 1.52061C13.9596 2.13608 14.2674 2.89501 14.2674 3.79741C14.2674 4.09075 14.2252 4.37448 14.141 4.64861C14.0567 4.92168 13.9442 5.17128 13.8034 5.39741Z" fill="#7C766B"/>
                      </svg>
                      <h6 id="item-protein-berat-bahan-protein-2"></h6>
                  </div>
                  <div class="cals-detail">
                          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                            <path fill="#7c766b" d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"/>
                          </svg>
                          <h6 id="item-protein-kalori-bahan-protein-2"></h6>
                  </div>
                </div>
              </div>
                </div>
                <div class="card">
                <div class="card-body">
                <img alt="img-food" id="item-protein-gambar-bahan-protein-3" class="lazyload">
                <div class="card-body-details">
                  <h5 id="item-protein-nama-bahan-protein-3"></h5>
                  <h6 class="type-of-food" id="item-protein-type-of-food-protein-3"></h6>
                  <div class="dose-detail">
                      <svg width="22" height="20" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.0874 0C21.216 0 22.13 0.915076 22.13 2.0426V4.426C22.13 6.48572 21.4916 8.49481 20.3026 10.1767C19.1137 11.8587 17.4327 13.1308 15.491 13.818V14.9378C15.491 15.3779 15.3161 15.8001 15.0049 16.1114C14.6936 16.4226 14.2714 16.5975 13.8312 16.5975H8.29875C7.85856 16.5975 7.43639 16.4226 7.12513 16.1114C6.81387 15.8001 6.639 15.3779 6.639 14.9378V13.818C4.69729 13.1308 3.01629 11.8587 1.82736 10.1767C0.638435 8.49481 2.501e-05 6.48572 0 4.426V2.0426C0 0.913969 0.915075 0 2.0426 0H20.0874Z" fill="#7C766B"/>
                      </svg>
                      <h6 id ="item-protein-takaran-bahan-protein-3"></h6>
                  </div>
                  <div class="weight-detail">
                      <svg width="23" height="21" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0674 5.39741C11.5207 5.39741 11.901 5.24381 12.2082 4.93661C12.5154 4.62941 12.6684 4.24968 12.6674 3.79741C12.6674 3.34408 12.5138 2.96381 12.2066 2.65661C11.8994 2.34941 11.5196 2.19635 11.0674 2.19741C10.614 2.19741 10.2338 2.35101 9.92657 2.65821C9.61937 2.96541 9.46631 3.34515 9.46737 3.79741C9.46737 4.25075 9.62097 4.63101 9.92817 4.93821C10.2354 5.24541 10.6151 5.39848 11.0674 5.39741ZM13.8034 5.39741H17.557C18.213 5.39741 18.7783 5.60755 19.253 6.02781C19.7266 6.44808 20.0092 6.98355 20.101 7.63421L22.1042 21.6662C22.2172 22.4406 22.0167 23.1233 21.5026 23.7142C20.9884 24.303 20.3303 24.5974 19.5282 24.5974H2.60657C1.80444 24.5974 1.14631 24.3025 0.632174 23.7126C0.118041 23.1227 -0.0824925 22.4401 0.0305742 21.6646L2.03377 7.63421C2.12551 6.98355 2.40817 6.44808 2.88177 6.02781C3.35751 5.60755 3.92337 5.39741 4.57937 5.39741H8.33298C8.19217 5.17128 8.07964 4.92168 7.99537 4.64861C7.91004 4.37448 7.86737 4.09075 7.86737 3.79741C7.86737 2.89501 8.17511 2.13608 8.79057 1.52061C9.40604 0.905146 10.165 0.597412 11.0674 0.597412C11.9698 0.597412 12.7287 0.905146 13.3442 1.52061C13.9596 2.13608 14.2674 2.89501 14.2674 3.79741C14.2674 4.09075 14.2252 4.37448 14.141 4.64861C14.0567 4.92168 13.9442 5.17128 13.8034 5.39741Z" fill="#7C766B"/>
                      </svg>
                      <h6 id="item-protein-berat-bahan-protein-3"></h6>
                  </div>
                  <div class="cals-detail">
                          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                            <path fill="#7c766b" d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"/>
                          </svg>
                          <h6 id="item-protein-kalori-bahan-protein-3"></h6>
                  </div>
                </div>
              </div>
                </div>
            </div>
        </div>
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
  </div>

      <section class = 'register-content-container'>
        <div class = 'register-content'>
          <h3>Bersama BabyBoost, Ayo Mulai Penuhi Gizi Anak Sekarang!</h3>
          <p>Yuk bergabung di BabyBoost, untuk memantau pertumbuhan gizi anak secara praktis dan informatif. Mari kita bersama-sama memberikan yang terbaik untuk masa depan si kecil!</p>
          <div class= "btn-reg">
            <a href="#/daftar">Daftar</a>
          </div>
        </div>
      </section>
    `;

    return content;
  }

  async InitializeEvent() {
    const Indicator = document.getElementById('waitingIndicatorCat');

    this.SkipToContent();

    try {
      Indicator.style.display = 'flex';

      this.BtnDynamicContentListener();
      await this.fetchData('karbohidrat', 'item-karbohidratLandingPage', 'rgb(233, 227, 236)', '#522a68', 'karbo');
    } finally {
      Indicator.style.display = 'none';
    }
    this.fetchData('lemak', 'item-lemak', 'rgb(230, 241, 255)', '#282B7E', 'lemak');
    this.fetchData('protein', 'item-protein', 'rgb(236, 227, 227)', '#832B2B', 'protein');
  }

  capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  async fetchData(url, elementIdPrefix, bgColor, textColor, desc) {
    try {
      const response = await fetch(`https://api-babyboost.cyclic.app/api/rekomendasiBahan/get/${url}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
      const data = await response.json();

      data.forEach((item, index) => {
        const cardIndex = index + 1;

        document.getElementById(`${elementIdPrefix}-nama-bahan-${desc}-${cardIndex}`).innerText = this.capitalizeFirstLetter(item.nama);
        document.getElementById(`${elementIdPrefix}-type-of-food-${desc}-${cardIndex}`).innerText = this.capitalizeFirstLetter(item.tipe_gizi.trim());
        document.getElementById(`${elementIdPrefix}-type-of-food-${desc}-${cardIndex}`).style.backgroundColor = bgColor;
        document.getElementById(`${elementIdPrefix}-type-of-food-${desc}-${cardIndex}`).style.color = textColor;
        document.getElementById(`${elementIdPrefix}-takaran-bahan-${desc}-${cardIndex}`).innerText = item.takaran;
        document.getElementById(`${elementIdPrefix}-berat-bahan-${desc}-${cardIndex}`).innerText = `${item.berat} gram`;
        document.getElementById(`${elementIdPrefix}-kalori-bahan-${desc}-${cardIndex}`).innerText = `${item.kalori} kkal`;

        const base64String = item.gambar;
        const imageElement = document.getElementById(`${elementIdPrefix}-gambar-bahan-${desc}-${cardIndex}`);
        imageElement.src = base64String;
      });
    } catch {}
  }

  BtnDynamicContentListener() {
    const buttons = document.querySelectorAll('.button-cta button');
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        changeDynamicContent(this.dynamicContent, index + 1);
      });
    });
  }

  SkipToContent() {
    const skipToContent = document.querySelector('#skip-to-content');

    if (skipToContent) {
      skipToContent.addEventListener('keydown', (event) => {
        if (event.code === 'Enter' || event.code === 'Space') {
          event.preventDefault(); // Prevent the default behavior of the key press

          const contentElement = document.getElementById('main-content');

          if (contentElement) {
            contentElement.scrollIntoView({ behavior: 'smooth' }); // Scroll to the content
          }
        }
      });
    }
  }
}

export default LandingPage;
