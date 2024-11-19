import { Link, Redirect, Stack } from 'expo-router';
import {Text,View,TextInput,Button,TouchableOpacity,Switch,StyleSheet,Alert,ScrollView,Image,SafeAreaView} from 'react-native';
import { useState } from 'react';



function LogoTitle() {
  return (
    <Image style={styles.image} source={{ uri: 'https://png.pngtree.com/png-vector/20230223/ourmid/pngtree-loyaltyline-icon-png-image_6615376.png' }} />
  );
}



export default function Home() {


  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[phone,setPhone] = useState('');
  const[password,setPassword] = useState('');
  const[isSubscribed,setIsSubscribed] = useState(false);

  const handleSubmit =() =>{
    if (!email.includes('@')) {
      Alert.alert('Invalid email address');
      
      return;
      
    }else {
      Alert.alert('Form Submitted', `Name: ${name}\nEmail: ${email}`);

    }
      
  };

 
  

    const [count, setCount] = useState(0);
    function decreaseCount() {
        if (count > 0){
            setCount(c => c-1);


        } else{
            alert("Can't decrease to run to negative");
        }
    };
    
  return (
    
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Stack.Screen
        options={{
          title: 'Home',
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          

          headerTitle: () => <LogoTitle/>,
          headerRight: () => (
            <TouchableOpacity style={{width:45,height:30}} onPress={() => setCount(c => c + 1)}>
              <Image style={styles.icon} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2661/2661440.png' }} />
              

            </TouchableOpacity>

          ),
          headerLeft: () => (
            <TouchableOpacity style={{width:45,height:30}} onPress={() => decreaseCount()}>
              <Image style={styles.icon} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/262/262039.png' }} />
              

            </TouchableOpacity>

          ),
          //headerRight: () => <Button color='white'  onPress={() => setCount(c => c + 1)} title="Increase count" />,
          //headerLeft: () => <Button color='white' onPress={() => decreaseCount()} title='Decrease count' />
          //headerTitle: "Welcome",
        }}
      />
      
      <View style={styles.inlineContainer} > 
        <Text style={{marginBottom:0,fontSize:25,color:'black'}}>Loyalty Drinks</Text>
        <Image style={styles.image} source={{ uri: 'https://png.pngtree.com/png-vector/20230223/ourmid/pngtree-loyaltyline-icon-png-image_6615376.png' }} />
        {/* <Image style={styles.image} source={{uri: require('')}} /> */}
      </View>
      <View style={styles.container1}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
      
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        
        onChangeText={setEmail}
        keyboardType="email-address"
        
      />

      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Text style={styles.label}>Mobile:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your mobile number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="decimal-pad"
        maxLength={10}
        
      />
      
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Subscribe to newsletter:</Text>
        <Switch value={isSubscribed} onValueChange={setIsSubscribed} />
      </View>

      <Button color={'black'} title="Submit" onPress={handleSubmit} />
    </View>

      
      
      
      
      
      </ScrollView>
      <TouchableOpacity style={{backgroundColor:'black',borderRadius:5,paddingTop:2,paddingBottom:2,paddingLeft:2,paddingRight:2,alignItems: 'center',justifyContent: 'center',}} >
        <Link  style={{color:'white',fontSize:19}}  href={{ pathname: 'details', params: { name: `Welcome, ${name}` } }}> Details</Link>

        

      </TouchableOpacity>
      <Text style={{marginTop:30,marginBottom:25,alignItems:'center',justifyContent:'center',}}>Count: {count}</Text>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 35,
  },
  inline: {
    flexDirection:'row',
  },
  icon: {
    width:45,
    height:30,
    objectFit:'contain',
  },
  label: {
    fontSize:20,
    color:'orange',
    marginBottom:5,
},
input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize:15,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  inlineContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',

  },
});
