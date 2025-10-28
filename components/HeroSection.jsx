import { useState, useEffect } from 'react'
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Tmdb } from '../lib/tmdb';
import CardLinearGradient from './CardLinearGradient'
import { RefreshCcw } from 'lucide-react-native';
import { Star, ArrowRight } from 'lucide-react-native';

function HeroSection() {
    const [popular, setPopular] = useState(null)
    const [randomSelected, setRandomSelected] = useState(null)
    const [genres, setGenres] = useState(null)
    const api = new Tmdb()

    const getDatas = async () => {
        const popularData = await api.popularMovie()
        setPopular(popularData)
        setRandomSelected(popularData.results.filter((result) => result.poster_path != null)[Math.floor(Math.random() * (popularData.results.length - 1))])
        const genreData = await api.getMovieGenres()
        setGenres(genreData)
    }

    useEffect(() => {

        getDatas()
    }, [])

    if (popular) {
        return (
            <View>
                <ImageBackground
                    source={{
                        uri: `${process.env.EXPO_PUBLIC_IMAGE_BASE}${randomSelected.poster_path}`
                    }}
                    resizeMode='cover'
                    className="w-full h-[80vh] justify-end relative"
                >
                    <CardLinearGradient />

                    <TouchableOpacity
                        className="bg-violet-600 p-3 rounded-full absolute top-10 right-5 drop-shadow-2xl drop-shadow-black"
                        activeOpacity={0.8}
                        onPress={() => {
                            getDatas()
                        }}
                    >
                        <Text className="text-white text-center">
                            <RefreshCcw color="#ffffff" />
                        </Text>
                    </TouchableOpacity>


                    <View className="z-10 py-5 px-2">
                        <Text className="text-white font-bold text-4xl">{randomSelected.title}</Text>
                        <Text
                            className="text-white text-lg my-3"
                            numberOfLines={2}
                            ellipsizeMode="tail"
                        >{randomSelected.overview}</Text>

                        <View className="flex items-center justify-between flex-row">
                            <View className="flex items-center flex-row gap-3">
                                <Text className="text-white text-base">{randomSelected.release_date.split("-")[0]}</Text>
                                {randomSelected.genre_ids.slice(0, 1).map((genreId) => {
                                    const genre = genres?.genres?.find((g) => g.id === genreId);
                                    if (!genre) return null;
                                    return (
                                        <Text className="text-white text-base border border-white px-2 py-px rounded-full" key={genre.id}>
                                            {genre.name}
                                        </Text>
                                    );
                                })}
                                <Text className="text-white text-base flex items-center justify-center gap-2"><Star fill="#fde047" size={15} />{Math.round(randomSelected.vote_average * 2) / 2}</Text>

                            </View>
                            <View>
                                <TouchableOpacity
                                    className="bg-violet-600 p-3 rounded-full"
                                    activeOpacity={0.8}
                                >
                                    <View className="flex items-center justify-center flex-row gap-2">
                                        <Text className="text-white text-center flex items-center justify-center">
                                            See More
                                        </Text>
                                        <ArrowRight stroke="#ffffff" size={20} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>


                </ImageBackground>
            </View>
        )
    }
}


export default HeroSection