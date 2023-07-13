
//the countToTen function does the following things:

function countToTen(){
    let count = 0; // initializes a variable called count

    while (count < 10) //starts a loop by checking the value of count to make sure it's less than ten
     {
        count++; // adds one to the value of the count
        document.getElementById("theCount").innerHTML += count + "<br>"; //appends the current value of the count, followed by a 'line break', to the paragraph with the id= 'theCount', and starts the loop over
    }
}
