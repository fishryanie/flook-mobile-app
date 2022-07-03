import React from "react";
import { StyleSheet, View } from "react-native";
import { Controller } from "react-hook-form";
import { Input } from "react-native-elements";
import { MaterialCommunityIcons, FontAwesome5 } from "react-native-vector-icons";

export default function InputComponent(props){
  const [hidePass, setHidePass] = React.useState(true);
  const { 
    field, 
    label, 
    rules, 
    control,
    errorType,
    leftIcon, 
    rightIcon,
    placeholder, 
    secureTextEntry,
    inputContainerStyle
  } = props;

  console.log(errorType)
  const RenderInput = ({ field: { onChange, onBlur, value } }) => {
    return (
      <Input
        inputContainerStyle={inputContainerStyle} // loại bỏ gạch chân của input {borderBottomWidth:0} 
        label={label}
        value={value} 
        onBlur={onBlur}
        onChangeText={onChange}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry && hidePass}
        errorMessage={
          errorType === 'pattern' ? `${field} không đúng định dạng` : 
          errorType === 'required' ? `${field} không được để trống` : 
          errorType === 'minLength' ? `${field} không được ít hơn ${rules.minLength} kí tự` :
          errorType === 'maxLength' ? `${field} không được dài hơn ${rules.maxLength} kí tự` : null
        }
        leftIcon={ 
          !leftIcon ? null : 
          <MaterialCommunityIcons
            name={leftIcon.name}
            color={leftIcon.color}
            size={leftIcon.size}
            onPress
          />
        }
        rightIcon={ 
          !rightIcon && secureTextEntry == undefined ? null 
          : !rightIcon && secureTextEntry 
          ? <FontAwesome5 
              name={hidePass ? 'eye-slash' : 'eye'} 
              size={15} 
              color="grey" 
              onPress={() => setHidePass(!hidePass)}
            />
          : <MaterialCommunityIcons 
              name={rightIcon.name} 
              color={rightIcon.color} 
              size={rightIcon.size} 
              onPress={()=>{onPress}}
            />    
        }
      />
    )
  }

  return (
    <View style={styles.viewInput}>
      <Controller
        name={field}
        rules={rules}
        control={control}
        defaultValue=""
        render={RenderInput}
        
      />
    </View>
  );
}


const styles = StyleSheet.create({
  viewInput: {
    width: "100%",
    height: "100%",
  },
  errorType:{
    borderBottomColor:'red'
  }
});