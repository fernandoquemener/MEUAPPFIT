import { useRouter } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏋️ Bem-vindo ao FitnessApp!</Text>
      <Text style={styles.subtitle}>Escolha uma opção abaixo:</Text>

      <View style={styles.buttonGroup}>
        <Button title="Ver Exercícios" onPress={() => router.push('/exercises')} />
        <Button title="Ver Dietas" onPress={() => router.push('/diets')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, marginBottom: 20 },
  buttonGroup: { width: '100%', gap: 10 },
});
