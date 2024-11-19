import React from "react";
import {Button,View,TouchableOpacity} from 'react-native';
import { useRouter } from 'expo-router';
export default function Settings() {
    const router = useRouter();
  
    const handleDismiss = (count: number) => {
      router.dismiss(count)
    };
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor:'grey'}}>
        
        <Button color='white' title="Go to first screen" onPress={() => handleDismiss(3)} />

        
        
      </View>
    );
  }