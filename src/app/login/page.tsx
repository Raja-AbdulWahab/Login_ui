import React from "react";
import LoginForm from "../../components/LoginForm";
import Logo from "../../components/Logo";

export default function LoginPage() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* 🔹 Blue gradient only at bottom */}
<div
  style={{
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgb(25, 25, 112, 0.6) 20%, transparent 60%)",
  }}
/>


      {/* 🔹 Right transparent panel */}
      <div
        style={{
          marginLeft: "auto",
          width: "100%",
          maxWidth: "42%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(14px)",
          padding: "2rem",
          boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
        }}
      >
        {/* 🔹 Logo at top */}
        <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <Logo />
        </div>

        {/* 🔹 Login form centered */}
        <div style={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
