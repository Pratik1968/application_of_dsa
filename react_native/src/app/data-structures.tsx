import { FlatList, type ListRenderItem, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { DataStructureCard, type DataStructureItem } from '@/components/data-structure-card';

// Local dataset for the demo — 10 core data structures with a one-line
// description each. `id` doubles as the FlatList key.
const DATA_STRUCTURES: DataStructureItem[] = [
  { id: '1', title: 'Array', description: 'Stores elements in contiguous memory.' },
  { id: '2', title: 'Linked List', description: 'Nodes connected using pointers.' },
  { id: '3', title: 'Stack', description: 'Last In First Out (LIFO).' },
  { id: '4', title: 'Queue', description: 'First In First Out (FIFO).' },
  { id: '5', title: 'Deque', description: 'Double-ended queue.' },
  { id: '6', title: 'Hash Table', description: 'Stores key-value pairs for fast lookup.' },
  { id: '7', title: 'Binary Tree', description: 'Hierarchical tree structure.' },
  { id: '8', title: 'Binary Search Tree', description: 'Ordered binary tree.' },
  { id: '9', title: 'Heap', description: 'Complete binary tree used for priority queues.' },
  { id: '10', title: 'Graph', description: 'Collection of vertices and edges.' },
];

export default function DataStructuresScreen() {
  // renderItem stays a thin wrapper: all card visuals/animation live in
  // DataStructureCard, this just wires the press callback.
  const renderItem: ListRenderItem<DataStructureItem> = ({ item }) => (
    <DataStructureCard item={item} onPress={(selected) => console.log('Selected:', selected.title)} />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.screenTitle}>Data Structures</Text>

      <FlatList
        data={DATA_STRUCTURES}
        // Unique key per row (from our data, not the array index) — lets
        // FlatList track/reuse rows correctly across re-renders.
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        // FlatList only renders items near the viewport (windowing), which is
        // why it's used here instead of ScrollView + map for a list this size.
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f2f2f5',
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1a1a1a',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },
  listContent: {
    paddingBottom: 24,
  },
});
