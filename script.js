const name = document.querySelector('#name')
const color = document.querySelector('#color')
const input = document.querySelector('#input')
const submit = document.querySelector('#submit')
const model = document.querySelector('#model')
const manufacturer = document.querySelector('#manufacturer')
const vehicle = document.querySelector('#vehicle')
const search = document.querySelector('#search')
submit.addEventListener( 'click' , () => {
    let value = input.value
    fetch(`https:/swapi.dev/api/people/${value}`)
        .then(res => res.json())
        .then(json => {
            name.innerHTML = json.name
            color.innerHTML = json.hair_color
            if (json.vehicles.length > 0) {
                vehicleUrl = json.vehicles[0]
                fetch(vehicleUrl)
                    .then(res => res.json())
                    .then(json => {
                        vehicle.innerHTML = json.name
                        model.innerHTML = json.model
                        manufacturer.innerHTML = json.manufacturer
                    })
            } else {
                vehicle.innerHTML = 'Has no vehicles'
                model.innerHTML = ''
                manufacturer.innerHTML = ''
            }
        })

})

const image = document.querySelector('#image')

search.addEventListener('click', () => {
    fetch(`https://api.thecatapi.com/v1/images/search?size=full}`)
        .then(res => res.json())
        .then(json => {
            image.innerHTML = `<img src="${json[0].url}" alt="Cat Image">`;
        })
});