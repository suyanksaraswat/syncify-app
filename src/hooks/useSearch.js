import { useState, useEffect } from 'react'
import useDebounce from './useDebounce'

export default function useSearch(searchFn) {
	const [searchValue, setSearchValue] = useState('')
	const debouncedSearchTerm = useDebounce(searchValue)

	useEffect(() => {
		if (debouncedSearchTerm) {
			searchFn(debouncedSearchTerm)
		}
	}, [debouncedSearchTerm])

	return {
		searchValue,
		setSearchValue,
	}
}
