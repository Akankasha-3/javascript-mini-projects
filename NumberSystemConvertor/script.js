function showErrorMessage(id, message) {
            document.getElementById(id).innerText = message;
        }
        function clearErrorMessages() {
            document.querySelectorAll('.error-message').forEach(el => el.innerText = '');
        }
        
        function convertFromDecimal() {
            clearErrorMessages();
            let dec = document.getElementById("decimal").value;
            if (!/^[0-9]+$/.test(dec)) {
                showErrorMessage("error-decimal", "Invalid decimal number");
                return;
            }
            document.getElementById("binary").value = parseInt(dec, 10).toString(2);
            document.getElementById("octal").value = parseInt(dec, 10).toString(8);
            document.getElementById("hexadecimal").value = parseInt(dec, 10).toString(16).toUpperCase();
        }
