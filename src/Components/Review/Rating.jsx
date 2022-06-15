import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import StarRating from 'react-native-star-rating';

const Rating = ({ onClick, starSize = 20 }) => {
  const [rating, setRating] = useState(0);
  const onStarRatingPress = (rating) => {
    setRating(rating)
  };
  return (
    <View>
      <StarRating
        starSize={starSize}
        fullStarColor="#fad902"
        disabled={onClick ? false : true}
        maxStars={5}
        rating={rating}
        halfStarEnabled={true}
        selectedStar={onClick ? (rating) => onStarRatingPress(rating) : () => { }}
      />
    </View>
  )
}

export default Rating

const styles = StyleSheet.create({})