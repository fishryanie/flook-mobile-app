import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AntDesign, Feather } from "react-native-vector-icons";
import Selector from "../Store/Selectors";
import Action from "../Store/Actions";
import { StyleSheet, Text, View, Modal, KeyboardAvoidingView, FlatList, TouchableOpacity, TextInput, Keyboard } from "react-native";

export default function SearchComponent(props) {
  const { data, titleSearch } = props
  const [onFocus, setOnForcus] = useState(false)
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState(data);
  const [masterDataSource, setMasterDataSource] = useState(data);
  const isModalVisible = Selector.app.onOffSearch()
  console.log("isModalVisible", isModalVisible)

  const dispatch = useDispatch()
  const onPressCloseModel = () => {
    dispatch(Action.app.onOffSearch())
  }
  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.tenPhim
          ? item.tenPhim.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const onChangeAnDismiss = () => {
    searchFilterFunction("");
    Keyboard.dismiss();
  };

  const renderItems = (val1) => {
    const {
      item: { tenPhim },
    } = val1;
    // console.log(`${tenPhim} ${maPhim}`);
    return (
      <View style={styles.viewItems}>
        <Text style={styles.textItems}>{tenPhim}</Text>
        {/* <Text style={styles.textItems}>{tenPhim}</Text> */}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <KeyboardAvoidingView
          behavior={"height"}
          style={styles.keyboardAvoidingView}
        >
          <View style={styles.modalContentContainer}>
            <View style={styles.viewTittle}>
              <AntDesign onPress={onPressCloseModel} style={{ flex: 1 }} name="close" size={20} color="white" />
              <Text style={styles.textTittle}>{titleSearch}</Text>
              <Text style={{ flex: 1 }}></Text>

            </View>
            <View style={styles.viewInputContainer}>
              <View
                style={
                  onFocus && search.length > 0
                    ? styles.viewInputComponent
                    : styles.viewInputComponent1
                }
              >
                <Feather
                  name="search"
                  size={25}
                  color="#99989D"
                  style={{ marginLeft: "5%" }}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Search for a movie"
                  onChangeText={(text) => searchFilterFunction(text)}
                  value={search}
                  onFocus={() => setOnForcus(true)}
                ></TextInput>
              </View>
              {onFocus && search.length > 0 ? (
                <View style={styles.viewCancel}>
                  <TouchableOpacity
                    underlayColor="#ffff"
                    onPress={onChangeAnDismiss}
                  >
                    <Text style={{ color: "#816A9F" }}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
            <View style={styles.viewFlatlist}>
              <FlatList
                style={styles.flatStyle}
                data={filteredDataSource}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItems}
                numColumns={2}
              ></FlatList>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  modalContentContainer: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    minHeight: "100%",
    borderRadius: 10,
    marginTop: "20%",
  },
  viewInputContainer: {
    // backgroundColor: "red",
    flexDirection: "row",
    marginTop: "2%",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 50,
  },
  viewInputComponent: {
    backgroundColor: "#EEEEF0",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",

    height: 50,
    borderRadius: 20,
  },
  viewInputComponent1: {
    backgroundColor: "#EEEEF0",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    height: 50,
    borderRadius: 20,
  },
  textInput: {
    width: "90%",
    height: "100%",
    marginLeft: "3%",
    // backgroundColor:"blue"
  },
  viewCancel: {
    width: "15%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  viewCancel: {
    width: "15%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
  },

  viewFlatlist: {
    width: "100%",
    height: "85%",
    backgroundColor: "#EEEEF0",
    marginTop: "2%",
  },
  flatStyle: {
    height: "90%",
    marginTop: 5,
  },
  viewTittle: {
    backgroundColor: "#4A147F",
    flexDirection: "row",
    alignItems: 'center',
    padding: "3%",
    width: "100%",
    minHeight: 40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  viewContainer: {
    flex: 1,
    // flexDirection: "column",
    // justifyContent: "center",
    // backgroundColor: "blue",
    marginTop: "10%",
  },

  textTittle: {
    flex: 3,
    textAlign: 'center',
    color: "white",
    fontSize: 15,
  },
  viewItems: {
    flex: 1,
    backgroundColor: "#99009e",
    borderWidth: 2,
    height: "80%",
    width: "48%",
    marginTop: "5%",
    marginLeft: 10,
    marginRight: 10,
    borderColor: "#8b0b8c",
    borderRadius: 5,
  },
  textItems: {
    fontSize: 20,
    color: "white",
  },
});
