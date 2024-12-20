import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EvoLogo from '../../ImageAssests/Logo/evo.png';
import appLogo from '../../ImageAssests/Logo/Logo.png';
import HomeIcon from '../../ImageAssests/ButtonImages/Home.png';
import backIcon from '../../ImageAssests/ButtonImages/BackArrow.png';
import nextIcon from '../../ImageAssests/ButtonImages/NextArrow.png';
import '../../StyleSheets/HomePage.css';
import imageReader from '../../ImageAssests/ButtonImages/reader.jpeg';
import localLangData from '../../LanguageAsset/evo_lang.json';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

class BarcodeInputAnnahmeKlärschlammascheTerminal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showHomeIcon: false,
      shownCancelScreen: false,
      barcodeInputValue: ''
    }

  }

  notify = () => toast.info(localLangData[localStorage.getItem('lang')].call_operator_text, {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  componentDidMount() {

  }

  gotoHome() {
    this.props.history.push('AnnahmeKlärschlammascheTerminalHome');
  }

  gotoBack() {
    this.props.history.goBack();
  }

  gotoNext() {
    if (this.state.barcodeInputValue === '') {
      document.getElementById('barcodeinput').style.border = '1px solid red'
    } else {

      this.props.history.push('SafetyInstructionAnnahmeKlärschlammascheTerminal');

    }
  }

  keyboardTapInputMethod(e) {
    var tempBarcodeValue = this.state.barcodeInputValue;
    if (e === '<-') {
      tempBarcodeValue = tempBarcodeValue.slice(0, -1)
    } else if (e === 'SPACE') {
      tempBarcodeValue = tempBarcodeValue + ' ';

    } else {
      tempBarcodeValue = tempBarcodeValue + e;
    }
    document.getElementById('barcodeinput').style.border = '1px solid #000947'
    this.setState({
      barcodeInputValue: tempBarcodeValue
    })
  }


  render() {
    const keyOneLine = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-'];
    const keyTwoLine = ['Q', 'W', 'E', 'R', 'T', 'Z', 'U', 'I', 'O', 'P', '<-'];
    const keyThreeLine = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ä', 'Ö'];
    const keyFourLine = ['Y', 'X', 'C', 'V', 'B', 'N', 'M', 'Ü', '.', 'SPACE'];
    return (
      <div style={{
                overflow: 'hidden',
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'none',
                KhtmlUserSelect: 'none',
                MozUserSelect: 'nonoe',
                msUserSelect: 'none',
                userSelect: 'none'
            }}>
        <Row style={{ marginTop: '30px' }}>
          <Col >
            <div style={{ marginLeft: '30px' }} onClick={() => this.gotoHome()}>
              <img width={80} height={80} src={HomeIcon} />
            </div>
          </Col>
          <Col xs={7}>
            <div style={{
              width: '250px',
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'center'
            }}>
              <img width={250} height={70} src={EvoLogo} />
              <label style={{ fontSize: '12px', fontWeight: 'bold', color: '#000947', alignSelf: 'center', width: '300px' }} >{localLangData.de.logo_under_line}</label>
            </div>
          </Col>
          <Col >
            <div style={{ marginRight: '42px', display: 'flex', flexDirection: 'column' }}>
              <img width={150} height={70} src={appLogo} />
              <label style={{ fontSize: '13px', fontWeight: 'normal', color: '#000947', alignSelf: 'center' }} >{""}</label>
            </div>
          </Col>
        </Row>
        <Container style={{ height: '531px' }}>
          <Row style={{ marginTop: '20px' }}>
            <Col xs={1}></Col>
            <Col xs={8}>
              <label style={{ fontSize: '25px', fontWeight: 'bold', color: '#000947', marginLeft: '20px' }} >{localLangData[localStorage.getItem('lang')].enterbarcode_label2}</label>
              <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                <label style={{ fontSize: '20px', fontWeight: 'bold', color: '#000947', marginLeft: '20px', marginTop: '14px' }} >{localLangData[localStorage.getItem('lang')].enterbarcode_barcode}</label>
                <input autoFocus id='barcodeinput' style={{ textAlign: 'center', marginLeft: '10px', width: '85%', height: '60px', border: '1px solid #000947', fontSize: '18px' }} value={this.state.barcodeInputValue} />
              </div>
            </Col>
            <Col>
            </Col>
            <Col>
              <img width={150} height={150} style={{ border: '5px solid black' }} src={imageReader} />
            </Col>
          </Row>
          <Row>
            <Col xs={1}></Col>
            {/* <Col xs={5}>
            <label style={{ fontSize: '14px', fontWeight: 'regular', color: '#000947', marginLeft: '20px' }} >{localLangData[localStorage.getItem('lang')].enterbarcode_barcode}</label>
          </Col> */}
            <Col></Col>
          </Row>
          <Row style={{ marginTop: '20px' }}>
            {keyOneLine.map((value, index) => {
              return (
                <Col style={{ marginLeft: index > 0 ? '-20px' : '0' }} onClick={(e) => this.keyboardTapInputMethod(value)}>
                  <div style={{
                    border: '1px solid black',
                    borderRadius: '4px',
                    width: '80px',
                    height: '80px',
                    textAlign: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#000947',
                  }}>{value}</div>
                </Col>
              )
            })}
          </Row>
          <Row style={{ marginTop: '10px' }}>
            {keyTwoLine.map((value, index) => {
              return (
                <Col style={{ marginLeft: index > 0 ? '-20px' : '0' }} onClick={(e) => this.keyboardTapInputMethod(value)}>
                  <div style={{
                    border: '1px solid black',
                    borderRadius: '4px',
                    width: '80px',
                    height: '80px',
                    textAlign: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#000947',
                  }}>{value}</div>
                </Col>
              )
            })}
          </Row>
          <Row style={{ marginTop: '10px' }}>
            {keyThreeLine.map((value, index) => {
              return (
                <Col style={{ marginLeft: index > 0 ? '-20px' : '0' }} onClick={(e) => this.keyboardTapInputMethod(value)}>
                  <div style={{
                    border: '1px solid black',
                    borderRadius: '4px',
                    width: '80px',
                    height: '80px',
                    textAlign: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#000947',
                  }}>{value}</div>
                </Col>
              )
            })}
          </Row>
          <Row style={{ marginTop: '10px' }}>
            {keyFourLine.map((value, index) => {
              return (
                <Col style={{ marginLeft: index > 0 ? '-20px' : '0' }} onClick={(e) => this.keyboardTapInputMethod(value)}>
                  <div style={{
                    border: '1px solid black',
                    borderRadius: '4px',
                    width: '80px',
                    minWidth: value === 'SPACE' ? '160px' : 0,
                    height: '80px',
                    textAlign: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#000947',
                  }}>{value}</div>
                </Col>
              )
            })}
          </Row>
        </Container>
        <Row>
                    <Col xs={4}>
                        <div style={{ marginLeft: '30px' }} >
                            <img width={80} height={80} src={backIcon} onClick={() => this.gotoBack()} />
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div style={{marginLeft:'145px'}}>
                            <img width={64} height={64} src={`${process.env.PUBLIC_URL}/assets/phone-call.png`} onClick={() => this.notify()}/>
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div style={{ marginRight: '30px', float:'right' }}>
                            <img width={80} height={80} src={nextIcon} onClick={() => this.gotoNext()} />
                        </div>
                    </Col>

                </Row>
                 
      </div>
    )
  }
}

export default BarcodeInputAnnahmeKlärschlammascheTerminal;
