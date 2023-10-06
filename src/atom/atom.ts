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
    key: 'PokemonIdAtom',
    default: 0,
})


export interface IpokemonData {
    name: string;
    type: string;
    id: number;
    image: string;
  }



export const IpokemonDataAtom = atom<IpokemonData>({ 
    key: 'PokemonIdAtom',
    default: {
        name: "",
        type: "",
        id: 0,
        image:""
    },
})


export const modalAtom = atom<boolean>({
    key:"modalAtomState",
    default: false
})

export const pokemonListAtom = atom({
    key:"pokemonListState",
    default: {}
})