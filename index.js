// Add your code here


function submitData (name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name:name,
            email:email,
        })})
    
    .then(resp => resp.json())
    //access stringified data and append it to page
    .then(function(data) {
        let dataId = data.id;
        let paragraphItem = document.createElement('p')
        document.body.append(paragraphItem)
        paragraphItem.textContent = dataId
    })
    //append error message to page on catch
    .catch(function (error) {
        let errorMessage = error.message
        let pItem = document.createElement('p')
        document.body.append(pItem)
        pItem.textContent = errorMessage
    })
    }


