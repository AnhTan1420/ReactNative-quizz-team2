import { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native'
import { DataTable } from 'react-native-paper'

export const TableUsers = () => {
    const quizzes = [{id: 1, title: 'quiz 1', },{id: 1, title: 'quiz 1', },{id: 1, title: 'quiz 1', }]

  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <DataTable>
          <DataTable.Header style={{ backgroundColor: '#dfdfdf' }}>
            <DataTable.Cell>#</DataTable.Cell>
            <DataTable.Cell>Title</DataTable.Cell>
            <DataTable.Cell>Actions</DataTable.Cell>
          </DataTable.Header>

           {
quizzes.map(q => (
              <DataTable.Row key={q.id}>
                <DataTable.Cell>s</DataTable.Cell>
                <DataTable.Cell>{categ.totalQuiz}</q.Cell>
                <DataTable.Cell>
                  <TouchableOpacity>
                    <Text style={{ textAlign: 'center', color: 'red' }}>X</Text>
                  </TouchableOpacity>
                </DataTable.Cell>
              </DataTable.Row>
}
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    maxHeight: 200,
  },
  text: { margin: 20, fontSize: 16, textAlign: 'center', color: 'black' },
})
