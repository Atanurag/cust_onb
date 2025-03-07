import React, { useState } from "react";


const CustomerRegistration = () => {
  const [step, setStep] = useState("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (phone.length === 10) setStep("otp");
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    alert("OTP Verified! Registration Complete.");
  };

  const handleKeyPress = (e, action) => {
    if (e.key === "Enter") action();
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {step === "otp" && (
          <p style={styles.backIcon} onClick={() => setStep("phone")} >p</p>
        )}
        <img src="/logo.png" alt="Company Logo" style={styles.logo} />
        <h2 style={styles.title}>Customer Registration</h2>
        {step === "phone" ? (
          <form onSubmit={handlePhoneSubmit}>
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onKeyDown={(e) => handleKeyPress(e, handlePhoneSubmit)}
              style={styles.input}
              required
            />
            <button type="submit" style={styles.button}>Get OTP</button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit}>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              onKeyDown={(e) => handleKeyPress(e, handleOtpSubmit)}
              style={styles.input}
              required
            />
            <button type="submit" style={styles.button}>Verify OTP</button>
          </form>
        )}
        <p style={styles.info}>Need help? Contact us at <strong>support@fuelsense.com</strong></p>
      </div>
    </div>
  );
};
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },
  card: {
    background: "white",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    textAlign: "center",
    width: "350px",
    position: "relative",
  },
  logo: {
    width: "80px",
    marginBottom: "10px",
  },
  title: {
    color: "#333",
    marginBottom: "1rem",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "16px",
  },
  button: {
    background: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    width: "100%",
  },
  info: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#555",
  },
  backIcon: {
    position: "absolute",
    left: "15px",
    top: "15px",
    cursor: "pointer",
    fontSize: "20px",
  },
};

export default CustomerRegistration;
