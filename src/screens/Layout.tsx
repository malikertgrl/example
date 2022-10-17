import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Loader from './Loader';

interface Props {
  children?: any;
  isShownLoading?: boolean;
}

const Layout = ({children, isShownLoading}: Props) => {
  return (
    <SafeAreaView style={styles.Layout}>
      {isShownLoading && <Loader />}
      {children}
    </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  Layout: {
    flex: 1,
  },
});
