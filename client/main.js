const michaelBtn = document.getElementById("michaelbutton")

const getMichaelQuote = () => {
    axios.get("http://localhost:5000/api/michael/")
        .then(res => {
            const data  = res.data;
            alert(data);
        });
        
    };

michaelBtn.addEventListener('click', getMichaelQuote);


const westsideBtn = document.getElementById("westsidebutton")

const getWestsideQuote = () => {
    axios.get("http://localhost:5000/api/westside/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

westsideBtn.addEventListener('click', getWestsideQuote);

const tomBtn = document.getElementById("tombutton")

const getTomQuote = () => {
    axios.get("http://localhost:5000/api/tom/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

tomBtn.addEventListener('click', getTomQuote);


const newWestsideQuote = () => {
    const input = document.getElementById("westsideinput")
    const body = {data:input.value}
    input.value = ""
    axios.post("http://localhost:5000/api/westside/", body)
        .then(res => {
            console.log(res.data)
        })
}
const westsideEnter = document.getElementById("westsideenter")    
westsideEnter.addEventListener('click', newWestsideQuote);

const newMichaelQuote = () => {
    const input = document.getElementById("michaelinput")
    const body = {data:input.value}
    input.value = ""
    axios.post("http://localhost:5000/api/michael/", body)
        .then(res => {
            console.log(res.data)
        })
}
const michaelEnter = document.getElementById("michaelenter")    
michaelEnter.addEventListener('click', newMichaelQuote);

const newTomQuote = () => {
    const input = document.getElementById("tominput")
    const body = {data:input.value}
    input.value = ""
    axios.post("http://localhost:5000/api/tom/", body)
        .then(res => {
            console.log(res.data)
        })
}
const tomEnter = document.getElementById("tomenter")    
tomEnter.addEventListener('click', newTomQuote);


const doobieBrothers = document.getElementById("michaelpicture")

doobieBrothers.addEventListener("mouseover", () => {
    alert("The Doobie Brothers")
});

const griselda = document.getElementById("westsidepicture")

griselda.addEventListener("mouseover", () => {
    alert("Griselda")
});

const slayer = document.getElementById("tompicture")

slayer.addEventListener("mouseover", () => {
    alert("Slayer")
});