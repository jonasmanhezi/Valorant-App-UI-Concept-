import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Stats from './screens/Stats';
import Home from './screens/Home';
import Maps from './screens/Maps';
import Agents from './screens/Agents';
import Tutoriais from './screens/Tutoriais';
import { NavigationContainer } from '@react-navigation/native';

  
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator  screenOptions={{
      headerShown: false
    }} >
      <Stack.Screen  name="Login" component={Login} />
      <Stack.Screen name="Stats" component={Stats} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Maps" component={Maps} />
      <Stack.Screen name="Agents" component={Agents} />
      <Stack.Screen name="Tutoriais" component={Tutoriais} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer >
      <MyStack />
    </NavigationContainer>
  );
}

