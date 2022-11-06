async function getResponse(){
    let response = await fetch ('https://jsonplaceholder.typicode.com/posts')
    let content = await response.json()
    content = content.splice(0,20)

    let key;

    for (key in content ){
        console.log(content[key])
    }

}
getResponse()
