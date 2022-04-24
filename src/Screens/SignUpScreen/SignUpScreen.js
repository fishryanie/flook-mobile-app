import React from 'react';
import ButtonComponent from '../../Components/ButtonComponent'
import IconLoginLink from '../../Components/IconLoginLink';
import InputComponent from '../../Components/InputComponent';
import { width, height } from '../../Constants/DimensionsConstants';
import { StyleSheet, View , Text, KeyboardAvoidingView } from 'react-native';
import { AntDesign } from 'react-native-vector-icons';
import { useForm } from "react-hook-form";
import { ScreenName } from '../../Constants/ScreenNameConstants'



export default function SignUpScreen({navigation}) {
  const { title, viewInput, viewIcon, forgotpassword } = styles
  const { control, handleSubmit, formState: { errors }} = useForm();


  const onSubmit = data => {
    
    
  }

  console.log(errors)
  return (
    <React.Fragment>
      <AntDesign style={{paddingTop:50, paddingLeft:20}} name='arrowleft' size={30} color='#000' onPress={()=> navigation.goBack()}/>
      <View style={styles.container}>
        <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <Text style={[title,{fontSize:20,color:'purple'}]}>WELLCOME TO</Text>
          <Text style={title}>GET'S LET STARTED</Text>
          <View style={viewInput}>
            <InputComponent
              control={control}
              errorType={errors?.userName?.type}
              rules={{required:true, minLength:8}}
              leftIcon={{size:20, color:'gray', name:'shield-account'}}
              placeholder='Enter your username'
              field='userName'
              label='UserName'
            /> 
          </View>
          <View style={viewInput}>
            <InputComponent
              control={control}
              errorType={errors?.email?.type}
              rules={{required:true, minLength:8}}
              leftIcon={{size:20, color:'gray', name:'email-outline'}}
              placeholder='Enter your email'
              field='email'
              label='Email'
            /> 
          </View>
          <View style={viewInput}>
            <InputComponent
              control={control}
              errorType={errors?.phoneNumber?.type}
              rules={{required:true, minLength:8}}
              leftIcon={{size:20, color:'gray', name:'phone'}}
              placeholder='Enter your phone number'
              field='phoneNumber'
              label='PhoneNumber'
            /> 
          </View>
          <View style={viewInput}>
            <InputComponent
              control={control}
              errorType={errors?.password?.type}
              rules={{required:true}}
              leftIcon={{size:20, color:'gray', name:'lock'}}
              placeholder='Enter your password'
              field='password'
              label='Password'
              secureTextEntry
            /> 
          </View>
          <View style={viewInput}>
            <InputComponent
              control={control}
              errorType={errors?.passwordComfirm?.type}
              rules={{required:true}}
              leftIcon={{size:20, color:'gray', name:'lock'}}
              placeholder='Enter your password comfirm'
              field='passwordComfirm'
              label='Password comfirm'
              secureTextEntry
            /> 
          </View>
          <View style={viewInput}>
            <ButtonComponent name='Sign up' click={handleSubmit(onSubmit)}/>
          </View>
          
          <View style={viewInput}>
            <Text>Don't have an account ?</Text>
            <Text style={forgotpassword} onPress={()=>{navigation.push(ScreenName.signinScreen)}}>Sign in now</Text>
          </View>
          <IconLoginLink style={viewIcon}/>
        </KeyboardAvoidingView>
      </View>
    </React.Fragment>
  );
};


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    fontSize:25,
    lineHeight:35,
    textAlign:'center',
    fontWeight:'bold'
  },
  viewInput:{
    paddingHorizontal: width/50,
    alignSelf:'center',
    flexDirection:'row',
  },
  viewIcon:{
    paddingTop:5, paddingBottom: height/20, 
    paddingHorizontal:width/8,
    justifyContent:'space-around',
    flexDirection:'row',
  },
  forgotpassword:{
    color:'purple',
    paddingLeft:5,
    textDecorationLine: 'underline', 
  },
});