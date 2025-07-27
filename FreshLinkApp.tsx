import React, { useState, useEffect, useRef } from "react";
import {
  ShoppingCart,
  User,
  Phone,
  MapPin,
  Clock,
  Star,
  Truck,
  Package,
  Menu,
  Home,
  History,
  Settings,
  Plus,
  Minus,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  TrendingUp,
  Shield,
  Zap,
  Users,
  Heart,
  ArrowRight,
  ChevronDown,
  Quote,
  Mic,
  MicOff,
  Award,
  Eye,
  Share2,
  Route,
  Thermometer,
  Wifi,
  WifiOff,
  UserPlus,
  Gift,
  ChefHat,
  BarChart3,
  Navigation,
  Volume2,
  Sparkles,
  Target,
  Globe,
  Play,
} from "lucide-react";

// Enhanced Mock data with new features
const rawMaterials = [
  {
    id: 1,
    name: "Onion",
    hindiName: "प्याज",
    price: 25,
    unit: "kg",
    rating: 4.5,
    image: "🧅",
    supplier: "Krishna Farms",
    freshGuarantee: true,
    freshnessScore: 95,
    mandiPrice: 28,
    chefTested: true,
    chefCount: 150,
    temperature: 18,
    harvestDate: "2 days ago",
  },
  {
    id: 2,
    name: "Potato",
    hindiName: "आलू",
    price: 18,
    unit: "kg",
    rating: 4.8,
    image: "🥔",
    supplier: "Delhi Mandi Co-op",
    freshGuarantee: true,
    freshnessScore: 92,
    mandiPrice: 22,
    chefTested: true,
    chefCount: 280,
    temperature: 15,
    harvestDate: "1 day ago",
  },
  {
    id: 3,
    name: "Tomato",
    hindiName: "टमाटर",
    price: 35,
    unit: "kg",
    rating: 4.3,
    image: "🍅",
    supplier: "Fresh Valley",
    freshGuarantee: true,
    freshnessScore: 88,
    mandiPrice: 40,
    chefTested: true,
    chefCount: 320,
    temperature: 12,
    harvestDate: "3 hours ago",
  },
  {
    id: 4,
    name: "Cooking Oil",
    hindiName: "तेल",
    price: 120,
    unit: "ltr",
    rating: 4.7,
    image: "🛢",
    supplier: "Golden Oil Mills",
    freshGuarantee: false,
    freshnessScore: null,
    mandiPrice: 125,
    chefTested: true,
    chefCount: 450,
    temperature: null,
    harvestDate: null,
  },
  {
    id: 5,
    name: "Wheat Flour",
    hindiName: "आटा",
    price: 28,
    unit: "kg",
    rating: 4.6,
    image: "🌾",
    supplier: "Grain Masters",
    freshGuarantee: false,
    freshnessScore: null,
    mandiPrice: 30,
    chefTested: true,
    chefCount: 200,
    temperature: null,
    harvestDate: null,
  },
  {
    id: 6,
    name: "Green Chili",
    hindiName: "हरी मिर्च",
    price: 45,
    unit: "kg",
    rating: 4.4,
    image: "🌶",
    supplier: "Spice Garden",
    freshGuarantee: true,
    freshnessScore: 90,
    mandiPrice: 50,
    chefTested: true,
    chefCount: 180,
    temperature: 8,
    harvestDate: "6 hours ago",
  },
];

const timeSlots = [
  { id: 1, time: "6:00 AM - 8:00 AM", hindi: "सुबह 6-8 बजे", optimized: true },
  {
    id: 2,
    time: "8:00 AM - 10:00 AM",
    hindi: "सुबह 8-10 बजे",
    optimized: false,
  },
  {
    id: 3,
    time: "10:00 AM - 12:00 PM",
    hindi: "सुबह 10-12 बजे",
    optimized: true,
  },
];

const groupBuyDeals = [
  {
    id: 1,
    item: "Onion",
    hindiName: "प्याज",
    originalPrice: 25,
    groupPrice: 22,
    minQuantity: 50,
    currentQuantity: 38,
    participantsCount: 12,
    remainingTime: "2h 30m",
    savings: 3,
  },
  {
    id: 2,
    item: "Potato",
    hindiName: "आलू",
    originalPrice: 18,
    groupPrice: 15,
    minQuantity: 100,
    currentQuantity: 85,
    participantsCount: 20,
    remainingTime: "4h 15m",
    savings: 3,
  },
];

const stats = [
  {
    number: "10,000+",
    label: "Active Vendors",
    hindi: "सक्रिय विक्रेता",
    icon: Users,
  },
  {
    number: "500+",
    label: "Trusted Suppliers",
    hindi: "विश्वसनीय आपूर्तिकर्ता",
    icon: Shield,
  },
  {
    number: "50,000+",
    label: "Orders Daily",
    hindi: "दैनिक ऑर्डर",
    icon: Package,
  },
  { number: "25", label: "Cities", hindi: "शहर", icon: Globe },
];

const features = [
  {
    icon: Volume2,
    title: "Voice-Enabled Cart",
    hindi: "वॉइस-सक्षम कार्ट",
    description: 'Say "आलू 5 किलो" and items are added automatically',
    hindiDesc: '"आलू 5 किलो" कहें और आइटम अपने आप जुड़ जाएंगे',
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Users,
    title: "Group Buying Power",
    hindi: "सामूहिक खरीदारी शक्ति",
    description: "Join neighbors for bulk discounts and better prices",
    hindiDesc: "बल्क डिस्काउंट और बेहतर कीमतों के लिए पड़ोसियों से जुड़ें",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Thermometer,
    title: "AI Freshness Score",
    hindi: "AI ताज़गी स्कोर",
    description:
      "Smart algorithms predict freshness based on weather & harvest time",
    hindiDesc:
      "स्मार्ट एल्गोरिदम मौसम और हार्वेस्ट समय के आधार पर ताज़गी की भविष्यवाणी करते हैं",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
  },
  {
    icon: Route,
    title: "Smart Route Planning",
    hindi: "स्मार्ट रूट प्लानिंग",
    description: "Area-wise delivery clustering for faster service",
    hindiDesc: "तेज़ सेवा के लिए क्षेत्र-वार डिलीवरी क्लस्टरिंग",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Wifi,
    title: "Offline Order Cache",
    hindi: "ऑफलाइन ऑर्डर कैश",
    description: "Place orders without internet, sync when connected",
    hindiDesc: "बिना इंटरनेट के ऑर्डर करें, कनेक्ट होने पर सिंक करें",
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50",
  },
  {
    icon: Gift,
    title: "Referral Rewards",
    hindi: "रेफरल रिवार्ड्स",
    description: "Earn credits for every vendor or supplier you invite",
    hindiDesc:
      "आपके द्वारा आमंत्रित किए गए हर विक्रेता या आपूर्तिकर्ता के लिए क्रेडिट कमाएं",
    color: "from-indigo-500 to-purple-600",
    bgColor: "bg-indigo-50",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Voice Order",
    hindi: "वॉइस ऑर्डर",
    description: "Say your order in Hindi or English",
    hindiDesc: "हिंदी या अंग्रेजी में अपना ऑर्डर कहें",
    icon: Mic,
    color: "from-blue-500 to-purple-600",
  },
  {
    step: 2,
    title: "AI Processing",
    hindi: "AI प्रसंस्करण",
    description: "Smart matching with best suppliers",
    hindiDesc: "सर्वोत्तम आपूर्तिकर्ताओं के साथ स्मार्ट मैचिंग",
    icon: Sparkles,
    color: "from-purple-500 to-pink-600",
  },
  {
    step: 3,
    title: "Group Optimization",
    hindi: "समूह अनुकूलन",
    description: "Combine with nearby orders for savings",
    hindiDesc: "बचत के लिए आस-पास के ऑर्डर के साथ मिलाएं",
    icon: Users,
    color: "from-pink-500 to-red-500",
  },
  {
    step: 4,
    title: "Fresh Delivery",
    hindi: "ताज़ी डिलीवरी",
    description: "Guaranteed fresh delivery in 2 hours",
    hindiDesc: "2 घंटे में गारंटीशुदा ताज़ी डिलीवरी",
    icon: Truck,
    color: "from-red-500 to-orange-500",
  },
];

const testimonials = [
  {
    name: "Raj Kumar",
    role: "Street Vendor",
    hindi: "सड़क विक्रेता",
    image: "👨‍🍳",
    text: "FreshLink changed my business completely. Fresh vegetables every morning, right on time!",
    hindiText:
      "फ्रेशलिंक ने मेरे व्यापार को पूरी तरह बदल दिया। हर सुबह ताज़ी सब्जियां, बिल्कुल समय पर!",
    rating: 5,
    savings: "₹500/month",
  },
  {
    name: "Priya Sharma",
    role: "Restaurant Owner",
    hindi: "रेस्टोरेंट मालकिन",
    image: "👩‍🍳",
    text: "Reliable supply chain and quality ingredients. My customers love the freshness!",
    hindiText:
      "भरोसेमंद आपूर्ति श्रृंखला और गुणवत्तापूर्ण सामग्री। मेरे ग्राहक ताज़गी पसंद करते हैं!",
    rating: 5,
    savings: "₹2000/month",
  },
  {
    name: "Krishna Farms",
    role: "Supplier",
    hindi: "आपूर्तिकर्ता",
    image: "🚜",
    text: "Direct connection with vendors means better prices and no wastage. Win-win for everyone!",
    hindiText:
      "विक्रेताओं से सीधा संपर्क मतलब बेहतर कीमतें और कोई बर्बादी नहीं। सभी के लिए फायदा!",
    rating: 5,
    savings: "₹10000/month",
  },
];

const FreshLinkApp = () => {
  const [currentView, setCurrentView] = useState("landing");
  const [userType, setUserType] = useState("vendor");
  const [language, setLanguage] = useState("hindi");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [orders, setOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [navigationHistory, setNavigationHistory] = useState(["landing"]);
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState(0);

  // New state for enhanced features
  const [isListening, setIsListening] = useState(false);
  const [voiceText, setVoiceText] = useState("");
  const [isOnline, setIsOnline] = useState(true);
  const [offlineOrders, setOfflineOrders] = useState([]);
  const [showMandiComparison, setShowMandiComparison] = useState(false);
  const [deliveryLocation, setDeliveryLocation] = useState({
    lat: 28.6562,
    lng: 77.241,
  });
  const [referralCode, setReferralCode] = useState("FRESH123");
  const [referralEarnings, setReferralEarnings] = useState(250);
  const [joinedGroupBuys, setJoinedGroupBuys] = useState([]);
  const [whatsappNotifications, setWhatsappNotifications] = useState(true);
  const [showRouteOptimization, setShowRouteOptimization] = useState(false);

  const recognition = useRef(null);

  // Navigation helper functions
  const navigateTo = React.useCallback(
    (view) => {
      setNavigationHistory((prev) => {
        const newHistory = prev.slice(0, currentHistoryIndex + 1);
        if (newHistory[newHistory.length - 1] !== view) {
          newHistory.push(view);
          setCurrentHistoryIndex(newHistory.length - 1);
          return newHistory;
        }
        return prev;
      });
      setCurrentView(view);
    },
    [currentHistoryIndex]
  );

  const goBack = React.useCallback(() => {
    if (currentHistoryIndex > 0) {
      const newIndex = currentHistoryIndex - 1;
      setCurrentHistoryIndex(newIndex);
      setCurrentView(navigationHistory[newIndex]);
    }
  }, [currentHistoryIndex, navigationHistory]);

  const goForward = React.useCallback(() => {
    if (currentHistoryIndex < navigationHistory.length - 1) {
      const newIndex = currentHistoryIndex + 1;
      setCurrentHistoryIndex(newIndex);
      setCurrentView(navigationHistory[newIndex]);
    }
  }, [currentHistoryIndex, navigationHistory]);

  const canGoBack = currentHistoryIndex > 0;
  const canGoForward = currentHistoryIndex < navigationHistory.length - 1;

  // Helper function for bilingual text
  const getText = React.useCallback(
    (english, hindi) => {
      return language === "hindi" ? hindi : english;
    },
    [language]
  );

  // Add to cart function
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      updateCartQuantity(item.id, existingItem.quantity + 1);
    } else {
      setCart((prev) => [...prev, { ...item, quantity: 1 }]);
    }
  };

  // Update cart quantity
  const updateCartQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      setCart((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCart((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  // Place order function
  const placeOrder = () => {
    const newOrder = {
      id: Date.now(),
      items: cart,
      timeSlot: selectedTimeSlot,
      total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
      status: "confirmed",
      timestamp: new Date().toISOString(),
    };

    if (isOnline) {
      setOrders((prev) => [newOrder, ...prev]);
    } else {
      setOfflineOrders((prev) => [newOrder, ...prev]);
    }

    setCurrentOrder(newOrder);
    setCart([]);
    setSelectedTimeSlot(null);
    navigateTo("order-tracking");
  };

  // Voice recognition setup
  useEffect(() => {
    if ("webkitSpeechRecognition" in window) {
      recognition.current = new window.webkitSpeechRecognition();
      recognition.current.continuous = false;
      recognition.current.interimResults = false;
      recognition.current.lang = language === "hindi" ? "hi-IN" : "en-US";

      recognition.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setVoiceText(transcript);
        processVoiceOrder(transcript);
      };

      recognition.current.onend = () => {
        setIsListening(false);
      };
    }
  }, [language]);

  // Online/offline detection
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      syncOfflineOrders();
    };

    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Voice order processing
  const processVoiceOrder = (transcript) => {
    const itemMappings = {
      आलू: "potato",
      प्याज: "onion",
      टमाटर: "tomato",
      तेल: "oil",
      आटा: "flour",
      मिर्च: "chili",
      potato: "potato",
      onion: "onion",
      tomato: "tomato",
      oil: "oil",
      flour: "flour",
      chili: "chili",
    };

    const numbers = {
      एक: 1,
      दो: 2,
      तीन: 3,
      चार: 4,
      पांच: 5,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
    };

    const words = transcript.toLowerCase().split(" ");
    let detectedItems = [];

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (itemMappings[word]) {
        let quantity = 1;
        if (i > 0 && numbers[words[i - 1]]) {
          quantity = numbers[words[i - 1]];
        } else if (i > 0 && !isNaN(parseInt(words[i - 1]))) {
          quantity = parseInt(words[i - 1]);
        }

        const item = rawMaterials.find(
          (item) =>
            item.name.toLowerCase().includes(itemMappings[word]) ||
            item.hindiName.includes(word)
        );

        if (item) {
          detectedItems.push({ ...item, quantity });
        }
      }
    }

    // Add detected items to cart
    detectedItems.forEach((item) => {
      const existingItem = cart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        updateCartQuantity(item.id, existingItem.quantity + item.quantity);
      } else {
        setCart((prev) => [...prev, { ...item, quantity: item.quantity }]);
      }
    });

    if (detectedItems.length > 0) {
      // Show confirmation
      alert(
        getText(
          `Added ${detectedItems.length} items to cart!`,
          `${detectedItems.length} आइटम कार्ट में जोड़े गए!`
        )
      );
    }
  };

  // Start voice recognition
  const startVoiceRecognition = () => {
    if (recognition.current) {
      setIsListening(true);
      recognition.current.start();
    }
  };

  // Sync offline orders
  const syncOfflineOrders = () => {
    if (offlineOrders.length > 0) {
      setOrders((prev) => [...offlineOrders, ...prev]);
      setOfflineOrders([]);
      // Show success message
      alert(
        getText(
          "Offline orders synced successfully!",
          "ऑफलाइन ऑर्डर सफलतापूर्वक सिंक हो गए!"
        )
      );
    }
  };

  // Join group buy
  const joinGroupBuy = (dealId) => {
    if (!joinedGroupBuys.includes(dealId)) {
      setJoinedGroupBuys((prev) => [...prev, dealId]);
      // Add to cart with group price
      const deal = groupBuyDeals.find((d) => d.id === dealId);
      if (deal) {
        const item = rawMaterials.find(
          (item) => item.name.toLowerCase() === deal.item.toLowerCase()
        );
        if (item) {
          const groupItem = {
            ...item,
            price: deal.groupPrice,
            isGroupBuy: true,
          };
          addToCart(groupItem);
        }
      }
    }
  };

  // Share referral code
  const shareReferralCode = () => {
    if (navigator.share) {
      navigator.share({
        title: "FreshLink Referral",
        text: getText(
          `Join FreshLink with my code ${referralCode} and get ₹50 bonus!`,
          `मेरे कोड ${referralCode} से FreshLink जॉइन करें और ₹50 बोनस पाएं!`
        ),
        url: `https://freshlink.app/ref/${referralCode}`,
      });
    } else {
      navigator.clipboard.writeText(
        `https://freshlink.app/ref/${referralCode}`
      );
      alert(getText("Referral link copied!", "रेफरल लिंक कॉपी हुआ!"));
    }
  };

  // Freshness Score Component
  const FreshnessScore = ({ score, temperature, harvestTime }) => {
    if (!score) return null;

    const getScoreColor = (score) => {
      if (score >= 90) return "text-green-600 bg-green-100";
      if (score >= 80) return "text-yellow-600 bg-yellow-100";
      return "text-red-600 bg-red-100";
    };

    return (
      <div className="flex items-center space-x-2 mt-2">
        <div
          className={`px-2 py-1 rounded-full text-xs font-medium ${getScoreColor(
            score
          )}`}
        >
          {getText(`Fresh ${score}%`, `ताज़ा ${score}%`)}
        </div>
        {temperature && (
          <div className="flex items-center text-xs text-gray-600">
            <Thermometer className="w-3 h-3 mr-1" />
            {temperature}°C
          </div>
        )}
      </div>
    );
  };

  // Mandi Price Comparison Component
  const MandiComparison = ({ ourPrice, mandiPrice }) => (
    <div className="mt-2 text-xs">
      <div className="flex justify-between items-center bg-blue-50 px-2 py-1 rounded">
        <span className="text-blue-800">Mandi: ₹{mandiPrice}</span>
        <span className="text-green-800 font-medium">
          Save ₹{mandiPrice - ourPrice}
        </span>
      </div>
    </div>
  );

  // Chef Tested Badge Component
  const ChefTestedBadge = ({ count }) => (
    <div className="flex items-center mt-1">
      <ChefHat className="w-3 h-3 text-purple-600 mr-1" />
      <span className="text-xs text-purple-600">
        {getText(`Used by ${count}+ chefs`, `${count}+ शेफ उपयोग करते हैं`)}
      </span>
    </div>
  );

  // Voice Cart Component
  const VoiceCart = () => (
    <div className="fixed bottom-24 right-4 z-50">
      <button
        onClick={startVoiceRecognition}
        disabled={isListening}
        className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 ${
          isListening
            ? "bg-gradient-to-r from-red-500 to-pink-500 animate-pulse scale-110"
            : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
        } text-white`}
      >
        {isListening ? (
          <MicOff className="w-6 h-6" />
        ) : (
          <Mic className="w-6 h-6" />
        )}
      </button>
      {voiceText && (
        <div className="absolute bottom-16 right-0 bg-white p-3 rounded-xl shadow-lg max-w-48 text-xs border">
          <div className="text-gray-600 mb-1">Voice Input:</div>
          <div className="font-medium">"{voiceText}"</div>
        </div>
      )}
    </div>
  );

  // Offline Indicator
  const OfflineIndicator = () =>
    !isOnline && (
      <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-red-500 to-pink-500 text-white text-center py-3 z-50 shadow-lg">
        <div className="flex items-center justify-center">
          <WifiOff className="w-5 h-5 mr-2" />
          <span className="font-medium">
            {getText(
              "You are offline. Orders will sync when connected.",
              "आप ऑफलाइन हैं। कनेक्ट होने पर ऑर्डर सिंक होंगे।"
            )}
          </span>
        </div>
      </div>
    );

  // Bottom Navigation Component
  const BottomNavigation = () => (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-40">
      <div className="flex justify-around">
        <button
          onClick={() => navigateTo("home")}
          className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
            currentView === "home"
              ? "text-orange-500 bg-orange-50"
              : "text-gray-600"
          }`}
        >
          <Home className="w-5 h-5 mb-1" />
          <span className="text-xs">{getText("Home", "होम")}</span>
        </button>
        <button
          onClick={() => navigateTo("cart")}
          className={`flex flex-col items-center p-2 rounded-lg transition-colors relative ${
            currentView === "cart"
              ? "text-orange-500 bg-orange-50"
              : "text-gray-600"
          }`}
        >
          <ShoppingCart className="w-5 h-5 mb-1" />
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
          <span className="text-xs">{getText("Cart", "कार्ट")}</span>
        </button>
        <button
          onClick={() => navigateTo("orders")}
          className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
            currentView === "orders"
              ? "text-orange-500 bg-orange-50"
              : "text-gray-600"
          }`}
        >
          <History className="w-5 h-5 mb-1" />
          <span className="text-xs">{getText("Orders", "ऑर्डर")}</span>
        </button>
        <button
          onClick={() => navigateTo("profile")}
          className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
            currentView === "profile"
              ? "text-orange-500 bg-orange-50"
              : "text-gray-600"
          }`}
        >
          <User className="w-5 h-5 mb-1" />
          <span className="text-xs">{getText("Profile", "प्रोफ़ाइल")}</span>
        </button>
      </div>
    </div>
  );

  // Enhanced Landing Page Component
  const LandingPage = React.memo(() => (
    <div className="min-h-screen bg-white overflow-hidden">
      <OfflineIndicator />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="text-3xl">🥘</div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                FreshLink
              </span>
              {!isOnline && <WifiOff className="w-4 h-4 text-red-500" />}
            </div>

            <div className="flex items-center space-x-8">
              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="#features"
                  className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
                >
                  {getText("Features", "सुविधाएं")}
                </a>
                <a
                  href="#how-it-works"
                  className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
                >
                  {getText("How it Works", "कैसे काम करता है")}
                </a>
                <a
                  href="#stats"
                  className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
                >
                  {getText("About", "हमारे बारे में")}
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
                >
                  {getText("Reviews", "समीक्षा")}
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <span
                  className={`text-sm font-medium ${
                    language === "english" ? "text-purple-600" : "text-gray-400"
                  }`}
                >
                  EN
                </span>
                <button
                  onClick={() =>
                    setLanguage(language === "hindi" ? "english" : "hindi")
                  }
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                    language === "hindi"
                      ? "bg-gradient-to-r from-purple-500 to-blue-500"
                      : "bg-gray-300"
                  }`}
                >
                  <span className="sr-only">Toggle language</span>
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-lg ${
                      language === "hindi" ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
                <span
                  className={`text-sm font-medium ${
                    language === "hindi" ? "text-purple-600" : "text-gray-400"
                  }`}
                >
                  हिं
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute top-20 left-10 text-6xl animate-bounce"
              style={{ animationDelay: "0s" }}
            >
              🥕
            </div>
            <div
              className="absolute top-32 right-20 text-5xl animate-pulse"
              style={{ animationDelay: "0.5s" }}
            >
              🍅
            </div>
            <div
              className="absolute bottom-40 left-20 text-7xl animate-bounce"
              style={{ animationDelay: "1s" }}
            >
              🧅
            </div>
            <div
              className="absolute bottom-20 right-10 text-6xl animate-pulse"
              style={{ animationDelay: "1.5s" }}
            >
              🥔
            </div>
            <div
              className="absolute top-1/2 left-1/4 text-4xl animate-bounce"
              style={{ animationDelay: "2s" }}
            >
              🌶
            </div>
            <div
              className="absolute top-1/3 right-1/3 text-5xl animate-pulse"
              style={{ animationDelay: "2.5s" }}
            >
              🚚
            </div>
            <div
              className="absolute bottom-1/3 right-1/4 text-6xl animate-bounce"
              style={{ animationDelay: "3s" }}
            >
              👨‍🍳
            </div>
            <div
              className="absolute top-1/4 left-1/2 text-4xl animate-pulse"
              style={{ animationDelay: "3.5s" }}
            >
              🏪
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 flex justify-center">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200 shadow-lg">
                <Sparkles className="w-4 h-4 text-purple-600 mr-2" />
                <span className="text-sm font-semibold text-purple-800">
                  {getText(
                    "AI-Powered Supply Chain",
                    "AI-संचालित आपूर्ति श्रृंखला"
                  )}
                </span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {getText("Smart B2B Food", "स्मार्ट B2B खाद्य")}
              </span>
              <br />
              <span className="text-gray-800">
                {getText("Supply Chain", "आपूर्ति श्रृंखला")}
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed font-light">
              {getText(
                "Voice ordering, group buying, AI freshness scores, and route optimization for maximum efficiency.",
                "वॉइस ऑर्डरिंग, ग्रुप खरीदारी, AI ताज़गी स्कोर, और अधिकतम दक्षता के लिए रूट ऑप्टिमाइज़ेशन।"
              )}
            </p>

            {/* New Features Highlight */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
                <Volume2 className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <div className="text-sm font-semibold text-gray-800">
                  {getText("Voice Orders", "वॉइस ऑर्डर")}
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  {getText("Hindi & English", "हिंदी और अंग्रेजी")}
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100">
                <Users className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <div className="text-sm font-semibold text-gray-800">
                  {getText("Group Buying", "ग्रुप खरीदारी")}
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  {getText("Save up to 30%", "30% तक बचत")}
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100">
                <Thermometer className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <div className="text-sm font-semibold text-gray-800">
                  {getText("AI Freshness", "AI ताज़गी")}
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  {getText("Real-time scores", "रियल-टाइम स्कोर")}
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
                <Route className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                <div className="text-sm font-semibold text-gray-800">
                  {getText("Smart Routes", "स्मार्ट रूट")}
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  {getText("2x faster delivery", "2x तेज़ डिलीवरी")}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button
                onClick={() => {
                  setUserType("vendor");
                  navigateTo("login");
                }}
                className="group relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <span className="relative z-10">
                  {getText("I am a Vendor", "मैं एक विक्रेता हूं")}
                </span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
              <button
                onClick={() => {
                  setUserType("supplier");
                  navigateTo("login");
                }}
                className="group relative bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25 flex items-center space-x-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-600/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <span className="relative z-10">
                  {getText("I am a Supplier", "मैं एक आपूर्तिकर्ता हूं")}
                </span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
            </div>

            {/* Demo Button */}
            <div className="flex justify-center mb-8">
              <button className="group flex items-center space-x-2 text-purple-600 hover:text-purple-800 transition-colors border border-purple-200 hover:border-purple-300 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm">
                <Play className="w-5 h-5" />
                <span className="font-medium">
                  {getText("Watch Demo", "डेमो देखें")}
                </span>
              </button>
            </div>

            {/* Scroll indicator */}
            <div className="animate-bounce">
              <ChevronDown className="w-8 h-8 text-purple-400 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6">
              <Target className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-semibold text-purple-800">
                {getText("Proven Results", "सिद्ध परिणाम")}
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {getText("Trusted by Thousands", "हजारों लोगों का भरोसा")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {getText(
                "Join the largest network of vendors and suppliers transforming food supply chains across India",
                "भारत भर में खाद्य आपूर्ति श्रृंखलाओं को बदलने वाले विक्रेताओं और आपूर्तिकर्ताओं के सबसे बड़े नेटवर्क से जुड़ें"
              )}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 mb-6 transform group-hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl border border-purple-100">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                  </div>
                  <div className="text-lg font-semibold text-gray-800">
                    {getText(stat.label, stat.hindi)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-24 bg-gradient-to-br from-purple-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full mb-6 shadow-lg">
              <Sparkles className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-semibold text-purple-800">
                {getText("Simple Process", "सरल प्रक्रिया")}
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {getText("How It Works", "कैसे काम करता है")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {getText(
                "From voice order to fresh delivery - experience the future of B2B food procurement",
                "वॉइस ऑर्डर से ताज़ी डिलीवरी तक - B2B खाद्य खरीद के भविष्य का अनुभव करें"
              )}
            </p>
          </div>

          <div className="relative">
            {/* Connection lines */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5">
              <div className="bg-gradient-to-r from-transparent via-purple-300 to-transparent h-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {howItWorks.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="relative mb-8">
                      <div
                        className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300 relative z-10`}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -left-2 w-24 h-24 rounded-full bg-gradient-to-r from-purple-200 to-blue-200 opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                      <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white opacity-20"></div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 border border-purple-100">
                      <div className="text-sm font-bold text-purple-600 mb-2">
                        {getText(`STEP ${step.step}`, `चरण ${step.step}`)}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {getText(step.title, step.hindi)}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {getText(step.description, step.hindiDesc)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-6">
              <Zap className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-semibold text-purple-800">
                {getText("Advanced Technology", "उन्नत तकनीक")}
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {getText("Revolutionary Features", "क्रांतिकारी सुविधाएं")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {getText(
                "Advanced AI technology meets traditional business needs to create the perfect supply chain solution",
                "उन्नत AI तकनीक पारंपरिक व्यापारिक जरूरतों से मिलकर सही आपूर्ति श्रृंखला समाधान बनाती है"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`${feature.bgColor} rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 group border border-gray-100 relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div
                      className={`w-full h-full rounded-full bg-gradient-to-r ${feature.color}`}
                    ></div>
                  </div>

                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
                    {getText(feature.title, feature.hindi)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed relative z-10">
                    {getText(feature.description, feature.hindiDesc)}
                  </p>

                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-24 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full mb-6 shadow-lg">
              <Heart className="w-4 h-4 text-red-500 mr-2" />
              <span className="text-sm font-semibold text-gray-800">
                {getText("Customer Love", "ग्राहक प्रेम")}
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {getText("What Our Users Say", "हमारे उपयोगकर्ता क्या कहते हैं")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {getText(
                "Real stories from vendors and suppliers who transformed their business with FreshLink",
                "उन विक्रेताओं और आपूर्तिकर्ताओं की सच्ची कहानियां जिन्होंने FreshLink से अपना व्यापार बदला"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full -translate-y-12 translate-x-12 opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <Quote className="w-8 h-8 text-purple-500 mb-6" />

                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 mb-6 italic leading-relaxed text-lg">
                    "{getText(testimonial.text, testimonial.hindiText)}"
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-4xl mr-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
                        {testimonial.image}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600">
                          {getText(testimonial.role, testimonial.hindi)}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-600 font-bold text-lg">
                        {testimonial.savings}
                      </div>
                      <div className="text-xs text-gray-500">
                        {getText("saved", "बचत")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-4xl">🥘</span>
                <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  FreshLink
                </span>
              </div>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed max-w-md">
                {getText(
                  "Smart B2B food supply chain powered by AI and community, connecting vendors and suppliers across India.",
                  "AI और समुदाय द्वारा संचालित स्मार्ट B2B खाद्य आपूर्ति श्रृंखला, भारत भर के विक्रेताओं और आपूर्तिकर्ताओं को जोड़ती है।"
                )}
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center hover:from-purple-700 hover:to-blue-700 transition-all duration-300 cursor-pointer transform hover:scale-110">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 cursor-pointer transform hover:scale-110">
                  <span className="text-sm font-bold">T</span>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center hover:from-pink-600 hover:to-red-600 transition-all duration-300 cursor-pointer transform hover:scale-110">
                  <span className="text-sm font-bold">I</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-white">
                {getText("For Vendors", "विक्रेताओं के लिए")}
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {getText("Voice Ordering", "वॉइस ऑर्डरिंग")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {getText("Group Buying", "ग्रुप खरीदारी")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {getText("Fresh Guarantee", "ताज़ा गारंटी")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {getText("Route Optimization", "रूट ऑप्टिमाइज़ेशन")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-white">
                {getText("For Suppliers", "आपूर्तिकर्ताओं के लिए")}
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {getText("Direct Connect", "सीधा कनेक्शन")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {getText("Better Prices", "बेहतर कीमतें")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {getText("No Wastage", "कोई बर्बादी नहीं")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {getText("Analytics Dashboard", "एनालिटिक्स डैशबोर्ड")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <p className="text-gray-400 text-lg mb-4">
                  {getText(
                    "Ready to transform your business?",
                    "अपना व्यापार बदलने के लिए तैयार हैं?"
                  )}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => {
                      setUserType("vendor");
                      navigateTo("login");
                    }}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {getText(
                      "Start as Vendor",
                      "विक्रेता के रूप में शुरू करें"
                    )}
                  </button>
                  <button
                    onClick={() => {
                      setUserType("supplier");
                      navigateTo("login");
                    }}
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {getText(
                      "Join as Supplier",
                      "आपूर्तिकर्ता के रूप में जुड़ें"
                    )}
                  </button>
                </div>
              </div>

              <div className="text-center md:text-right">
                <p className="text-gray-500 text-sm">
                  © 2024 FreshLink.{" "}
                  {getText("All rights reserved.", "सभी अधिकार सुरक्षित।")}
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  {getText(
                    "Made with ❤️ for Indian vendors and suppliers",
                    "भारतीय विक्रेताओं और आपूर्तिकर्ताओं के लिए ❤️ से बनाया गया"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  ));

  // Enhanced Login Screen
  const LoginScreen = React.memo(() => (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      <OfflineIndicator />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-4xl opacity-20 animate-pulse">
          🧅
        </div>
        <div className="absolute top-32 right-20 text-5xl opacity-20 animate-bounce">
          🍅
        </div>
        <div
          className="absolute bottom-40 left-20 text-6xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        >
          🥔
        </div>
        <div
          className="absolute bottom-20 right-10 text-4xl opacity-20 animate-bounce"
          style={{ animationDelay: "2s" }}
        >
          🌶
        </div>
      </div>

      <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md lg:max-w-lg border border-white/20 relative z-10">
        <div className="flex items-center mb-8">
          <button
            onClick={goBack}
            className="mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors group"
            disabled={!canGoBack}
          >
            <svg
              className="w-5 h-5 group-hover:text-purple-600 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="flex-1 text-center">
            <div className="text-4xl sm:text-5xl mb-4">🥘</div>
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
              FreshLink
            </h1>
            <p className="text-sm sm:text-base text-gray-600 font-medium">
              {getText("Smart B2B Food Supply", "स्मार्ट B2B खाद्य आपूर्ति")}
            </p>
          </div>
        </div>

        {/* Referral Code Input */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            <Gift className="w-4 h-4 inline mr-2 text-purple-600" />
            {getText("Referral Code (Optional)", "रेफरल कोड (वैकल्पिक)")}
          </label>
          <input
            type="text"
            placeholder={getText(
              "Enter referral code for ₹50 bonus",
              "₹50 बोनस के लिए रेफरल कोड डालें"
            )}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 text-sm bg-white/80 backdrop-blur-sm"
          />
        </div>

        <div className="mb-6">
          <div className="flex rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 p-1 mb-4 shadow-inner">
            <button
              onClick={() => setUserType("vendor")}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ${
                userType === "vendor"
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg transform scale-105"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {getText("Vendor", "विक्रेता")}
            </button>
            <button
              onClick={() => setUserType("supplier")}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ${
                userType === "supplier"
                  ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg transform scale-105"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {getText("Supplier", "आपूर्तिकर्ता")}
            </button>
          </div>

          <div className="flex rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 p-1 mb-6 shadow-inner">
            <button
              onClick={() => setLanguage("hindi")}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ${
                language === "hindi"
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              हिंदी
            </button>
            <button
              onClick={() => setLanguage("english")}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ${
                language === "english"
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              English
            </button>
          </div>
        </div>

        {!otpSent ? (
          <div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                <Phone className="w-4 h-4 inline mr-2 text-purple-600" />
                {getText("Phone Number", "फ़ोन नंबर")}
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder={getText("+91 98765 43210", "+91 98765 43210")}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 text-lg bg-white/80 backdrop-blur-sm"
                  autoComplete="tel"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 cursor-pointer hover:from-green-100 hover:to-emerald-100 transition-all duration-300">
                <input
                  type="checkbox"
                  checked={whatsappNotifications}
                  onChange={(e) => setWhatsappNotifications(e.target.checked)}
                  className="mr-3 w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                />
                <MessageCircle className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-sm text-gray-700 font-medium">
                  {getText(
                    "Send daily deals on WhatsApp",
                    "WhatsApp पर दैनिक डील भेजें"
                  )}
                </span>
              </label>
            </div>

            <button
              onClick={() => {
                if (phoneNumber.length >= 10) {
                  setOtpSent(true);
                }
              }}
              disabled={phoneNumber.length < 10}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-300 disabled:to-gray-400 text-white py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
            >
              {getText("Send OTP", "OTP भेजें")}
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                <Shield className="w-4 h-4 inline mr-2 text-green-600" />
                {getText("Enter OTP", "OTP डालें")}
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="1234"
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 text-2xl text-center tracking-widest font-bold bg-white/80 backdrop-blur-sm"
                maxLength="4"
                autoComplete="one-time-code"
              />
              <p className="text-xs text-gray-500 mt-2 text-center">
                {getText(
                  `OTP sent to ${phoneNumber}`,
                  `${phoneNumber} पर OTP भेजा गया`
                )}
              </p>
            </div>
            <button
              onClick={() => {
                if (otp.length === 4) {
                  navigateTo(
                    userType === "vendor" ? "home" : "supplier-dashboard"
                  );
                }
              }}
              disabled={otp.length !== 4}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:from-gray-300 disabled:to-gray-400 text-white py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none mb-3"
            >
              {getText("Verify & Login", "सत्यापित करें और लॉगिन करें")}
            </button>
            <button
              onClick={() => {
                setOtpSent(false);
                setOtp("");
              }}
              className="w-full text-gray-600 hover:text-purple-600 py-3 text-sm font-medium transition-colors"
            >
              {getText("Change Number", "नंबर बदलें")}
            </button>
          </div>
        )}
      </div>
    </div>
  ));

  // Enhanced Vendor Home Screen
  const VendorHomeScreen = React.memo(() => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pb-20 lg:pb-4">
      <OfflineIndicator />
      <VoiceCart />

      {/* Header */}
      <div className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-10 border-b border-purple-100">
        <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {getText("Good Morning!", "सुप्रभात!")}
              </h1>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                {getText(
                  "Order fresh supplies for tomorrow",
                  "कल के लिए ताज़ी सामग्री ऑर्डर करें"
                )}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              {/* Language Toggle */}
              <div className="flex items-center space-x-1">
                <span
                  className={`text-xs font-medium ${
                    language === "english" ? "text-purple-600" : "text-gray-400"
                  }`}
                >
                  EN
                </span>
                <button
                  onClick={() =>
                    setLanguage(language === "hindi" ? "english" : "hindi")
                  }
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                    language === "hindi"
                      ? "bg-gradient-to-r from-purple-500 to-blue-500"
                      : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-lg ${
                      language === "hindi" ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
                <span
                  className={`text-xs font-medium ${
                    language === "hindi" ? "text-purple-600" : "text-gray-400"
                  }`}
                >
                  हिं
                </span>
              </div>

              {/* Online Status */}
              <div className="flex items-center">
                {isOnline ? (
                  <Wifi className="w-5 h-5 text-green-500" />
                ) : (
                  <WifiOff className="w-5 h-5 text-red-500" />
                )}
              </div>

              {/* Shopping Cart */}
              <div className="relative">
                <button
                  onClick={() => navigateTo("cart")}
                  className="p-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl hover:from-purple-200 hover:to-blue-200 transition-all duration-300 transform hover:scale-110"
                >
                  <ShoppingCart className="w-6 h-6 text-purple-600" />
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg">
                      {cart.reduce((sum, item) => sum + item.quantity, 0)}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Referral Banner */}
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl p-4 sm:p-6 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 mr-4">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl mb-1">
                    {getText("Invite & Earn ₹50", "आमंत्रित करें और ₹50 कमाएं")}
                  </h3>
                  <p className="text-sm sm:text-base opacity-90">
                    {getText(
                      `Your code: ${referralCode} • Earned: ₹${referralEarnings}`,
                      `आपका कोड: ${referralCode} • कमाया: ₹${referralEarnings}`
                    )}
                  </p>
                </div>
              </div>
              <button
                onClick={shareReferralCode}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center transform hover:scale-110 shadow-lg"
              >
                <Share2 className="w-4 h-4 mr-2" />
                {getText("Share", "शेयर")}
              </button>
            </div>
          </div>
        </div>

        {/* Group Buying Deals */}
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
              {getText("Group Buying Deals", "सामूहिक खरीदारी डील")}
            </h2>
            <div className="flex items-center bg-gradient-to-r from-red-100 to-pink-100 px-3 py-1 rounded-full">
              <Clock className="w-4 h-4 text-red-600 mr-1" />
              <span className="text-sm font-semibold text-red-600">
                {getText("Limited Time", "सीमित समय")}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
            {groupBuyDeals.map((deal) => (
              <div
                key={deal.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg sm:text-xl text-gray-800">
                      {language === "hindi" ? deal.hindiName : deal.item}
                    </h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        ₹{deal.groupPrice}
                      </div>
                      <div className="text-sm text-gray-500 line-through">
                        ₹{deal.originalPrice}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span className="font-medium">
                        {getText("Progress", "प्रगति")}
                      </span>
                      <span className="font-bold">
                        {deal.currentQuantity}/{deal.minQuantity} kg
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all duration-500 shadow-lg"
                        style={{
                          width: `${Math.min(
                            (deal.currentQuantity / deal.minQuantity) * 100,
                            100
                          )}%`,
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-600 bg-blue-50 px-3 py-1 rounded-full">
                      <Users className="w-4 h-4 mr-1 text-blue-600" />
                      <span className="font-medium">
                        {deal.participantsCount} {getText("joined", "शामिल")}
                      </span>
                    </div>
                    <div className="flex items-center text-sm bg-red-50 px-3 py-1 rounded-full">
                      <Clock className="w-4 h-4 mr-1 text-red-600" />
                      <span className="font-medium text-red-600">
                        {deal.remainingTime} {getText("left", "बचा")}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => joinGroupBuy(deal.id)}
                    disabled={joinedGroupBuys.includes(deal.id)}
                    className={`w-full py-3 rounded-xl font-bold text-base transition-all duration-300 transform ${
                      joinedGroupBuys.includes(deal.id)
                        ? "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 cursor-not-allowed"
                        : "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white hover:scale-105 shadow-lg hover:shadow-xl"
                    }`}
                  >
                    {joinedGroupBuys.includes(deal.id)
                      ? getText("Joined ✓", "शामिल ✓")
                      : getText(
                          `Join & Save ₹${deal.savings}`,
                          `शामिल हों और ₹${deal.savings} बचाएं`
                        )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fresh Guarantee Banner */}
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-4 sm:p-6 text-white shadow-2xl">
            <div className="flex items-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 mr-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg sm:text-xl mb-1">
                  {getText(
                    "Fresh or Free Guarantee",
                    "ताज़ा या मुफ़्त की गारंटी"
                  )}
                </h3>
                <p className="text-sm sm:text-base opacity-90">
                  {getText(
                    "Not fresh? Get full refund instantly",
                    "ताज़ा नहीं? तुरंत पूरा पैसा वापस"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mandi Price Comparison Toggle */}
        <div className="px-4 sm:px-6 lg:px-8 py-2">
          <button
            onClick={() => setShowMandiComparison(!showMandiComparison)}
            className="flex items-center text-sm bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            <BarChart3 className="w-5 h-5 mr-2" />
            {getText(
              "Compare with Mandi Prices",
              "मंडी की कीमतों से तुलना करें"
            )}
            <ChevronDown
              className={`w-4 h-4 ml-2 transition-transform ${
                showMandiComparison ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Categories */}
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
            {getText("Daily Essentials", "रोज़ाना की ज़रूरतें")}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
            {rawMaterials.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="p-4 sm:p-6">
                  <div className="text-3xl sm:text-4xl mb-3 text-center transform group-hover:scale-110 transition-transform duration-300">
                    {item.image}
                  </div>
                  <h3 className="font-bold text-gray-800 text-center text-sm sm:text-base mb-2">
                    {language === "hindi" ? item.hindiName : item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 text-center mb-3 truncate">
                    {item.supplier}
                  </p>

                  <div className="flex items-center justify-center mb-3">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1 font-medium">
                      {item.rating}
                    </span>
                    {item.freshGuarantee && (
                      <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-xs px-2 py-1 rounded-full ml-2 font-medium">
                        {getText("Fresh", "ताज़ा")}
                      </span>
                    )}
                  </div>

                  {/* AI Freshness Score */}
                  <FreshnessScore
                    score={item.freshnessScore}
                    temperature={item.temperature}
                    harvestTime={item.harvestDate}
                  />

                  {/* Chef Tested Badge */}
                  {item.chefTested && (
                    <ChefTestedBadge count={item.chefCount} />
                  )}

                  <div className="text-center mb-4 mt-3">
                    <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      ₹{item.price}
                    </span>
                    <span className="text-sm text-gray-600">/{item.unit}</span>
                  </div>

                  {/* Mandi Price Comparison */}
                  {showMandiComparison && (
                    <MandiComparison
                      ourPrice={item.price}
                      mandiPrice={item.mandiPrice}
                    />
                  )}

                  <button
                    onClick={() => addToCart(item)}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-2 sm:py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm"
                  >
                    {getText("Add to Cart", "कार्ट में डालें")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  ));

  // Enhanced Cart Screen
  const CartScreen = React.memo(() => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pb-20 lg:pb-4">
      <OfflineIndicator />

      <div className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-10 border-b border-purple-100">
        <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center max-w-7xl mx-auto">
          <button
            onClick={goBack}
            className="mr-4 p-2 hover:bg-purple-100 rounded-full transition-colors group"
            disabled={!canGoBack}
          >
            <svg
              className="w-6 h-6 group-hover:text-purple-600 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {getText("Your Cart", "आपका कार्ट")}
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {cart.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-16 h-16 text-purple-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {getText("Your cart is empty", "आपका कार्ट खाली है")}
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              {getText(
                'Try using voice command: "आलू 5 किलो"',
                'वॉइस कमांड का उपयोग करें: "आलू 5 किलो"'
              )}
            </p>
            <button
              onClick={startVoiceRecognition}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 flex items-center mx-auto transform hover:scale-105"
            >
              <Mic className="w-6 h-6 mr-3" />
              {getText("Add Items by Voice", "वॉइस से आइटम जोड़ें")}
            </button>
          </div>
        ) : (
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center flex-1">
                      <div className="text-3xl mr-4 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl w-16 h-16 flex items-center justify-center">
                        {item.image}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-lg sm:text-xl text-gray-800 truncate">
                          {language === "hindi" ? item.hindiName : item.name}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <p className="text-sm sm:text-base text-gray-600">
                            ₹{item.price}/{item.unit}
                          </p>
                          {item.isGroupBuy && (
                            <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
                              {getText("Group Buy", "ग्रुप खरीदारी")}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center ml-4">
                      <button
                        onClick={() =>
                          updateCartQuantity(item.id, item.quantity - 1)
                        }
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
                      >
                        <Minus className="w-5 h-5 text-gray-600" />
                      </button>
                      <span className="mx-4 font-bold text-xl min-w-[3rem] text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateCartQuantity(item.id, item.quantity + 1)
                        }
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1 space-y-6 mt-6 lg:mt-0">
              {/* Route Optimization Info */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-lg p-4 sm:p-6 border border-blue-200">
                <div className="flex items-center mb-3">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-2 mr-3">
                    <Route className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-blue-800">
                    {getText("Optimized Delivery", "अनुकूलित डिलीवरी")}
                  </h3>
                </div>
                <p className="text-sm text-blue-700 leading-relaxed">
                  {getText(
                    "Your order is grouped with 8 nearby vendors for faster delivery",
                    "तेज़ डिलीवरी के लिए आपका ऑर्डर 8 आस-पास के विक्रेताओं के साथ समूहीकृत है"
                  )}
                </p>
              </div>

              {/* Delivery Time Selection */}
              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100">
                <h3 className="font-bold mb-4 text-lg sm:text-xl text-gray-800">
                  {getText("Select Delivery Time", "डिलीवरी का समय चुनें")}
                </h3>
                <div className="space-y-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.id}
                      onClick={() => setSelectedTimeSlot(slot)}
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 transform hover:scale-105 ${
                        selectedTimeSlot?.id === slot.id
                          ? "border-orange-500 bg-gradient-to-r from-orange-50 to-red-50 shadow-lg"
                          : "border-gray-200 hover:border-gray-300 bg-white hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-sm sm:text-base text-gray-800">
                            {slot.time}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-600">
                            {slot.hindi}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {slot.optimized && (
                            <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
                              {getText("Optimized", "अनुकूलित")}
                            </span>
                          )}
                          <Clock className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100">
                <h3 className="font-bold mb-4 text-lg sm:text-xl text-gray-800">
                  {getText("Order Summary", "ऑर्डर सारांश")}
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-base">
                    <span className="text-gray-600">
                      {getText("Subtotal", "कुल राशि")}
                    </span>
                    <span className="font-semibold">
                      ₹
                      {cart.reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-base">
                    <span className="text-gray-600">
                      {getText("Group Buy Savings", "ग्रुप खरीदारी बचत")}
                    </span>
                    <span className="text-green-600 font-semibold">
                      -₹
                      {cart
                        .filter((item) => item.isGroupBuy)
                        .reduce(
                          (sum, item) =>
                            sum +
                            ((item.originalPrice || item.price) - item.price) *
                              item.quantity,
                          0
                        )}
                    </span>
                  </div>
                  <div className="flex justify-between text-base">
                    <span className="text-gray-600">
                      {getText("Delivery", "डिलीवरी")}
                    </span>
                    <span className="text-green-600 font-bold">
                      {getText("FREE", "मुफ़्त")}
                    </span>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="flex justify-between font-bold text-xl">
                    <span>{getText("Total", "कुल")}</span>
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      ₹
                      {cart.reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={placeOrder}
                disabled={!selectedTimeSlot}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:from-gray-300 disabled:to-gray-400 text-white py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
              >
                {isOnline
                  ? getText("Place Order", "ऑर्डर करें")
                  : getText("Save Order (Offline)", "ऑर्डर सेव करें (ऑफलाइन)")}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  ));

  // Enhanced Order Tracking Screen
  const OrderTrackingScreen = React.memo(() => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pb-20 lg:pb-4">
      <OfflineIndicator />

      <div className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-10 border-b border-purple-100">
        <div className="px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto">
          <div className="flex items-center">
            <button
              onClick={goBack}
              className="mr-4 p-2 hover:bg-purple-100 rounded-full transition-colors group"
              disabled={!canGoBack}
            >
              <svg
                className="w-6 h-6 group-hover:text-purple-600 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {getText("Live Order Tracking", "लाइव ऑर्डर ट्रैकिंग")}
            </h1>
          </div>
        </div>
      </div>

      {currentOrder && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Live Map Simulation */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 mb-6 border border-gray-100">
            <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-100 rounded-2xl h-64 sm:h-80 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                  <div className="animate-pulse mb-4">
                    <Navigation className="w-16 h-16 text-blue-600 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {getText(
                      "Delivery truck is 2.5 km away",
                      "डिलीवरी ट्रक 2.5 किमी दूर है"
                    )}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {getText("ETA: 15 minutes", "पहुंचने का समय: 15 मिनट")}
                  </p>
                </div>
              </div>

              {/* Animated delivery truck */}
              <div className="absolute bottom-6 left-6 animate-bounce">
                <div className="bg-green-500 rounded-full p-3 shadow-xl">
                  <Truck className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Your location */}
              <div className="absolute top-6 right-6">
                <div className="bg-purple-500 rounded-full p-3 shadow-xl animate-pulse">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Route line animation */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full">
                  <path
                    d="M 60 240 Q 200 150 320 60"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="10,5"
                    className="animate-pulse"
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          {/* Order Status */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-6 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              {getText("Order Status", "ऑर्डर स्थिति")}
            </h3>

            <div className="space-y-4">
              <div className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-l-4 border-green-500">
                <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                <div>
                  <h4 className="font-semibold text-green-800">
                    {getText("Order Confirmed", "ऑर्डर पुष्ट")}
                  </h4>
                  <p className="text-sm text-green-600">
                    {getText(
                      "Your order has been confirmed and is being prepared",
                      "आपका ऑर्डर पुष्ट हो गया है और तैयार किया जा रहा है"
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-500">
                <Package className="w-8 h-8 text-blue-600 mr-3" />
                <div>
                  <h4 className="font-semibold text-blue-800">
                    {getText("Being Packed", "पैक किया जा रहा")}
                  </h4>
                  <p className="text-sm text-blue-600">
                    {getText(
                      "Your fresh items are being carefully packed",
                      "आपकी ताज़ी वस्तुओं को सावधानी से पैक किया जा रहा है"
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border-l-4 border-orange-500">
                <Truck className="w-8 h-8 text-orange-600 mr-3 animate-bounce" />
                <div>
                  <h4 className="font-semibold text-orange-800">
                    {getText("Out for Delivery", "डिलीवरी के लिए निकला")}
                  </h4>
                  <p className="text-sm text-orange-600">
                    {getText(
                      "Your order is on its way to you",
                      "आपका ऑर्डर आपके पास आ रहा है"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Details */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              {getText("Order Details", "ऑर्डर विवरण")}
            </h3>

            <div className="space-y-4">
              {currentOrder.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{item.image}</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {language === "hindi" ? item.hindiName : item.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        ₹{item.price}/{item.unit} × {item.quantity}
                      </p>
                    </div>
                  </div>
                  <span className="font-bold text-lg text-gray-800">
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))}

              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>{getText("Total", "कुल")}</span>
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    ₹{currentOrder.total}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  ));

  // Render the appropriate screen based on current view
  const renderCurrentView = () => {
    switch (currentView) {
      case "landing":
        return <LandingPage />;
      case "login":
        return <LoginScreen />;
      case "home":
        return <VendorHomeScreen />;
      case "cart":
        return <CartScreen />;
      case "order-tracking":
        return <OrderTrackingScreen />;
      default:
        return <LandingPage />;
    }
  };

  return <div className="font-sans antialiased">{renderCurrentView()}</div>;
};

export default FreshLinkApp;
