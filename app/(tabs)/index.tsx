import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';

// data untuk FlatList
const data = [
  { id: '1', name: 'Andi' },
  { id: '2', name: 'Budi' },
  { id: '3', name: 'Citra' },
  { id: '4', name: 'Dewi' },
];

export default function App() {
  // state untuk tombol hitung
  const [count, setCount] = useState(0);

  // efek useEffect
  useEffect(() => {
    console.log('Komponen mount sekali');
    return () => console.log('Cleanup saat unmount');
  }, []);

  return (
    <View style={s.container}>
      <Image source={{ uri: 'https://picsum.photos/120' }} style={s.avatar} />

      <Text style={s.title}>RN Dasar — Pertemuan 1</Text>
      <Text>Hitung: {count}</Text>

      <View style={{ height: 8 }} />
      <Button title="Tambah" onPress={() => setCount(count + 1)} />

      <View style={{ height: 16 }} />
      <FlatList
        data={data}
        keyExtractor={(it) => it.id}
        renderItem={({ item }) => (
          <View style={s.row}>
            <Text>{item.name}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        contentContainerStyle={{ paddingVertical: 8 }}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#F8FAFF',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 8,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
  },
  row: {
    backgroundColor: '#EAF6FF',
    padding: 12,
    borderRadius: 8,
    minWidth: 220,
    alignItems: 'center',
  },
});