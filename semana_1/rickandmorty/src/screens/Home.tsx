import React, { useState, useEffect } from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Card } from "../components/Card";
import Api from "../services/Api";
import { ICharacter } from "../types";

export function Home() {
  const [character, setCharacter] = useState<ICharacter[]>();
  const [characterDetails, setCharacterDetails] = useState<ICharacter>();

  const getDataCharacter = (id: Number) => {
    const value: ICharacter[] | any = character?.filter(
      (item) => item.id === id
    );

    let parsed: any = {};

    value.forEach(function (item: any) {
      for (var i in item) {
        parsed[i] = item[i];
      }
    });
    setCharacterDetails(parsed);
  };

  useEffect(() => {
    Api.get("character").then((response) => {
      setCharacter(response.data.results);
    });
  }, []);

  console.log(character);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Home page</Text>
      <ScrollView>
        {character &&
          character.map((item: ICharacter, index: number) => (
            <Card
              key={index}
              item={item}
              getDataCharacter={() => getDataCharacter(item.id)}
              characterDetails={characterDetails}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    width: Dimensions.get("window").width,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#262a31",
    marginTop: 20,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
  },
});
