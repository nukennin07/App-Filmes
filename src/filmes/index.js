import React, {Component} from "react";
import {View, Text, StyleSheet, Button, FlatList, Image, TouchableOpacity} from "react-native";


export default class Filmes extends Component {

    render() {

        const {nome, foto} = this.props.data;

        return (
        <View>
            <View style={styles.card}>
                <Text style={styles.titulo}>{nome}</Text>
                <Image
                    source={{uri: foto}}
                    style={styles.capa}
                />
                <View style={styles.areaBotao}>
                    <TouchableOpacity style={styles.botao} onPress={() => alert(nome)}>
                        <Text style={styles.botaoTexto}>LEIA MAIS</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#FFF',
        margin: 15,
        elevation: 2,
        borderRadius: 5,
        padding: 15,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset:{
            width: 0,
            height: 1,
        },
        shadowRadius: 5,
    },
    capa:{
        height: 250,
        borderRadius: 5,
        zIndex: 2,
    },
    titulo:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    areaBotao:{
        alignItems: 'flex-end',
        marginTop: -40,
        zIndex: 9,
    },
    botao:{
        width: 100,
        backgroundColor: '#09A6FF',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    botaoTexto:{
        color: '#FFF',
        fontWeight: 'bold',
    },
});