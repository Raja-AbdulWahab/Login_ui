🔐 Login UI

A sleek, responsive, and modern Login Interface built with Typescript and Next.js.
Designed for scalability and easy integration into any authentication system — whether you’re using Firebase, Node.js, or custom APIs.


🖼️ Screenshots

<img width="1223" height="613" alt="login" src="https://github.com/user-attachments/assets/48935ec0-0405-44e0-be13-39c7d749b1b3" />

Login Page	Sign Up / Forgot Password

	

💡 Tip:

Save your screenshots inside public/images

Rename or adjust the paths above according to your structure.

⚙️ Features

✅ Clean and minimal UI design
✅ Responsive across all screen sizes (Desktop, Tablet, Mobile)
✅ Animated form transitions and hover effects
✅ Input validation (email, password fields, etc.)
✅ Password visibility toggle
✅ Reusable component structure for easy expansion
✅ Ready for backend integration (JWT, Firebase, etc.)

🧩 Tech Stack
Technology	Purpose
Next.js / React	UI framework and routing
Tailwind CSS / CSS Modules	Styling and responsiveness
Framer Motion	Animations and smooth transitions
TypeScript (optional)	Type safety and clean structure
🧱 Project Structure
src/
│
├── app/
│   ├── login/
│   │   └── page.tsx
│   ├── register/
│   │   └── page.tsx
│   └── globals.css
│
├── components/
│   ├── AuthCard.tsx
│   ├── InputField.tsx
│   ├── Button.tsx
│   └── Logo.tsx
│
└── public/
    └── images/
        ├── login.png
        └── signup.png

🧰 Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/your-username/login-ui.git
cd login-ui

2️⃣ Install Dependencies
npm install
# or
yarn install

3️⃣ Run Development Server
npm run dev
# visit http://localhost:3000

4️⃣ Build for Production
npm run build
npm start

📱 Responsive Behavior
Screen Size	Layout Behavior
💻 Desktop (≥1024px)	Centered two-column layout with branding + form
📊 Tablet (≤1024px)	Adjusts to single-column form view
📱 Mobile (≤768px)	Full-width single-column login form for clean usability
🧠 Future Enhancements

🔒 Integration with backend authentication (Node.js / Firebase / NextAuth)

👨‍💻 Author

Abdul Wahab
💼 Full Stack / MERN Developer
🌐 Portfolio Website: (https://raja-abdulwahab.github.io/My_Portfolio/)
