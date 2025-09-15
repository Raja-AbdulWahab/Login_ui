import React from "react";
import LoginForm from "../../components/LoginForm";
import Logo from "../../components/Logo";

export default function LoginPage() {
  return (
    <div style={{
      display: "flex",
      height: "100vh",
      width: "100%",
      backgroundImage: "url('/bg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.2))",
      }} />
      <div style={{
        marginLeft: "auto",
        width: "100%",
        maxWidth: "42%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(255,255,255,0.2)",
        backdropFilter: "blur(12px)",
        padding: "2rem",
      }}>
        <Logo />
        <LoginForm />
      </div>
    </div>
  );
}
