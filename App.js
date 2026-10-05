import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import OverviewScreen from './src/screens/OverviewScreen';
import CalculateScreen from './src/screens/CalculateScreen';
import ContactScreen from './src/screens/ContactScreen';
import UltimateGamerScreen from './src/screens/UltimateGamerScreen';
import VipExperienceScreen from './src/screens/VipExperienceScreen';
import EsportsTrainingScreen from './src/screens/EsportsTrainingScreen';
import BirthdayPartyScreen from './src/screens/BirthdayPartyScreen';
import VirtualRealityScreen from './src/screens/VirtualRealityScreen';
import RacingSimulatorScreen from './src/screens/RacingSimulatorScreen';
import EscapeRoomScreen from './src/screens/EscapeRoomScreen';

// THE MAP ON THE WALL. Only the team leader edits this file.
// Every screen has a name. A button says navigation.navigate('<name>') to go there.
// Never rename a screen without telling the whole group.
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Overview" component={OverviewScreen} />
        <Stack.Screen name="Calculate" component={CalculateScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="UltimateGamer" component={UltimateGamerScreen} />
        <Stack.Screen name="VipExperience" component={VipExperienceScreen} />
        <Stack.Screen name="EsportsTraining" component={EsportsTrainingScreen} />
        <Stack.Screen name="BirthdayParty" component={BirthdayPartyScreen} />
        <Stack.Screen name="VirtualReality" component={VirtualRealityScreen} />
        <Stack.Screen name="RacingSimulator" component={RacingSimulatorScreen} />
        <Stack.Screen name="EscapeRoom" component={EscapeRoomScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
