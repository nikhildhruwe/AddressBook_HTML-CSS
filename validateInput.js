function validateInput(input, inputFormat){
    return inputFormat.test(input);
	}

	function validateFirstName(name) {
		const namePattern = new RegExp("^[A-Z]{1}[A-Za-z]{2,}");
        if(!validateInput(name, namePattern))
            document.getElementById("warnFname").innerHTML = "Name must be filled"; 
		else
            document.getElementById("warnFname").innerHTML = ""; 
    }

    function validateLastName(name) {
		const namePattern = new RegExp("^[A-Z]{1}[A-Za-z]{2,}");
        if(!validateInput(name, namePattern))
            document.getElementById("warnLname").innerHTML = "Last name must be filled"; 
		else
            document.getElementById("warnLname").innerHTML = ""; 
    }
    
	function validateCity(city) {
		const cityPattern = new RegExp("^[A-Z]{1}[A-Za-z]{1,}");
		if(!validateInput(city, cityPattern))
			document.getElementById("warnCity").innerHTML = "Enter proper city";
		else
			document.getElementById("warnCity").innerHTML = "";
    }
    
    function validatePhone(phone) {
		const phonePattern = new RegExp("^[6-9][0-9]{9}$");
		if(!validateInput(phone, phonePattern))
			document.getElementById("warnPhone").innerHTML = "Enter proper phone number.";
		else
			document.getElementById("warnPhone").innerHTML = "";
	}

	function validateZip(zip) {
		const zipPattern = new RegExp("^[0-9]{6}");
		if(!validateInput(zip, zipPattern))
			document.getElementById("warnZip").innerHTML = "Enter proper zip code";
		else
			document.getElementById("warnZip").innerHTML = "";
	}