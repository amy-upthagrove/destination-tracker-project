// when user clicks submit button
const submitBtn = document.getElementById("submit_btn");

submitBtn.addEventListener("click", handleSubmitBtnClick);

function handleSubmitBtnClick(evt) {
    evt.preventDefault();
}

// grab info in the form
const destinationElt = document.getElementById("destinationName");
const locationElt = document.getElementById("location")

const photoUrlElt = document.getElementById("photoUrl");
const descriptionElt = document.getElementById("description");

const destinationValue = destinationElt.value; 
const locationValue = locationElt.value;
const photoUrlValue = photoUrlElt.value;
const descriptionValue = descriptionElt.value;


// Make sure that destinationValue and locationValue are not empty
// If they are empty, show the user an error message
if (destinationValue === "" && locationValue === "") {
    const alertDiv = document.createElement("div");
    alertDiv.setAttribute(
        "class",
        "alert alert warning alert dismissible fade show"
    );
    alertDiv.setAttribute("role", "alert");

    alertDiv.innerHTML = `
        Destination name and location are required 
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"> 
            <span aria-hidden="true">&times;</span>
        </button>
    `; 

    document.body.prepend(alertDiv);
} else {

// use form info to create a bootstrap card
const card = document.createElement("div")
card.setAttribute("width", "18rem")

const img = document.createElement("img")
img.setAttribute("class", "card-img-top")
img.setAttribute("src", photoUrlValue)
card.appendChild(img)

const cardBody = document.createElement("div")
cardBody.setAttribute("class", "card-body")
card.appendChild(cardBody)

const h5 = document.createElement("div")
h5.setAttribute("class", "card-title")
h5.innerText = destinationValue
cardBody.appendChild(h5)

const p = document.createElement("p")
p.setAttribute("class", "card-text")
p.innerText = locationValue
cardBody.appendChild(p)

// put the bootstrap card inside of the cards_container div
document.getElementById("cards_container").appendChild(card);


//Reset the input values
destinationElt.value = "";
locationElt.value = "";
photoUrlElt.value = "";
descriptionElt.value = "";
}


// put the bootstrap card inside of the cards_container div
