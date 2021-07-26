import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../redux'

export const useActions = () => {
	const dispatch = useDispatch()

	return bindActionCreators(actionCreators, dispatch)
	// returns an object ex.{ searchRepositories : dispatch(searchRepositories())}
}
