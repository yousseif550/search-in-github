
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function ({ navigation }) {

  const goToSearch = () => {
    navigation.navigate("Search");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        BIENVUENUE SUR SearchGitByYou
      </Text>
        <Button onPress={goToSearch} title={`Rechercher un Utilisateur`} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
      },
      title: {
        textAlign: 'center',
        marginVertical: 8, 
      },
      fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      }
});

