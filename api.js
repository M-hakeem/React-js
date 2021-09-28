// https://api.genderize.io/?name=scott

const names = document.getElementById("names");
const da_button = document.getElementById("da_button");
const nothing = document.getElementById("nothing");

da_button.addEventListener("click", getGender);

const BASE_URL = "https://api.genderize.io";

async function getGender () {
    try{
        console.log(names.value);
        const inputValue = names.value

        if (!inputValue){
            alert("please enter a name");
            return;
        }
    // api call
    const response = await fetch(`${BASE_URL}/?name=${inputValue}`);

    const data = await response.json();

    if(!data.gender){
        nothing.innerHTML = "The gender of this name is not known"
    } else{
        nothing.innerHTML = `The gender of this name is ${data.gender} and the probability is ${data.probability}` 
    }

    console.log(data);
    console.log(data.name);
    console.log(data.gender);
    console.log(data.probability);

    } catch (err) {
        console.log(err);
        throw err;
    }
};













// const getGender = async (name) => {
//     try {
//         const response = await fetch(`${BASE_URL}/?name=${name}`);

//         const data = await response.json();
        
//         console.log(data);
//     }catch (err) {
//         console.log(err);
//         throw err;
//     }
// };
// getGender("maria");