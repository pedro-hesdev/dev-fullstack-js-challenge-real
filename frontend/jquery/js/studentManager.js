
$(document).ready(function(){

    const urlSearch = new URLSearchParams(window.location.search);

    const ra = urlSearch.get("ra");

    if(ra){
        fetchStudent(ra);
    }
    else{
        
            $(".loader").hide("");
            $(".content-page").show('');
    }


    // $("#studentForm").submit((event) =>{
    //     console.log("texte");
    //     event.proventDefault();
    //     const body = {
    //         name: $(this).find("#name").val(),
    //         ra: $(this).find("#ra").val(),
    //         cpf: $(this).find("#cpf").val(),
    //         email: event.target.email.value,
    //     };
        
    //     fetch("http://localhost:3000/students/save", {
    //         method:"POST", 
    //         body: JSON.stringify(body),
    //     })
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((data)=>{
    //         console.log(data);
    //     });
        

    // });
    
});

function fetchStudent (ra){
        fetch(`http://localhost:3000/students/find/${ra}`)
        .then(function(response){
            return response.json();
        }).then(function(data){
            
            const studentForm = $("#studentForm");

            studentForm.find('#name').val(data.nome);
            studentForm.find('#email').val(data.email);
            studentForm.find('#ra').val(data.ra);
            studentForm.find('#cpf').val(data.cpf);


            $(".content-page").show('slow');
            $(".loader").hide("fast");
        })
} 