import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

// menampilkan Data barang di menu home, contohnya seperti di bawah ini id ke 1 dengan nama messi harga sekian dan fotonya bisa menyesuaikan 
const initialItems = [
  {
    id: '1',
    name: 'Messi',
    price: 'Rp. 9.000.000.000',
    image:
      'https://i.pinimg.com/564x/52/4b/7a/524b7a00428da6c59270356948501188.jpg',
  },
  {
    id: '2',
    name: 'Neymar Jr.',
    price: 'Rp. 5.000.000.00',
    image:
      'https://i.pinimg.com/474x/15/4a/d7/154ad7064e2c0b668b965a76b2c9cdbd.jpg',
  },
  {
    id: '3',
    name: 'Ronaldhino',
    price: 'Rp. 150.000.000',
    image:
      'https://i.pinimg.com/474x/30/81/9e/30819e06a1ed9f520ebef2c7de609925.jpg',
  },
  {
    id: '4',
    name: 'Kaka',
    price: 'Rp. 8.000.000',
    image:
      'https://i.pinimg.com/736x/ed/de/ff/eddeff71e35a869f8f20cb7d3019b50a.jpg',
  },
  {
    id: '5',
    name: 'Sanz',
    price: 'Rp. 25.000.000',
    image:
      'https://i.pinimg.com/474x/2c/b9/69/2cb969929363dae499308840f808812e.jpg',
  },
  {
    id: '6',
    name: 'Buts',
    price: 'Rp. 20.000.000.000',
    image:
      'https://i.pinimg.com/564x/db/17/1c/db171ccbae0e07e5459d709d50df778a.jpg',
  },
  {
    id: '7',
    name: 'Skylar',
    price: 'Rp. 1.000.000.000',
    image: 'https://i.pinimg.com/564x/89/6c/30/896c3056643ae6c1d3416ca5cc97fc65.jpg',
  },
  {
    id: '8',
    name: 'Leemon',
    price: 'Rp. 35.000.000.000',
    image:
      'https://i.pinimg.com/564x/f9/4b/24/f94b246db9aab51f412f3f8b05eb94e7.jpg',
  },
  {
    id: '9',
    name: 'El Kumar',
    price: 'Rp. 2000',
    image:
      'https://i.pinimg.com/736x/e7/57/eb/e757ebbcd1306f3847fb409740d24e16.jpg',
  },
  {
    id: '10',
    name: 'Banana',
    price: 'Rp. 150.000.000',
    image: 'https://i.pinimg.com/564x/fa/1a/3f/fa1a3f860c4bef1581e7965429a7d6a2.jpg',
  },
  {
    id: '11',
    name: 'Thropy',
    price: 'Rp. 650.000',
    image:
      'https://i.pinimg.com/474x/a9/b4/72/a9b472cffe861ad8e56e1888a88e1609.jpg',
  },
  {
    id: '12',
    name: 'Es Kiko',
    price: 'Rp. 999.999.999.999',
    image:
      'https://i.pinimg.com/474x/97/17/67/971767ff26be67fa0930799e09042daf.jpg',
  },
];
// Di bagian const home screen kita membuat tampilan layout scroll view
const HomeScreen = ({ items }) => (
  <ScrollView contentContainerStyle={styles.container}>
  <View style={styles.largeHeaderContainer}>
    <Image
      source={{
        uri: 'https://i.pinimg.com/474x/e0/01/e9/e001e91d53e828fb79fcdb6603dc4d1b.jpg',
      }}
      style={styles.largeHeaderImage}
    />
    <Text style={[styles.header, { fontFamily: 'bebas' }]}>O STORE</Text>
    </View>
    <FlatList
      numColumns={2}
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginHorizontal: 'auto',
          }}>
          <View style={styles.item}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 100, height: 100, borderRadius: 0 }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text>{item.name}</Text>
              <Text>Harga: {item.price}</Text>
            </View>
          </View>
        </View>
      )}
    />
  </ScrollView>
);

const SecondScreen = ({ items, addItem, removeItem }) => {
  const [newItemName, setNewItemName] = useState('');
  const [newItemPrice, setNewItemPrice] = useState('');
  const [newItemImage, setNewItemImage] = useState('');

  const handleAddItem = () => {
    if (newItemName.trim() && newItemPrice.trim() && newItemImage.trim()) {
      addItem(newItemName, newItemPrice, newItemImage);
      setNewItemName('');
      setNewItemPrice('');
      setNewItemImage('');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nama Barang"
        value={newItemName}
        onChangeText={setNewItemName}
      />
      <TextInput
        style={styles.input}
        placeholder="Harga Barang"
        value={newItemPrice}
        onChangeText={setNewItemPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="URL Gambar Barang"
        value={newItemImage}
        onChangeText={setNewItemImage}
      />
      <Button title="Tambahkan Barang" onPress={handleAddItem} />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={{ flex: 1 }}>
              <Text>{item.name}</Text>
              <Text>Harga: {item.price}</Text>
            </View>
            <Image
              source={{ uri: item.image }}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <Button title="Hapus" onPress={() => removeItem(item.id)} />
          </View>
        )}
      />
    </ScrollView>
  );
};

const ProfileScreen = () => (
  <View style={styles.profileContainer}>
    <Image
      source={{ uri: 'https://i.pinimg.com/564x/2b/82/20/2b8220932fa6df03d7b8c89ee084185f.jpg' }} // kita bisa mengganti foto atau nama kita di profile screen dengan foto atau nama yang di inginkan
      style={styles.profileImage}
    />
    <Text style={styles.profileName}>DODO</Text>
  </View>
);

const MainNavigator = ({ items, addItem, removeItem }) => {
  return (
    <tabs.Navigator>
      <tabs.Screen
        name="Home"
        children={() => <HomeScreen items={items} />}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" color="black" size={25} />
          ),
        }}
      />
      <tabs.Screen
        name="Tambahkan"
        children={() => (
          <SecondScreen
            items={items}
            addItem={addItem}
            removeItem={removeItem}
          />
        )}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="plus" color="black" size={25} />
          ),
        }}
      />
      <tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" color="black" size={25} />
          ),
        }}
      />
    </tabs.Navigator>
  );
};

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Ini untuk penerapan login nya  
    navigation.replace('Main');
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginTitle}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default function App() {
  const [items, setItems] = useState(initialItems);

  const addItem = (name, price, image) => {
    setItems([...items, { id: Math.random().toString(), name, price, image }]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main">
          {() => (
            <MainNavigator
              items={items}
              addItem={addItem}
              removeItem={removeItem}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  largeHeaderContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

  },
  loginTitle: {
    fontSize: 24,
    marginBottom: 20,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  largeHeaderImage: {
    width: 150,
    height: 150,
    marginHorizontal: 100,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  item: {
    // flexDirection : 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  profileName: {
    marginTop: 20,
    fontSize: 24,
  },
});