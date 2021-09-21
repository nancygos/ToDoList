let submitButton = document.getElementById("submitButton");

let Alldata = [];

function update() {
    let title = document.getElementById("title").value;
    let textArea = document.getElementById("text-area").value;

    // if(title == null){
        // Alldata.pop([title , textArea]);
        // localStorage.setItem('Data' , JSON.stringify(Alldata));
    // }
    if(localStorage.getItem('Data') == null){
        Alldata.push([title , textArea]);
        localStorage.setItem('Data' , JSON.stringify(Alldata));

    }
    else if( title == '' && textArea == ''){
        let AlldataStr = localStorage.getItem('Data');
        Alldata = JSON.parse(AlldataStr); 
        localStorage.setItem('Data' , JSON.stringify(Alldata));
    }
    else{
        let AlldataStr = localStorage.getItem('Data');
        Alldata = JSON.parse(AlldataStr); 

        Alldata.push([title , textArea]);
        localStorage.setItem('Data' , JSON.stringify(Alldata));
    }
    
    
    document.getElementById("title").value = '';
    document.getElementById("text-area").value = '';
    
    // show in table
    show();
}

submitButton.addEventListener('click',update);

function show(){
    tableBody = document.getElementById("tableBody");
    let str = "";

    Alldata.forEach((element , index) =>{
        str += `
                    <tr>
                    <td>${index + 1 + '.'}</td>
                    <td> ${element[0]} </td>
                    <td> ${element[1]} </td>
                    <td><button class="btn d-btn" onClick="deleted( ${index} )">Delete</button></td>
                    </tr>
                `
    });
    tableBody.innerHTML = str;
}

update();

deleted= (index) =>{
    // console.log("delete it"); 
    let AlldataStr = localStorage.getItem('Data');
    Alldata = JSON.parse(AlldataStr); 

    Alldata.splice(index , 1);

    localStorage.setItem('Data' , JSON.stringify(Alldata));
    show();
}

// searchbox code

const searchHere = () => {

    let searchBox = document.getElementById("searchBox").value.toUpperCase();
    let searchShow = document.getElementById('searchShow');

    for(let i=0 ; i<Alldata.lenght ; i++){
        let a = Alldata[i];

        if(searchBox.indexOf(a) > -1 ){
            // document.getElementById('searchShow').innerText = Alldata[i];
            alert("hello");
        }
        else{
            // document.getElementById('tableBody').style.display='none';

        }
    }

    // Alldata.forEach((element ,index) =>{

    //     if(searchBox.indexOf( Alldata[element[0]] ) > -1 ){
    //         // document.getElementById('searchShow').innerText = Alldata[i];
    //         alert("hello");
    //     }
    //     else{
    //         // document.getElementById('searchShow').innerText = Alldata[i];
    //     }

    // });

}    
