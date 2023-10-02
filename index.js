// attach css with js

document.addEventListener('DOMContentLoaded', function () {


    const show_card = document.querySelector('.show_card')
    // console.log(show_card)
    let count = 1;
    show_card.addEventListener('click', (e) => {
        if (count < 2) {
            createCard()
            console.log("checked")
            apirequest("nitesh1221")
            count++;
        }
    })

    document.querySelector('.github_username').addEventListener('change', (e) => {
        
        const githubUserName = document.getElementById('github_username').value
        console.log(githubUserName)
        if((githubUserName === undefined) || (githubUserName === '')){
            // apirequest("nitesh1221")
        } else{
            console.log(githubUserName)
            apirequest(githubUserName)
        }
    })



    //api request    
    function apirequest(username) {

        const url = `https://api.github.com/users/${username}`
        console.log(url)
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        console.log(xhr.readyState)
        xhr.onreadystatechange = function () {
            console.log(xhr.readyState)
            if (xhr.readyState === 4) {
                const data = JSON.parse(this.responseText)
                const btn = document.querySelector('.show_card').addEventListener('click', () => {
                    replacedata(data)
                })
            }
        }
        xhr.send()
    }

    //function for create card
    function createCard() {
        const card = createDiv()
        const cardAdd = document.querySelector('.card_container').appendChild(card)

        const imgDiv = createDiv("img_div", "img_div")
        const imgDivAdd = cardAdd.appendChild(imgDiv)

        const img = document.createElement('img')
        img.className = "img";
        img.src = "proj-1.png"
        imgDivAdd.appendChild(img)

        const secondDiv = createDiv("second_div", "second_div")
        const secondDivAdd = cardAdd.appendChild(secondDiv)

        createHeading(secondDiv, "card_name_heading")
        createHeading(secondDiv, "card_followers")
        createHeading(secondDiv, "card_public_repo")
        createHeading(secondDiv, "card_bio")

console.log("created ")
    }
    function createHeading(secondDiv, classname) {
        const h2 = document.createElement('h2')
        h2.className = classname;
        h2.innerText = "hello"
        secondDiv.appendChild(h2)
    }

    function createDiv(divClass, divId) {
        const div = document.createElement('div')
        div.className = divClass || "card";
        (divId === undefined ? '' : div.id = divId);

        return div;
    }

    //function for replace with write data
    function replacedata(data) {
        document.querySelector('.img').src = data.avatar_url
        document.querySelector('.card_name_heading').innerText = data.name
        document.querySelector('.card_bio').innerText = `Bio : ${data.bio}`
        document.querySelector('.card_followers').innerText = ` Follower : ${data.followers}`
        document.querySelector('.card_public_repo').innerText = `Public Repo : ${data.public_repos}`
        //    console.log(data)


    }



})
