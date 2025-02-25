function Footer() {
    return (
        <footer className="footer_2">
        <div className="container">
          <div
            className="footer_2_subscription_bg"
            style={{
              background:
                'url("https://demo.websolutionus.com/dirlist/user/images/subscribe_bg.jpg")',
            }}
          >
            <div className="row">
              <div className="col-lg-6">
                <div className="footer_2_subs_text">
                  <h2>Subscribe to Newsletter</h2>
                  <p>Subscribe to get update and information. send spam!</p>
                </div>
              </div>
              <div className="col-lg-6">
                <form className="footer_2_subs_form" id="subscribeForm">
                  <input
                    id="subscribe_email"
                    name="email"
                    type="text"
                    placeholder="Email address here"
                  />
                  <button
                    className="common_btn_2"
                    type="submit"
                    id="subscribeBtn"
                  >
                    <i
                      id="subscribe-spinner"
                      className="loading-icon fas fa-sync fa-spin d-none"
                      aria-hidden="true"
                    />
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          className="footer_2_bg"
          style={{
            background:
              'url("https://dirlist.websolutionus.com/user/images/footer_2_bg.jpg")',
          }}
        >
          <div className="footer_2_overlay">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-xl-4 col-md-6 col-lg-4">
                  <div className="footer_text">
                    <a className="footer_logo" href=" ">
                      <img
                        src= " "
                        alt=""
                      />
                    </a>
                    <p>
                    Business is the rhythm of ideas, where every decision tells a story, and every action reflects success.
                    </p>
                    <ul className="footer_icon">
                      <ul className="footer_social">
                        <li>
                          <a href=" "><svg
    fill="#000000"
    width="24"
    height="24"
    viewBox="0 0 310 310"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064c2.54,0,4.677-1.906,4.967-4.429
      l5.933-48.642c0.195-1.596-0.327-3.198-1.435-4.419c-1.107-1.221-2.677-1.922-4.334-1.922h-43.195V85.081
      c0-9.438,7.672-17.11,17.11-17.11h28.089c2.762,0,5-2.238,5-5V16.33c0-2.762-2.238-5-5-5h-45.659c-29.315,0-53.155,23.841-53.155,53.156
      v36.051H81.703c-2.762,0-5,2.238-5,5v48.569C76.703,162.868,78.941,165.106,81.703,165.106z"/>
    </g>
  </svg>
                            <i
                              className="fab fa-facebook-f"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                        <li>
                          <a href=" ">
                          <svg
    fill="#000000"
    width="24"
    height="24"
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M245.65723,77.65674l-30.16407,30.16455C209.4707,177.70215,150.53809,232,80,232c-14.52441,0-26.49414-2.30273-35.57764-6.84473-7.33056-3.665-10.33349-7.59912-11.07861-8.71777a8,8,0,0,1,3.84717-11.92822c.25732-.09717,23.84814-9.15772,39.09521-26.40869a109.40671,109.40671,0,0,0,21.65967-38.05225c-8.207-2.57178-15.15674-5.93652-20.68359-10.0205-13.30371-10.14014-20.502-24.30469-21.28564-41.02442a7.99961,7.99961,0,0,1,10.42236-7.97168c.09961.02637,10.41846,2.61963,22.70215,1.24463A39.97374,39.97374,0,0,1,80,48c0-15.46338,8.79736-29.85352,24.83691-41.7417C124.33594-2.17773,138.917-4.28564,150.49121.68994a7.99981,7.99981,0,0,1,4.92139,8.46289,87.77383,87.77383,0,0,0,21.98291,73.20654L245.65723,77.65674Z"/>
  </svg>
                            <i className="fab fa-twitter" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href=" ">
                          <svg
    fill="#000000"
    width="24"
    height="24"
    viewBox="-143 145 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.5c0-15.6,12.1-27.4,30.6-27.4s29.8,11.8,30.2,27.4C45.7,316.3,33.7,328.4,15.1,328.4z M208.5,508.1h-49.7V422c0-20.5-7.3-34.5-25.7-34.5c-14,0-22.3,9.4-26,18.5c-1.3,3.1-1.6,7.4-1.6,11.7v90.4h-49.7V348.4h49.7v21.9c7.1-10.9,19-26.3,46.1-26.3c33.7,0,58.9,22,58.9,69.2V508.1z"/>
  </svg>
                            <i className="fab fa-linkedin" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href=" ">
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
</svg> 
                            <i className="fab fa-youtube" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href=" ">
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
                            <i
                              className="fab fa-instagram"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                      </ul>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-lg-3">
                  <div className="footer_text">
                    <h3>Important Links</h3>
                    <ul className="footer_link">
                      <li>
                        <a href=" "> Home </a>
                      </li>
                      <li>
                        <a href=" ">Listings Categories</a>
                      </li>
                      <li>
                        <a href=" ">Listings</a>
                      </li>
                      <li>
                        <a href=" "> Blog </a>
                      </li>
                      <li>
                        <a href=" ">Pricing Plan</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-lg-4">
                  <div className="footer_text footer_contact">
                    <h3>Contact Us</h3>
                    <ul className="footer_link">
                      <li>
                        <p>
                        
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
                          India , Andhra Pradesh  ,Rajahmundry
                        </p>
                      </li>
                      <li>
                        <a href=" ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="red" className="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>
                          support@vscodes.com
                        </a>
                      </li>
                      <li>
                        <a href=" ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg>
                          799*****03
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <p>Copyright 2025, VScodes. All Rights Reserved.</p>
              </div>
              <div className="col-lg-6">
                <ul className="footer_bottom_link" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer
