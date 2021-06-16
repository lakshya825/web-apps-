const submitbtn = document.getElementById('submitbtn')
const city_name= document.getElementById('city_name')
const cityname = document.getElementById('cityname')
const temp_status =document.getElementById('temp_status')
const realval = document.getElementById('real_val')


const datahide = document.querySelector('.middlayer')
const getInfo = async(event)=>{
    event.preventDefault();
    let cityval = cityname.value; 
    if(cityval==''){
        city_name.innerText=`please enter the name before searching`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=8a9df41a2f2250758f251b06fab76344`;
            const response =await fetch(url);
            const data = await response.json();
            const arrData = [data];
    
            city_name.innerText= `${arrData[0].name},${arrData[0].sys.country}`;
            realval.innerText = arrData[0].main.temp;

            const tempMod = arrData[0].weather[0].main;
            // condition for the icon 

            if(tempMod=="Clear"){
                temp_status.innerHTML ="<i class='fas fa-sun' style='color:#eccc68'></i>"
            }
            else if(tempMod=="Clouds"){
                temp_status.innerHTML ="<i class='fas fa-cloud' style='color:#dfe4ea'></i>"
            }
            if(tempMod=="Rain"){
                temp_status.innerHTML ="<i class='fas fa-rain' style='color:#a4b0be'></i>"
            }
            else {
                temp_status.innerHTML ="<i class='fas fa-cloud' style='color:#dfe4ea'></i>"
            }
            datahide.classList.remove('data_hide')

        }catch{
            city_name.innerText=`please enter proper City name`
            datahide.classList.add('data_hide')
        }

    }
}
submitbtn.addEventListener('click',getInfo);