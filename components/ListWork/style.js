import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    divWork: {
        backgroundColor: "#d8f3f4",
        width: "100%",
        height: 50,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },

    contentTask: {
        flexDirection: "row",
        alignItems: "center",
        width: "85%",
    },

    wrapNumber: {
        alignItems: "center",
        backgroundColor: "#ffd966",
        paddingVertical: 8,
        paddingHorizontal: 15,
        marginHorizontal: 8,
        borderRadius: 10,
    },

    wrapTextWork: {
        width: "75%",
    },

    divCheckbox: {
        height: 50,
        width: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },

    workCompleted: {
        textDecorationLine: "line-through"
    },
})

export default styles;