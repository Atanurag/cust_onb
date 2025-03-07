import React, { useState } from "react";

const App = () => {
  const [step, setStep] = useState("customerDetails");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [otp, setOtp] = useState("");

  const handleDetailsSubmit = (e) => {
    e.preventDefault();
    if (!phone.match(/^\d{10}$/)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    if (!name.trim() || !city.trim()) {
      alert("All fields are required!");
      return;
    }
    setStep("otp");
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    alert("OTP Verified! Registration Complete.");
  };

  const clientImageName = 'fuelsense';
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {step === "otp" && (
     
          <svg  onClick={() => setStep("customerDetails")} style={styles.backIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>
          
        )}
                        

        <img src={`https://iotronapp.s3.amazonaws.com/${clientImageName}.jpeg`} alt={`${clientImageName} logo`} style={styles.logo} />
        <h2 style={styles.title}>Customer Onboarding</h2>
        <form onSubmit={step === "customerDetails" ? handleDetailsSubmit : handleOtpSubmit} style={styles.form}>
          {step === "customerDetails" ? (
            <>
              <input type="text" placeholder="Customer Name" value={name} onChange={(e) => setName(e.target.value)} style={styles.input} required />
              <input type="tel" placeholder="Mobile Number" value={phone} onChange={(e) => setPhone(e.target.value)} maxLength={10} style={styles.input} required />
              <input type="text" placeholder="City Name" value={city} onChange={(e) => setCity(e.target.value)} style={styles.input} required />
              <button type="submit" style={styles.button}>Get OTP</button>
            </>
          ) : (
            <>
              <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} style={styles.input} required />
              <button type="submit" style={styles.button}>Verify OTP</button>
            </>
          )}
        </form>
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
    backgroundColor: "#f8f9fa",
    padding: "15px",
  },
  card: {
    background: "white",
    padding: "1.5rem",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "100%",
    maxWidth: "350px",
    position: "relative",
  },
  logo: {
    width: "60px",
    marginBottom: "10px",
  },
  title: {
    color: "#333",
    fontSize: "20px",
    marginBottom: "1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px", 
  },
  input: {
    //width: "100%",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "12px",
    outline: "none",
  },
  button: {
    background: "#007bff",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background 0.3s ease",
    marginTop: "5px",
  },
  info: {
    marginTop: "10px",
    fontSize: "13px",
    color: "#555",
  },
  backIcon: {
    position: "absolute",
    left: "10px",
    top: "10px",
    height:'26px',
    width:'48px',
    cursor: "pointer",
    color: "#007bff",
  },
};

export default App;
