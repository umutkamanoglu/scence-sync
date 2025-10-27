import { LinearGradient } from "expo-linear-gradient";

function CardLinearGradient() {
    return (
        <LinearGradient
            colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.8)"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        />
    )
}

export default CardLinearGradient