import { Tabs } from 'expo-router';
import React from 'react';
export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ title: 'Início' }} />
      <Tabs.Screen name="login" options={{ title: 'Login' }} />
      <Tabs.Screen name="register" options={{ title: 'Cadastro' }} />
    </Tabs>
  );
}
