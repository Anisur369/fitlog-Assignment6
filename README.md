# 🏋️‍♂️ FITLOG — Workout Library & Fitness Companion

FITLOG হলো একটি আধুনিক, ডার্ক-থিমযুক্ত এবং ক্লিন ফিটনেস ওয়েব অ্যাপ্লিকেশন। এর মাধ্যমে ব্যবহারকারীরা সহজে বিভিন্ন ব্যায়াম (Exercise) খুঁজে নিতে পারেন, নিজস্ব কাজের তালিকা তৈরি করতে পারেন এবং সেভ করে রাখতে পারেন।

🔗 **Live Demo:** [fitlog-nine-psi.vercel.app](https://fitlog-nine-psi.vercel.app/)  
📁 **GitHub Repository:** [Anisur369/fitlog-Assignment6](https://github.com/Anisur369/fitlog-Assignment6)

---

## 📖 Project Description

FitLog ব্যবহারকারীদের প্রতিদিনের ওয়ার্কআউট পরিকল্পনা সহজ করতে সাহায্য করে। এই প্ল্যাটফর্মে প্রতিটি এক্সারসাইজের বিস্তারিত নির্দেশিকা, প্রয়োজনীয় ইকুইপমেন্ট, টার্গেটেড মাসল গ্রুপ, আনুমানিক ক্যালোরি বার্ন এবং সময়সূচী স্পষ্টভাবে তুলে ধরা হয়েছে। ব্যবহারকারী তার প্রতিদিনের প্ল্যানে আইটেম যুক্ত করতে পারেন এবং ব্রাউজারে রিফ্রেশ করলেও ডাটা হারিয়ে যায় না।

---

## 🛠️ Technologies Used

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Library:** [React](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Notifications:** [React-Toastify](https://fkhadra.github.io/react-toastify/)
- **State Management:** React Context API
- **Data Persistence:** Browser `localStorage`

---

## ✨ Key Features

1. **🏋️ Comprehensive Exercise Library:** বডি পার্ট অনুযায়ী (Chest, Arms, Core, Back, Legs) বিস্তারিত ব্যায়ামের তালিকা এবং ফিল্টারিং ব্যবস্থা।
2. **📋 Daily Workout Planner ("Add to Today's Plan"):** পছন্দের ব্যায়ামগুলোকে আজকের তালিকায় যুক্ত করার সুবিধা, যেখানে প্রতিদিনের জন্য ৫টি ব্যায়ামের লিমিট রয়েছে।
3. **🔖 Save for Later:** পরবর্তীতে অনুশীলনের জন্য নির্দিষ্ট ব্যায়াম বুকমার্ক বা সেভ করে রাখার সুবিধা।
4. **📊 Real-time Dashboard Analytics:** আজকের প্ল্যানে যুক্ত ব্যায়ামগুলোর উপর ভিত্তি করে মোট সময় (Minutes), মোট ক্যালোরি (Calories) এবং টোটাল এক্সারসাইজ সংখ্যা স্বয়ংক্রিয়ভাবে হিসাব করা।
5. **💾 LocalStorage & State Synchronization:** পেজ রিলোড বা রফ্রেশ করলেও ডাটা সুরক্ষিত থাকে এবং ন্যাভবারের নোটিফিকেশন ব্যাজ সংখ্যা রিয়েল-টাইমে আপডেট হয়।
6. **📱 Fully Responsive Dark UI:** যেকোনো ডিভাইস (মোবাইল, ট্যাবলেট, ডেস্কটপ)-এ মসৃণ অভিজ্ঞতার জন্য হাই-কন্ট্রাস্ট ডার্ক থিম ইন্টারফেস।

---

## 🚀 Getting Started Locally


```bash
# ১. রিপোজিটরি ক্লোন করুন
git clone [https://github.com/Anisur369/fitlog-Assignment6.git](https://github.com/Anisur369/fitlog-Assignment6.git)

# ২. প্রজেক্ট ফোল্ডারে প্রবেশ করুন
cd fitlog-Assignment6

# ৩. প্রয়োজনীয় প্যাকেজ ইনস্টল করুন
npm install

# ৪. ডেভেলপমেন্ট সার্ভার চালু করুন
npm run dev