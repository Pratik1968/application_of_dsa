import { useState } from 'react';
import { Animated, Pressable, StyleSheet, Text } from 'react-native';

export type DataStructureItem = {
  id: string;
  title: string;
  description: string;
};

type DataStructureCardProps = {
  item: DataStructureItem;
  onPress: (item: DataStructureItem) => void;
};

/**
 * Single reusable card for a data-structure entry. Kept separate from the
 * screen so the FlatList's renderItem stays a thin wrapper around this
 * component (better for readability and future reuse/testing).
 */
export function DataStructureCard({ item, onPress }: DataStructureCardProps) {
  // Drives the press animation. Lazy useState initializer keeps the same
  // Animated.Value instance across re-renders (and is React Compiler / ref-
  // during-render safe, unlike reading `.current` off a useRef at render time).
  const [scale] = useState(() => new Animated.Value(1));
  const [opacity] = useState(() => new Animated.Value(1));

  const animateTo = (toScale: number, toOpacity: number) => {
    Animated.parallel([
      Animated.timing(scale, {
        toValue: toScale,
        duration: 120,
        useNativeDriver: true, // transform/opacity can animate on the native thread
      }),
      Animated.timing(opacity, {
        toValue: toOpacity,
        duration: 120,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Pressable
      onPress={() => onPress(item)}
      onPressIn={() => animateTo(0.97, 0.85)}
      onPressOut={() => animateTo(1, 1)}
    >
      <Animated.View style={[styles.card, { transform: [{ scale }], opacity }]}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    // iOS shadow
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    // Android shadow
    elevation: 3,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#6b6b6b',
  },
});
