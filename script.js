/*
//step-1
const xhr = new XMLHttpRequest()
const url ="https://api.github.com/users"

//step-2
xhr.open('GET',url)

//step-3
xhr.onreadystatechange = () =>{
    if(xhr.readyState === 4 && xhr.status === 200 ){
        const respose = JSON.parse(xhr.responseText)
        console.log(respose)
        const mycontainer = document.querySelector('#my-container')
        var result = ' '
    }
}

//step-4
xhr.send()
*/

const btn = document.querySelector('#search-button')

btn.addEventListener('click', () => {
    var username = document.querySelector('#text').value 
    console.log(username)

    //step-1
    const xhr = new XMLHttpRequest()
    const url = `https://api.github.com/users/${username}`

    //step-2
    xhr.open('GET',url)

    //step-3
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status === 200 ){
            const response = JSON.parse(xhr.responseText)
            console.log(response)
            
            const image = document.createElement('img')
            image.setAttribute('src', response.avatar_url)

            const text = document.createElement('p')
            text.setAttribute('class','lead')
            text.textContent = `USERNAME: ${response.login}`

            const Bio = document.createElement('p')
            Bio.setAttribute('class','lead')
            Bio.textContent = `Bio: ${response.bio}`

            const Create = document.createElement('p')
            Create.setAttribute('class','lead')
            Create.textContent = `Created at: ${response.created_at}`


            const Email = document.createElement('p')
            Email.setAttribute('class','lead')
            Email.textContent = `email: ${response.email}`

            const follower = document.createElement('p')
            follower.setAttribute('class','lead')
            follower.textContent = `followers: ${response.followers}`

            const Company = document.createElement('p')
            Company.setAttribute('class','lead')
            Company.textContent = `Company: ${response.company}`

            const Location = document.createElement('p')
            Location.setAttribute('class','lead')
            Location.textContent = `Location: ${response.location}`



            document.querySelector('#my-container').appendChild(image)
            document.querySelector('#my-container').appendChild(text)
            document.querySelector('#my-container').appendChild(Create)
            document.querySelector('#my-container').appendChild(Bio)
            document.querySelector('#my-container').appendChild(Company)
            document.querySelector('#my-container').appendChild(Email)
            document.querySelector('#my-container').appendChild(follower)
            document.querySelector('#my-container').appendChild(Location)

        }
    }

    //step-4
    xhr.send()
})