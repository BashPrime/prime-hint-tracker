import { atom } from 'jotai'
import { Game } from '../types/App.types'

export const selectedGameState = atom<Game>('echoes')