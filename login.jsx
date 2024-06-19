import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Apple from '../assets/apple.png'
import Google from '../assets/google.png'
import Facebook from '../assets/facebook.png'

const Login = ({navigation}) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  return (
    <SafeAreaView style={{backgroundColor: "#FAFAFD", flex: 1}}>
        <View style={styles.container}>
            <Text style={{fontSize: 22, fontWeight: "bold", color: "#356899"}}>Jobizz</Text>
            <Text style={{fontSize: 28, fontWeight: "bold", paddingTop: 5}}>Welcome Back 👋</Text>
            <Text style={{color: "gray", fontSize: 14}}>Let's log in. Apply for jobs!</Text>
        </View>
        <View style={styles.InputContainer}> 
          <TextInput value={name} onChangeText={setName} placeholder='Name' style={styles.input}/>
          <TextInput value={email} onChangeText={setEmail} placeholder='Email' style={styles.input}/>
          <TouchableOpacity style={styles.logInButton} onPress={()=> navigation.navigate('Home', {name, email})}>
            <Text style={styles.logInButtonText}>Log in</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{color: "gray", fontSize: 14, textAlign: "center", paddingTop: 80}}>
            Or continue with
          </Text>
        </View>
        <View style={styles.images}>
          <TouchableOpacity>
            <Image source={Apple} style={{width: 100, height: 100}}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Google} style={{width: 100, height: 100}}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Facebook} style={{width: 100, height: 100}}/>
          </TouchableOpacity>
        </View>
        <Text style={{textAlign: "center", paddingTop: 30, color: "gray"}}>Don't have an account? <Text style={{color: "#356899", fontWeight: "600"}}>Register</Text></Text>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: 100,
    paddingHorizontal: 30
  },
  InputContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 80,
    paddingHorizontal: 30
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 7,
    marginBottom: 15,
    fontSize: 16,
    borderColor: "#d3d3d3"
  },
  LogIn: {
    padding: 10,
    marginTop: 30
  },
  images: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },
  logInButton: {
    backgroundColor: "#356899",
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  logInButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
})