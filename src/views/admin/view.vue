<template>
    <div class="content p-x">
  <div class="flex from-gray-50 to-indigo-50 overflow-hidden">

    <!-- Main Content -->
    <div class="ml- pt-16 flex-1 h-full overflow-y-auto">
      <div class="p-6">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold">
            <i class="fas fa-file-contract mr-2"></i> Applicant Documents
          </h2>
        </div>

        <!-- Applicant Information Card -->
        <div class="bg-white rounded-lg shadow-sm mb-10 overflow-hidden">
          <div class="flex justify-between items-center p-4 border-b">
            <span class="font-semibold">Applicant Information</span>
            <span 
              :class="{
                'bg-green-100 text-green-800': status === 'Approved',
                'bg-red-100 text-red-800': status === 'Rejected',
                'bg-yellow-100 text-yellow-800': status === 'Pending' || status === 'Unknown'
              }" 
              class="px-3 py-1 rounded-full text-xs font-medium"
            >
              {{ status }}
            </span>
          </div>
          <div class="p-5">
            <div class="text-center mb-6">
              <img :src="applicantPhoto" class="w-28 h-28 rounded-full object-cover border-3 border-blue-400 mx-auto mb-3" alt="Profile Photo">
              <h4 class="text-xl font-semibold">KURT</h4>
              <p class="text-gray-500">Applicant ID: 2025112603</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <!-- Personal Information -->
              <div>
                <h5 class="flex items-center text-lg font-medium mb-4">
                  <i class="fas fa-user-circle mr-2"></i>Personal Details
                </h5>
                <div class="space-y-3">
                  <div>
                    <div class="text-gray-600 text-sm mb-1">Full Name</div>
                    <div class="bg-gray-50 p-2 rounded">Kurt Neil C. Nacua</div>
                  </div>
                  <div>
                    <div class="text-gray-600 text-sm mb-1">Username</div>
                    <div class="bg-gray-50 p-2 rounded">KURT</div>
                  </div>
                  <div>
                    <div class="text-gray-600 text-sm mb-1">Date of Birth</div>
                    <div class="bg-gray-50 p-2 rounded">November 25 2003</div>
                  </div>
                  <div>
                    <div class="text-gray-600 text-sm mb-1">Age</div>
                    <div class="bg-gray-50 p-2 rounded">21</div>
                  </div>
                  <div>
                    <div class="text-gray-600 text-sm mb-1">Gender</div>
                    <div class="bg-gray-50 p-2 rounded">Male</div>
                  </div>
                </div>
              </div>

              <!-- Contact Information -->
               <div>
              <div class="col-span-1 md:col-span-2 lg:col-span-1">
                <h5 class="flex items-center text-lg font-medium mb-4">
                  <i class="fas fa-map-marker-alt mr-2"></i>Contact Details
                </h5>
                <div class="space-y-3">
                  <div>
                    <div class="text-gray-600 text-sm mb-1">Address</div>
                    <div class="bg-gray-50 p-2 rounded">Gayola, Kidapawan City</div>
                  </div>
                  <div>
                    <div class="text-gray-600 text-sm mb-1">Phone Number</div>
                    <div class="bg-gray-50 p-2 rounded">09640763542</div>
                  </div>
                </div>
              </div></div>

              <!-- Loan Application Details -->
              <div>
                <h5 class="flex items-center text-lg font-medium mb-4">
                  <i class="fas fa-file-invoice-dollar mr-2"></i>Loan Details
                </h5>
                <div class="space-y-3">
                  <div>
                    <div class="text-gray-600 text-sm mb-1">Application Date</div>
                    <div class="bg-gray-50 p-2 rounded">November 26, 2003</div>
                  </div>
                  <div>
                    <div class="text-gray-600 text-sm mb-1">Loan Type</div>
                    <div class="bg-gray-50 p-2 rounded">Regular Loan</div>
                  </div>
                  <div>
                    <div class="text-gray-600 text-sm mb-1">Loan Amount</div>
                    <div class="bg-gray-50 p-2 rounded">10,000</div>
                  </div>
                  <div>
                    <div class="text-gray-600 text-sm mb-1">Status</div>
                    <div class="bg-gray-50 p-2 rounded">Approved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Documents Card -->
        <div class="bg-white rounded-lg shadow-sm overflow-hidden mt-5">
          <div class="p-4 border-b">
            <h3 class="font-semibold">Submitted Documents</h3>
          </div>
          <div class="p-5">
            <!-- Document Tabs -->
            <ul class="flex border-b">
              <li class="mr-1">
                <button 
                  @click="activeTab = 'id-docs'"
                  :class="{'border-blue-500 text-blue-500': activeTab === 'id-docs', 'border-transparent text-gray-500': activeTab !== 'id-docs'}"
                  class="py-2 px-4 border-b-2 font-medium flex items-center"
                >
                  <i class="fas fa-id-card mr-2"></i>Government ID/ Employee ID
                </button>
              </li>
              <li class="mr-1">
                <button 
                  @click="activeTab = 'financial-docs'"
                  :class="{'border-blue-500 text-blue-500': activeTab === 'financial-docs', 'border-transparent text-gray-500': activeTab !== 'financial-docs'}"
                  class="py-2 px-4 border-b-2 font-medium flex items-center"
                >
                  <i class="fas fa-file-invoice-dollar mr-2"></i>Latest Payslip
                </button>
              </li>
              <li v-if="applicant.loan_type.toLowerCase().includes('emergency')" class="mr-1">
                <button 
                  @click="activeTab = 'emergency-docs'"
                  :class="{'border-blue-500 text-blue-500': activeTab === 'emergency-docs', 'border-transparent text-gray-500': activeTab !== 'emergency-docs'}"
                  class="py-2 px-4 border-b-2 font-medium flex items-center"
                >
                  <i class="fas fa-file-medical mr-2"></i>Emergency Docs
                </button>
              </li>
            </ul>

            <!-- Tab Content -->
            <div class="mt-4">
              <!-- ID Documents Tab -->
              <div v-show="activeTab === 'id-docs'" class="border rounded-lg p-5 mb-4">
                <h5 class="font-semibold text-lg mb-4">Government Issued ID</h5>
                <div class="w-full h-96 border rounded-lg bg-gray-50 overflow-hidden relative">
                  <DocumentPreview :filePath="documents.id_doc" altText="Government ID" />
                </div>
              </div>

              <!-- Financial Documents Tab -->
              <div v-show="activeTab === 'financial-docs'" class="border rounded-lg p-5 mb-4">
                <h5 class="font-semibold text-lg mb-4">Latest Payslip</h5>
                <div class="w-full h-96 border rounded-lg bg-gray-50 overflow-hidden relative">
                  <DocumentPreview :filePath="documents.payslip" altText="Latest Payslip" />
                </div>
              </div>

              <!-- Emergency Documents Tab -->
              <div v-if="applicant.loan_type.toLowerCase().includes('emergency') && activeTab === 'emergency-docs'" class="border rounded-lg p-5 mb-4">
                <h5 class="font-semibold text-lg mb-4">Valid Emergency Documents</h5>
                <div class="w-full h-96 border rounded-lg bg-gray-50 overflow-hidden relative">
                  <DocumentPreview :filePath="documents.emergency_doc" altText="Emergency Documents" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Image Zoom Modal -->
    <div v-if="showZoomModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div class="relative max-w-5xl w-full">
        <button 
          @click="showZoomModal = false" 
          class="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
        >
          &times;
        </button>
        <img :src="zoomedImageSrc" class="max-w-full max-h-screen mx-auto rounded" style="object-fit: contain;">
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

// Separate component for document preview
const DocumentPreview = {
  props: {
    filePath: String,
    altText: String
  },
  methods: {
    zoomImage() {
      this.$emit('zoom', this.filePath);
    }
  },
  computed: {
    fileExtension() {
      return this.filePath.split('.').pop().toLowerCase();
    },
    isImage() {
      return ['jpg', 'jpeg', 'png', 'gif'].includes(this.fileExtension);
    },
    isPDF() {
      return this.fileExtension === 'pdf';
    },
    isWordDoc() {
      return ['docx', 'doc'].includes(this.fileExtension);
    }
  },
  template: `
    <div class="w-full h-full flex items-center justify-center">
      <img 
        v-if="isImage" 
        :src="filePath" 
        :alt="altText" 
        class="w-full h-full object-contain cursor-pointer hover:opacity-90" 
        @click="zoomImage"
      >
      <a 
        v-else-if="isPDF" 
        :href="filePath" 
        target="_blank" 
        class="flex items-center justify-center px-4 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100"
      >
        <i class="fas fa-file-pdf mr-2"></i> View PDF
      </a>
      <a 
        v-else-if="isWordDoc" 
        :href="filePath" 
        target="_blank" 
        class="flex items-center justify-center px-4 py-2 bg-gray-50 text-gray-600 rounded hover:bg-gray-100"
      >
        <i class="fas fa-file-word mr-2"></i> Download DOCX
      </a>
      <a 
        v-else 
        :href="filePath" 
        target="_blank" 
        class="flex items-center justify-center px-4 py-2 bg-gray-50 text-gray-600 rounded hover:bg-gray-100"
      >
        <i class="fas fa-file mr-2"></i> Download File
      </a>
    </div>
  `
};

export default {
  components: {
    DocumentPreview
  },
  setup() {
    const router = useRouter();
    const activeTab = ref('id-docs');
    const showZoomModal = ref(false);
    const zoomedImageSrc = ref('');
    const status = ref('Unknown');
    const profilePhoto = ref('');
    const userType = ref('');
    const applicantPhoto = ref('/uploads/profile_photos/default.png');
    
    const applicant = ref({
      full_name: '',
      username: '',
      dob: '',
      age: '',
      gender: '',
      address: '',
      phone: '',
      application_date: '',
      loan_type: '',
      loan_amount: '',
      status: '',
      applicant_id: ''
    });

    const documents = ref({
      id_doc: 'https://via.placeholder.com/800x500?text=No+ID+Uploaded',
      payslip: 'https://via.placeholder.com/800x500?text=No+Payslip+Uploaded',
      emergency_doc: 'https://via.placeholder.com/800x500?text=No+Emergency+Doc+Uploaded'
    });

    // Fetch data from API
    const fetchData = async (applicationId) => {
      try {
        // Replace with actual API calls
        // Example:
        // const response = await axios.get(`/api/applications/${applicationId}`);
        // applicant.value = response.data.applicant;
        // documents.value = response.data.documents;
        // status.value = response.data.status;
        
        // Mock data for demonstration
        if (applicationId) {
          applicant.value = {
            full_name: 'John Doe',
            username: 'johndoe',
            dob: '1990-01-15',
            age: 33,
            gender: 'Male',
            address: '123 Main St, City',
            phone: '555-123-4567',
            application_date: '2023-05-20',
            loan_type: 'Emergency Loan',
            loan_amount: '₱10,000.00',
            status: 'Pending',
            applicant_id: 'APP-2023-0023'
          };
          
          documents.value = {
            id_doc: '/sample-id.jpg',
            payslip: '/sample-payslip.pdf',
            emergency_doc: '/sample-emergency.docx'
          };
          
          status.value = 'Pending';
          profilePhoto.value = '/uploads/profile_photos/admin.jpg';
          userType.value = 'Admin';
          applicantPhoto.value = '/uploads/profile_photos/applicant.jpg';
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const formatDate = (dateString) => {
      if (!dateString) return '';
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const logout = () => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You will be logged out of the system",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, logout!'
      }).then((result) => {
        if (result.isConfirmed) {
          // Clear session and redirect
          router.push('/login');
        }
      });
    };

    const zoomImage = (src) => {
      zoomedImageSrc.value = src;
      showZoomModal.value = true;
    };

    onMounted(() => {
      // Get application ID from route params
      const applicationId = router.currentRoute.value.params.id;
      fetchData(applicationId);
    });

    return {
      activeTab,
      showZoomModal,
      zoomedImageSrc,
      status,
      profilePhoto,
      userType,
      applicantPhoto,
      applicant,
      documents,
      formatDate,
      logout,
      zoomImage
    };
  }
};
</script>

<style scoped>
/* You can add any custom styles here if needed */
</style>