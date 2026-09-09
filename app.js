let apicall=async ()=>{
    //fetching data from a server https://meowfacts.herokuapp.com/
     let resopnse = await fetch('https://meowfacts.herokuapp.com/');
     let factdata = await resopnse.json();
     document.getElementById("box").innerText = factdata.data[0];
     console.log(factdata.data[0]);
}
