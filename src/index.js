const init = () => {
  const inputForm = document.querySelector('form')

  inputForm.addEventListener('submit', e => {
    e.preventDefault()

    // Two ways to grab input: From e:
    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.children)
    // console.log(e.target.children[1])
    // console.log(e.target.children[1].value)

    // Or directly from input tag in form:
    const input = document.querySelector('input#searchByID')
    // console.log(input.value)

    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        const title = document.querySelector('#movieDetails h4')
        const summary = document.querySelector('#movieDetails p')

        // TODO: Add conditional for undefined IDs
        title.innerText = data.title
        summary.innerText = data.summary
    })
  })
}

document.addEventListener('DOMContentLoaded', init)