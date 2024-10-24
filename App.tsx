import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screens/Login';
import List from './app/screens/List';
import Details from "./app/screens/Details";
import ThirdPage from "./app/screens/DrawingofThree";
import FourthPage from "./app/screens/fourmillionme";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from 'firebase/auth';
import { FIREBASE_AUTH } from "./FirebaseConfig";


const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout({ route }) {
  const { userEmail } = route.params;

  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="Menu" component={List} />
      <InsideStack.Screen name="Details" component={Details} initialParams={{ userEmail }} />
      <InsideStack.Screen name="ThirdPage" component={ThirdPage} />
      <InsideStack.Screen name="FourthPage" component={FourthPage} />

    </InsideStack.Navigator>
  );
};

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user',user);
      setUser(user);
    });
  }, [])
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                {user ? (
                  <Stack.Screen name='Inside' component={InsideLayout} options={{ headerShown: false}} initialParams={{ userEmail: user?.email}} />
                ) : (
                  <Stack.Screen name='Login' component={Login} options={{ headerShown: false}} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}