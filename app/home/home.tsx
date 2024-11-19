import React from 'react';

import { Text,View,SafeAreaView,ScrollView,Pressable } from 'react-native';
import { Link } from 'expo-router';



export default function Page() {
  return (
    <SafeAreaView>
        <ScrollView>
        <View style={{backgroundColor:'white'}}>
            <Text style={{color:'green',fontWeight:'bold',marginTop:10}}>Top-level page</Text>

        </View>
        <View style={{marginTop:500,backgroundColor:'grey',width:500,height:400,display:'flex',flex:3,flexDirection:'column'}}>
            
            <Link href="/about">About</Link>
            {/* ...other links */}
            <Link href="/user/bacon">View user</Link>
            <Link href="/other" asChild>
                <Pressable>
                    <Text>Home</Text>
                </Pressable>
            </Link>

            
            
            
        </View>
        

        </ScrollView>
        

    </SafeAreaView>
    
  );
  
}