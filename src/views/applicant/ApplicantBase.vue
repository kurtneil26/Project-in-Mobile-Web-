<template>
        <!-- Start::app-sidebar -->
        <aside class="app-sidebar" id="sidebar">

            <!-- Start::main-sidebar-header -->
            <div class="main-sidebar-header">
                <a href="index.html" class="header-logo">
                    <img src="/assets/images/brand-logos/logo.png" alt="logo" class="desktop-logo">
                    <img src="/assets/images/brand-logos/logo.png" alt="logo" class="toggle-logo">
                    <img src="/assets/images/brand-logos/logo.png" alt="logo" class="desktop-dark">
                    <img src="/assets/images/brand-logos/logo.png" alt="logo" class="toggle-dark">
                </a>
            </div>
            <!-- End::main-sidebar-header -->

            <!-- Start::main-sidebar -->
            <div class="main-sidebar" id="sidebar-scroll">

                <!-- Start::nav -->
                <nav class="main-menu-container nav nav-pills flex-column sub-open">
                    <div class="slide-left" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24"
                            height="24" viewBox="0 0 24 24">
                            <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                        </svg></div>
                    <ul class="main-menu">
                        <!-- Start::slide__category -->
                        <li class="slide__category"><span class="category-name">Main</span></li>
                        <!-- End::slide__category -->

                        <!-- Start::slide -->
                        <li class="slide">
                            <router-link to="/applicant/dashboard" class="side-menu__item">
                                <svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon"  viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.5 4c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-7 0c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5 7.67 8 8.5 8zm3.5 9.5c-2.33 0-4.32-1.45-5.12-3.5h1.67c.7 1.19 1.97 2 3.45 2s2.76-.81 3.45-2h1.67c-.8 2.05-2.79 3.5-5.12 3.5z" opacity=".3"/><circle cx="15.5" cy="9.5" r="1.5"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M12 16c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2zm-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>
                                <span class="side-menu__label">Dashboard</span>
                            </router-link>
                        </li>
                            <!-- Start::slide -->
                             <li class="slide">
                            <router-link to="/applicant/apply" class="side-menu__item">
                                <svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon"  viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.5 4c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-7 0c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5 7.67 8 8.5 8zm3.5 9.5c-2.33 0-4.32-1.45-5.12-3.5h1.67c.7 1.19 1.97 2 3.45 2s2.76-.81 3.45-2h1.67c-.8 2.05-2.79 3.5-5.12 3.5z" opacity=".3"/><circle cx="15.5" cy="9.5" r="1.5"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M12 16c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2zm-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>
                                <span class="side-menu__label">Loan Applications</span>
                            </router-link>
                        </li>
                        <!-- End::slide --> 
                       
                    </ul>
                    <div class="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path> </svg></div>
                </nav>
                <!-- End::nav -->
                 </div>

        </aside>
        <!-- End::app-sidebar -->
         

        <!-- Start::Header -->
        <header class="app-header">
          <nav class="main-header" aria-label="Global">
            <div class="main-header-container !px-[0.85rem]">

              <div class="header-content-left">

              </div>
              <div class="header-content-right">

                <div class="header-element hs-dropdown search-dropdown ti-dropdown  lg:!hidden [--auto-close:inside]">
                  <a
                  href="javascript:void(0);" class="header-link dropdown-toggle" id="hs-dropdown-auto-close-inside"  data-bs-toggle="dropdown" aria-expanded="false"
                 > <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                      class="header-link-icon">
                      <path
                        d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z">
                      </path>
                    </svg> </a> 

                    <div class="hs-dropdown-menu ti-dropdown-menu hidden" aria-labelledby="hs-dropdown-auto-close-inside">
                      <div>
                        <div class="input-group w-full p-2"> <input type="text" class="form-control" placeholder="Search....">
                          <div class="ti-btn ti-btn-primary-full !mb-0"> <i class="fa fa-search" aria-hidden="true"></i> </div>
                        </div>
                      </div>
                  </div>
                </div>

                <!-- light and dark theme -->
                <div class="header-element header-theme-mode hidden !items-center sm:block !py-[1rem] !px-[0.65rem]">
                  <a aria-label="anchor"
                    class="hs-dark-mode-active:hidden flex hs-dark-mode group flex-shrink-0 justify-center items-center gap-2  rounded-full font-medium transition-all text-xs dark:bg-bodybg dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                    href="javascript:;" data-hs-theme-click-value="dark">
                    <svg xmlns="http://www.w3.org/2000/svg" class="header-link-icon" height="24" viewBox="0 -960 960 960"
                      width="24">
                      <path
                        d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
                    </svg>
                  </a>
                  <a aria-label="anchor"
                    class="hs-dark-mode-active:flex hidden hs-dark-mode group flex-shrink-0 justify-center items-center gap-2  rounded-full font-medium text-defaulttextcolor  transition-all text-xs dark:bg-bodybg  dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                    href="javascript:;" data-hs-theme-click-value="light">
                    <svg xmlns="http://www.w3.org/2000/svg" class="header-link-icon" fill="currentColor" height="24"
                      viewBox="0 -960 960 960" width="24">
                      <path
                        d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" />
                    </svg>
                  </a>
                </div>
                <!-- End light and dark theme -->
                <!-- End::header-element -->

                <!-- Header Profile -->
                <div
                  class="header-element md:!px-[0.5rem] px-2 hs-dropdown profile-dropdown !items-center ti-dropdown [--placement:bottom-left]">

                  <button id="dropdown-profile" type="button"
                  class="hs-dropdown-toggle ti-dropdown-toggle !gap-2 !p-0 flex-shrink-0 me-0 !shadow-none text-xs align-middle !border-0 !shadow-transparent">
                  <img class="inline-block w-12 h-12 object-cover rounded-full" 
                    src="/assets/images/faces/face.jpg" 
                    alt="Profile Picture">
                </button>
                  <div
                    class="main-header-dropdown !-mt-2 !p-0 hs-dropdown-menu ti-dropdown-menu  bg-white  !border-0 border-defaultborder hidden !m-0"
                    aria-labelledby="dropdown-profile">

                    <ul class="dropdown-menu pt-0 header-profile-dropdown dropdown-menu-end main-profile-menu"
                      aria-labelledby="mainHeaderProfile">
                      <li>
                        <div class="main-header-profile bg-primary menu-header-content text-white">
                          <div class="my-auto">
                            <h6 class="mb-0 leading-none text-white">Kurt Neil Nacua</h6><span
                              class="text-[.6875rem] opacity-[0.7] leading-none">Student</span>
                          </div>
                        </div>
                      </li>
                      <li><a class="dropdown-item text-defaulttextcolor flex " href="profile.html"><i
                            class="bx bx-user-circle text-[1.125rem] me-2 opacity-[0.7]"></i>Profile</a></li>
                      <li><a class="dropdown-item text-defaulttextcolor flex " href="profile.html"><i
                            class="bx bx-cog text-[1.125rem] me-2 opacity-[0.7]"></i>Edit Profile </a></li>
                      <li><a class="dropdown-item text-defaulttextcolor flex  border-block-end" href="profile.html"><i
                            class="bx bx-slider-alt text-[1.125rem] me-2 opacity-[0.7]"></i>Account Settings</a></li>
                      <li><a class="dropdown-item text-defaulttextcolor !rounded-bl-md !rounded-br-md flex "
                          href="sign-in-basic.html"><i class="bx bx-log-out text-[1.125rem] me-2 opacity-[0.7]"></i>Sign Out</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- End Header Profile -->

                <!-- End::header-element -->
              </div>
            </div>
          </nav>
        </header>
        <!-- End::Header -->

            <!--APP-CONTENT START-->

                  <router-view />
               

    <!-- Back To Top -->
    <div class="scrollToTop">
        <span class="arrow"><i class="ri-arrow-up-s-fill text-xl"></i></span>
    </div>

    <div id="responsive-overlay"></div>

  </template>
  
<script>
export default {
  name: "ApplicantBase"
};
</script>

