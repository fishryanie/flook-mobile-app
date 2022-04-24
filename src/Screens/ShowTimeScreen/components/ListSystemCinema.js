import React, { useState } from "react";
import moment from "moment";
import ListShowTime from "./Calender";
import HeThongRapChieu from "./HeThongRapChieu.json";
import { Avatar } from "react-native-elements";
import { MaterialIcons } from "react-native-vector-icons";
import { View, Text, StyleSheet, FlatList, ImageBackground, ScrollView,SafeAreaView } from "react-native";
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { height } from "../../../Constants/DimensionsConstants";
export default function ListSystemCinema(){
  const [ date, setDate ] = useState(new Date());
  return (
		<View>
      <ListShowTime date={date} onChange={newDate => setDate(newDate)}/>
			{/* <View style={{
					height:height/7, 
					marginVertical:5,
					paddingHorizontal:5,
					flexDirection:'row',
					backgroundColor:'#fff'}
				}>
				<ImageBackground 
					style={{flex:1}}
					source={{uri:'https://i-ione.vnecdn.net/2019/04/24/55861113-642104969550452-93663-3726-4998-1556090865.png'}}>
				</ImageBackground>
				<View style={{
					flex:3, paddingHorizontal:20 ,justifyContent:'space-evenly'}
				}>
					<Text style={{fontWeight:'bold'}}>Avengers Endgame</Text>
					<Text>3h 2m</Text>
					<Text>⭐ 6.4</Text>
				</View>
			</View> */}
			<Text style={{marginLeft:20, marginTop:20,marginBottom:10}}>THEATERS NEAR YOU</Text>


      <FlatList 
        data={HeThongRapChieu}
        renderItem={({item,index})=> <RenderCinemaSystem item={item} index={index}/>}
				scrollEnabled
				keyExtractor={(_, index) => index.toString()}
      />
		</View>
  )
}

// RENDER SHOWTIMES
function RenderShowtimes({ item, index }){
	const { backgroundTime, time } = styles
	return (
		<ImageBackground
			key={index}
			resizeMode="contain"
			style={backgroundTime}
			source={require("../../../Assets/Images/ImageMovie/movie-seat.png")}>
			<Text style={time}>{moment(item.ngayChieuGioChieu).format("LT")}</Text>
		</ImageBackground>
	);
}


function RenderTheaterCluster({item,index}){
	const { NameTheaterCluster } = styles
	return (
		<View key={index} style={{paddingVertical:15}}>
			<Text style={NameTheaterCluster}>{item.tenCumRap}</Text>
			<FlatList
				horizontal
				data={item.lichChieuPhim}
				renderItem={RenderShowtimes}
				showsHorizontalScrollIndicator={false}
				keyExtractor={(item, index) => index.toString()}
			/>
	</View>
	)
}

function RenderCinemaSystem({item, index}){
	const [ iconDropdown, setIconDropdown ] = useState('right')
	const { collapseHeader, collapseBody, CHContent, nameSystemCinema } = styles
	return (
		<Collapse key={index}>
			<CollapseHeader >
				<View style={collapseHeader} onStartShouldSetResponder={() => setIconDropdown(iconDropdown === 'right' ? 'down' : 'right')}>
					<View style={CHContent} >
						<Avatar source={{ uri: item.logo }} size="small" rounded />
						<Text style={nameSystemCinema}>{item.tenHeThongRap}</Text>
					</View>
					<View style={CHContent}>
						<Text style={{color:'red'}}>16km</Text>
						<MaterialIcons name='navigate-next' color="rgba(0,0,0,0.5)" size={30}/>
					</View>
				</View>  
			</CollapseHeader>      
			<CollapseBody style={collapseBody}>
				<FlatList
					data={item.cumRapChieu}
					renderItem={RenderTheaterCluster}
					keyExtractor={(_, index) => index.toString()}
				/>
			</CollapseBody>
		</Collapse> 		
	)
}

const styles = StyleSheet.create({
  collapseHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "white",
		borderEndColor:'#fff',
    marginVertical: 1,
  },
	CHContent:{
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	nameSystemCinema:{
		fontSize: 16, 
		fontWeight: "bold", 
		margin: 10
	},
	collapseBody:{
		backgroundColor: "white", 
		paddingLeft: 15,
	},
	NameTheaterCluster:{
		fontSize: 15,
		margin:8,
		color: "black",
	},
	backgroundTime:{
		paddingVertical: 10,
		paddingHorizontal: 13,
		marginVertical: 8,
	},
	time:{
		fontSize: 10, 
		color: "white"
	}
});


