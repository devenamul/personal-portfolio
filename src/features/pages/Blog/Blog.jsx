
import './Blog.css'

const Blog = () => {
  return (
    <>
       
      <div className="preloader med-loading">
         <div className="loader"></div>
      </div>
     

      <div className="tp-offcanvas-area">
         <div className="tp-offcanvas-wrapper">
            <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
               <div className="tp-offcanvas-logo">
                  <a href="/">
                     <img data-width="98" src="/img/logo/logo-white.png" alt=""/>
                  </a>
               </div>
               <div className="tp-offcanvas-close">
                  <button className="tp-offcanvas-close-btn">
                     <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.19141 9.80762L27.5762 28.1924" stroke="currentColor" stroke-width="1.5"
                           stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.19141 28.1924L27.5762 9.80761" stroke="currentColor" stroke-width="1.5"
                           stroke-linecap="round" stroke-linejoin="round" />
                     </svg>
                  </button>
               </div>
            </div>
            <div className="tp-offcanvas-main">
               <div className="tp-offcanvas-content">
                  <h3 className="tp-offcanvas-title">Hello There!</h3>
                  <p>Welcome to my portfolio! Explore my work, learn more about my services, and feel free to connect anytime.</p>
               </div>
               <div className="tp-offcanvas-menu d-xl-none">
                  <nav></nav>
               </div>
               <div className="tp-offcanvas-contact">
                  <h3 className="tp-offcanvas-title fs-20">My Information</h3>
                  <ul>
                     <li><a href="tel:1245654">+01960233363</a></li>
                     <li><a href="mailto:hello@heikoinfo.com">engenamul2@gmail.com</a></li>
                     <li><a href="#">Uttar Badda, Dhaka</a></li>
                  </ul>
               </div>
               <div className="tp-offcanvas-social">
                  <h3 className="tp-offcanvas-title sm">Follow Me</h3>
                  <ul>
                     <li>
                        <a href="https://x.com/smenamulhaque23" target="_blank" rel="noopener noreferrer" className="tp-home-social-icon">
                           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.9027 8.46864L19.3482 0H17.5838L11.119 7.3532L5.95547 0H0L7.8082 11.1193L0 20H1.76443L8.59152 12.2348L14.0445 20H20L11.9023 8.46864H11.9027ZM9.48608 11.2173L8.69495 10.1101L2.40018 1.29967H5.11025L10.1902 8.40994L10.9813 9.51718L17.5847 18.7594H14.8746L9.48608 11.2177V11.2173Z" fill="#D2D2D2" />
                           </svg>
                        </a>
                     </li>
                     <li>
                        <a href="https://www.facebook.com/s.m.enamul.haque.55291" target="_blank" rel="noopener noreferrer"className="tp-home-social-icon">
                           <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.74157 20V10.8777H9.80231L10.2615 7.32156H6.74157V5.05147C6.74157 4.0222 7.02622 3.32076 8.50386 3.32076L10.3854 3.31999V0.13923C10.06 0.0969453 8.94308 0 7.64308 0C4.92848 0 3.07002 1.65697 3.07002 4.69927V7.32156H0V10.8777H3.07002V20H6.74157Z" fill="#D2D2D2" />
                           </svg>
                        </a>
                     </li>
                     <li>
                        <a href="https://www.instagram.com/smenamulhaque23/profilecard/?igsh=MjB0dnJvYWFjMnQ2" target="_blank" rel="noopener noreferrer" className="tp-home-social-icon">
                           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14.5862 0H5.41382C2.42859 0 0 2.42859 0 5.41382V14.5863C0 17.5714 2.42859 20 5.41382 20H14.5863C17.5714 20 20 17.5714 20 14.5863V5.41382C20 2.42859 17.5714 0 14.5862 0ZM18.8275 14.5863C18.8275 16.9249 16.9249 18.8275 14.5862 18.8275H5.41382C3.0751 18.8275 1.17249 16.9249 1.17249 14.5863V5.41382C1.17249 3.0751 3.0751 1.17249 5.41382 1.17249H14.5863C16.9249 1.17249 18.8275 3.0751 18.8275 5.41382V14.5863Z" fill="#D2D2D2" />
                              <path d="M9.99985 4.53139C6.98441 4.53139 4.53125 6.98454 4.53125 9.99998C4.53125 13.0154 6.98441 15.4686 9.99985 15.4686C13.0153 15.4686 15.4684 13.0154 15.4684 9.99998C15.4684 6.98454 13.0153 4.53139 9.99985 4.53139ZM9.99985 14.2961C7.63107 14.2961 5.70374 12.3689 5.70374 9.99998C5.70374 7.63121 7.63107 5.70387 9.99985 5.70387C12.3688 5.70387 14.296 7.63121 14.296 9.99998C14.296 12.3689 12.3688 14.2961 9.99985 14.2961Z" fill="#D2D2D2" />
                              <path d="M15.5981 2.58925C14.707 2.58925 13.9822 3.31419 13.9822 4.20515C13.9822 5.09627 14.707 5.82121 15.5981 5.82121C16.4892 5.82121 17.2141 5.09627 17.2141 4.20515C17.2141 3.31404 16.4892 2.58925 15.5981 2.58925ZM15.5981 4.64857C15.3536 4.64857 15.1547 4.4496 15.1547 4.20515C15.1547 3.96056 15.3536 3.76173 15.5981 3.76173C15.8427 3.76173 16.0417 3.96056 16.0417 4.20515C16.0417 4.4496 15.8427 4.64857 15.5981 4.64857Z" fill="#D2D2D2" />
                           </svg>
                        </a>
                     </li>
                     <li>
                        <a href="https://www.linkedin.com/in/enamulsarder-full-stack-webseveloper/" target="_blank" rel="noopener noreferrer"className="tp-home-social-icon">
                           <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="11" cy="11" r="10" stroke="#D2D2D2" stroke-width="1.4" />
                              <path d="M8 8.5C8 8.22386 8.22386 8 8.5 8H9.5C9.77614 8 10 8.22386 10 8.5V13.5C10 13.7761 9.77614 14 9.5 14H8.5C8.22386 14 8 13.7761 8 13.5V8.5Z" stroke="#D2D2D2" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M12 10C12 9.44772 12.4477 9 13 9H13.5C14.3284 9 15 9.67157 15 10.5V13.5C15 13.7761 14.7761 14 14.5 14H13.5C13.2239 14 13 13.7761 13 13.5V11.5C13 11.2239 12.7761 11 12.5 11H12C12 11 12 10.5 12 10Z" stroke="#D2D2D2" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                              <circle cx="8.75" cy="6.75" r="0.75" fill="#D2D2D2"/>
                            </svg>
                        </a>
                     </li>
                     <li>
                        <a href="https://github.com/devenamul" target="_blank" rel="noopener noreferrer" className="tp-home-social-icon">
                           <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 0.5C5.37 0.5 0 5.87 0 12.5C0 17.89 3.438 22.39 8.207 23.96C8.805 24.06 9.025 23.72 9.025 23.42C9.025 23.15 9.015 22.39 9.01 21.39C5.672 22.09 4.968 19.64 4.968 19.64C4.437 18.24 3.672 17.87 3.672 17.87C2.547 17.09 3.758 17.1 3.758 17.1C4.992 17.19 5.63 18.39 5.63 18.39C6.75 20.29 8.547 19.78 9.225 19.48C9.325 18.73 9.625 18.23 9.96 17.95C7.26 17.67 4.438 16.6 4.438 11.84C4.438 10.49 4.922 9.4 5.738 8.54C5.61 8.25 5.18 6.98 5.85 5.29C5.85 5.29 6.86 4.98 9.01 6.44C9.98 6.18 11.01 6.05 12.04 6.05C13.07 6.05 14.1 6.18 15.07 6.44C17.21 4.98 18.22 5.29 18.22 5.29C18.89 6.98 18.46 8.25 18.34 8.54C19.16 9.4 19.64 10.49 19.64 11.84C19.64 16.61 16.81 17.66 14.1 17.94C14.52 18.31 14.89 19.01 14.89 20.08C14.89 21.64 14.87 22.93 14.87 23.42C14.87 23.72 15.09 24.07 15.69 23.96C20.46 22.38 24 17.88 24 12.5C24 5.87 18.63 0.5 12 0.5Z" fill="#D2D2D2"/>
                            </svg>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
      <div className="body-overlay"></div>
     

      <header>
         <div className="tp-header-2-area">
            <div className="container">
               <div className="tp-header-border tp-header-spacing">
                  <div className="row align-items-center">
                     <div className="col-4 col-xl-2">
                        <div className="tp-header-logo">
                           <a href="/"><img src="/img/logo/logo-white.png" alt=""/></a>
                        </div>
                     </div>
                     <div className="col-lg-6 d-none d-xl-block">
                        <div className="tp-main-menu">
                           <nav className="tp-mobile-menu-active">
                              <ul>
                                 <li className="/"><a href="/">Home</a></li>
                                 <li><a href="/about">About</a></li>
                                 <li><a href="/service">Service</a></li>
                                 <li><a href="/blog">Blog</a></li>
                                 <li><a href="/portfolio">Portfolio</a></li>
                                 <li><a href="/contact">Contact</a></li>
                                 <li className="signIn-signUp-offcanvas-btn"><a href="#">SignIn/SignUp</a></li>
                              </ul>
                           </nav>
                        </div>
                     </div>
                     <div className="col-8 col-xl-4">
                        <div className="tp-header-btn text-end">
                           <a className="tp-btn d-none d-sm-inline-block" href="/contact">SignIn/SignUp</a>
                           <button className="tp-header-bar tp-offcanvas-open-btn d-xl-none ml-10">
                              <span>
                                 <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.8808 10.2976H3.8808" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M21.8808 6.29756H3.8808" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M21.8808 14.2976H3.8808" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M21.8808 18.2976H3.8808" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                 </svg>
                              </span>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>

      <main>
        
         <div className="blog-section">
            <div className="container">
               <div className="row mt-3">
                  <div className="blog-information text-center mt-3 mb-4">
                     <p>Check out my latest blog posts</p>
                     <h2><span className="blog-post-top-heading">My Blog</span></h2>
                   </div>                                                        
                   <div className="col-md-4 mb-4">
                     <div className="card blog-card w-100">
                       
                       
                       <div className="position-relative">
                         <img src="/img/blog/post/post-2.jpg" className="card-img-top bg-transparent border-0" alt="..."/>
                         
                        
                         <button className="btn btn-success position-absolute bottom-0 start-0 text-white">
                           02/12/2025
                         </button>
                       </div>
                   
                       <div className="card-body">
                         <h5 className="card-title text-white text-truncate">Top tools for Photographajkldfshjsdlfhjk</h5>
                         <p className="card-text blog-post-pra truncate-multiline">
                           Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                         </p>
                         <a href="#" className="card-button">Read More Post</a>
                       </div>
                     </div>
                   </div>
                   
                   
                  <div className="col-md-4 mb-4">
                     <div className="card blog-card w-100">
                        <div className="position-relative">
                           <img src="/img/blog/post/post-2.jpg" className="card-img-top bg-transparent border-0" alt="..."/>
                           

                           <button className="btn btn-success position-absolute bottom-0 start-0 text-white">
                             02/12/2025
                           </button>
                         </div>
                        <div className="card-body">
                          <h5 className="card-title text-white text-truncate">Top tools for Photographajkldfshjsdlfhjk</h5>
                          <p className="card-text blog-post-pra truncate-multiline">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, excepturi voluptatum totam fugit enim qui natus ipsa nulla expedita magnam, dicta inventore molestiae modi quia! Deserunt reprehenderit ullam maiores ipsum?</p>
                          <a href="#" className="card-button">Read More Post</a>
                        </div>
                      </div>
                  </div>
                  <div className="col-md-4 mb-4">
                     <div className="card blog-card w-100">
                        <div className="position-relative">
                           <img src="/img/blog/post/post-2.jpg" className="card-img-top bg-transparent border-0" alt="..."/>
                           

                           <button className="btn btn-success position-absolute bottom-0 start-0 text-white">
                             02/12/2025
                           </button>
                         </div>
                        <div className="card-body">
                          <h5 className="card-title text-white text-truncate">Top tools for Photographajkldfshjsdlfhjk</h5>
                          <p className="card-text blog-post-pra truncate-multiline">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, excepturi voluptatum totam fugit enim qui natus ipsa nulla expedita magnam, dicta inventore molestiae modi quia! Deserunt reprehenderit ullam maiores ipsum?</p>
                          <a href="#" className="card-button">Read More Post</a>
                        </div>
                      </div>
                  </div>
                  <div className="col-md-4 mb-4">
                     <div className="card blog-card w-100">
                        <div className="position-relative">
                           <img src="/img/blog/post/post-2.jpg" className="card-img-top bg-transparent border-0" alt="..."/>
                           

                           <button className="btn btn-success position-absolute bottom-0 start-0 text-white">
                             02/12/2025
                           </button>
                         </div>
                        <div className="card-body">
                          <h5 className="card-title text-white text-truncate">Top tools for Photographajkldfshjsdlfhjk</h5>
                          <p className="card-text blog-post-pra truncate-multiline">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, excepturi voluptatum totam fugit enim qui natus ipsa nulla expedita magnam, dicta inventore molestiae modi quia! Deserunt reprehenderit ullam maiores ipsum?</p>
                          <a href="#" className="card-button">Read More Post</a>
                        </div>
                      </div>
                  </div>
                  <div className="col-md-4 mb-4">
                     <div className="card blog-card w-100">
                        <div className="position-relative">
                           <img src="/img/blog/post/post-2.jpg" className="card-img-top bg-transparent border-0" alt="..."/>
                           

                           <button className="btn btn-success position-absolute bottom-0 start-0 text-white">
                             02/12/2025
                           </button>
                         </div>
                        <div className="card-body">
                          <h5 className="card-title text-white text-truncate">Top tools for Photographajkldfshjsdlfhjk</h5>
                          <p className="card-text blog-post-pra truncate-multiline">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, excepturi voluptatum totam fugit enim qui natus ipsa nulla expedita magnam, dicta inventore molestiae modi quia! Deserunt reprehenderit ullam maiores ipsum?</p>
                          <a href="#" className="card-button">Read More Post</a>
                        </div>
                      </div>
                  </div>
                  <div className="col-md-4 mb-4">
                     <div className="card blog-card w-100">
                        <div className="position-relative">
                           <img src="/img/blog/post/post-2.jpg" className="card-img-top bg-transparent border-0" alt="..."/>
                           

                           <button className="btn btn-success position-absolute bottom-0 start-0 text-white">
                             02/12/2025
                           </button>
                         </div>
                        <div className="card-body">
                          <h5 className="card-title text-white text-truncate">Top tools for Photographajkldfshjsdlfhjk</h5>
                          <p className="card-text blog-post-pra truncate-multiline">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, excepturi voluptatum totam fugit enim qui natus ipsa nulla expedita magnam, dicta inventore molestiae modi quia! Deserunt reprehenderit ullam maiores ipsum?</p>
                          <a href="#" className="card-button">Read More Post</a>
                        </div>
                      </div>
                  </div>
               <div className="row">
                  <div className="tp-home-2-copyright pt-85 tp-about-contact-copyright text-center pb-25">
                     <p>© 2025 All rights reserved by  <a href="#">Eng. Enamul</a></p>
                  </div>
               </div>
            </div>
         </div>
         </div>
         

      </main>
      
    </>
  )
}

export default Blog