import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { rootState } from '../redux'

export const useTypedSelector: TypedUseSelectorHook<rootState> = useSelector
