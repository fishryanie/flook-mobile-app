import React,{useState, useEffect, useRef} from 'react';
import ButtonComponent from '../../Components/ButtonComponent'
import Modal from "react-native-modal";
import IconLoginLink from '../../Components/IconLoginLink';
import InputComponent from '../../Components/InputComponent';
import { StyleSheet, View , Text, Button, TextInput, Alert,KeyboardAvoidingView} from 'react-native';
import { AntDesign} from 'react-native-vector-icons';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from "react-hook-form";
import { height } from '../../Constants/DimensionsConstants';
import { ScreenName } from '../../Constants/ScreenName'
import { SignInAction } from '../../Store/Action/AuthAction';
import { getDataLocalSelector } from '../../Store/Selector/LocalSelector';

export default function SignIn({navigation}) {
  const [ isModalVisible, setModalVisible] = useState(false);
  const { title, viewInput,viewIcon, forgotpassword, model,modelContent, modelHeader, modelHeaderContent, modelTitle, modelBody, modelInput, modelLabel, modelNote } = styles
  const { control, handleSubmit, formState: { errors } } = useForm();
  const textInput = useRef(null);
  
  const toggleModal = () => setModalVisible(!isModalVisible);

  const authData = getDataLocalSelector()
  const dispatch = useDispatch()
  const onSubmit = data => {
    console.log(data)
    dispatch(SignInAction(data))
  }

  useEffect(() => {
    if(authData !== ''){
      navigation.navigate(ScreenName.mainStackNavigator)
    }
  },[authData])
  
  console.log(authData)
  useEffect(() => { 
    if(isModalVisible === true) {
      setTimeout(() => {
        textInput.current.focus()
      }, 300)
    }
  }, [isModalVisible]); 

  const ModelForgotPassword = () => {
    return(
      <Modal style={model} isVisible={isModalVisible}>
        <View style ={modelContent}>
          <View style={modelHeader}>
            <View><Text style={styles.title1}>Nhập email để nhận lại mật khẩu</Text></View>
            <View style={modelHeaderContent}>
              <Button title="Huỷ" onPress={toggleModal} />
              <Text style={modelTitle}>Nhập email</Text>
              <Button title="Xác nhận" onPress={()=> console.log('data')}  />
            </View>
          </View>
    
          <View style={modelBody}>
            <Text style={modelLabel}>Nhập email</Text>
            <Controller
              control={control}
              rules={{
              required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput style={modelInput} ref={textInput} onChangeText={onChange}  onBlur={onBlur}
                placeholder="Enter your mail"></TextInput>
              )}
              name="email"
              defaultValue=""
            />
          </View>
          <Text style={modelNote}>Nhập email để lấy lại mật khẩu, sau khi xác nhận mật khẩu mới sẽ được gửi về email của bạn, truy cập email để nhận mật khẩu mới và đổi mật khẩu</Text>
        </View>
      </Modal>
    )
  }

  

  return (
    <React.Fragment>
    <AntDesign style={{paddingTop:50, paddingLeft:20}} name='arrowleft' size={30} color='#000' onPress={()=> navigation.goBack()}/>
    <View style={styles.container}>
     
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <Text style={styles.title1}>PLEASE LOGIN</Text>
        <Text style={title}>TO USE THE SERVICE</Text>
        <View style={viewInput}>
          <InputComponent
            control={control}
            errorType={errors?.userName?.type}
            rules={{require:true, minLength:8}}
            leftIcon={{size:20, color:'gray', name:'shield-account'}}
            placeholder='Enter your username'
            field='userName'
            label='UserName'
          /> 
        </View>
        <View style={viewInput}>
          <InputComponent
            control={control}
            rules={{require:true}}
            errorType={errors?.password?.type}
            leftIcon={{size:20, color:'gray', name:'lock'}}
            secureTextEntry
            placeholder='Enter your password'
            field='password'
            label='Password'
          /> 
        </View>
        <View style={viewInput}>
          <Text>Forgot password ?</Text>
          <Text style={forgotpassword} onPress={toggleModal}>Click here to get password</Text>
        </View>
        <View style={viewInput}>
          <ButtonComponent name='Login' click={handleSubmit(onSubmit)}/>
        </View>
       
        <View style={viewInput}>
          <Text>Don't have an account ?</Text>
          <Text style={forgotpassword} onPress={()=>navigation.navigate(ScreenName.signupScreen)}>Sign up now</Text>
        </View>
        <IconLoginLink style={viewIcon}/>
      </KeyboardAvoidingView>
      {ModelForgotPassword()}
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
  title1:{
    fontSize:20,
    marginBottom: height/100, 
    textAlign:'center',
    fontWeight:'bold',
    color:'purple'
  },
  title:{
    fontSize:30,
    lineHeight:35,
    marginBottom: height/30, 
    textAlign:'center',
    fontWeight:'bold'
  },
  viewInput:{
    padding:20,
    alignSelf:'center',
    flexDirection:'row',
  }, 
  viewIcon:{
    paddingTop:5, paddingBottom:5, 
    paddingLeft:70,paddingRight:70,
    justifyContent:'space-around',
    flexDirection:'row',
  },
  forgotpassword:{
    color:'purple',
    paddingLeft:5,
    textDecorationLine: 'underline', 
  },

  // Model

  model:{ 
    margin: 0 , 
    marginTop:100, 
  },
  modelContent:{
    flex:1,
    borderRadius:20,
    backgroundColor:'#F1F1F3',
  },
  modelHeader: {
    paddingTop: 10,
    paddingBottom:10,
    borderTopStartRadius:20,
    borderTopEndRadius:20,
    backgroundColor:'#fff',
  },
  modelHeaderContent:{
    paddingTop: 15,
    backgroundColor: 'white', 
    flexDirection:'row', 
    justifyContent:'space-between',
    
  },
  modelTitle:{
    fontWeight:'600',
    fontSize:17,
    paddingLeft:40,
    paddingTop:10
  },
  modelBody:{
    marginTop:30,
    flexDirection:'row',
    backgroundColor:'#fff'
  },
  modelInput:{ 
    padding:15 
  },
  modelLabel:{ 
    padding:15,
    fontSize:16 
  },
  modelNote:{
    padding:10, 
    fontSize:13, 
    color:'rgba(0,0,0,0.5)',
    paddingRight:15,
    paddingLeft:15
  }
});