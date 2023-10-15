import { IpokemonData } from './../types/interface';
import { atom } from "recoil";

export const LoginStateAtom = atom({

    key: 'LoginState',
    default: false,
})

export const PokemonNameAtom = atom<string>({
    key: 'PokemonNameAtom',
    default: '',
})



export const PokemonIdAtom = atom<number>({
    key: 'PokemonIdState',
    default: 0,
})

export const IpokemonDataAtom = atom<IpokemonData>({
    key: 'IpokemonDataState',
    default: {
        index:0,
        name: "",
        type: "",
        id: 0,
        image: "",
        height: 0,
        weight: 0,
    },
})


export const modalAtom = atom<number>({
    key: "modalAtomState",
    default: 0
})

export const pokemonListAtom = atom({
    key: "pokemonListState",
    default: []
})


export const pokeUserNameAtom = atom<string>({
    key: "pokeUserNameState",
    default: ''
})

export const searchedPokeTermAtom = atom<string>({
    key: "searchedPokeTermState",
    default: ''
})