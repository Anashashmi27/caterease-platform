/* CaterEase India Application Logic */

// 1. Indian-Localized Mock Data Set
const CHEFS = [
  {
    id: "chef-aravind",
    name: "Chef Aravind Nair",
    type: "South Indian & Coastal Fusion Artisan",
    rating: 4.9,
    reviews: 142,
    basePrice: 1800, // INR per Plate
    avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=200",
    specialties: "Malabar Seafood, Traditional Sadhya, Coastal Fusion",
    dietary: ["non_veg"],
    x: 80,
    y: 70,
    kitchenSpecs: "Standard gas cylinders, coconut scrapers, heavy brass vessels.",
    courses: {
      appetizers: [
        { name: "Malabar Prawn Fry with Curry Leaves", modifier: 250, allergens: ["NUT_ALLERGY"] },
        { name: "Crispy Gunpowder Idli Bites", modifier: 0, dietary: ["pure_veg"], allergens: [] },
        { name: "Mushroom Pepper Fry", modifier: -100, dietary: ["pure_veg"], allergens: [] }
      ],
      mains: [
        { name: "Kozhikode Chicken Biryani with Coconut Chutney", modifier: 300, allergens: ["DAIRY"] },
        { name: "Meen Curry (Kerala Fish Curry) with Appams", modifier: 400, allergens: [] },
        { name: "Vegetable Stew with Fluffy Idiyappams", modifier: 0, dietary: ["pure_veg"], allergens: [] }
      ],
      desserts: [
        { name: "Elaneer Payasam (Tender Coconut Kheer)", modifier: 0, dietary: ["pure_veg"], allergens: [] },
        { name: "Ada Pradhaman (Jaggery & Coconut Milk)", modifier: 50, dietary: ["pure_veg"], allergens: ["DAIRY"] },
        { name: "Filter Coffee Ice Cream", modifier: -50, dietary: ["pure_veg"], allergens: ["DAIRY"] }
      ]
    }
  },
  {
    id: "chef-meera",
    name: "Chef Meera Sodha",
    type: "North Indian & Royal Awadhi Specialist",
    rating: 4.8,
    reviews: 98,
    basePrice: 1500, // INR per Plate
    avatar: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&q=80&w=200",
    specialties: "Awadhi Dum Biryani, Galouti Kebabs, North Indian Gravies",
    dietary: ["non_veg", "pure_veg"],
    x: 220,
    y: 60,
    kitchenSpecs: "Tandoor clay oven layout or standard tawa burners.",
    courses: {
      appetizers: [
        { name: "Melt-in-mouth Galouti Kebabs with Ulta Tawa Paratha", modifier: 200, allergens: ["GLUTEN"] },
        { name: "Achari Paneer Tikka", modifier: 0, dietary: ["pure_veg"], allergens: ["DAIRY"] },
        { name: "Dahi Ke Sholey (Yogurt Croquettes)", modifier: -50, dietary: ["pure_veg"], allergens: ["DAIRY", "GLUTEN"] }
      ],
      mains: [
        { name: "Royal Awadhi Mutton Dum Biryani", modifier: 350, allergens: ["DAIRY", "GLUTEN"] },
        { name: "Rich Butter Chicken with Garlic Naan", modifier: 250, allergens: ["DAIRY", "GLUTEN"] },
        { name: "Dal Makhani & Paneer Butter Masala Combo", modifier: 0, dietary: ["pure_veg"], allergens: ["DAIRY"] }
      ],
      desserts: [
        { name: "Shahi Tukda with Rabri & Silver Leaf", modifier: 50, dietary: ["pure_veg"], allergens: ["DAIRY", "GLUTEN", "NUT_ALLERGY"] },
        { name: "Warm Moong Dal Halwa", modifier: 0, dietary: ["pure_veg"], allergens: ["DAIRY", "NUT_ALLERGY"] },
        { name: "Kesar Pista Kulfi", modifier: -30, dietary: ["pure_veg"], allergens: ["DAIRY", "NUT_ALLERGY"] }
      ]
    }
  },
  {
    id: "chef-rohan",
    name: "Chef Rohan Mehta",
    type: "Gujarati & Heritage Jain Artisan",
    rating: 5.0,
    reviews: 64,
    basePrice: 1300, // INR per Plate
    avatar: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=200",
    specialties: "Jain Cuisine, Heritage Gujarati Thali, Kathiyawadi",
    dietary: ["pure_veg", "jain"],
    x: 190,
    y: 150,
    kitchenSpecs: "Pristine, 100% vegetarian-only separate utensils.",
    courses: {
      appetizers: [
        { name: "Gujarati Handvo with Coriander Chutney", modifier: 0, dietary: ["pure_veg", "jain"], allergens: [] },
        { name: "Crispy Lilva Kachori", modifier: 50, dietary: ["pure_veg", "jain"], allergens: ["GLUTEN"] },
        { name: "Dhokla & Patra Platter", modifier: -50, dietary: ["pure_veg", "jain"], allergens: [] }
      ],
      mains: [
        { name: "Jain Royal Heritage Thali (8 Items)", modifier: 150, dietary: ["pure_veg", "jain"], allergens: ["DAIRY"] },
        { name: "Kathiyawadi Undhiyu with Puri", modifier: 100, dietary: ["pure_veg"], allergens: ["GLUTEN"] },
        { name: "Jain Paneer Kaju Masala & Butter Roti", modifier: 50, dietary: ["pure_veg", "jain"], allergens: ["DAIRY", "GLUTEN", "NUT_ALLERGY"] }
      ],
      desserts: [
        { name: "Rich Basundi with Almond Shavings", modifier: 0, dietary: ["pure_veg", "jain"], allergens: ["DAIRY", "NUT_ALLERGY"] },
        { name: "Shrikhand (Kesar Elaichi)", modifier: -20, dietary: ["pure_veg", "jain"], allergens: ["DAIRY"] },
        { name: "Warm Jalebi with Rabri", modifier: 50, dietary: ["pure_veg"], allergens: ["DAIRY", "GLUTEN"] }
      ]
    }
  }
];

const PENDING_CHEFS = [];

const EVENTS = [
  {
    id: "evt_01J8PQ7WNX",
    title: "Mom's 60th Birthday Awadhi Dinner",
    host: "Priya Sharma",
    city: "Mumbai",
    headcount: 25,
    cuisine: "North Indian",
    rating: 5.0,
    chefId: "chef-meera",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400",
    menu: {
      appetizers: "Achari Paneer Tikka",
      mains: "Royal Awadhi Mutton Dum Biryani",
      desserts: "Shahi Tukda with Rabri & Silver Leaf"
    }
  },
  {
    id: "evt_02K9QR8XOY",
    title: "Sunday Family Sadhya Feast",
    host: "Rohan Malhotra",
    city: "Mumbai",
    headcount: 15,
    cuisine: "South Indian",
    rating: 4.9,
    chefId: "chef-aravind",
    image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&q=80&w=400",
    menu: {
      appetizers: "Malabar Prawn Fry with Curry Leaves",
      mains: "Meen Curry (Kerala Fish Curry) with Appams",
      desserts: "Elaneer Payasam (Tender Coconut Kheer)"
    }
  },
  {
    id: "evt_03L0ST9YPZ",
    title: "Veg Heritage Anniversary Lunch",
    host: "Aditi Shah",
    city: "Mumbai",
    headcount: 40,
    cuisine: "Gujarati Jain",
    rating: 5.0,
    chefId: "chef-rohan",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=400",
    menu: {
      appetizers: "Gujarati Handvo with Coriander Chutney",
      mains: "Jain Royal Heritage Thali (8 Items)",
      desserts: "Rich Basundi with Almond Shavings"
    }
  }
];

let USER_LOCATION = { x: 150, y: 110 };
const STANDBY_CHEF = { x: 50, y: 150, name: "Chef Priya Sharma (Standby)", active: false };

// 2. Application State
let state = {
  currentUser: null,
  currentView: "home",
  selectedChef: null,
  currentChefId: "chef-aravind",
  customizations: {
    appetizer: null,
    main: null,
    dessert: null
  },
  guestsCount: 15,
  isRepeatBooking: false, // Showcase bypass fee drop (15% -> 6% Razorpay Commission)
  isProUpgrade: true,     // Pre-unlocked and accessible by default
  customerAllergens: [],  // Customer allergen exclusions
  dpdpConsent: false,     // India DPDP consent status
  verification: {
    identity: true,
    background: "pending",
    servsafe: "pending",
    kitchen: "pending"
  },
  standbyDispatched: false,
  canvasAnimationId: null,
  booking: null, // Track client's proposed booking
  bookings: [
    {
      id: "IN-92019",
      clientName: "Rohan Malhotra",
      date: "July 15, 2026 @ 7:30 PM (IST)",
      location: "Bandra West, Mumbai Sea-Face Penthouse",
      guests: 15,
      amount: "₹31,050.00",
      chefId: "chef-aravind",
      status: "requested",
      menu: {
        appetizers: "Malabar Prawn Fry with Curry Leaves",
        mains: "Meen Curry (Kerala Fish Curry) with Appams",
        desserts: "Elaneer Payasam (Tender Coconut Kheer)"
      },
      kitchenSpecs: "Standard gas stoves, heavy brass vessels, coconut grater support."
    },
    {
      id: "IN-42091",
      clientName: "Pooja Hegde",
      date: "July 19, 2026 @ 8:00 PM (IST)",
      location: "Juhu Road, Mumbai",
      guests: 22,
      amount: "₹45,540.00",
      chefId: "chef-aravind",
      status: "requested",
      menu: {
        appetizers: "Crispy Gunpowder Idli Bites",
        mains: "Meen Curry (Kerala Fish Curry) with Appams",
        desserts: "Ada Pradhaman (Jaggery & Coconut Milk)"
      },
      kitchenSpecs: "Standard gas cylinder support."
    },
    {
      id: "IN-88301",
      clientName: "Karan Johar",
      date: "July 24, 2026 @ 8:30 PM (IST)",
      location: "Carter Road Penthouse, Bandra",
      guests: 40,
      amount: "₹72,000.00",
      chefId: "chef-meera",
      status: "requested",
      menu: {
        appetizers: "Melt-in-mouth Galouti Kebabs with Ulta Tawa Paratha",
        mains: "Royal Awadhi Mutton Dum Biryani",
        desserts: "Shahi Tukda with Rabri & Silver Leaf"
      },
      kitchenSpecs: "Tandoor clay oven layout."
    },
    {
      id: "IN-77610",
      clientName: "Nisha Patel",
      date: "July 26, 2026 @ 1:30 PM (IST)",
      location: "Nepean Sea Road, Mumbai",
      guests: 12,
      amount: "₹19,500.00",
      chefId: "chef-rohan",
      status: "requested",
      menu: {
        appetizers: "Gujarati Handvo with Coriander Chutney",
        mains: "Jain Royal Heritage Thali (8 Items)",
        desserts: "Rich Basundi with Almond Shavings"
      },
      kitchenSpecs: "Pristine, 100% vegetarian-only separate utensils."
    }
  ]
};

// 3. Document Elements & Lifecycle Hooks
document.addEventListener("DOMContentLoaded", () => {
  initUI();
  populateChefSelect();
  renderChefGrid(CHEFS);
  renderEventFeed();
  drawGeoMap();
  setupEventListeners();
  triggerBackgroundCheckSimulation();
  renderChefPendingOrders();
  enforceAuthWall();
});

// 4. Initialize UI bindings
function initUI() {
  const budgetInput = document.getElementById("search-budget");
  const budgetVal = document.getElementById("budget-val");
  budgetInput.addEventListener("input", (e) => {
    budgetVal.textContent = e.target.value;
    runSearchFilter();
  });

  const distanceInput = document.getElementById("search-distance");
  const distanceVal = document.getElementById("distance-val");
  distanceInput.addEventListener("input", (e) => {
    distanceVal.textContent = e.target.value;
    runSearchFilter();
  });

  document.getElementById("search-location").addEventListener("input", runSearchFilter);
  document.getElementById("search-guests").addEventListener("input", runSearchFilter);

  document.querySelectorAll('input[name="dietary"]').forEach(cb => {
    cb.addEventListener("change", runSearchFilter);
  });
}

// Coordinate mapping helper relative to Mumbai Center
function gpsToCanvas(lat, lng) {
  const centerLat = 19.0760;
  const centerLng = 72.8777;
  // Compute pixel offsets
  const x = Math.max(10, Math.min(290, 150 + (lng - centerLng) * 1200));
  const y = Math.max(10, Math.min(190, 100 - (lat - centerLat) * 1200));
  return { x, y };
}

// Mock Geocoder for Indian Cities/Localities
function geocodeCity(city) {
  const clean = city.toLowerCase().trim();
  if (clean.includes("bandra")) return { x: 80, y: 70 };
  if (clean.includes("andheri")) return { x: 120, y: 40 };
  if (clean.includes("colaba")) return { x: 150, y: 160 };
  if (clean.includes("mumbai")) return { x: 150, y: 110 };
  if (clean.includes("delhi")) return { x: 220, y: 60 };
  if (clean.includes("bangalore")) return { x: 190, y: 150 };
  if (clean.includes("pune")) return { x: 250, y: 170 };
  return { x: 100 + Math.random() * 100, y: 60 + Math.random() * 80 };
}

// Reverse Geocoding helper resolving coordinates to local area names
async function reverseGeocode(lat, lng) {
  try {
    // Respect OpenStreetMap Nominatim guidelines
    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=14`, {
      headers: { "Accept-Language": "en" }
    });
    if (res.ok) {
      const data = await res.json();
      if (data && data.address) {
        const locality = data.address.suburb || data.address.neighbourhood || data.address.residential || data.address.city_district || data.address.town || data.address.village || data.address.city || "Bandra West";
        const state = data.address.state || "Maharashtra";
        return { locality, state };
      }
    }
  } catch (e) {
    console.error("OSM Geocoding failed, falling back to local simulation.", e);
  }
  
  // Dynamic high-fidelity regional fallback
  const fallbacks = [
    { name: "Bandra West", state: "Maharashtra", lat: 19.05, lng: 72.82 },
    { name: "Andheri West", state: "Maharashtra", lat: 19.11, lng: 72.84 },
    { name: "Colaba", state: "Maharashtra", lat: 18.90, lng: 72.81 },
    { name: "Juhu", state: "Maharashtra", lat: 19.10, lng: 72.82 },
    { name: "Indiranagar", state: "Karnataka", lat: 12.97, lng: 77.64 },
    { name: "Connaught Place", state: "Delhi", lat: 28.63, lng: 77.21 }
  ];
  let best = fallbacks[0];
  let minDist = Infinity;
  fallbacks.forEach(loc => {
    const d = Math.pow(loc.lat - lat, 2) + Math.pow(loc.lng - lng, 2);
    if (d < minDist) {
      minDist = d;
      best = loc;
    }
  });
  return { locality: best.name, state: best.state };
}


function setupEventListeners() {
  // View switcher buttons
  document.getElementById("btn-home-view").addEventListener("click", () => switchWorkspace("home"));
  document.getElementById("btn-customer-view").addEventListener("click", () => switchWorkspace("customer"));
  document.getElementById("btn-chef-view").addEventListener("click", () => switchWorkspace("chef"));

  // Bind tabs in customer & chef auth dialogs
  document.getElementById("tab-cust-login").addEventListener("click", () => switchCustomerAuthTab("login"));
  document.getElementById("tab-cust-signup").addEventListener("click", () => switchCustomerAuthTab("signup"));
  document.getElementById("tab-chef-login").addEventListener("click", () => switchChefAuthTab("login"));
  document.getElementById("tab-chef-signup").addEventListener("click", () => switchChefAuthTab("signup"));

  // Secret Admin Access (Ctrl + Shift + A)
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
      e.preventDefault();
      switchWorkspace("admin");
    }
  });

  // Auth Logout
  document.getElementById("btn-logout").addEventListener("click", handleLogout);
  
  // Search action
  document.getElementById("btn-run-search").addEventListener("click", runSearchFilter);

  // Close Customizer
  document.getElementById("btn-close-customizer").addEventListener("click", () => {
    document.getElementById("menu-customizer-panel").classList.add("hidden");
    state.selectedChef = null;
  });

  // Calculate guests dynamic change
  const calcGuests = document.getElementById("calc-guests");
  calcGuests.addEventListener("input", (e) => {
    state.guestsCount = parseInt(e.target.value) || 1;
    document.getElementById("calc-guest-label").textContent = state.guestsCount;
    updateEscrowCalculation();
  });

  // Book Escrow / Request Deal
  document.getElementById("btn-book-now").addEventListener("click", () => {
    const chef = state.selectedChef;
    if (!chef) return;
    
    const finalPriceText = document.getElementById("total-price").textContent;
    const clientName = document.getElementById("cust-name-input").value.trim() || "Rohan Malhotra";
    const clientLocation = (document.getElementById("cust-city-input").value.trim() || "Bandra West") + ", " + (document.getElementById("cust-state-input").value.trim() || "Maharashtra");
    
    const newBooking = {
      id: "IN-" + Math.floor(10000 + Math.random() * 90000),
      clientName: clientName,
      date: "July 15, 2026 @ 7:30 PM (IST)",
      location: clientLocation,
      guests: state.guestsCount,
      amount: finalPriceText,
      chefId: chef.id,
      chefName: chef.name,
      status: 'requested',
      menu: {
        appetizers: state.customizations.appetizer ? state.customizations.appetizer.name : "None",
        mains: state.customizations.main ? state.customizations.main.name : "None",
        desserts: state.customizations.dessert ? state.customizations.dessert.name : "None"
      },
      kitchenSpecs: chef.kitchenSpecs
    };

    // Save client's active deal
    state.booking = newBooking;
    state.bookings.push(newBooking);
    
    // Update Active Deals Banner in Customer Portal
    const dealsBanner = document.getElementById("active-deals-banner");
    dealsBanner.classList.remove("hidden");
    document.getElementById("deal-title-text").innerHTML = `🤝 Active Deal: Pending Chef Handshake`;
    document.getElementById("deal-desc-text").textContent = `Waiting for ${chef.name} to accept your menu proposal for ${state.guestsCount} guests.`;
    document.getElementById("deal-action-container").innerHTML = `<span class="badge-status-dot pending"></span> Awaiting Chef`;
    
    // Refresh Chef Portal bookings view
    renderChefPendingOrders();
    
    // Close Customizer panel
    document.getElementById("menu-customizer-panel").classList.add("hidden");
    
    showToast("Deal Proposed!", `Deal request sent to ${chef.name} for ${finalPriceText}. Payment pending handshake.`, "success");
  });

  // Save Customer Profile Form
  document.getElementById("btn-save-customer-profile").addEventListener("click", () => {
    const name = document.getElementById("cust-name-input").value.trim();
    const city = document.getElementById("cust-city-input").value.trim();
    
    if (city !== "GPS Location") {
      const coords = geocodeCity(city);
      USER_LOCATION.x = coords.x;
      USER_LOCATION.y = coords.y;
    }
    
    drawGeoMap();
    runSearchFilter();
    showToast("Profile Logged", `Welcome, ${name}! Your location is updated.`, "success");
  });

  // Fetch Customer GPS Location
  document.getElementById("btn-cust-gps").addEventListener("click", () => {
    if (navigator.geolocation) {
      showToast("GPS Access Requested", "Allow location access in your browser pop-up to fetch current coordinates.", "success");
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          const mapped = gpsToCanvas(lat, lng);
          USER_LOCATION.x = Math.round(mapped.x);
          USER_LOCATION.y = Math.round(mapped.y);
          
          showToast("Reverse Geocoding", "Resolving place name from coordinates...", "success");
          const place = await reverseGeocode(lat, lng);
          
          document.getElementById("cust-city-input").value = place.locality;
          document.getElementById("cust-state-input").value = place.state;
          document.getElementById("search-location").value = `${place.locality}, ${place.state}`;
          
          drawGeoMap();
          runSearchFilter();
          showToast("GPS Location Fetched", `Mapped to geofence: ${place.locality}, ${place.state}`, "success");
        },
        (error) => {
          showToast("GPS Access Denied", "Could not fetch GPS location. Defaulting to mock geocoding.", "danger");
        }
      );
    } else {
      showToast("GPS Not Supported", "Your browser does not support Geolocation.", "danger");
    }
  });

  // Save Chef Profile Form
  document.getElementById("btn-save-chef-profile").addEventListener("click", () => {
    const name = document.getElementById("chef-name-input").value.trim();
    const specialties = document.getElementById("chef-specialties-input").value.trim();
    const price = parseInt(document.getElementById("chef-price-input").value) || 500;
    const city = document.getElementById("chef-city-input").value.trim();
    
    const activeChef = CHEFS.find(c => c.id === state.currentChefId) || PENDING_CHEFS.find(c => c.id === state.currentChefId);
    if (activeChef) {
      activeChef.name = name;
      activeChef.specialties = specialties;
      activeChef.type = specialties.split(",")[0] || "General Caterer";
      activeChef.basePrice = price;
      
      if (city !== "GPS Location" && city !== "") {
        const coords = geocodeCity(city);
        activeChef.x = coords.x;
        activeChef.y = coords.y;
      }
      
      // Update sidebar texts
      const sidebarName = document.getElementById("chef-dashboard-name");
      const sidebarSpec = document.getElementById("chef-dashboard-specialties");
      if (sidebarName) sidebarName.textContent = name;
      if (sidebarSpec) sidebarSpec.textContent = activeChef.type;
      
      // Refresh views
      populateChefSelect();
      renderChefGrid(CHEFS);
      drawGeoMap();
      
      showToast("Profile Logged", `Chef profile saved. Location mapped to grid.`, "success");
    } else {
      showToast("Error", "No active chef profile found to edit.", "danger");
    }
  });

  // Fetch Chef GPS Location
  document.getElementById("btn-chef-gps").addEventListener("click", () => {
    if (navigator.geolocation) {
      showToast("GPS Access Requested", "Allow location access in your browser pop-up to fetch current coordinates.", "success");
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          const mapped = gpsToCanvas(lat, lng);
          
          const aravind = CHEFS.find(c => c.id === "chef-aravind");
          if (aravind) {
            aravind.x = Math.round(mapped.x);
            aravind.y = Math.round(mapped.y);
          }
          
          showToast("Reverse Geocoding", "Resolving place name from coordinates...", "success");
          const place = await reverseGeocode(lat, lng);
          
          document.getElementById("chef-city-input").value = place.locality;
          document.getElementById("chef-state-input").value = place.state;
          
          renderChefGrid(CHEFS);
          drawGeoMap();
          showToast("GPS Location Fetched", `Chef kitchen coordinates mapped: ${place.locality}, ${place.state}`, "success");
        },
        (error) => {
          showToast("GPS Access Denied", "Could not fetch GPS location.", "danger");
        }
      );
    } else {
      showToast("GPS Not Supported", "Your browser does not support Geolocation.", "danger");
    }
  });

  // Trust Verification Buttons
  document.getElementById("btn-trigger-checkr").addEventListener("click", speedUpBackgroundCheck);
  document.getElementById("btn-upload-servsafe").addEventListener("click", () => openVerificationDialog("servsafe"));
  document.getElementById("btn-upload-kitchen").addEventListener("click", () => openVerificationDialog("kitchen"));

  // Dialog Controls
  document.getElementById("btn-dialog-cancel").addEventListener("click", () => {
    document.getElementById("upload-dialog").close();
  });
  document.getElementById("dialog-form").addEventListener("submit", handleDialogSubmit);

  // Standby Simulation
  document.getElementById("btn-simulate-cancel").addEventListener("click", triggerEmergencyStandbySimulation);
  document.getElementById("btn-close-standby").addEventListener("click", () => {
    document.getElementById("standby-dialog").close();
  });

  // Active Chef Profile Select Switcher
  document.getElementById("chef-select-profile").addEventListener("change", (e) => {
    state.currentChefId = e.target.value;
    
    // Update Chef dashboard view details based on chef selection
    const activeChef = CHEFS.find(c => c.id === state.currentChefId) || PENDING_CHEFS.find(c => c.id === state.currentChefId);
    if (activeChef) {
      document.getElementById("chef-dashboard-avatar-img").src = activeChef.avatar;
      document.getElementById("chef-dashboard-name").textContent = activeChef.name;
      document.getElementById("chef-dashboard-specialties").textContent = activeChef.type;
      
      // Update form values in Location Manager
      document.getElementById("chef-name-input").value = activeChef.name;
      document.getElementById("chef-specialties-input").value = activeChef.specialties || activeChef.type;
      document.getElementById("chef-price-input").value = activeChef.basePrice;
      
      // Update matching badge status randomly to simulate dynamic check statuses
      const badge = document.getElementById("chef-badge-status");
      const tag = document.getElementById("verification-status-tag");
      const isPending = PENDING_CHEFS.some(c => c.id === state.currentChefId);
      
      if (state.currentChefId === "chef-aravind" || isPending) {
        badge.className = "badge-status-dot pending";
        tag.className = "verification-status-tag pending";
        tag.textContent = "Verification Pending";
      } else {
        badge.className = "badge-status-dot verified";
        tag.className = "verification-status-tag verified";
        tag.textContent = "✓ Verified Partner";
      }
    }
    
    renderChefPendingOrders();
  });

  // AI Menu Personalizer Trigger
  document.getElementById("btn-ai-personalize").addEventListener("click", handleAIPersonalization);

  // Allergen Filter Checkbox listeners
  document.querySelectorAll('input[name="allergens"]').forEach(cb => {
    cb.addEventListener("change", (e) => {
      const allergen = e.target.value;
      if (e.target.checked) {
        state.customerAllergens.push(allergen);
      } else {
        state.customerAllergens = state.customerAllergens.filter(x => x !== allergen);
      }
      if (state.selectedChef) {
        openMenuCustomizer(state.selectedChef); // redraw customizer with allergen warnings
      }
    });
  });

  // DPDP Consent Actions
  document.getElementById("btn-dpdp-optin").addEventListener("click", () => {
    state.dpdpConsent = true;
    document.getElementById("dpdp-consent-banner").classList.add("hidden");
    showToast("Privacy Consent Logged", "Consent recorded in accordance with DPDP Act 2023.", "success");
  });
  
  document.getElementById("btn-dpdp-erasure").addEventListener("click", () => {
    state.dpdpConsent = false;
    document.getElementById("dpdp-consent-banner").classList.add("hidden");
    showToast("Erasure Request Queued", "Personal references and payment identifiers deleted.", "success");
  });

  // Chef Portal tab switcher
  const chefTabs = [
    { btnId: "tab-pending-orders", panelId: "panel-pending-orders" },
    { btnId: "tab-confirmed-events", panelId: "panel-confirmed-events" },
    { btnId: "tab-menu-builder", panelId: "panel-menu-builder" },
    { btnId: "tab-earnings-analytics", panelId: "panel-earnings-analytics" }
  ];
  chefTabs.forEach(tab => {
    document.getElementById(tab.btnId).addEventListener("click", () => {
      chefTabs.forEach(t => {
        document.getElementById(t.btnId).classList.toggle("active", t.btnId === tab.btnId);
        document.getElementById(t.panelId).classList.toggle("active", t.panelId === tab.panelId);
        document.getElementById(t.panelId).classList.toggle("hidden", t.panelId !== tab.panelId);
      });
      if (tab.btnId === "tab-menu-builder") {
        renderChefMenuBuilder();
      }
    });
  });

  // Chef Subscription Toggle
  document.getElementById("btn-toggle-subscription").addEventListener("click", toggleChefSubscription);

  // Chef Menu Builder Actions
  document.getElementById("btn-chef-add-item").addEventListener("click", openAddDishDialog);
  document.getElementById("btn-dish-cancel").addEventListener("click", () => {
    document.getElementById("dish-dialog").close();
  });
  document.getElementById("dish-form").addEventListener("submit", handleDishSubmit);

  // Share Dialog Actions
  document.getElementById("btn-close-share").addEventListener("click", () => {
    document.getElementById("share-dialog").close();
  });
  document.getElementById("btn-copy-share-link").addEventListener("click", copyShareLink);
  document.getElementById("btn-share-whatsapp").addEventListener("click", () => {
    showToast("Deep Link Shared", "Masked customer feed shared to WhatsApp.", "success");
    document.getElementById("share-dialog").close();
  });
  document.getElementById("btn-share-instagram").addEventListener("click", () => {
    showToast("Instagram Story Ready", "Sticker template generated with transaction safeguards.", "success");
    document.getElementById("share-dialog").close();
  });
}

// 5. Switching Portals
function switchWorkspace(role) {
  state.currentView = role;
  
  if (!enforceAuthWall()) return;
  
  // Set button state
  document.getElementById("btn-home-view").classList.toggle("active", role === "home");
  document.getElementById("btn-home-view").setAttribute("aria-selected", role === "home");
  document.getElementById("btn-customer-view").classList.toggle("active", role === "customer");
  document.getElementById("btn-customer-view").setAttribute("aria-selected", role === "customer");
  document.getElementById("btn-chef-view").classList.toggle("active", role === "chef");
  document.getElementById("btn-chef-view").setAttribute("aria-selected", role === "chef");

  // Show workspaces
  document.getElementById("home-workspace").classList.toggle("active", role === "home");
  document.getElementById("customer-workspace").classList.toggle("active", role === "customer");
  document.getElementById("chef-workspace").classList.toggle("active", role === "chef");
  document.getElementById("admin-workspace").classList.toggle("active", role === "admin");

  if (role === "chef") {
    populateChefSelect();
  }

  if (role === "admin") {
    renderPendingChefs();
  }

  drawGeoMap();
}

// 6. Filter Chef Grid
function runSearchFilter() {
  const budget = parseInt(document.getElementById("search-budget").value);
  const maxDistance = parseFloat(document.getElementById("search-distance").value);
  const dietaryCheckboxes = document.querySelectorAll('input[name="dietary"]:checked');
  const diets = Array.from(dietaryCheckboxes).map(cb => cb.value);

  const filtered = CHEFS.filter(chef => {
    // 1. Budget Filter
    if (chef.basePrice > budget) return false;
    
    // 2. Geofence Distance Filter (accurate euclidean calculation)
    const dx = chef.x - USER_LOCATION.x;
    const dy = chef.y - USER_LOCATION.y;
    const distanceKm = Math.sqrt(dx * dx + dy * dy) * 0.1; // scale: 10 pixels = 1 km
    if (distanceKm > maxDistance) return false;
    
    // 3. Dietary Filter
    if (diets.length > 0) {
      const match = diets.every(diet => chef.dietary.includes(diet));
      if (!match) return false;
    }
    
    return true;
  });

  renderChefGrid(filtered);
  document.getElementById("chef-count").textContent = filtered.length;
  // Dynamic map redrawing to show updated geofence area
  drawGeoMap();
}

// 7. Render Chef Listing Grid
function renderChefGrid(list) {
  const grid = document.getElementById("chef-grid");
  grid.innerHTML = "";

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="glass-panel text-center w-full" style="grid-column: 1 / -1; padding: 3rem;">
        <h4>No Matching Artisans Found</h4>
        <p class="text-secondary mt-4">We've auto-expanded the search radius. Try raising the budget or modifying preferences.</p>
      </div>
    `;
    return;
  }

  // Sort Pro subscription members to the top of the search index listing
  const sortedList = [...list].sort((a, b) => (b.isPro ? 1 : 0) - (a.isPro ? 1 : 0));

  sortedList.forEach(chef => {
    const card = document.createElement("div");
    card.className = `chef-card glass-panel ${chef.isPro ? 'priority-indexed' : ''}`;
    card.innerHTML = `
      <div class="chef-card-header">
        <span class="chef-badge">${chef.isPro ? '⭐ VERIFIED PRO' : 'FSSAI AUDITED'}</span>
        <div class="chef-rating">
          <span class="rating-star">★</span>
          <span>${chef.rating} (${chef.reviews})</span>
        </div>
      </div>
      <div class="chef-card-hero">
        <img class="chef-avatar" src="${chef.avatar}" alt="${chef.name}">
        <h4>${chef.name}</h4>
        <p class="chef-specialties">${chef.specialties}</p>
      </div>
      <div class="chef-pricing">
        <div class="pricing-info">
          <span class="price">₹${chef.basePrice.toLocaleString('en-IN')}</span>
          <span class="label">base price / plate</span>
        </div>
        <button class="btn-primary btn-view-menu" data-id="${chef.id}">View Menu</button>
      </div>
    `;

    // Hook View Menu
    card.querySelector(".btn-view-menu").addEventListener("click", () => openMenuCustomizer(chef));
    grid.appendChild(card);
  });
}

// 8. MVP Feature 1: Interactive Menu Customizer
function openMenuCustomizer(chef) {
  state.selectedChef = chef;
  
  // Set UI elements
  document.getElementById("customizer-chef-name").textContent = chef.name;
  document.getElementById("customizer-chef-avatar").src = chef.avatar;
  document.getElementById("price-per-person").textContent = `₹${chef.basePrice.toLocaleString('en-IN')}`;
  document.getElementById("kitchen-spec-text").textContent = chef.kitchenSpecs;

  // Render course customization selector radios
  const coursesContainer = document.getElementById("courses-customizer-list");
  coursesContainer.innerHTML = "";

  // Add Allergen Alert Banner if allergens are selected
  let activeAllergenWarnings = [];
  
  const courseKeys = ["appetizers", "mains", "desserts"];
  courseKeys.forEach(courseKey => {
    const group = document.createElement("div");
    group.className = "course-group";
    
    const courseTitle = courseKey.charAt(0).toUpperCase() + courseKey.slice(1, -1);
    group.innerHTML = `<h6>${courseTitle} Option</h6>`;
    
    const list = document.createElement("div");
    list.className = "course-options-list";

    // Auto-selection pass: if the default choice violates allergens, find a safe one
    let selectedIdx = 0;
    let foundSafe = false;
    chef.courses[courseKey].forEach((dish, idx) => {
      const violates = state.customerAllergens.some(a => dish.allergens && dish.allergens.includes(a));
      if (!violates && !foundSafe) {
        selectedIdx = idx;
        foundSafe = true;
      }
    });

    chef.courses[courseKey].forEach((dish, idx) => {
      const option = document.createElement("label");
      option.className = "course-option-label";
      
      const modText = dish.modifier > 0 ? `(+₹${dish.modifier})` : (dish.modifier < 0 ? `(-₹${Math.abs(dish.modifier)})` : "");
      
      // Determine if this dish contains any selected allergens
      const activeViolatedAllergens = state.customerAllergens.filter(a => dish.allergens && dish.allergens.includes(a));
      const hasAllergenViolation = activeViolatedAllergens.length > 0;
      
      if (hasAllergenViolation) {
        option.classList.add("allergen-warning");
        activeViolatedAllergens.forEach(a => {
          if (!activeAllergenWarnings.includes(`${dish.name} contains ${a.replace('_', ' ')}`)) {
            activeAllergenWarnings.push(`${dish.name} contains ${a.replace('_', ' ')}`);
          }
        });
      }

      // Check if this dish is recommended by AI Menu Personalizer
      const isAIRecommended = state.aiRecommendedDishes && state.aiRecommendedDishes.includes(dish.name);
      
      const isChecked = idx === selectedIdx ? "checked" : "";
      if (idx === selectedIdx) {
        state.customizations[courseKey.slice(0, -1)] = dish;
      }

      let allergenBadges = activeViolatedAllergens.map(a => `<span class="allergen-warning-badge-inline">Contains ${a.replace('_', ' ')}</span>`).join(' ');
      let aiBadge = isAIRecommended ? `<span class="custom-note-badge" style="background:var(--green-glow); color:var(--green); border:1px solid rgba(16,185,129,0.3); margin-left: 0.5rem;">AI Choice ✨</span>` : '';

      option.innerHTML = `
        <div class="option-main">
          <input type="radio" name="custom-${courseKey}" value="${idx}" ${isChecked} ${hasAllergenViolation ? 'disabled' : ''}>
          <div class="option-desc">
            <div>
              <strong>${dish.name}</strong>
              ${allergenBadges}
              ${aiBadge}
            </div>
            <div class="text-small">
              ${dish.dietary ? dish.dietary.join(', ').replace('_', ' ') : ''}
              ${dish.allergens && dish.allergens.length > 0 && !hasAllergenViolation ? '(Allergens: ' + dish.allergens.join(', ') + ')' : ''}
            </div>
          </div>
        </div>
        <span class="option-cost-modifier">${modText}</span>
      `;

      // Update calculations on radio swap
      if (!hasAllergenViolation) {
        option.querySelector("input").addEventListener("change", () => {
          state.customizations[courseKey.slice(0, -1)] = dish;
          updateEscrowCalculation();
        });
      }

      list.appendChild(option);
    });

    group.appendChild(list);
    coursesContainer.appendChild(group);
  });

  // Prepend Allergen Warnings Banner if violations were detected
  if (activeAllergenWarnings.length > 0) {
    const banner = document.createElement("div");
    banner.className = "allergen-alert-banner";
    banner.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
        <line x1="12" y1="9" x2="12" y2="13"></line>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
      </svg>
      <div>
        <strong>Allergen Alerts:</strong> Non-compliant dishes have been disabled. Safe alternatives pre-selected.
      </div>
    `;
    coursesContainer.insertBefore(banner, coursesContainer.firstChild);
  }

  // Calculate pricing
  updateEscrowCalculation();

  // Show customizer panel & scroll into view
  const panel = document.getElementById("menu-customizer-panel");
  panel.classList.remove("hidden");
  panel.scrollIntoView({ behavior: 'smooth' });
}

// 9. Pricing calculations with Bypass Mitigation Showcase (INR version)
function updateEscrowCalculation() {
  if (!state.selectedChef) return;

  const chef = state.selectedChef;
  
  // Calculate pricing per head
  let basePrice = chef.basePrice;
  let modifier = 0;
  
  if (state.customizations.appetizer) modifier += state.customizations.appetizer.modifier;
  if (state.customizations.main) modifier += state.customizations.main.modifier;
  if (state.customizations.dessert) modifier += state.customizations.dessert.modifier;

  const pricePerHead = basePrice + modifier;
  const subtotal = pricePerHead * state.guestsCount;

  // Determine Commission Tier based on business rules
  let feePercentage = 12;
  let rateName = "Standard Plate Fee";
  
  if (subtotal > 50000) {
    feePercentage = 6;
    rateName = "Enterprise Catering Flat Rate (6%)";
  } else if (state.isProUpgrade && chef.id === "chef-aravind") {
    feePercentage = 4;
    rateName = "CaterEase Pro Member Rate (4%)";
  } else if (subtotal > 15000) {
    // Simulates chef having more than 5 bookings, or high plate count volume discount
    feePercentage = 8;
    rateName = "Loyalty Plate Rate (8%)";
  }

  const platformFee = subtotal * (feePercentage / 100);
  const total = subtotal + platformFee;

  // Update DOM
  document.getElementById("price-per-person").textContent = `₹${pricePerHead.toLocaleString('en-IN')}`;
  document.getElementById("subtotal-price").textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  
  // Update Fee percentage label and calculated fee
  document.getElementById("fee-percentage").textContent = `${feePercentage}%`;
  document.getElementById("platform-fee").textContent = `₹${platformFee.toLocaleString('en-IN')}`;
  
  const discountRow = document.getElementById("loyalty-discount-row");
  if (feePercentage < 12) {
    discountRow.classList.remove("hidden");
    const discountAmount = (subtotal * 0.12) - platformFee;
    discountRow.querySelector("span:first-child").textContent = `${rateName}:`;
    document.getElementById("loyalty-discount").textContent = `-₹${discountAmount.toLocaleString('en-IN')}`;
    document.getElementById("loyalty-discount").className = "loyalty-applied text-green";
  } else {
    discountRow.classList.add("hidden");
  }
  
  document.getElementById("total-price").textContent = `₹${total.toLocaleString('en-IN')}`;
}

// 10. Geofence Map Visualizer (Canvas Rendering)
function drawGeoMap() {
  const canvas = document.getElementById("geo-map");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Background grid lines representing spatial coordinates
  ctx.strokeStyle = "rgba(15, 23, 42, 0.05)";
  ctx.lineWidth = 1;
  const gridSize = 20;
  for (let x = 0; x < canvas.width; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }
  for (let y = 0; y < canvas.height; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  // Draw Geofence radius circle around user
  const maxDistanceInput = document.getElementById("search-distance");
  const currentMaxDistance = maxDistanceInput ? parseFloat(maxDistanceInput.value) : 15;
  const radiusPx = currentMaxDistance * 10; // 10 pixels = 1 km
  ctx.beginPath();
  ctx.arc(USER_LOCATION.x, USER_LOCATION.y, radiusPx, 0, 2 * Math.PI);
  ctx.strokeStyle = "rgba(59, 130, 246, 0.15)";
  ctx.fillStyle = "rgba(59, 130, 246, 0.02)";
  ctx.fill();
  ctx.stroke();

  // Draw User Location (Pulsing node)
  ctx.beginPath();
  ctx.arc(USER_LOCATION.x, USER_LOCATION.y, 6, 0, 2 * Math.PI);
  ctx.fillStyle = "#3b82f6";
  ctx.fill();

  // Draw chefs
  CHEFS.forEach(chef => {
    ctx.beginPath();
    ctx.arc(chef.x, chef.y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "#FF5E00";
    ctx.fill();
    
    // Label
    ctx.font = "8px sans-serif";
    ctx.fillStyle = "rgba(15, 23, 42, 0.7)";
    ctx.fillText(chef.name.split(' ')[1], chef.x - 10, chef.y - 8);
  });

  // Draw standby chef if active
  if (STANDBY_CHEF.active) {
    ctx.beginPath();
    ctx.arc(STANDBY_CHEF.x, STANDBY_CHEF.y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "#ef4444";
    ctx.fill();
    ctx.font = "8px sans-serif";
    ctx.fillStyle = "#dc2626";
    ctx.fillText("Standby", STANDBY_CHEF.x - 12, STANDBY_CHEF.y - 8);
  }
}

// 11. Trust & Safety Verification Onboarding Pipeline Controls (Indian Localization)
function triggerBackgroundCheckSimulation() {
  setTimeout(() => {
    if (state.verification.background === "pending") {
      completeBackgroundCheck();
    }
  }, 12000);
}

function speedUpBackgroundCheck() {
  const btn = document.getElementById("btn-trigger-checkr");
  btn.textContent = "Verifying PCC...";
  btn.disabled = true;

  setTimeout(() => {
    completeBackgroundCheck();
  }, 2000);
}

function completeBackgroundCheck() {
  state.verification.background = "verified";
  
  const step = document.getElementById("v-step-background");
  step.className = "step-item completed";
  step.querySelector(".step-icon").innerHTML = "✓";
  step.querySelector(".step-icon").className = "step-icon";
  step.querySelector("button").remove();
  
  showToast("PCC Cleared", "Local state police clearance records match successfully.", "success");
  checkOverallTrustVerificationStatus();
}

let activeUploadField = null;

function openVerificationDialog(field) {
  activeUploadField = field;
  const dialog = document.getElementById("upload-dialog");
  const title = document.getElementById("dialog-title");
  const label = document.getElementById("dialog-input-label");
  
  if (field === "servsafe") {
    title.textContent = "Enter FSSAI License";
    label.textContent = "14-Digit FSSAI Registration Number";
  } else {
    title.textContent = "Hygiene Audit Check";
    label.textContent = "Commercial Lease ID or Self-Declaration Reference";
  }
  
  dialog.showModal();
}

function handleDialogSubmit(e) {
  e.preventDefault();
  const val = document.getElementById("dialog-input-value").value.trim();
  const dialog = document.getElementById("upload-dialog");

  // Format validation for FSSAI License: must be exactly 14 digits
  if (activeUploadField === "servsafe") {
    const fssaiRegex = /^\d{14}$/;
    if (!fssaiRegex.test(val)) {
      showToast("FSSAI Audit Failed", "FSSAI license must be exactly 14 numeric digits (e.g. 11225999000123).", "danger");
      return;
    }
  }

  dialog.close();
  document.getElementById("dialog-input-value").value = "";

  showToast("Record Submitted", "FOSCOS portal audit initiated...", "success");

  // Simulate server checking verification
  setTimeout(() => {
    if (activeUploadField === "servsafe") {
      state.verification.servsafe = "verified";
      const step = document.getElementById("v-step-servsafe");
      step.className = "step-item completed";
      step.querySelector(".step-icon").innerHTML = "✓";
      step.querySelector(".step-icon").className = "step-icon";
      if (step.querySelector("button")) step.querySelector("button").remove();
    } else if (activeUploadField === "kitchen") {
      state.verification.kitchen = "verified";
      const step = document.getElementById("v-step-kitchen");
      step.className = "step-item completed";
      step.querySelector(".step-icon").innerHTML = "✓";
      step.querySelector(".step-icon").className = "step-icon";
      if (step.querySelector("button")) step.querySelector("button").remove();
    }
    showToast("Audit Completed", `${activeUploadField === 'servsafe' ? 'FSSAI License' : 'Kitchen Registration'} validated successfully.`, "success");
    checkOverallTrustVerificationStatus();
  }, 2500);
}

function checkOverallTrustVerificationStatus() {
  const v = state.verification;
  if (v.identity && v.background === "verified" && v.servsafe === "verified" && v.kitchen === "verified") {
    // Update dashboard state
    const tag = document.getElementById("verification-status-tag");
    tag.className = "verification-status-tag verified";
    tag.textContent = "FSSAI Vetted";
    
    const dot = document.getElementById("chef-badge-status");
    dot.className = "badge-status-dot verified";

    showToast("Profile Active!", "Your catering details are now visible to matching Mumbai clientele.", "success");
  }
}

// 12. MVP Feature 2: Emergency Standby Chef Simulation (India version)
function triggerEmergencyStandbySimulation() {
  // Trigger standby mode
  STANDBY_CHEF.active = true;
  STANDBY_CHEF.x = 50;
  STANDBY_CHEF.y = 150;
  
  // Show dialog
  const standbyDialog = document.getElementById("standby-dialog");
  standbyDialog.showModal();

  showToast("Alert: Chef Cancelled", "Mumbai-West booking provider has canceled. Automated Standby active.", "danger");

  // Animate routing standby chef dot on canvas
  animateStandbyChefRoute();
}

function animateStandbyChefRoute() {
  const targetX = USER_LOCATION.x;
  const targetY = USER_LOCATION.y;
  
  function step() {
    let dx = targetX - STANDBY_CHEF.x;
    let dy = targetY - STANDBY_CHEF.y;
    let dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > 2) {
      STANDBY_CHEF.x += dx / 40;
      STANDBY_CHEF.y += dy / 40;
      drawGeoMap();
      state.canvasAnimationId = requestAnimationFrame(step);
    } else {
      cancelAnimationFrame(state.canvasAnimationId);
      completeStandbyRerouting();
    }
  }
  
  state.canvasAnimationId = requestAnimationFrame(step);
}

function completeStandbyRerouting() {
  // Find first active chef-aravind booking to tag with standby backup info
  const aravindBooking = state.bookings.find(b => b.chefId === "chef-aravind" && b.status === "paid");
  if (aravindBooking) {
    aravindBooking.id = aravindBooking.id + " [Backup]";
    aravindBooking.kitchenSpecs = "✓ Standby Backup Active: Chef Priya Sharma has arrived at the property with matching ingredients.";
  }
  
  renderChefPendingOrders();
  
  if (state.booking) {
    document.getElementById("deal-title-text").innerHTML = `🎉 Standby Chef Dispatched`;
    document.getElementById("deal-desc-text").textContent = `Chef Priya Sharma is on route with matching ingredients. Service guaranteed.`;
  }

  showToast("Backup Chef Arrived", "Chef Priya Sharma has taken over the kitchen. Service guaranteed.", "success");
}

function renderChefPendingOrders() {
  const panel = document.getElementById("panel-pending-orders");
  if (!panel) return;
  
  const list = state.bookings.filter(b => b.chefId === state.currentChefId);
  document.getElementById("req-count").textContent = list.length;
  
  if (list.length === 0) {
    panel.innerHTML = `
      <div class="text-center p-4">
        <p class="text-secondary">No pending orders found for this chef profile.</p>
      </div>
    `;
    return;
  }
  
  panel.innerHTML = "";
  list.forEach(booking => {
    const card = document.createElement("div");
    card.id = `booking-item-${booking.id}`;
    card.className = "booking-item card-border-orange";
    
    let statusClass = "pending";
    let statusText = "Awaiting Acceptance";
    let actionButtons = `
      <button class="btn-success btn-accept-booking-dynamic" data-id="${booking.id}" style="padding: 0.5rem 1rem; font-size: 0.9rem;">Accept Request</button>
      <button class="btn-secondary btn-decline-booking-dynamic" data-id="${booking.id}" style="padding: 0.5rem 1rem; font-size: 0.9rem;">Decline Request</button>
    `;
    
    if (booking.status === 'deal_accepted') {
      statusClass = "pending";
      statusText = "Request Accepted - Waiting for Payment";
      actionButtons = `<button class="btn-primary w-full" disabled style="background: var(--navy-accent); padding: 0.5rem 1rem;">Deal Confirmed - Awaiting Customer Payment</button>`;
    } else if (booking.status === 'paid') {
      statusClass = "confirmed text-green";
      statusText = "Confirmed Event Schedule";
      actionButtons = `<button class="btn-primary w-full" disabled style="padding: 0.5rem 1rem;">Payment Secured</button>`;
    } else if (booking.status === 'rejected') {
      statusClass = "canceled text-red";
      statusText = "Declined";
      actionButtons = `<button class="btn-secondary w-full" disabled style="padding: 0.5rem 1rem;">Proposal Declined</button>`;
    }
    
    card.innerHTML = `
      <div class="booking-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
        <div class="booking-id-tag" style="background: var(--navy-accent); color: white; padding: 0.2rem 0.5rem; border-radius: var(--radius-sm); font-size: 0.8rem; font-weight: bold;">ID: ${booking.id}</div>
        <div class="booking-status ${statusClass}" style="font-size: 0.85rem; font-weight: bold;">${statusText}</div>
      </div>
      <div class="booking-details-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 0.5rem; margin-bottom: 1rem; font-size: 0.85rem;">
        <div><strong>Client:</strong> ${booking.clientName}</div>
        <div><strong>Date & Time:</strong> ${booking.date}</div>
        <div><strong>Location:</strong> ${booking.location}</div>
        <div><strong>Plates:</strong> ${booking.guests} Plates</div>
        <div><strong>Payment Status:</strong> <span class="text-green">${booking.amount} Secured</span></div>
      </div>

      <div class="custom-requests-block" style="background: rgba(255,255,255,0.02); border: 1px solid var(--glass-border); padding: 0.75rem; border-radius: var(--radius-sm); margin-bottom: 1rem; font-size: 0.85rem;">
        <strong>Menu Choice:</strong>
        <ul style="margin-left: 1.2rem; margin-top: 0.25rem; margin-bottom: 0.5rem;">
          <li>Course 1: ${booking.menu.appetizers}</li>
          <li>Course 2: ${booking.menu.mains}</li>
          <li>Course 3: ${booking.menu.desserts}</li>
        </ul>
        <div class="kitchen-spec-tag" style="font-size: 0.75rem; color: var(--text-secondary); border-top: 1px dashed var(--glass-border); padding-top: 0.4rem; margin-top: 0.4rem;">
          ${booking.kitchenSpecs}
        </div>
      </div>

      <div class="booking-actions" style="display: flex; gap: 0.5rem;">
        ${actionButtons}
      </div>
    `;
    
    // Bind dynamic click listener for accept booking
    const acceptBtn = card.querySelector(".btn-accept-booking-dynamic");
    if (acceptBtn) {
      acceptBtn.addEventListener("click", () => {
        // Open the Chef Billing Dialog instead of direct acceptance
        const billingDialog = document.getElementById("chef-billing-dialog");
        billingDialog.showModal();
        
        document.getElementById("btn-chef-billing-cancel").onclick = () => {
          billingDialog.close();
        };
        
        document.getElementById("chef-billing-form").onsubmit = (e) => {
          e.preventDefault();
          billingDialog.close();
          
          const selectedOption = document.querySelector('input[name="chef-plan"]:checked').value;
          booking.status = 'deal_accepted';
          
          let planText = selectedOption === 'monthly' ? "Pro Plan" : "Pay-Per-Booking (10% fee)";
          showToast("Request Accepted", `Accepted via ${planText}. Waiting for customer payment.`, "success");
          
          // Update client view if it's the client's booking
          if (state.booking && state.booking.id === booking.id) {
            state.booking.status = 'deal_accepted';
            const dealsBanner = document.getElementById("active-deals-banner");
            dealsBanner.classList.remove("hidden");
            document.getElementById("deal-title-text").innerHTML = `🤝 Proposal Accepted by ${booking.chefName}!`;
            document.getElementById("deal-desc-text").textContent = `The request is confirmed. Please finalize payment of ${booking.amount} to lock in the booking.`;
            document.getElementById("deal-action-container").innerHTML = `<button id="btn-finalize-deal-payment" class="btn-success btn-sm">Pay ${booking.amount} & Confirm</button>`;
            
            document.getElementById("btn-finalize-deal-payment").onclick = () => {
              booking.status = 'paid';
              state.booking.status = 'paid';
              
              document.getElementById("deal-title-text").innerHTML = `🎉 Booking Confirmed & Secured`;
              document.getElementById("deal-desc-text").textContent = `Your event with ${booking.chefName} is booked. Platform satisfaction insurance is active.`;
              document.getElementById("deal-action-container").innerHTML = `<span class="badge-status-dot verified"></span> Confirmed & Secured`;
              
              showToast("Payment Secured!", `Escrow locked for ${booking.amount}. Chef notified.`, "success");
              renderChefPendingOrders();
            };
          }
          
          renderChefPendingOrders();
        };
      });
    }

    const declineBtn = card.querySelector(".btn-decline-booking-dynamic");
    if (declineBtn) {
      declineBtn.addEventListener("click", () => {
        booking.status = 'rejected';
        showToast("Request Declined", `You declined the request from ${booking.clientName}.`, "danger");
        
        // Update client view if it's the client's booking
        if (state.booking && state.booking.id === booking.id) {
          state.booking.status = 'rejected';
          const dealsBanner = document.getElementById("active-deals-banner");
          dealsBanner.classList.remove("hidden");
          document.getElementById("deal-title-text").innerHTML = `❌ Request Declined by Chef`;
          document.getElementById("deal-desc-text").textContent = `${booking.chefName} declined your proposal. Please customize your menu again or choose another chef.`;
          document.getElementById("deal-action-container").innerHTML = `<span class="badge-status-dot canceled" style="background:var(--danger);"></span> Declined`;
        }
        
        renderChefPendingOrders();
      });
    }
    
    panel.appendChild(card);
  });
}

// 14. Verified Event Feed Renderer
function renderEventFeed() {
  const feedGrid = document.getElementById("social-feed-grid");
  if (!feedGrid) return;
  feedGrid.innerHTML = "";
  
  EVENTS.forEach(evt => {
    const chef = CHEFS.find(c => c.id === evt.chefId);
    const card = document.createElement("div");
    card.className = "social-card glass-panel";
    card.innerHTML = `
      <div class="social-card-bg" style="background-image: url('${evt.image}')"></div>
      <div class="social-card-content">
        <div class="social-card-meta">
          <span>Hosted by ${evt.host} • ${evt.city}</span>
          <span>★ ${evt.rating}</span>
        </div>
        <div class="social-card-title">${evt.title}</div>
        <div class="social-card-chef">
          <img src="${chef ? chef.avatar : ''}" alt="${chef ? chef.name : ''}">
          <span>Catered by ${chef ? chef.name : 'Vetted Chef'} (${evt.headcount} guests)</span>
        </div>
        <div class="booking-actions mt-2" style="pointer-events: auto; z-index: 10;">
          <button class="btn-primary btn-sm btn-book-similar" data-chef="${evt.chefId}">Book Similar Menu</button>
          <button class="btn-secondary btn-sm btn-share-card" data-event="${evt.id}">Share Card</button>
        </div>
      </div>
    `;
    
    // Wire up events
    card.querySelector(".btn-book-similar").addEventListener("click", (e) => {
      e.stopPropagation();
      const targetChef = CHEFS.find(c => c.id === evt.chefId);
      if (targetChef) {
        // Set AI recommendations to mimic this event's menu config
        state.aiRecommendedDishes = [evt.menu.appetizers, evt.menu.mains, evt.menu.desserts];
        state.guestsCount = evt.headcount;
        document.getElementById("calc-guests").value = evt.headcount;
        document.getElementById("calc-guest-label").textContent = evt.headcount;
        openMenuCustomizer(targetChef);
        
        // Auto select the items in customizations
        const appetizerObj = targetChef.courses.appetizers.find(d => d.name === evt.menu.appetizers);
        const mainObj = targetChef.courses.mains.find(d => d.name === evt.menu.mains);
        const dessertObj = targetChef.courses.desserts.find(d => d.name === evt.menu.desserts);
        if (appetizerObj) state.customizations.appetizer = appetizerObj;
        if (mainObj) state.customizations.main = mainObj;
        if (dessertObj) state.customizations.dessert = dessertObj;
        
        // Update checkmarks in customizer DOM
        setTimeout(() => {
          const customizerRadios = document.querySelectorAll('#courses-customizer-list input[type="radio"]');
          customizerRadios.forEach(radio => {
            const labelText = radio.closest(".course-option-label").querySelector("strong").textContent;
            if (labelText === evt.menu.appetizers || labelText === evt.menu.mains || labelText === evt.menu.desserts) {
              radio.checked = true;
            }
          });
          updateEscrowCalculation();
        }, 100);
        
        showToast("Similar Menu Pre-Loaded", `Pre-configured ${targetChef.name}'s menu choices & ${evt.headcount} plate settings.`, "success");
      }
    });

    card.querySelector(".btn-share-card").addEventListener("click", (e) => {
      e.stopPropagation();
      openShareDialog(evt.id);
    });
    
    feedGrid.appendChild(card);
  });
}

// 15. Share Event Card dialog helper
function openShareDialog(eventId) {
  const dialog = document.getElementById("share-dialog");
  const shareLinkInput = document.getElementById("share-link-input");
  shareLinkInput.value = `https://caterease.in/event/${eventId}?ref_code=mitigate_bypass_1283`;
  dialog.showModal();
}

function copyShareLink() {
  const shareLinkInput = document.getElementById("share-link-input");
  shareLinkInput.select();
  shareLinkInput.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(shareLinkInput.value).then(() => {
    showToast("Link Copied!", "Share link copied with masked contacts and bypass warnings.", "success");
  });
}

// 16. AI Menu Personalizer parser and auto-selector
function handleAIPersonalization() {
  const promptInput = document.getElementById("ai-prompt-input");
  const promptText = promptInput.value.trim().toLowerCase();
  
  if (!promptText) {
    showToast("AI Warning", "Please type an event description first.", "danger");
    return;
  }
  
  // Show parsing block loader
  const feedbackBox = document.getElementById("ai-parsing-feedback");
  const parsedResults = feedbackBox.querySelector(".ai-parsed-results");
  const loaderContainer = feedbackBox.querySelector(".ai-parsing-loader-container");
  
  feedbackBox.classList.remove("hidden");
  loaderContainer.classList.remove("hidden");
  parsedResults.classList.add("hidden");
  
  // Simulated parsing logic
  let guestCount = 20;
  let cuisine = "Mughlai & Awadhi Dum Feast";
  let diet = "Veg Only";
  let allergensDetected = [];
  let matchingChefId = "chef-meera"; // Chef Meera Sodha
  let recommendedDishes = [];
  let summary = "";
  
  // Headcount parsing
  const plateMatch = promptText.match(/\b\d+\b/);
  if (plateMatch) {
    guestCount = parseInt(plateMatch[0]);
  }
  
  // Dietary parsing
  if (promptText.includes("jain") || promptText.includes("no onion")) {
    diet = "Jain (No Onion/Garlic)";
    cuisine = "Heritage Gujarati Thali";
    matchingChefId = "chef-rohan";
    recommendedDishes = ["Gujarati Handvo with Coriander Chutney", "Jain Royal Heritage Thali (8 Items)", "Rich Basundi with Almond Shavings"];
  } else if (promptText.includes("south") || promptText.includes("kerala") || promptText.includes("sadhya") || promptText.includes("fish") || promptText.includes("seafood")) {
    diet = "Non-Veg Options Included";
    cuisine = "South Indian Coastal Feast";
    matchingChefId = "chef-aravind";
    recommendedDishes = ["Malabar Prawn Fry with Curry Leaves", "Meen Curry (Kerala Fish Curry) with Appams", "Elaneer Payasam (Tender Coconut Kheer)"];
  } else {
    // Standard Awadhi (Default)
    if (promptText.includes("veg")) {
      diet = "Pure Vegetarian";
      recommendedDishes = ["Achari Paneer Tikka", "Dal Makhani & Paneer Butter Masala Combo", "Shahi Tukda with Rabri & Silver Leaf"];
    } else {
      diet = "Non-Veg Choices Enabled";
      recommendedDishes = ["Melt-in-mouth Galouti Kebabs with Ulta Tawa Paratha", "Royal Awadhi Mutton Dum Biryani", "Shahi Tukda with Rabri & Silver Leaf"];
    }
  }

  // Allergen checking inside prompt
  if (promptText.includes("gluten") || promptText.includes("wheat")) {
    allergensDetected.push("GLUTEN");
  }
  if (promptText.includes("dairy") || promptText.includes("milk") || promptText.includes("butter")) {
    allergensDetected.push("DAIRY");
  }
  if (promptText.includes("nut") || promptText.includes("almond") || promptText.includes("cashew") || promptText.includes("prawn")) {
    allergensDetected.push("NUT_ALLERGY");
  }
  
  setTimeout(() => {
    loaderContainer.classList.add("hidden");
    parsedResults.classList.remove("hidden");
    
    // Fill tags in UI
    document.getElementById("tag-parsed-cuisine").textContent = `Cuisine: ${cuisine}`;
    document.getElementById("tag-parsed-diet").textContent = `Diet: ${diet}`;
    document.getElementById("tag-parsed-plates").textContent = `Plates: ${guestCount}`;
    document.getElementById("tag-parsed-allergens").textContent = `Allergens: ${allergensDetected.length > 0 ? allergensDetected.join(', ') : 'None detected'}`;
    
    // Pre-fill parameters in UI
    document.getElementById("search-guests").value = guestCount;
    state.guestsCount = guestCount;
    document.getElementById("calc-guests").value = guestCount;
    document.getElementById("calc-guest-label").textContent = guestCount;
    
    // Pre-fill allergens checkboxes
    document.querySelectorAll('input[name="allergens"]').forEach(cb => {
      if (allergensDetected.includes(cb.value)) {
        cb.checked = true;
        if (!state.customerAllergens.includes(cb.value)) {
          state.customerAllergens.push(cb.value);
        }
      } else {
        cb.checked = false;
        state.customerAllergens = state.customerAllergens.filter(x => x !== cb.value);
      }
    });

    const selectedChef = CHEFS.find(c => c.id === matchingChefId);
    state.aiRecommendedDishes = recommendedDishes;

    if (selectedChef) {
      summary = `Matched ${selectedChef.name} for your event. Pre-selected a customized menu. `;
      
      // Check if recommended dishes violate allergens
      let substitutedCount = 0;
      state.aiRecommendedDishes = recommendedDishes.map(dishName => {
        let courseCategory = null;
        let matchedDish = null;
        
        // Find course category
        ["appetizers", "mains", "desserts"].forEach(cat => {
          const found = selectedChef.courses[cat].find(d => d.name === dishName);
          if (found) {
            courseCategory = cat;
            matchedDish = found;
          }
        });
        
        if (matchedDish) {
          const violates = allergensDetected.some(a => matchedDish.allergens && matchedDish.allergens.includes(a));
          if (violates) {
            // Find a safe alternative in that category
            const safeAlt = selectedChef.courses[courseCategory].find(d => {
              return !allergensDetected.some(a => d.allergens && d.allergens.includes(a));
            });
            if (safeAlt) {
              substitutedCount++;
              return safeAlt.name;
            }
          }
        }
        return dishName;
      });

      if (substitutedCount > 0) {
        summary += `⚠️ Swapped ${substitutedCount} item(s) to guarantee allergen compliance.`;
      } else {
        summary += `All courses are compliant.`;
      }
    }
    
    document.getElementById("ai-parsed-summary").textContent = summary;
    
    // Matching action in grid
    renderChefGrid(CHEFS);
    const selectedChefRef = CHEFS.find(c => c.id === matchingChefId);
    if (selectedChefRef) {
      openMenuCustomizer(selectedChefRef);
    }
    
    showToast("AI Configuration Applied", `Loaded menu layout for ${guestCount} plates.`, "success");
    
  }, 1500);
}

// 17. Chef subscription tier upgrade switcher
function toggleChefSubscription() {
  const btn = document.getElementById("btn-toggle-subscription");
  const tierBox = document.querySelector(".subscription-box");
  const proBadge = document.getElementById("pro-badge-indicator");
  
  if (!state.isProUpgrade) {
    state.isProUpgrade = true;
    btn.textContent = "Cancel Pro Membership";
    btn.className = "btn-danger-outline w-full mt-4";
    tierBox.querySelector(".tier-label").innerHTML = "Current Tier: <strong class='text-orange'>CaterEase Pro Badge</strong>";
    tierBox.querySelector(".tier-benefits").innerHTML = `
      <span>• Commission rate dropped from 12% to 4%.</span>
      <span>• Priority placement at search top.</span>
      <span>• Access to analytics and menus.</span>
    `;
    
    // Unlock analytics
    proBadge.className = "pro-badge-status text-orange";
    proBadge.textContent = "Pro Subscription Active";
    document.getElementById("val-gross-bookings").textContent = "₹2,84,500";
    document.getElementById("val-net-earnings").textContent = "₹2,73,120"; // 4% fee
    document.getElementById("val-repeat-rate").textContent = "34%";
    
    // Animate Chart
    animateSVGChartBars();
    
    // Update verification badges
    document.getElementById("verification-status-tag").className = "verification-status-tag verified";
    document.getElementById("verification-status-tag").textContent = "Verified Pro Audited";
    document.getElementById("chef-badge-status").className = "badge-status-dot verified";

    // Update Aravind's badge status in mock CHEFS array to unlock Priority ranking
    const aravind = CHEFS.find(c => c.id === "chef-aravind");
    if (aravind) {
      aravind.isPro = true;
      aravind.rating = 5.0; // Boost rating slightly for priority ranking simulation
    }

    showToast("Pro Activated!", "Commission rate dropped to 4%. Priority flag active in search indexing.", "success");
  } else {
    state.isProUpgrade = false;
    btn.textContent = "Upgrade to Pro (₹1,499/mo)";
    btn.className = "btn-primary w-full mt-4";
    tierBox.querySelector(".tier-label").innerHTML = "Current Tier: <strong>Standard Free</strong>";
    tierBox.querySelector(".tier-benefits").innerHTML = `
      <span>• Standard 12% commission rate.</span>
      <span>• Basic discovery rankings.</span>
    `;
    
    // Lock analytics
    proBadge.className = "pro-badge-status text-muted";
    proBadge.textContent = "Upgrade to Pro to unlock analytics";
    document.getElementById("val-gross-bookings").textContent = "₹0";
    document.getElementById("val-net-earnings").textContent = "₹0";
    document.getElementById("val-repeat-rate").textContent = "0%";
    
    // Collapse chart bars
    const bars = document.querySelectorAll(".chart-bar");
    bars.forEach(bar => {
      bar.setAttribute("height", "0");
      bar.setAttribute("y", "170");
    });
    
    const aravind = CHEFS.find(c => c.id === "chef-aravind");
    if (aravind) {
      aravind.isPro = false;
      aravind.rating = 4.9;
    }
    
    checkOverallTrustVerificationStatus(); // Reset badge back depending on onboarding status
    
    showToast("Pro Subscription Suspended", "Returned to standard 12% commission structure.", "success");
  }
  
  // Re-run searches and redraw customizer to update calculation commission drops
  renderChefGrid(CHEFS);
  if (state.selectedChef) {
    updateEscrowCalculation();
  }
}

function animateSVGChartBars() {
  const bars = [
    { idx: 0, height: 90, y: 80 },
    { idx: 1, height: 110, y: 60 },
    { idx: 2, height: 130, y: 40 },
    { idx: 3, height: 140, y: 30 },
    { idx: 4, height: 150, y: 20 }
  ];
  
  const chartBars = document.querySelectorAll(".chart-bar");
  const bgBars = document.querySelectorAll(".analytics-svg-chart rect:not(.chart-bar)");
  
  bars.forEach(b => {
    if (chartBars[b.idx]) {
      // Set values with transition
      chartBars[b.idx].style.transition = "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
      chartBars[b.idx].setAttribute("height", b.height);
      chartBars[b.idx].setAttribute("y", b.y);
      
      // Bind hover events for tooltip
      chartBars[b.idx].addEventListener("mouseenter", (e) => {
        const tooltip = document.getElementById("chart-tooltip");
        const val = e.target.getAttribute("data-val");
        tooltip.textContent = `Month Revenue: ${val}`;
        tooltip.classList.remove("hidden");
      });
      chartBars[b.idx].addEventListener("mouseleave", () => {
        const tooltip = document.getElementById("chart-tooltip");
        tooltip.classList.add("hidden");
      });
    }
    if (bgBars[b.idx]) {
      bgBars[b.idx].style.transition = "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
      bgBars[b.idx].setAttribute("height", b.height);
      bgBars[b.idx].setAttribute("y", b.y);
    }
  });
}

// 18. Chef Portal Menu Builder panel actions
function renderChefMenuBuilder() {
  const container = document.getElementById("chef-menu-items-list");
  if (!container) return;
  container.innerHTML = "";
  
  const aravind = CHEFS.find(c => c.id === "chef-aravind");
  if (!aravind) return;
  
  const categories = ["appetizers", "mains", "desserts"];
  categories.forEach(cat => {
    aravind.courses[cat].forEach((dish, idx) => {
      const row = document.createElement("div");
      row.className = "chef-menu-item";
      row.innerHTML = `
        <div class="chef-menu-item-details">
          <span class="chef-menu-item-name">${dish.name}</span>
          <span class="chef-menu-item-meta">${cat.toUpperCase()} • Modifier: ₹${dish.modifier} • Dietary: ${dish.dietary ? dish.dietary.join(', ') : 'none'} • Allergens: ${dish.allergens && dish.allergens.length > 0 ? dish.allergens.join(', ') : 'none'}</span>
        </div>
        <button class="btn-delete-dish" data-cat="${cat}" data-idx="${idx}">Delete</button>
      `;
      
      row.querySelector(".btn-delete-dish").addEventListener("click", () => {
        aravind.courses[cat].splice(idx, 1);
        showToast("Dish Deleted", `${dish.name} removed from your catering profile.`, "success");
        renderChefMenuBuilder();
        
        // Reset selections if active chef customizer is open
        if (state.selectedChef && state.selectedChef.id === "chef-aravind") {
          openMenuCustomizer(aravind);
        }
      });
      
      container.appendChild(row);
    });
  });
}

function openAddDishDialog() {
  document.getElementById("dish-dialog-title").textContent = "Add Catering Dish";
  document.getElementById("dish-name").value = "";
  document.getElementById("dish-modifier").value = "0";
  document.getElementById("dish-diet-veg").checked = false;
  document.getElementById("dish-diet-jain").checked = false;
  document.getElementById("dish-allergen-gluten").checked = false;
  document.getElementById("dish-allergen-dairy").checked = false;
  document.getElementById("dish-allergen-nuts").checked = false;
  
  document.getElementById("dish-dialog").showModal();
}

function handleDishSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("dish-name").value.trim();
  const category = document.getElementById("dish-course").value;
  const modifier = parseInt(document.getElementById("dish-modifier").value) || 0;
  
  let dietary = [];
  if (document.getElementById("dish-diet-veg").checked) dietary.push("pure_veg");
  if (document.getElementById("dish-diet-jain").checked) dietary.push("jain");
  if (dietary.length === 0) dietary.push("non_veg");
  
  let allergens = [];
  if (document.getElementById("dish-allergen-gluten").checked) allergens.push("GLUTEN");
  if (document.getElementById("dish-allergen-dairy").checked) allergens.push("DAIRY");
  if (document.getElementById("dish-allergen-nuts").checked) allergens.push("NUT_ALLERGY");
  
  const aravind = CHEFS.find(c => c.id === "chef-aravind");
  if (aravind && name) {
    aravind.courses[category].push({
      name: name,
      modifier: modifier,
      dietary: dietary,
      allergens: allergens
    });
    
    document.getElementById("dish-dialog").close();
    showToast("Dish Added", `${name} is now synchronized and live on your profile.`, "success");
    renderChefMenuBuilder();
    
    // Refresh customer customization screen if current active selected chef is aravind
    if (state.selectedChef && state.selectedChef.id === "chef-aravind") {
      openMenuCustomizer(aravind);
    }
  }
}

// 13. Toast Alert Notification Utility
function showToast(title, msg, type = "success") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-title">${title}</span>
    <span class="toast-msg">${msg}</span>
  `;

  container.appendChild(toast);

  // Auto remove toast
  setTimeout(() => {
    toast.style.animation = "slideInRight 0.3s reverse forwards";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// 14. Authentication & Onboarding Logic

function enforceAuthWall() {
  const role = state.currentView;
  
  if (role === "customer" && (!state.currentUser || state.currentUser.role !== "customer")) {
    document.getElementById("auth-customer-dialog").showModal();
    return false;
  }
  
  if (role === "chef" && (!state.currentUser || state.currentUser.role !== "chef")) {
    document.getElementById("auth-chef-dialog").showModal();
    return false;
  }
  
  updateAuthUI();
  return true;
}

function updateAuthUI() {
  const authStatus = document.getElementById("auth-status");
  const authEmail = document.getElementById("auth-user-email");
  
  if (state.currentUser) {
    authStatus.style.display = "flex";
    authEmail.textContent = state.currentUser.email;
  } else {
    authStatus.style.display = "none";
  }
}

window.handleLogout = function() {
  state.currentUser = null;
  showToast("Logged Out", "You have been logged out successfully.", "success");
  
  // Reset view to home
  switchWorkspace("home");
};

// Customer Tabs
window.switchCustomerAuthTab = function(tab) {
  document.getElementById("tab-cust-login").classList.toggle("active", tab === "login");
  document.getElementById("tab-cust-signup").classList.toggle("active", tab === "signup");
  document.getElementById("tab-cust-login").classList.toggle("btn-primary", tab === "login");
  document.getElementById("tab-cust-login").classList.toggle("btn-secondary", tab !== "login");
  document.getElementById("tab-cust-signup").classList.toggle("btn-primary", tab === "signup");
  document.getElementById("tab-cust-signup").classList.toggle("btn-secondary", tab !== "signup");
  
  document.getElementById("customer-login-form").style.display = tab === "login" ? "block" : "none";
  document.getElementById("customer-signup-form").style.display = tab === "signup" ? "block" : "none";
};

// Chef Tabs
window.switchChefAuthTab = function(tab) {
  document.getElementById("tab-chef-login").classList.toggle("active", tab === "login");
  document.getElementById("tab-chef-signup").classList.toggle("active", tab === "signup");
  document.getElementById("tab-chef-login").classList.toggle("btn-primary", tab === "login");
  document.getElementById("tab-chef-login").classList.toggle("btn-secondary", tab !== "login");
  document.getElementById("tab-chef-signup").classList.toggle("btn-primary", tab === "signup");
  document.getElementById("tab-chef-signup").classList.toggle("btn-secondary", tab !== "signup");
  
  document.getElementById("chef-login-form").style.display = tab === "login" ? "block" : "none";
  document.getElementById("chef-signup-form").style.display = tab === "signup" ? "block" : "none";
};

// Customer Handlers
window.handleCustomerLogin = function() {
  const email = document.getElementById("cust-login-email").value;
  const mockName = email.split('@')[0];
  state.currentUser = { role: "customer", email: email, name: mockName };
  
  if (document.getElementById("cust-name-input")) {
    document.getElementById("cust-name-input").value = mockName;
  }
  
  document.getElementById("auth-customer-dialog").close();
  switchWorkspace("customer");
  showToast("Welcome Back", "Successfully logged into Customer Portal", "success");
};

window.handleCustomerSignup = function() {
  const name = document.getElementById("cust-signup-name").value;
  const email = document.getElementById("cust-signup-email").value;
  state.currentUser = { role: "customer", email: email, name: name };
  
  if (document.getElementById("cust-name-input")) {
    document.getElementById("cust-name-input").value = name;
  }
  
  document.getElementById("auth-customer-dialog").close();
  switchWorkspace("customer");
  showToast("Account Created", "Welcome to CaterEase!", "success");
};

// Chef Handlers
window.handleChefLogin = function() {
  const email = document.getElementById("chef-login-email").value;
  const id = document.getElementById("chef-login-id").value;
  
  if (!id.startsWith("chef-")) {
    showToast("Login Failed", "Chef ID must start with 'chef-'.", "error");
    return;
  }
  
  let chef = CHEFS.find(c => c.id === id) || PENDING_CHEFS.find(c => c.id === id);
  if (!chef) {
    chef = {
      id: id,
      name: email.split('@')[0],
      email: email,
      fssai: "14-digit-mock-fssai",
      type: "Home Caterer",
      rating: 4.5,
      reviews: 1,
      basePrice: 1500,
      avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=200",
      specialties: "Indian Cuisine",
      dietary: ["pure_veg"],
      x: 200,
      y: 200,
      kitchenSpecs: "FSSAI Verified Mock Profile",
      courses: {
        appetizers: [{ name: "Starter Delight", modifier: 0, dietary: ["pure_veg"], allergens: [] }],
        mains: [{ name: "Traditional Main Course", modifier: 100, dietary: ["pure_veg"], allergens: [] }],
        desserts: [{ name: "Dessert Sweetness", modifier: 0, dietary: ["pure_veg"], allergens: [] }]
      }
    };
    CHEFS.push(chef);
    renderChefGrid(CHEFS);
    drawGeoMap();
  }
  
  state.currentUser = { role: "chef", email: email, chefId: id };
  
  populateChefSelect();
  
  document.getElementById("auth-chef-dialog").close();
  switchWorkspace("chef");
  showToast("Welcome Back Chef", `Logged in as ${chef.name}`, "success");
};

window.handleChefSignup = function() {
  const email = document.getElementById("chef-signup-email").value;
  const name = document.getElementById("onboard-name").value;
  const specialties = document.getElementById("onboard-specialties").value;
  const price = parseInt(document.getElementById("onboard-price").value);
  const dietaryCheckboxes = document.querySelectorAll('input[name="onboard-diet"]:checked');
  const dietary = Array.from(dietaryCheckboxes).map(cb => cb.value);
  const fssai = document.getElementById("onboard-fssai").value;
  
  const submitBtn = document.getElementById("btn-chef-signup-submit");
  const gpsStatus = document.getElementById("gps-status");
  
  submitBtn.disabled = true;
  submitBtn.textContent = "Locating via GPS...";
  gpsStatus.textContent = "Fetching coordinates...";
  
  // Automatically fetch GPS via browser geolocation API
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Map real world lat/lng to our 500x500 mock coordinate space for simulation
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        // Simple mock mapping
        const locX = Math.floor(Math.abs(lng) % 500);
        const locY = Math.floor(Math.abs(lat) % 500);
        
        finalizeChefSignup(name, email, specialties, price, locX, locY, dietary, fssai);
      },
      (error) => {
        console.warn("GPS Error:", error);
        gpsStatus.textContent = "GPS Access Denied. Using Default Coordinates.";
        // Fallback
        setTimeout(() => {
           finalizeChefSignup(name, email, specialties, price, 250, 250, dietary, fssai);
        }, 1000);
      },
      { timeout: 5000 }
    );
  } else {
    gpsStatus.textContent = "Geolocation not supported. Using Default Coordinates.";
    setTimeout(() => {
       finalizeChefSignup(name, email, specialties, price, 250, 250, dietary, fssai);
    }, 1000);
  }
};

function finalizeChefSignup(name, email, specialties, price, locX, locY, dietary, fssai) {
  const newChef = {
    id: "chef-" + Date.now(),
    name: name,
    email: email,
    fssai: fssai,
    type: specialties.split(",")[0] || "General Caterer",
    rating: 0.0,
    reviews: 0,
    basePrice: price,
    avatar: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=200",
    specialties: specialties,
    dietary: dietary,
    x: locX,
    y: locY,
    kitchenSpecs: "Pending FSSAI verification (" + fssai + ")",
    courses: {
      appetizers: [{ name: "Chef's Special Appetizer", modifier: 0, dietary: dietary, allergens: [] }],
      mains: [{ name: "Chef's Signature Main", modifier: 100, dietary: dietary, allergens: [] }],
      desserts: [{ name: "Sweet Delight", modifier: 0, dietary: dietary, allergens: [] }]
    }
  };
  
  PENDING_CHEFS.push(newChef);
  
  // Log them in as a pending chef
  state.currentUser = { role: "chef", email: email, chefId: newChef.id, status: "pending" };
  
  const submitBtn = document.getElementById("btn-chef-signup-submit");
  submitBtn.disabled = false;
  submitBtn.textContent = "Submit Application";
  
  document.getElementById("auth-chef-dialog").close();
  document.getElementById("chef-signup-form").reset();
  
  switchWorkspace("chef");
  showToast("Application Submitted", "Your chef profile is pending admin review.", "success");
  
  if (state.currentView === "admin") {
    renderPendingChefs();
  }
}

// 15. Admin Approval Logic
function renderPendingChefs() {
  const container = document.getElementById("pending-chefs-list");
  const countSpan = document.getElementById("pending-chef-count");
  
  countSpan.textContent = PENDING_CHEFS.length;
  
  if (PENDING_CHEFS.length === 0) {
    container.innerHTML = `<div class="text-center p-4"><p class="text-secondary">No pending applications.</p></div>`;
    return;
  }
  
  container.innerHTML = PENDING_CHEFS.map(chef => `
    <div class="booking-card pending-chef-card" style="border: 1px solid var(--glass-border); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1rem; background: var(--bg-primary);">
      <div class="booking-header" style="display: flex; justify-content: space-between; align-items: flex-start;">
        <div>
          <span class="booking-id" style="font-size: 0.8rem; color: var(--text-secondary);">ID: ${chef.id}</span>
          <h4 style="margin: 0.25rem 0; font-family: var(--font-heading); color: var(--navy-accent); font-size: 1.1rem;">${chef.name}</h4>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0;">${chef.email}</p>
        </div>
        <span class="badge" style="background: rgba(245, 158, 11, 0.1); color: #b45309; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">Pending Review</span>
      </div>
      <div class="booking-details mt-3" style="font-size: 0.9rem; background: rgba(0,0,0,0.02); padding: 1rem; border-radius: 6px;">
        <p style="margin-bottom: 0.4rem;"><strong>Specialties:</strong> ${chef.specialties}</p>
        <p style="margin-bottom: 0.4rem;"><strong>Base Price:</strong> ₹${chef.basePrice} / Plate</p>
        <p style="margin-bottom: 0.4rem;"><strong>GPS Coordinates:</strong> (${chef.x}, ${chef.y})</p>
        <p style="margin-bottom: 0;"><strong>FSSAI License:</strong> <span style="font-family: monospace; background: #e2e8f0; padding: 0.1rem 0.4rem; border-radius: 3px;">${chef.fssai}</span></p>
      </div>
      <div class="booking-actions mt-3">
        <button class="btn-success btn-sm" onclick="approveChef('${chef.id}')">Verify FSSAI & Approve</button>
      </div>
    </div>
  `).join('');
}

window.approveChef = function(chefId) {
  const index = PENDING_CHEFS.findIndex(c => c.id === chefId);
  if (index > -1) {
    const approvedChef = PENDING_CHEFS.splice(index, 1)[0];
    approvedChef.kitchenSpecs = "FSSAI Verified (" + approvedChef.fssai + ")";
    CHEFS.push(approvedChef);
    
    populateChefSelect();
    renderPendingChefs();
    drawGeoMap();
    renderChefGrid(CHEFS);
    
    showToast("Chef Approved", `${approvedChef.name} is now verified and live!`, "success");
  }
};

window.closeAuthDialog = function(role) {
  if (role === "customer") {
    document.getElementById("auth-customer-dialog").close();
  } else if (role === "chef") {
    document.getElementById("auth-chef-dialog").close();
  }
  // Revert back to home workspace
  switchWorkspace("home");
};

function populateChefSelect() {
  const select = document.getElementById("chef-select-profile");
  if (!select) return;
  
  let list = [...CHEFS];
  if (state.currentUser && state.currentUser.role === "chef") {
    const isPending = PENDING_CHEFS.find(c => c.id === state.currentUser.chefId);
    if (isPending && !list.some(c => c.id === isPending.id)) {
      list.push(isPending);
    }
  }
  
  select.innerHTML = list.map(chef => `<option value="${chef.id}">${chef.name}</option>`).join('');
  
  if (state.currentUser && state.currentUser.role === "chef") {
    select.value = state.currentUser.chefId;
    const event = new Event('change');
    select.dispatchEvent(event);
  }
}
