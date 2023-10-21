import React, { Component } from 'react';
import { Text, View, FlatList, Image, ImageBackground, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import axios from 'axios';

export default class SpaceCraftsScreen extends Component {
    // ... (seu código existente)

    render() {
        if (Object.keys(this.state.aircrafts).length === 0) {
            return (
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text>Carregando</Text>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea} />
                    {/* Move o ImageBackground para envolver apenas o título */}
                    <View style={styles.backgroundContainer}>
                        <ImageBackground source={require('../assets/stars.gif')} style={styles.backgroundImage}>
                            <View style={{ flex: 0.15, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.titleText}>Naves Espaciais</Text>
                            </View>
                        </ImageBackground>
                    </View>

                    <View style={{ flex: 0.85 }}>
                        <FlatList
                            keyExtractor={this.keyExtractor}
                            data={this.state.aircrafts}
                            renderItem={this.renderItem}
                            initialNumToRender={10}
                            horizontal={false}
                        />
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    // ... (seus estilos existentes)

    // Adiciona estilos para o container do background
    backgroundContainer: {
        flex: 0.15,
        overflow: 'hidden', // Isso é importante para evitar que o background vaze para outras áreas
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
});
