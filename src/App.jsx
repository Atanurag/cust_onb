
import { useEffect, useContext, useState, useRef } from "react";
import '@ant-design/v5-patch-for-react-19';
import cities from '../cities.json'
//import { useHistory } from "react-router-dom";
import { Form, Input, Button,Card,Typography,Cascader,Select} from "antd";
import { InputOTP } from "antd-input-otp";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faUser, faCity } from "@fortawesome/free-solid-svg-icons";
import { Avatar } from "antd";
import dayjs from 'dayjs';
import { handleAPICall, notificationDisplay } from "./utils";
import OtpInput from 'react-otp-input';

function App() {
    //const { urlOrigin, clientImageName } = useContext(UrlContext);
    const [otp, setOtp] = useState('');

    const [showOtpForm, setShowOtpForm] = useState(false);
    const [isLoginClicked, setIsLoginClicked] = useState(false);
    const [isOtpSubmitClicked, setIsOtpSubmitClicked] = useState(false);
    const otpformRef = useRef(null);
    const [globalUsname, setGlobalUsname] = useState("");
    const [inputDisabled ,setInputDisabled] = useState(false);
    const [isOnboarded, setIsOnboarded] = useState(false);
    function convertAPIDataToSelectData(data, selFor){
      let selectData = data.map(item => {
          return {
              label: item.name,
              value: (selFor === "state" ? item.id : item.id),
              key: (selFor === "region" ? item.state_id : item.id),
              //erpCode: (clientImageName === 'fuelsense' || clientImageName === 'gogas1') ? item.erp_code : null,
              //address: (selFor === "station" ? `${item.address}, ${item.pincode}` : null)
          }
      });
      return selectData;
  }
  const [cityData, setCityData] = useState(convertAPIDataToSelectData(cities))

    //let history = useHistory();
    // const onFinish = (values) => {
    //     const url = `${urlOrigin}/api-token-auth/`;
    //     let postObj = {
    //         username : values.username,
    //         password: values.password
    //     }

    //     handleAPICall(url,"POST",postObj).then(res => {
    //         if(res.status && res.status.toLowerCase() === "success"){
    //             localStorage.setItem('token',res.token);
    //             localStorage.setItem('userName',res.user_name);
    //             localStorage.setItem('email',res.email);
    //             localStorage.setItem('phone','9998887770');
    //             history.push('/dashboard');

    //             //setShowOtpForm(true)

    //         }
    //     })        
    // };

    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        otpformRef.current.submit(); 
      }
      if (e.key === "Backspace") {
        e.preventDefault();
        
        // Clone the OTP array
        const newOtp = [...otp];
    
        // If the current input is empty, move focus to the previous input
        if (!newOtp[index] && index > 0) {
          newOtp[index - 1] = ""; // Clear the previous input
          setOtp(newOtp);
    
          // Move focus back to the previous input
          setTimeout(() => {
            document.querySelectorAll("input")[index - 1].focus();
          }, 10);
        } else {
          // Otherwise, just clear the current input
          newOtp[index] = "";
          setOtp(newOtp);
        }
      }
    };
    const onFinish = (values) => {
      notificationDisplay('error', 'success')
      console.log('clicked')
      setShowOtpForm(true)
        // let url = `${urlOrigin}/api/v1/user/user-verification-with-password/ `;
        // setGlobalUsname(values.username)
        // let postObj = {
        //     username: values.username,
        //     password: values.password
        // }
        // setIsLoginClicked(true);
        // handleAPICall(url, "POST", postObj).then(res => {
        //     if (res.status === "success") {
        //         setShowOtpForm(true)
        //         notificationDisplay(res.status, res.message)
        //     }
        //     else {
        //         notificationDisplay("error", res.message)
        //         setIsLoginClicked(false);
        //     }
        // })

    }
    const handleOtp = (value) => {
      console.log('submitted')
        // let url = `${urlOrigin}/api/v1/user/otp-verification/`;
        // let postObj = {
        //     username: globalUsname,
        //     otp: parseInt(value?.otp?.toString().split(",").join(""))
        // }
        // setIsOtpSubmitClicked(true);
        // // let otpy=value?.otp?.toString().split(",").join("")
        // handleAPICall(url, "POST", postObj).then(res => {
        //     //if otp matched set AuthToken to localstorage
        //     if (res.status && res.status.toLowerCase() === "success") {
        //         const Authurl = `${urlOrigin}/api-token-auth/`;
        //         let postAuthObj = {
        //             username: res.data.username,
        //             password: res.data.password
        //         }
        //         handleAPICall(Authurl, "POST", postAuthObj).then(authRes => {
        //             if (authRes.status && authRes.status.toLowerCase() === "success") {
          //               setIsOnboarded(true);
        //                 localStorage.setItem('token', authRes.token);
        //                 localStorage.setItem('userName', authRes.user_name);
        //                 localStorage.setItem('email', authRes.email);
        //                 localStorage.setItem('phone', authRes.phone ?? 'N/A');
        //                 localStorage.setItem('address', authRes.address ?? 'N/A');
        //                 localStorage.setItem('userType', authRes.access_type.toLowerCase());
        //                 localStorage.setItem('is_staff', authRes.is_staff);
        //                 const userFeatures = `${urlOrigin}/api/v1/fuel/feature-details/`;
        //                 handleAPICall(userFeatures, "GET").then(res => {
        //                     localStorage.setItem('features',JSON.stringify(res));
        //                     history.push('/dashboard');
        //                 });
        //             }
        //         })
        //     }
        // }
        // ).catch(err => {
        //     setIsOtpSubmitClicked(false);
        //     if (err) {
        //         return otpformRef.current?.setFields([
        //             {
        //                 name: "otp",
        //                 errors: ["Please enter a valid otp"]
        //             }
        //     ]);
        // }})

      }

      
    // Let the user skip the login if they already have a token set
    useEffect(() => {
        document.title = "Welcome to FuelSense";
        // Adding this to prevent the login page from not having the /login in the url.
        // This caused the first Submit to only redirect to /login and nothing else.
        //if (localStorage.getItem('token') === null) history.push('/login');
        //if (localStorage.getItem('token') !== null) history.push('/dashboard');
    }, []);
    useEffect(() => {
      const handleBackButton = (event) => {
        if (!showOtpForm) {
          event.preventDefault(); // Stop default back navigation
          setShowOtpForm(true); // Show the previous section
          window.history.pushState(null, "", window.location.href); // Prevent browser exit
        }
      };
    
      const handlePopState = () => {
        if (!showOtpForm) {
          setShowOtpForm(true);
          window.history.pushState(null, "", window.location.href); // Stop page exit
        }
      };
    
      window.addEventListener("popstate", handlePopState);
      document.addEventListener("backbutton", handleBackButton); // Android hardware back button
    
      return () => {
        window.removeEventListener("popstate", handlePopState);
        document.removeEventListener("backbutton", handleBackButton);
      };
    }, [showOtpForm]);
    
    return (
        <div className="login-background" >

<div className="login-box"  >
                <Avatar className="company-logo" src={`https://iotronapp.s3.amazonaws.com/fuelsense.jpeg`} alt={`fuelsense logo`} size={136} />
                {/* <Avatar className="company-logo" src={"/src/assets/img/fuelsense.png"} alt={`${clientImageName} logo`} size={136} /> */}
                <div className="login-box-text">
                    <div className="login-box-text-header">
                        Customer Onboarding
                    </div>
                    <div className="login-box-text-subheader">
                        By Iotronics Systems
                    </div>
                    {/* <div style={{fontSize:16,fontWeight:400}}>30 powerful years of energising India!</div>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <p>
                            <span style={{color:'#0068AC',fontWeight:700,display:'block'}}>2000+ </span>Dealer Network
                        </p>
                        <p><span style={{color:'#0068AC',fontWeight:700, display:'block'}}>277+</span> Auto LPG Station</p>
                        <p><span style={{color:'#0068AC',fontWeight:700, display:'block'}}>350+</span> Own Fleet of Tankers</p>
                        <p><span style={{color:'#0068AC',fontWeight:700, display:'block'}}>1M+ </span>Satisfied Customers</p>
                    </div> */}
                </div>
                {!showOtpForm ? <div className="login-box-form">
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <div style={{ marginBottom: 24 }}>Enter your details</div>
                        <Form.Item
                            name="Customer Name"
                            
                        >
                            <Input
                            
                            tabIndex={0}
                            suffix={<FontAwesomeIcon icon={faUser} className="site-form-item-icon" />} placeholder="Name" />
                        </Form.Item>
                        <Form.Item
                            name="number"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Phone Number!',
                                },
                            ]}
                            // rules={[{ validator: async () => Promise.resolve() }]}
                        >
                            <Input
                            
                            tabIndex={0}
                            suffix={<FontAwesomeIcon icon={faPhone}
                             className="site-form-item-icon" />}
                             
                             onKeyDown={(event) => {
                              const isNumericKey = /[0-9.]/.test(event.key);
                              const isControlKey = event.key === "Backspace" || event.key === "Delete" || event.ctrlKey || event.metaKey;
                              const isTabKey = event.key === "Tab";
                              const inputValue = event.target.value;
                              const hasDot = inputValue.includes('.');
                          
                              if ((!isNumericKey && !isControlKey && !isTabKey) || (event.key === '.' && hasDot)) {
                                  event.preventDefault();
                              }
                          }}
                                // onKeyDown={(event) => {
                                //     if (!/[0-9]/.test(event.key) && event.key !== "Backspace" && event.key !== "Delete") { event.preventDefault(); }
                                // }} 
                                minLength={10} maxLength={10} disabled={inputDisabled} placeholder="Phone Number"/>
                        </Form.Item>
                        <Form.Item
                            name="city"
                        >

<Select
                        showSearch
                        style={{width: '-webkit-fill-available'}}
                        placeholder="Select your city"
                        optionFilterProp="children"
                        //defaultValue={selectedState}
                        //onChange={(val) => onChange(val,'state')}
                        filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={cityData}
                    />

                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" disabled={isLoginClicked} className="login-box-form-button">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                    <span className="login-copyright">All Rights Reserved || ©IoTronics System Pvt Ltd, {dayjs().get('year')}</span>
                </div>

                    :
                    <div className="otp-box-form"  >
                       
                       
                       <Form ref={otpformRef} onFinish={handleOtp} className="otp-form">
    <div style={{ marginBottom: 24 }}>Verify your OTP</div>
    
    <Form.Item name="otp" rules={[
                                {
                                    required: true,
                                    message: 'Please input your OTP!',
                                },
                            ]}>
    <div style={styles.otpContainer}>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        inputType="tel"
        renderSeparator={<span>&nbsp;&nbsp;&nbsp;</span>}
        renderInput={(props) => <input {...props} style={styles.otpInput} 
        onKeyDown={(e) => handleKeyDown(e, index)}
        />
      }
        shouldAutoFocus={true}
      />
    </div>

    </Form.Item>

    <Form.Item>
        <Button
            type="primary"
            htmlType="submit"
            disabled={isOtpSubmitClicked}
            loading={false}
            className="login-box-form-button"
            >
            Submit
        </Button>
    </Form.Item>
</Form>

                        <span className="otp-copyright">All Rights Reserved || ©IoTronics System Pvt Ltd, {dayjs().get('year')}</span>
                    </div>


/* {!isOnboarded &&   <div style={styles.container}>
<div style={styles.card}>
  <div style={styles.icon}>✅</div>
  <h3 style={styles.title}>Customer Onboarded Successfully!</h3>
  <p style={styles.text}>
    Thank you for registering. You can now start using our services.
  </p>
  <span className="otp-copyright">All Rights Reserved || ©IoTronics System Pvt Ltd, {dayjs().get('year')}</span>

</div>
</div>} */


                }
            </div>





        </div>
    )
}

const styles = {
  otpContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "2px 0",
  },
  otpInput: {
    width: "25px",
    height: "25px",
    fontSize: "16px",
    textAlign: "center",
    border: "1px solid #b4b0b0",
    borderRadius: "4px",
    outline: "none",
  },
};

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     //height: "100vh",
//     borderRadius:'8px',
//     background: '#fff'
//   },
//   card: {
   
//   fontFamily: 'Exo, sans-serif',
//     textAlign: "center",
//     padding: "20px",
//     borderRadius: "10px",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
//     width: "90%",
//     maxWidth: "350px",
//   },
//   icon: {
//     fontSize: "40px",
//     marginBottom: "10px",
//   },
//   title: {
//     color: "#333",
//   },
//   text: {
//     color: "#555",
//   },
// };
export default App;

