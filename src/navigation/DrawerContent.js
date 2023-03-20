import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

const DrawerContent = (props) => {

  const navigateToScreen = (routeName) => {
    props.navigation.navigate(routeName);
  }

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <DrawerItem
            label="Home"
            onPress={() => navigateToScreen('Home')}
          />
          <DrawerItem
            label="Profile"
            onPress={() => navigateToScreen('Profile')}
          />
          <DrawerItem
            label="Settings"
            onPress={() => navigateToScreen('Settings')}
          />
        </View>
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <Text>Drawer Footer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    padding: 10,
  },
  footer: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});

export default DrawerContent;
