import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapAddTask: {
        backgroundColor: "#f0f9ff",
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
    },

    inputAddTask: {
        borderColor: "#3ebeff",
        borderWidth: 1,
        width: 250,
        height: 40,
        borderRadius: 60,
        paddingHorizontal: 15,
    },

    buttonAdd: {
        backgroundColor: "#3ebeff",
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
    },

    textAdd: {
        fontSize: 26,
        color: "#fff",
    },
})

export default styles;