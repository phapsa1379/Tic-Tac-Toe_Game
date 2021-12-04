let trun_span = document.getElementsByClassName("turn-span")[0];
let container_cell = document.getElementsByClassName("container-cell")[0];
let win = document.getElementsByClassName("win")[0];
let container_game = document.getElementsByClassName("container-game")[0];
let rematch = document.getElementsByClassName("rematch")[0];


let counter = 0;
let reload = 0;
let row1 = [0, 0],
    row2 = [0, 0],
    row3 = [0, 0],
    col1 = [0, 0],
    col2 = [0, 0],
    col3 = [0, 0],
    or1 = [0, 0],
    or2 = [0, 0];
container_cell.addEventListener("click", (e) => {
    let doo = true;

    let className = e.target.getAttribute("class");
    let classNames = className.split(" ");
    classNames.forEach((value) => {
        if (value === "fill-x" || value === "fill-o") doo = false;
    });

    if (doo) {
        let aim = 0;

        if (trun_span.innerHTML == "x") {
            aim = 1;

            trun_span.innerHTML = "o";
        } else {
            trun_span.innerHTML = "x";
        }

        if (aim) {
            e.target.classList.add("fill-x");
        } else {
            e.target.classList.add("fill-o");
        }
        check(e, aim);
    }
});

function check(e, aim) {
    let classnames = e.target.getAttribute("class").split(" ");
    // console.log(classnames);

    if (classnames.includes("cell1")) {
        row1[aim]++;
        col1[aim]++;
        or1[aim]++;
        counter++;
    }
    if (classnames.includes("cell2")) {
        row1[aim]++;
        col2[aim]++;
        counter++;
    }
    if (classnames.includes("cell3")) {
        row1[aim]++;
        col3[aim]++;
        or2[aim]++;
        counter++;
    }
    if (classnames.includes("cell4")) {
        row2[aim]++;
        col1[aim]++;
        counter++;
    }
    if (classnames.includes("cell5")) {
        row2[aim]++;
        col2[aim]++;
        or1[aim]++;
        or2[aim]++;
        counter++;
    }
    if (classnames.includes("cell6")) {
        row2[aim]++;
        col3[aim]++;
        counter++;
    }
    if (classnames.includes("cell7")) {
        row3[aim]++;
        col1[aim]++;
        or2[aim]++;
        counter++;
    }
    if (classnames.includes("cell8")) {
        row3[aim]++;
        col2[aim]++;
        counter++;
    }
    if (classnames.includes("cell9")) {
        row3[aim]++;
        col3[aim]++;
        or1[aim]++;
        counter++;
    }

    if (
        row1[0] == 3 ||
        row2[0] == 3 ||
        row3[0] == 3 ||
        col1[0] == 3 ||
        col2[0] == 3 ||
        col3[0] == 3 ||
        or1[0] == 3 ||
        or2[0] == 3
    ) {
        win.innerHTML = "O Wins !";
        win.style.display = "block";
        setTimeout(() => {
            reload = 1;
        }, 1);
    } else if (
        row1[1] == 3 ||
        row2[1] == 3 ||
        col1[1] == 3 ||
        col2[1] == 3 ||
        col3[1] == 3 ||
        or1[1] == 3 ||
        or2[1] == 3
    ) {
        win.innerHTML = "X Wins !";
        win.style.display = "block";
        setTimeout(() => {
            reload = 1;
        }, 1);
    } else if (counter == 9) {
        win.innerHTML = "It's a Draw";
        win.style.display = "block";
        setTimeout(() => {
            reload = 1;
        }, 1);
    }

    if (row1[0] === 3 || row1[1] === 3) {
        document.getElementsByClassName("row11")[0].style = "display: block";
    } else if (row2[0] === 3 || row2[1] === 3) {
        document.getElementsByClassName("row22")[0].style = "display: block";
    } else if (row3[0] === 3 || row3[1] === 3) {
        document.getElementsByClassName("row33")[0].style = "display: block";
    } else if (col1[0] === 3 || col1[1] === 3) {
        document.getElementsByClassName("col11")[0].style = "display: block";
    } else if (col2[0] === 3 || col2[1] === 3) {
        document.getElementsByClassName("col22")[0].style = "display: block";
    } else if (col3[0] === 3 || col3[1] === 3) {
        document.getElementsByClassName("col33")[0].style = "display: block";
    } else if (or1[0] === 3 || or1[1] === 3) {
        document.getElementsByClassName("or11")[0].style = "display: block";
    } else if (or2[0] === 3 || or2[1] === 3) {
        document.getElementsByClassName("or22")[0].style = "display: block";
    }
}

container_game.addEventListener("click", (e) => {
    if (reload === 1) location.reload();
});

rematch.addEventListener("click", (e) => {
    location.reload();
});