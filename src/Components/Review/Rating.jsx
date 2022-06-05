import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import StarRating from 'react-native-star-rating';

const Rating = () => {
  const [rating, setRating] = useState(0);
  const onStarRatingPress = (rating) => {
    setRating(rating)
  };
  return (
    <View>
      <StarRating
        starSize={20}
        fullStarColor="#fad902"
        disabled={false}
        maxStars={5}
        rating={rating}
        selectedStar={(rating) => onStarRatingPress(rating)}
      />
    </View>
  )
}

export default Rating

const styles = StyleSheet.create({})