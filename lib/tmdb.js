import axios from "axios";

export class Tmdb {

    constructor() {
        this.api_key = process.env.EXPO_PUBLIC_TMDB_APIKEY;
        this._language = "en-US"
    }

    get getLanguage() {
        return this._language;
    }

    set setLanguage(value) {
        switch (value) {
            case "tr-TR":
                this._language = "tr-TR"
                break;
            case "en-US":
                this._language = "en-US"
                break;
            default:
                throw new Error("Unexpected language code");
                break;
        }
    }


    sayHi() {
        console.log(this.api_key)
    }

    async request(url, params = null) {
        const request = await axios.get(`${process.env.EXPO_PUBLIC_BASE_URL}${url}`, {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${this.api_key}`
            },
            params: {
                ...params
            }
        })
        const response = await request.data
        return response
    }

    changeLanguage(value) {
        this.setLanguage = value
    }

    async discoverMovie({ page = 1, include_video = false, include_adult = false } = {}) {
        const data = await this.request("/discover/movie", {
            page,
            language: this._language,
            include_video,
            include_adult
        })
        console.log(data)
    }

    async popularMovie(page = 1) {
        const data = await this.request("/movie/popular", {
            page,
            language: this._language
        })
        return data
    }

    async getMovieGenres() {
        const data = await this.request("/genre/movie/list")
        return data
    }

}