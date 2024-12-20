import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from "react-router-dom";
import Home from './Containers/Home';
import './App.css';
import BarcodeScan from './Components/BarcodeScan';
// import BarcodeScanII from "./Components/SecondWeighing/BarcodeScan";

import BarcodeInput from './Components/BarcodeInput'
// import BarcodeInputII from "./Components/SecondWeighing/BarCodeInput";

// import SignatureLable from "./Components/SecondWeighing/SignatureLable";
// import ThanksLayout from './Components/SecondWeighing/ThanksLayout';

import LicensePlate from './Components/LicensePlate';
import Weight from "./Components/Weight";
import ThankYou from "./Components/ThankYou";
// import Nameinput from './Components/Numberinput';
import { ToastContainer, toast } from 'react-toastify';
// import NameInputComponent from './Components/Namecomponent';
// import SafetyInstruction from './Components/SafetyInstruction';
// import License from './Components/License';
// import VehicalImages from './Components/VehicalImages';
// import FirstWeighing from './Components/FirstWeighing';
// import NameInputComponent from './Components/NameComponent';
// import Wastetype from './Components/Wastetype';
// import OverLayout from './Components/OverLayout';
import AllHomeLinks from "./Containers/AllHomeLinks";
// import SecondWeighingProcess from "./Containers/SecondWeighingProcess";
// import BarcodeOption from "./Components/ChooseBarcodeOption";
// import BarcodeOptionII from "./Components/SecondWeighing/ChooseBarcodeOptionII";



function App() {
  useEffect(() => {
    localStorage.setItem('auth_token', "692af81b2c11c58c43b13cf956a56ae6f2471d42")
  }, [])
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Barcodescan" element={<BarcodeScan />} />
        <Route path="/Barcodeinput" element={<BarcodeInput />} />
        <Route path="/LicensePlate" element={<LicensePlate />} />
        <Route path="/Weight" element={<Weight />} />
        <Route path="/ThankYou" element={<ThankYou />} />
          {/* <Route exact path="/SecondProcess" element={SecondWeighingProcess} />
      <Route exact path="/ThanksLayout" element={ThanksLayout} />
      <Route exact path="/Barcodescan" component={BarcodeScan} />
      <Route exact path="/BarcodeOption" component={BarcodeOption} />
      <Route exact path="/BarcodeOptionII" component={BarcodeOptionII} />
      <Route exact path="/Barcodeinput" component={BarcodeInput} />
      <Route exact path="/BarcodescanII" component={BarcodeScanII} /> 
      <Route exact path="/BarcodeinputII" component={BarcodeInputII} />
      <Route exact path="/LicensePlate" component={LicensePlate} /> 
      <Route exact path="/NameComponent" component={NameInputComponent} /> 
      {/* <Route exact path="/SafetyInstruction" component={SafetyInstruction} />
      {/* <Route exact path="/License" component={License} /> 
      <Route exact path="/VehicalImages" component={VehicalImages} />
      <Route exact path="/SignatureII" component={SignatureLable} />
      <Route exact path="/Wastetype" component={Wastetype} />
      <Route exact path="/OverLayout" component={OverLayout} />
      <Route exact path="/Nameinput" component={Nameinput} /> */}
      </Routes>
    </div>
  );
}

export default App;
