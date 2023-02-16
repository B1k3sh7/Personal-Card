let changeBg = false;

function changeCard(event) {
    const card = event.currentTarget;
    const bg = changeBg ? "explorer" : "ignite";
    changeBg = !changeBg;
    card.style.backgroundImage = `url(./assets/${bg}.svg)`
}

/*
Link to Figma from the project:
https://www.figma.com/file/JkHtHEYRJoEBOokDIWGg1F/NLW-Copa-Card-(Copy)?node-id=4%3A11
*/