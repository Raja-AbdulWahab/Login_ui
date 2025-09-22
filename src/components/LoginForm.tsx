// src/components/LoginForm.tsx
"use client";
import React, { useState } from "react";
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiFieldPassword,
  EuiButton,
} from "@elastic/eui";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login with:", { email, password });
  };

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.9)", // soft white background
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        minWidth: "320px",
      }}
    >
      <EuiForm component="form" onSubmit={handleSubmit}>
        <h2 style={{ marginBottom: "1rem", textAlign: "center" }}>Login</h2>

        <EuiFormRow label="Email">
          <EuiFieldText
            placeholder="abc@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            style={{
              border: "1px solid #ccc", // default grey
              borderRadius: "6px",
            }}
          />
        </EuiFormRow>

        <EuiFormRow label="Password">
          <EuiFieldPassword
            placeholder="............"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            style={{
              border: "1px solid #ccc", // default grey
              borderRadius: "6px",
              fontSize: "18px",
            }}
          />
        </EuiFormRow>

        <EuiButton
          type="submit"
          fill
          style={{
            backgroundColor: "#11193c", // MidnightBlue variant
            border: "none",
            borderRadius: "6px",
          }}
          fullWidth
        >
          Login
        </EuiButton>
      </EuiForm>
    </div>
  );
}
