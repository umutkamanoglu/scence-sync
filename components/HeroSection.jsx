import { useState, useEffect } from 'react'
import { Text, View, ImageBackground, Image } from 'react-native';
import { Tmdb } from '../lib/tmdb';
import CardLinearGradient from './CardLinearGradient'
import { LinearGradient } from "expo-linear-gradient";

function HeroSection() {
    const [popular, setPopular] = useState(null)
    const [load, setLoad] = useState(false)
    const api = new Tmdb()

    useEffect(() => {
        const getDatas = async () => {
            const data = await api.popularMovie()
            setPopular(data)
            setLoad(true)
        }
        getDatas()
    }, [])

    if (popular) {
        return (
            <View>
                <ImageBackground
                    source={{
                        uri: `${process.env.EXPO_PUBLIC_IMAGE_BASE}${popular.results[Math.floor(Math.random() * (popular.results.length - 2))].poster_path}`
                    }}
                    resizeMode='cover'
                    className="w-full h-[80vh] justify-end"
                >
                    <Text className="text-white z-10">Deneme</Text>
                    <CardLinearGradient />
                </ImageBackground>
            </View>
        )
    }
}


export default HeroSection