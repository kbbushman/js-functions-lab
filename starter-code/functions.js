// Question 1
function maxOfTwoNumbers(a, b) {
	if(a > b) {
		return a;
	} 
	return b;
}

// Question 2
function maxOfThree(a, b, c) {
	var max = a;
	if (a < b) {
		var max = b;
	}
	if (max < c) {
		var max = c;
	}
	return max;
}

// Question 3
function isCharacterAVowel(char)
{
    var vowels = {"a": true, "e": true, "i": true, "o": true, "u": true};
    if(vowels[char])
    {
        return true;
    }
    return false;
}

// Question 4
function sumArray(num1, num2, num3, num4) {
	return num1 + num2 + num3 + num4;
}


// Question 4
function multiplyArray(num1, num2, num3, num4) {
	return num1 * num2 * num3 * num4;

}


// Question 5
var numberOfArguments = function(args){
  var result = [];

  for (var i = 0; i < arguments.length; i++) {
  	result.push(args[i]);
  }
  return result.length;
}



// Question 6
var reverseString = function (string)
{
     var reverse = "";
     for(var i = string.length; i > 0; i--)
     {
         reverse += string[i - 1];
     }
     return reverse;
};


// Question 7
function findLongestWord (words) {
	var longest = words[0];

	for (var i = 1; i < words.length; i++) {
		if (words[i].length >= longest.length) {
			longest = words[i];
		}
	}

	return longest.length;
  
}


// Question 8
function filterLongWords (words, i) {
	var result = [];
  
}


// Bonus 1
// (hint: `prototype`)


// Bonus 2
function charactersOccurencesCount() {
  
}

