import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
    },

    body: {
        flex: 1,
        paddingHorizontal: 20,
    },

    wrapListWork: {
      marginTop: 10,
      marginBottom: 20,
    },  
  
    title: {
      color: "#3ebeff",
      textTransform: "uppercase",
      fontSize: 20,
    },

    wrapTitle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    textCount: {
        color: "#3ebeff",
        fontSize: 16,
    },
});

export default styles;