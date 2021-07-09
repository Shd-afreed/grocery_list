function list(){
    var xhttp =new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            var response = JSON.parse(this.response);
            var Jgrocery = response.grocery;
            var output="";
            for(var i=0;i<Jgrocery.length;i++){
                output +=  `<tr>
                                <td style="width :100px">${Jgrocery[i].SerialNumber}</td>
                                <td style="width :180px">${Jgrocery[i].Name}</td>
                                <td style="width :150px">${Jgrocery[i].Quantity}</td>
                                <td style="width :100px">${Jgrocery[i].Unit}</td>
                                <td style="width :150px">${Jgrocery[i].Department}</td>
                                <td style="width :180px" >${Jgrocery[i].Notes}</td>
                            </tr>`;
                            
            }
            document.getElementById("myTable").innerHTML = output;
        }
    };
    xhttp.open("GET","grocery.json",true);
    xhttp.send();
    }
        