import "./DownloadSample.css";

function WelcomeSection() {
  return (
    <div class="row spaceX">
      <div class="col-4">
        <img src="/assets/Screenshot_26.png" class="banner-img" />
        <svg
          viewBox="0 0 2880 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z"
            fill="currentColor"
          ></path>
        </svg>
        <div class="form">
          <form action="">
            <div class="field">
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Name"
              />
              <label for="fullname">Name</label>
            </div>

            <div class="field">
              <input type="email" name="email" id="email" placeholder="Email" />
              <label for="email">Email</label>
            </div>
            <div class="field">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <label for="email">Password</label>
            </div>
            <button type="button" class="download-btn">
              Download a sample
            </button>
          </form>
        </div>
      </div>
      <div class="col-8">
        <div class="grid-text">
          <h1>The most useful resource</h1>
          <h1 class="green-h2">ever created for developers.</h1>
          <p>
            Using Landkit to build your site means never worrying about
            designing another page or cross browser compatibility. Our
            ever-growing library of components and pre-designed layouts will
            make your life easier.
          </p>
        </div>
        <div class="list">
          <div class="w-50">
            <div class="circle"></div>
            <div class="circle-text">Lifetime updates</div>
          </div>
          <div class="w-50">
            <div class="circle"></div>
            <div class="circle-text">Tech support</div>
          </div>
        </div>
        <div class="list">
          <div class="w-50">
            <div class="circle"></div>
            <div class="circle-text">Tons of assets</div>
          </div>
          <div class="w-50">
            <div class="circle"></div>
            <div class="circle-text">Integration ready</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;
