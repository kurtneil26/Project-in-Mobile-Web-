<template>
<div class="content p-x">
<!-- Page Header -->
                <div class="md:flex block items-center justify-between mb-6 mt-[2rem]  page-header-breadcrumb">
                  <div class="my-auto">
                    <h5 class="page-title text-[1.3125rem] font-medium text-defaulttextcolor mb-0">Application History</h5>
                    <nav>
                      <ol class="flex items-center whitespace-nowrap min-w-0">
                        <li class="text-[12px]"> <a class="flex items-center text-primary hover:text-primary"
                            href="javascript:void(0);"> Dashboard <i
                              class="ti ti-chevrons-right flex-shrink-0 mx-3 overflow-visible text-textmuted rtl:rotate-180"></i>
                          </a> </li>
                        <li class="text-[12px]"> <a class="flex items-center text-textmuted"
                            href="javascript:void(0);">Application History
                          </a> </li>
                      </ol>
                    </nav>
                  </div>
                  </div>

                        <div class="box custom-box">
                            
                            <div class="box-body">
                                 <!-- Search Input -->
                    <div class="mb-6 flex justify-between items-center gap-2">
                    <div class="relative w-full max-w-lg flex">
                        <input
                        v-model="search"
                        type="text"
                        placeholder="Search applications..."
                        class="border border-gray-300 rounded-l-full px-4 py-2 w-full shadow-sm focus:outline-none focus:border-blue-400 transition"
                        />
                        <button
                        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-full flex items-center"
                        @click="onSearch"
                        >
                        <i class="fas fa-search"></i>
                        </button>
                    </div>
                    <select class="border border-blue-300 rounded-md px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400">
                        <option>All Loan Types</option>
                        <option>Regular Loan</option>
                        <option>Emergency Loan</option>
                        </select>
                    </div>
                                <div class="table-responsive">
                                    <table class="table whitespace-nowrap table-bordered min-w-full">
                                        <thead>
                                            <tr class="border-b border-defaultborder">
                                                <th scope="col" class="text-start">First Name</th>
                                                <th scope="col" class="text-start">Middle Name</th>
                                                <th scope="col" class="text-start">Last Name</th>
                                                <th scope="col" class="text-start">Phone Number</th>
                                                <th scope="col" class="text-start">Address</th>
                                                <th scope="col" class="text-start">Loan Amount</th>
                                                <th scope="col" class="text-start">Loan Type</th>
                                                <th scope="col" class="text-start">Status</th>
                                                <th scope="col" class="text-start">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="border-b border-defaultborder">
                                                <th scope="row">
                                                    <div class="flex items-center">
                                                    Kurt Neil
                                                    </div>
                                                </th>
                                                <th scope="row">
                                                    <div class="flex items-center">
                                                    C.
                                                    </div>
                                                </th>
                                                <th scope="row">
                                                    <div class="flex items-center">
                                                    Nacua
                                                    </div>
                                                </th>
                                                <th scope="row">
                                                    <div class="flex items-center">
                                                    09640763542
                                                    </div>
                                                </th>
                                                <th scope="row">
                                                    <div class="flex items-center">
                                                    Gayola, Kidapawan City
                                                    </div>
                                                </th>
                                                <th scope="row">
                                                    <div class="flex items-center">
                                                    10,000
                                                    </div>
                                                </th>
                                                <th scope="row">
                                                    <div class="flex items-center">
                                                    Personal Loan
                                                    </div>
                                                </th>
                                                <th scope="row">
                                                    <div class="flex items-center">
                                                    <span class="badge bg-danger text-white">Rejected</span>
                                                    </div>
                                                </th>
                                                 <td class="flex gap-2 flex-wrap">
                                                    <button type="button" class="ti-btn ti-btn-outline-danger ti-btn-wave  me-[0.375rem]">Delete</button>
                                                </td>
                                                
                                            </tr>
                                           
                                        </tbody>
                                    </table>
                                </div>
                                <!-- Pagination -->
        <div class="flex justify-end items-center mt-4 gap-x-2">
          <button
            class="px-3 py-1 border rounded"
            :disabled="page === 1"
            @click="page--"
          >
            Prev
          </button>
          <span>Page {{ page }} of {{ totalPages }}</span>
          <button
            class="px-3 py-1 border rounded"
            :disabled="page === totalPages"
            @click="page++"
          >
            Next
          </button>
        </div>
                            </div>
                        </div>
                    </div>                    
</template>
<script>
export default {
        name: 'ApplicationHistory',
        components: {
            // Add your components here
        }
    }
</script>