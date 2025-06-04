import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [question1, setQuestion1] = useState('');
  const [question2, setQuestion2] = useState('');
  const [question3, setQuestion3] = useState('');
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [recommendation, setRecommendation] = useState('');

  // Updated questions and options
  const foodOptions1 = [
    { label: 'Breakfast', value: 'breakfast' },
    { label: 'Lunch', value: 'lunch' },
    { label: 'Dinner', value: 'dinner' },
    { label: 'Snacks', value: 'snacks' },
  ];

  const foodOptions2 = [
    { label: 'Home-cooked meal', value: 'home_cooked' },
    { label: 'Restaurant dining', value: 'restaurant' },
    { label: 'Street food', value: 'street_food' },
    { label: 'Takeout/Delivery', value: 'takeout' },
  ];

  const foodOptions3 = [
    { label: 'Try a new cuisine', value: 'new_cuisine' },
    { label: 'Stick to favorites', value: 'favorites' },
    { label: 'Mix and match', value: 'mix_match' },
    { label: 'Follow a recipe', value: 'recipe' },
  ];

  // Generate a food recommendation based on answers
  const getRecommendation = () => {
    if (question1 === 'breakfast') {
      if (question2 === 'home_cooked') return 'How about homemade avocado toast with poached eggs?';
      if (question2 === 'restaurant') return 'Try a classic eggs benedict at your favorite brunch spot!';
      if (question2 === 'street_food') return 'Grab a breakfast burrito from a local food truck!';
      if (question2 === 'takeout') return 'Order a fresh bagel with cream cheese and lox.';
    }
    if (question1 === 'lunch') {
      if (question3 === 'new_cuisine') return 'Explore a Vietnamese banh mi sandwich for lunch!';
      if (question3 === 'favorites') return 'Enjoy a classic grilled cheese and tomato soup.';
      if (question3 === 'mix_match') return 'Build your own poke bowl with your favorite toppings!';
      if (question3 === 'recipe') return 'Try making homemade falafel wraps.';
    }
    if (question1 === 'dinner') {
      if (question2 === 'restaurant') return 'Treat yourself to sushi at a Japanese restaurant.';
      if (question2 === 'home_cooked') return 'Cook a hearty pasta with roasted vegetables.';
      if (question2 === 'street_food') return 'Find a taco truck and try some authentic tacos!';
      if (question2 === 'takeout') return 'Order Thai curry with jasmine rice.';
    }
    if (question1 === 'snacks') {
      if (question3 === 'new_cuisine') return 'Try Korean tteokbokki (spicy rice cakes) as a snack!';
      if (question3 === 'favorites') return 'Enjoy some classic nachos with cheese.';
      if (question3 === 'mix_match') return 'Make a snack platter with fruit, cheese, and crackers.';
      if (question3 === 'recipe') return 'Bake some homemade granola bars.';
    }
    return 'Try something new today—let your cravings guide you!';
  };

  const handleSubmit = () => {
    setRecommendation(getRecommendation());
    setShowRecommendation(true);
  };

  const handleBack = () => {
    setShowRecommendation(false);
    setQuestion1('');
    setQuestion2('');
    setQuestion3('');
    setRecommendation('');
  };

  if (showRecommendation) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.recommendationContainer}>
          <Text style={styles.recommendationIcon}>🍽️</Text>
          <Text style={styles.recommendationTitle}>Your Food Recommendation</Text>
          <View style={styles.recommendationHighlight}>
            <Text style={styles.recommendationText}>{recommendation}</Text>
          </View>
          <View style={styles.submitContainer}>
            <Button title="Back to Questions" onPress={handleBack} />
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>Which meal do you look forward to the most?</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={question1}
            onValueChange={(itemValue) => setQuestion1(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select an option..." value="" />
            {foodOptions1.map((opt) => (
              <Picker.Item key={opt.value} label={opt.label} value={opt.value} />
            ))}
          </Picker>
        </View>
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>How do you prefer to enjoy your food?</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={question2}
            onValueChange={(itemValue) => setQuestion2(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select an option..." value="" />
            {foodOptions2.map((opt) => (
              <Picker.Item key={opt.value} label={opt.label} value={opt.value} />
            ))}
          </Picker>
        </View>
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>What describes your food adventure style?</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={question3}
            onValueChange={(itemValue) => setQuestion3(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select an option..." value="" />
            {foodOptions3.map((opt) => (
              <Picker.Item key={opt.value} label={opt.label} value={opt.value} />
            ))}
          </Picker>
        </View>
      </View>

      <View style={styles.submitContainer}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  questionContainer: {
    marginBottom: 30,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  submitContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  recommendationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  recommendationIcon: {
    fontSize: 48,
    marginBottom: 18,
    color: '#43c6ac',
  },
  recommendationTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  recommendationHighlight: {
    backgroundColor: '#e0ffe6',
    borderRadius: 14,
    paddingVertical: 32,
    paddingHorizontal: 22,
    marginTop: 20,
    marginBottom: 0,
    minWidth: 240,
    maxWidth: 340,
    width: '100%',
    shadowColor: '#43c6ac',
    shadowOpacity: 0.13,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    borderWidth: 1.5,
    borderColor: '#43c6ac',
    alignItems: 'center',
  },
  recommendationText: {
    fontSize: 18,
    color: '#222',
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 28,
    letterSpacing: 0.1,
  },
});