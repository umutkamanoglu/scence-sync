import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import './global.css';
import HeroSection from './components/HeroSection';

export default function App() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <HeroSection />
    </SafeAreaView>
  );
}
