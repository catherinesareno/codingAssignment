//verifies if character is either O,X,Y,orZ
function verifyCharInput(){
	var charInput = document.getElementById("charInput").value;
	var capInput = charInput.toUpperCase();
	var charsArr = ['O', 'X', 'Y', 'Z'];
	if (charsArr.indexOf(capInput) >= 0) {
	} else {
		alert(charInput + " is not  O,X,Y,orZ");
	}
}

//verifies if an input is an odd integer
function verifyNumInput(){
	var numInput = document.getElementById("oddNum").value;
	var charInput = document.getElementById("charInput").value;
	var container = document.getElementById("resultBox");
	var capletter = charInput.toUpperCase();
	var result = "";
	if (((numInput % 2) == 1) && (numInput != 1)) {
		if (capletter === 'O') {
			result = displayOPattern(numInput);
		}
		if (capletter === 'X') {
			result = displayXPattern(numInput);
		}
		if (capletter === 'Y') {
			result = displayYPattern(numInput);
		}

		if (capletter === 'Z') {
			result = displayZPattern(numInput);
		}
		container.innerHTML = result;
	} else {
		alert(numInput + " is not a non-negative odd number");
	}
}

//displays Z Pattern if char input is Z with a length depending on the num input
function displayZPattern(num)
{
	var index, side_index, size, top, bottom,
		diagonal = num -1,
		inputStr = "";
	for (index = 0; index < num; index++)
		inputStr += "*&nbsp;";

	inputStr += "<br>";
	for (index = 1; index < num - 1; index++)
	{
		for (side_index = 0;
			side_index < 2 * (num - index - 1);
			side_index++)
			inputStr += "&nbsp;";
		inputStr += "*";

		inputStr += "<br>";
	}
	for (index = 0; index < num; index++)
		inputStr += "*&nbsp;";

	return inputStr;
}

//displays Y Pattern if char input is Y with a length depending on the num input
function displayYPattern(num){
	var count = 0;
	var inputStr = "";
	for (var index = 0; index < num; index++) {
		for (var len = 0; len <= num; len++) {
			if (len == count
				|| len == num - count
					&& index <= num / 2)
				inputStr += "*";
			else
				inputStr += "&nbsp;";
		}
		inputStr += "<br>";
		if (index < num / 2)
			count++;
	}
	return inputStr;
}

//displays X Pattern if char input is X with a length depending on the num input
function displayXPattern(num){
	var count = 0,
		inputStr = "";
	for (var index = 0; index <= num-1; index++) {
		for (var len = 0; len <= num; len++) {
			if (len == count
				|| len == num - count)
				inputStr += "*";
			else
				inputStr += "&nbsp;";
		}
		count++;
		inputStr += "<br>";
	}
	return inputStr;
}

//displays O Pattern if char input is O with a length depending on the num input
function displayOPattern(num){
   var distance = 0.0;
   var inputStr = "";
    for (var index = 0; index <= 2* num; index++)
    {
        for (var len = 0; len <= 2*num; len++)
        {
            distance = Math.sqrt((index - num) *
                         (index - num) +
                         (len - num) *
                         (len - num));
            if (distance > num - 0.5 &&
                 distance < num + 0.5)
                inputStr += "*";
                 
            else
                inputStr += "&nbsp;";
        }
        inputStr += "<br>";
    }
    return inputStr;
}