import { createContext, useEffect, useState } from "react"

export const Context = createContext()

const ContextProvider = (props) => {
	const [user, setUser] = useState({})
  const [avatars, setAvatars] = useState([])
  const [people, setPeople] = useState([])


	useEffect(() => {
		fetchMe()
	}, [])

  useEffect(() => {
    fetchAvatars()
  }, [user])

	const fetchMe = () => {
		fetch("/me").then((r) => {
			if (r.ok) {
				r.json().then((user) => {
          console.log(user)
          setUser(user)
          setPeople(user.people)
        })
			}
		})
	}

	const handleLogoutClick = () => {
		fetch("/logout", { method: "DELETE" }).then((r) => {
			if (r.ok) {
				setUser({})
			}
		})
	}

	const fetchLogin = (username, password, setIsLoading, setErrors) => {
		fetch("/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		}).then((r) => {
			setIsLoading(false)
			if (r.ok) {
				r.json().then((user) => setUser(user))
			} else {
				r.json().then((err) => setErrors(err.errors))
			}
		})
	}

	const fetchAvatars = () => {
		fetch("/recipes")
			.then((r) => r.json())
			.then(setAvatars)
	}

	const store = {
		test: "testing",
		user,
		setUser,
    avatars,
    setAvatars,
		fetchMe,
		handleLogoutClick,
		fetchLogin,
    fetchAvatars

	}

	return <Context.Provider value={store}>{props.children}</Context.Provider>
}

export default ContextProvider