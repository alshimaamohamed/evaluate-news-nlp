function handleSubmit(event) {
    debugger
    event.preventDefault()  
    let url = document.getElementById('URL').value
    if(Client.CheckFormatofURL(url)){
    fetch('http://localhost:8081/GetNLPData', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({url})
    }).then(response=>response.json())
    .then(data=>{
        debugger
        console.log(data)

        document.getElementById('score_tag').innerHTML =data.score_tag
        document.getElementById('confidence').innerHTML =data.confidence
        document.getElementById('agreement').innerHTML =data.agreement
    }).catch(error=>{
        alert(error)
    }); 
    }else{
        alert('URL is wrong Try Something Else !!')
    }
}

export default handleSubmit

