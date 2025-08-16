<template>
 <!--APP-CONTENT START-->
            <div class="content">
                <div class="main-content">

                          <!-- Start::page-header -->
        <div class="md:flex block items-center justify-between my-0 page-header-breadcrumb">
          <div>
            <h4 class=" pt-4 mb-0 text-defaulttextcolor font-medium">Hi, welcome back!</h4>
            <p class="-mt-[0.2rem] mb-0 text-textmuted">Sales monitoring dashboard template.</p>
          </div>
        </div>
        <!-- End::page-header -->

        <!-- row -->
        <div class="grid grid-cols-12 gap-x-6">
          <div class="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
            <div class="box overflow-hidden sales-box bg-primary-gradient !rounded-sm">
              <div class="px-4 pt-4 pb-2">
                <div>
                  <h6 class="mb-3 text-[.75rem] font-medium text-fixed-white">TODAY ORDERS</h6>
                </div>
                <div class="pb-0 mt-0">
                  <div class="flex">
                    <div>
                      <h4 class="font-bold text-[1.25rem] text-fixed-white">$5,74.12</h4>
                      <p class="mb-0 text-[.75rem] text-fixed-white opacity-[0.7]">Compared to last week</p>
                    </div>
                    <span class="float-end my-auto ms-auto">
                      <i class="fas fa-arrow-circle-up text-fixed-white"></i>
                      <span class="text-fixed-white opacity-[0.7]"> +427</span>
                    </span>
                  </div>
                </div>
              </div>
              <div id="compositeline" class="!-mb-[2px]"></div>
            </div>
          </div>
          <div class="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
            <div class="box  overflow-hidden sales-card bg-danger-gradient !rounded-sm">
              <div class="px-4 pt-4 pb-2">
                <div>
                  <h6 class="mb-3 text-[.75rem] font-medium text-fixed-white">TODAY EARNINGS</h6>
                </div>
                <div class="pb-0 mt-0">
                  <div class="flex">
                    <div>
                      <h4 class="text-[1.25rem] font-bold text-fixed-white">$1,230.17</h4>
                      <p class="mb-0  text-[.75rem] text-fixed-white opacity-[0.7]">Compared to last week</p>
                    </div>
                    <span class="float-end my-auto ms-auto">
                      <i class="fas fa-arrow-circle-down text-fixed-white"></i>
                      <span class="text-fixed-white opacity-[0.7]"> -23.09%</span>
                    </span>
                  </div>
                </div>
              </div>
              <div id="compositeline2" class="!-mb-[2px]"></div>
            </div>
          </div>
          <div class="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
            <div class="box  overflow-hidden sales-card bg-success-gradient !rounded-sm">
              <div class="px-4 pt-4 pb-2">
                <div>
                  <h6 class="mb-3 text-[.75rem] font-medium text-fixed-white">TOTAL EARNINGS</h6>
                </div>
                <div class="pb-0 mt-0">
                  <div class="flex">
                    <div>
                      <h4 class="text-[1.25rem] font-bold text-fixed-white">$7,125.70</h4>
                      <p class="mb-0 text-[.75rem] text-fixed-white opacity-[0.7]">Compared to last week</p>
                    </div>
                    <span class="float-end my-auto ms-auto">
                      <i class="fas fa-arrow-circle-up text-fixed-white"></i>
                      <span class="text-fixed-white opacity-[0.7]"> 52.09%</span>
                    </span>
                  </div>
                </div>
              </div>
              <div id="compositeline3" class="!-mb-[2px]"></div>
            </div>
          </div>
          <div class="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
            <div class="box  overflow-hidden sales-card bg-warning-gradient !rounded-sm">
              <div class="px-4 pt-4 pb-2">
                <div>
                  <h6 class="mb-3 text-[.75rem] font-medium text-fixed-white">PRODUCT SOLD</h6>
                </div>
                <div class="pb-0 mt-0">
                  <div class="flex">
                    <div>
                      <h4 class="text-[1.25rem] font-bold text-fixed-white">$4,820.50</h4>
                      <p class="mb-0 text-[.75rem] text-fixed-white opacity-[0.7]">Compared to last week</p>
                    </div>
                    <span class="float-end my-auto ms-auto">
                      <i class="fas fa-arrow-circle-down text-fixed-white"></i>
                      <span class="text-fixed-white opacity-[0.7]"> -152.3</span>
                    </span>
                  </div>
                </div>
              </div>
              <div id="compositeline4" class="!-mb-[2px]"></div>
            </div>
          </div>
        </div>
        <!-- row closed -->
                
    <div class="xxl:col-span-6 md:col-span-12 col-span-12">
            <div class="box">
              <div class="box-header !border-b-0 !pb-0">
                <div class="flex justify-between">
                  <h4 class="box-title mb-2">Earnings</h4>
                  <div class="hs-dropdown ti-dropdown">
                    <a aria-label="anchor" href="javascript:void(0);"
                      class="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-defaulttextcolor !text-[0.8rem] !pt-1 !pb-[0.1rem] !px-2 avatar-rounded border border-light shadow-none !font-[500]"
                      data-bs-toggle="dropdown" aria-expanded="false"><i class="fe fe-more-horizontal text-[0.8rem]"></i>
                    </a>
                    <ul class="hs-dropdown-menu ti-dropdown-menu hidden">
                      <li><a class="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-[500] block"
                          href="javascript:void(0);">Action</a></li>
                      <li><a class="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-[500] block"
                          href="javascript:void(0);">Another action</a></li>
                      <li><a class="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-[500] block"
                          href="javascript:void(0);">Something else here</a></li>
                    </ul>
                  </div>
                </div>
                <div>
                  <p class="text-[.75rem] text-textmuted font-normal mb-0">Unlock Insights, Uncover Opportunities with Every Graph,Track Your Rewards with Clarity and Precision.</p>
                </div>
              </div>
              <div class="box-body !pb-0">
                <div id="earnings"></div>
              </div>
            </div>
          </div>


    </div>
    </div>

</template>


    <script>
export default {
        name: 'Dashboard',
        components: {
            // Add your components here
        }
    }
</script>