import { useQuery, useQueryClient } from "react-query";
import axios from "../api/axios";

const fetch_super_heroes = () => {
    return axios.get('/superheroes')
}

export const useSuperHeroesData = (onSuccess, onError) => {
    return useQuery('super-heroes', fetch_super_heroes, {
        cacheTime: 5000,
        onSuccess,
        onError,
    })
}