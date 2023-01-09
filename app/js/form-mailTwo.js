"use strict"

document.addEventListener('DOMContentLoaded', function() {

    const formTwo = document.getElementById('formTwo');

    formTwo.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

     let error = formValidate(formTwo);

     let formData = new FormData(formTwo);
     
        if (error === 0) {

            formTwo.classList.add('_sending');

         
            let response = await fetch('sendmail.php', { 
                method: 'POST',
                body: formData
            });
            
            if (response.ok) {
                let result = await response.json();
                swal({
                    text: result.message,
                    icon: "success",
                    button: "Close"
                });
                form.reset();
                form.classList.remove('_sending');
            }else {
                swal({
                    text: result.message,
                    icon: "error",
                    botton: 'Close'
                });
            }
    } else {
        swal({
            text: 'Fill in required fields',
            icon: "error",
            botton: 'Close'
        });
    } 
    }

        function formValidate(formTwo) {
        let error = 0;
        let formReq = document.querySelectorAll('._reqTwo');        


        
        for (let index = 0; index < formReq.length; index++) {

            const input = formReq[index];   

            formRemoveError(input);

            if (input.classList.contains('_emailTwo')) {
                if(emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
         }   
          return error;
    }
    function formAddError(input) {
        input.parentElement.classList.add('_errorTwo');
        input.classList.add('_errorTwo');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_errorTwo');
        input.classList.remove('_errorTwo');
    }
         // Validate email
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});