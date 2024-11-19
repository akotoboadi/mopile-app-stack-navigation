import React, { useState } from 'react';
import { Link,Stack, useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';


export default function Details() {
  const params = useLocalSearchParams();
  
  // Ensure `name` is a string, or provide a fallback
  const initialTitle = Array.isArray(params.name) ? params.name[0] : params.name || 'Default Title';
  const [title, setTitle] = useState(initialTitle);

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title,
        }}
      />
      <Text style={{fontWeight:'600',color:'orange',fontSize:20}}
        onPress={() => {
          setTitle('Updated'); // Update the title directly
        }}>
        Update Title
      </Text>
      <View style={{backgroundColor:'black',borderRadius:5,paddingTop:2,paddingBottom:2,paddingLeft:2,paddingRight:2}}>
        <Link  style={{color:'white'}} href={{ pathname: 'settings', params: { name: 'Bacon' } }}>Go to settings</Link>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
