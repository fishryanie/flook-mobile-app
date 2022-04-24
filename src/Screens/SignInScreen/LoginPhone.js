import React, { useRef, useState } from "react";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { View, StyleSheet, Text, Button } from "react-native";
import OTPTextInput from "react-native-otp-textinput";
export default function LoginPhone() {
  const otpInput = useRef(null);

  const clearText = () => {
      otpInput.current.clear();
  }

  const setText = () => {
      otpInput.current.setValue("1234");
  }

  return (
    <View style={styles.container}>
      {/* <OTPInputView
        style={{ width: "80%", height: 200 }}
        pinCount={4}
        code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        onCodeChanged = {code => { this.setState({code})}}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={(code) => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
      /> */}
        <OTPTextInput tintColor="red" offTintColor="blue" containerStyle={{width:"90%"}} />
        <Button title="clear"/>
               {/* <Button title="aaaaa"></Button> */}
            
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
});
