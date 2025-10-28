import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import './global.css';
import HeroSection from './components/HeroSection';

export default function App() {

  return (
    <View>
      <StatusBar style="auto" hidden={true} />
      <HeroSection />
    </View>
  );
}
