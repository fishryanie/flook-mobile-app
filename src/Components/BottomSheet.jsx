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
      animationType="slide"
      closeOnDragDown={true}
      closeOnPressMask={true}
      openDuration={100}
      customStyles={{
        wrapper: {
          backgroundColor: 'rgba(0,0,0,.6)',

        },
        draggableIcon: {
          backgroundColor: "#000"
        },
        container: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20
        }

      }}

    >
      {children}
    </RBSheet>


  )
})

export default BottomSheet
