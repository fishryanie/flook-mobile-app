import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import RBSheet from "react-native-raw-bottom-sheet";
const BottomSheet = forwardRef(({ children, height }, ref) => {
  const refRBSheet = useRef();

  useImperativeHandle(ref, () => ({
    handleOpenBottomSheet() {
      refRBSheet.current.open()
    },
    handleCloseBottomSheet() {
      refRBSheet.current.close()
    },

  }));
  return (

    <RBSheet
      ref={refRBSheet}
      height={height}
      // closeOnDragDown={true}
      closeOnPressMask={false}
      customStyles={{
        wrapper: {
          backgroundColor: "transparent"
        },
        draggableIcon: {
          backgroundColor: "#000"
        }
      }}

    >
      {children}
    </RBSheet>


  )
})

export default BottomSheet

const styles = StyleSheet.create({})