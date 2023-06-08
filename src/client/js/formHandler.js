function handleSubmit(event) {
    event.preventDefault()
    const zip = document.querySelector("#zip").value;
   console.log(Client.pullWeatherData(zip));

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8088/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }
