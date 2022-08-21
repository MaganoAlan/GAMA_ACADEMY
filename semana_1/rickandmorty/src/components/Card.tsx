import React from "react";
import {
  Dimensions,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ICharacter } from "../types";

type Props = {
  item: ICharacter;
  getDataCharacter: () => void;
  characterDetails?: ICharacter;
};

export function Card({ item, getDataCharacter, characterDetails }: Props) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        visible={showModal}
        onRequestClose={() => setShowModal(!showModal)}
      >
        <View style={styles.modal}>
          <Text style={styles.detailsTile}>Detalhes de:</Text>
          <Text style={styles.textName}>{characterDetails?.name}</Text>
          <Pressable onPress={() => setShowModal(!showModal)}>
            <Text style={styles.link}>Fechar</Text>
          </Pressable>
        </View>
      </Modal>
      <Image style={{ width: 100, height: 100 }} source={{ uri: item.image }} />
      <View style={styles.textBox}>
        <Text style={styles.textName}>{item.name}</Text>
        <Text style={styles.text}>{item.species}</Text>
        <Text style={styles.text}>{item.gender}</Text>
        <Pressable
          onPress={() => {
            getDataCharacter();
            setShowModal(!showModal);
          }}
        >
          <Text style={styles.link}> Ver mais </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#4A9641",
    width: Dimensions.get("window").width - 30,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 12,
    margin: 12,
    shadowColor: "#4A9641",
    shadowRadius: 12,
    shadowOffset: { width: 50, height: 50 },
    shadowOpacity: 1,
  },
  textName: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  text: {
    color: "#fff",
  },
  link: {
    color: "#fff",
    textDecorationLine: "underline",
    paddingVertical: 10,
  },
  textBox: {
    flex: 1,
    paddingHorizontal: 15,
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4A9641",
  },
  modalText: {
    color: "#fff",
  },
  detailsTile: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: "10%",
  },
});
