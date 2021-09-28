const names = document.getElementById("names");
const da_button = document.getElementById("da_button");
const nothing = document.getElementById("nothing");
const datalist = document.getElementById("data");

da_button.addEventListener("click", trackSearch);

// =============== MUSIXMATCH =====================//
const MUSIX_MATCH_BASE_URL = "https://api.musixmatch.com/ws/1.1"
const CORS = "https://cors.bridged.cc"
const API = "042f499bea2158514fba6d61d64f579e"

async function trackSearch() {
    try {
        const inputValue = names.value

        if (!inputValue){
            alert("please enter an artist name");
            return;
        }
        // Api call

        const url = `${CORS}/${MUSIX_MATCH_BASE_URL}/track.search?q_artist=${inputValue}&apikey=${API}`
        
        const response = await fetch(url);

        const data = await response.json();

        console.log(data.message.body);
        console.log(data.message.body.track_list);

        const tracks = data.message.body.track_list;
        
        tracks.forEach((track) => {
            const newElement = document.createElement("P");
            
            newElement.innerHTML = track.track.track_name;

            datalist.appendChild(newElement);

            console.log(datalist)

        });

    } catch (err) {
        throw err;
    }
};

