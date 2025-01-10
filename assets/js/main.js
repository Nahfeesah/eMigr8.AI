
(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });


  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });


  /* Scrolling text animation */
  
  const firstH2 = document.getElementById('first-h2');
  const secondH2 = document.getElementById('second-h2');

  let currentVisible = firstH2;

  // Function to toggle the push-and-pull effect
  function toggleHeadings() {
    if (currentVisible === firstH2) {
      // First h2 moves up and second h2 comes from bottom
      firstH2.classList.remove('center');
      firstH2.classList.add('up');
      secondH2.classList.remove('down');
      secondH2.classList.add('center');
      currentVisible = secondH2;
    } else {
      // Second h2 moves down and first h2 comes from top
      secondH2.classList.remove('center');
      secondH2.classList.add('down');
      firstH2.classList.remove('up');
      firstH2.classList.add('center');
      currentVisible = firstH2;
    }
  }

  // Initialize the animation
  function init() {
    firstH2.classList.add('center'); // Start with the first h2 visible
    secondH2.classList.add('down');  // Start with the second h2 off-screen (bottom)
    setInterval(toggleHeadings, 2000); // Toggle every 3 seconds
  }

  window.onload = init;


  // dynamically download the app 
  // Function to handle dynamic redirection
  function redirectToPlatform() {
    const userAgent = navigator.userAgent || window.opera;

    if (/android/i.test(userAgent)) {
      // Redirect to Android link
      window.open('https://play.google.com/store/apps/details?id=com.bincom.emigr8app&amp;pcampaignid=web_share&amp;pli=1', '_blank');
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      // Redirect to iOS link
      window.open('https://apps.apple.com/ng/app/emigr8-tech-visa/id6480083188', '_blank');
    } else {
      // Redirect to web link (for desktop or unsupported devices)
      window.open('https://app.emigr8visa.com', '_blank');
    }
  }

  // Attach the function to the link
  document.getElementById('dynamic-download').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default behavior of the link
    redirectToPlatform(); // Call the redirection function
  });




})();