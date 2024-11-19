import React,{useState}from "react";
import {Text,View,TextInput,Button,TouchableOpacity,Switch,StyleSheet,Alert,ScrollView} from 'react-native';

const RegistrationForm =() =>{

    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[isSubsribed,setIsSubscribed] = useState(false);

    const handleSubmit =() =>{
        Alert.alert(``);
    };

    return(
        <View style ={styles.container}>
            <Text style = {styles.label}>Username</Text>
            <TextInput></TextInput>

        </View>



    );

};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        justifyContent: 'center',
      },
    label: {
        fontSize:20,
        color:'orange',
        fontWeight:'bold',
        fontFamily:'Arial',
        marginBottom:5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
      },
})
export default RegistrationForm;