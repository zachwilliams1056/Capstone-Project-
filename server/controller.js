module.exports = {
    getMichaelQuote: (req, res) => {
    

    let randomIndex = Math.floor(Math.random() * michaelArray.length);
    let randomMichaelQuote = michaelArray[randomIndex];
    res.status(200).send(randomMichaelQuote);
    },

    getWestsideQuote: (req, res) => {
    
    
    let randomIndex = Math.floor(Math.random() * westsideArray.length);
    let randomWestsideQuote = westsideArray[randomIndex];
    res.status(200).send(randomWestsideQuote);
    },

    getTomQuote: (req, res) => {
    

    let randomIndex = Math.floor(Math.random() * tomArray.length);
    let randomTomQuote = tomArray[randomIndex];
    res.status(200).send(randomTomQuote);
    },

    createWestsideQuote: (req, res) => {
        westsideArray.push (req.body.data)
        res.status(200)
    },

    createMichaelQuote: (req, res) => {
        michaelArray.push (req.body.data)
        res.status(200)
    },

    createTomQuote: (req, res) => {
        tomArray.push (req.body.data)
        res.status(200)
    },

}

const michaelArray = ["Go on desperateness, I don't need you beside me no more.", "I'm a skater on the lake of love.", "Like a bridge that's on fire, the hurt is over.", "I can't hold on, and I can't return, time to let go, start to live and learn."]
const westsideArray = ["BOOM BOOM BOOM BOOM BOOM!", "Every Lambo truck we parading.", "You ain't never ate Ruth's Chris in a cell.", "Two bedroom condo in Gwinnett, plus another condo on my neck.", "Every day I pray to J Dilla."]
const tomArray = ["Ressurect from crypts of death.", "Night will come and I will follow.", "I live for the things that keep me hollow.", "Close your eyes, look deep in your soul, step outside yourself and let your mind go."]