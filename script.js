const input = document.body.querySelector('.search')
const allLi = document.body.querySelectorAll('.drink-list li')

// Rozwiązanie bez RegExp z metodą indexOf()

const searchEngine = (event) => {
	const text = event.target.value.toLowerCase()

	allLi.forEach(el => {

		if (el.textContent.toLowerCase().indexOf(text) !== -1) {
			el.style.display = 'block'
		} else {
            el.style.display = 'none'
		}
	})
}

input.addEventListener('keyup', searchEngine)

// Rozwiazanie bez RegExp z metodą includes() i operatorem warunkowym

const searchEngine2 = (event) => {
    const text = event.target.value.toLowerCase()

    allLi.forEach(el => {

        el.textContent.toLowerCase().includes(text) ? el.style.display = 'block' : el.style.display = 'none'
    })
}

input.addEventListener('keyup', searchEngine2)

// Rozwiązanie z RegExp i bez event.target

const searchEngine3 = () => {
	allLi.forEach(el => {
		const match = new RegExp(input.value, 'i').test(el.textContent)

		if (!match) {
			el.style.display = 'none'
		} else {
			el.style.display = 'block'
		}
	})
}

input.addEventListener('keyup', searchEngine3)
