import React from "react";
import { StyleSheet, Text, View, Modal, ScrollView } from "react-native";
import { FontAwesome5 } from "react-native-vector-icons";
import ItemHidden from "../ListAdminComponent/components/ItemHidden";
import ItemVisible from "../ListAdminComponent/components/ItemVisible";
import { SwipeListView } from "react-native-swipe-list-view";

const ModalCart = (props) => {
  const { isModalVisible, data } = props;

  const onRowDidOpen = (rowKey) => console.log("This row opened", rowKey);
  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <View style={styles.viewHeader}>
          <View style={styles.viewClose}>
            <FontAwesome5 name="chevron-left" size={25} color="#3A3A3A" />
          </View>
          <View style={styles.viewCart}>
            <Text style={styles.textCart}>Cart</Text>
          </View>
          <View style={styles.viewClear}>
            <Text style={styles.textClear}>Clear</Text>
          </View>
        </View>

        <View style={{ height: "92%", width: "100%", backgroundColor: "white" }}>
          <SwipeListView
            disableRightSwipe
            keyExtractor={(item, index) => index.toString()}
            data={props.data}
            renderItem={({ item, index }) => <ItemVisible item={item} index={index}/>}
            renderHiddenItem={ItemHidden}
            leftOpenValue={75}
            rightOpenValue={-90}
            previewRowKey={"0"}
            previewOpenValue={-40}
            previewOpenDelay={3000}
            onRowDidOpen={onRowDidOpen}
          />
        </View>
      </Modal>
    </View>
  );
};

export default ModalCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    height: "60%",
    width: "100%",
    padding: 10,
    // backgroundColor: "green",
    // position: "absolute",
    // bottom: 0,
  },
  viewHeader: {
    marginTop: "0%",
    width: "100%",
    height: "7%",
    paddingStart: "4%",
    paddingEnd: "4%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  },
  viewCart: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "20%",
    height: "80%",
    // backgroundColor:"blue",
  },
  viewClose: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    width: "13%",
    height: "80%",
    borderRadius: 100,
    backgroundColor: "#EFEFEF",
  },
  viewClear: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "20%",
    width: "25%",
    height: "80%",
    backgroundColor: "#EFEFEF",
    borderRadius: 90,
  },
  textCart: {
    fontWeight: "bold",
    fontSize: 25,
  },
  textClear: {
    fontSize: 20,
  },
});
