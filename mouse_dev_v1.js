// global var
var checkedIds = [];

function mark(el){
    //if it doesnt have a border
    if(el.style.border != "10px solid blue"){
        // puts a blue border around image
        el.style.border = "10px solid blue";
        // add padding
        el.style.padding = "10px 10px 10px 10px";

        var el_id = el.getAttribute('id');
        console.log(el_id);
        console.log(document.getElementById(el_id).src);
        checkedIds.push(el_id);
        console.log(checkedIds);
    }
}

function unmark(el){
    //if it has a border
    if(el.style.border = "10px solid blue"){
        el.style.border = "";
        el.style.padding = "";

        var el_id = el.getAttribute('id');
        console.log(el_id);
        const index = checkedIds.indexOf(el_id);
        if (index>-1){
            checkedIds.splice(index, 1);
        }

        console.log(checkedIds);
    }
}


function download(){
  
  for (i=0; i<checkedIds.length; i++){

      downloadlink = document.getElementById(checkedIds[i]).src.replace("/Products('Quicklook')", "");
      console.log(downloadlink);
      window.open(downloadlink);
      
    }
}

