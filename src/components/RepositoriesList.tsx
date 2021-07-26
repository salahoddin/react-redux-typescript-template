import React, { useState } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
const RepositoriesList: React.FC = () => {
	const { data, error, loading } = useTypedSelector(
		(state) => state.repositories
	)

	const [term, setTerm] = useState('')

	const { searchRepositories } = useActions()

	const submitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault()

		searchRepositories(term)
	}

	return (
		<div>
			<form onSubmit={submitHandler}>
				<input
					value={term}
					onChange={(e) => setTerm(e.target.value)}
					type='text'
				/>
				<button type='submit'>Search</button>
			</form>
			{error && <h3>{error}</h3>}
			{loading && <h3>{'Loading...'}</h3>}
			{!loading && !error && data.map((name) => <div key={name}>{name}</div>)}
		</div>
	)
}

export default RepositoriesList
