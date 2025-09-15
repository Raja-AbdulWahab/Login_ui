"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import {
  EuiFieldText,
  EuiFieldPassword,
  EuiButton,
  EuiForm,
  EuiFormRow,
  EuiSpacer,
} from "@elastic/eui";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 🔹 For now: Just fake loading (no backend call)
    setTimeout(() => {
      setLoading(false);
      alert("Frontend-only: Form submitted!");
    }, 1500);
  };

  return (
    <EuiForm
      component="form"
      onSubmit={handleSubmit}
      style={{
        background: "rgba(255,255,255,0.25)",
        backdropFilter: "blur(10px)",
        borderRadius: "12px",
        padding: "2rem",
        boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
        width: "100%",
        maxWidth: "360px",
      }}
    >
      <EuiFormRow label="Email" fullWidth>
        <EuiFieldText
          icon="email"
          placeholder="Enter your email"
          fullWidth
          required
        />
      </EuiFormRow>

      <EuiSpacer size="m" />

      <EuiFormRow label="Password" fullWidth>
        <EuiFieldPassword
          type={showPassword ? "text" : "password"}
          fullWidth
          required
          placeholder="Enter your password"
          append={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          }
        />
      </EuiFormRow>

      <EuiSpacer size="m" />

      <EuiButton
        type="submit"
        isLoading={loading}
        fill
        fullWidth
        style={{ height: "40px" }}
      >
        {loading ? "Loading..." : "Login"}
      </EuiButton>

      <EuiSpacer size="s" />

      <div style={{ textAlign: "right" }}>
        <a
          href="#"
          style={{
            fontSize: "0.875rem",
            color: "#555",
            textDecoration: "none",
          }}
        >
          Forgot password?
        </a>
      </div>
    </EuiForm>
  );
}
