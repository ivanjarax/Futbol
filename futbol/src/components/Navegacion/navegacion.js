import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Calendario" component={CalendarioScreen} />
      <Stack.Screen name="Partido" component={PartidoScreen} />
      <Stack.Screen name="Tabla" component={TablaScreen} />
      <Stack.Screen name="Noticias" component={Noticias} />
    </Stack.Navigator>
  );
}

export default App;