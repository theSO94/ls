//1
$('img').attr('src', 'https://cdn2-www.dogtime.com/assets/uploads/gallery/dachshund-dog-breed-pictures/side-5_680-453.jpg');
//2
$('button#go').on('click', function(){ 
	$('p#output').text( $('input#color').val() ).css('color', 'red'); 
});
//3
$('#beeperOne').on('click', function(){
	alert('lunch time');
});
//4
//A.Insert content to the end of an element.
//5
$('#secret').hide();
//6
//A.body is not in a string
//C.the background-color is not in a string
//7
$('body').css('background-color', 'red');
//8
$('ol').append( "<li>Here is thing four.</li>" );


//web developement 2
//1
//F.Bob says hi, immediately

//2
function sayHello () {
alert(this.name + " says hello!");
}

var alice = { name: "Alice" };
sayHello.call(alice);

// 3
// the result will be 20;

// 4
// C."Hi I am window"

// 5 
// B. 20

// 6 
// C. Alice says hi, after 1 second

// 7
//A - modularize our code for reuse and composition
//C - reduce errors and repetition
//D- DRY - don't repeat yourself (developer efficacy)

//3 - git

//1
// C. git clone

// 2 
// B. git status

//3 
// C. rm *.json

//4
//C.rm -rf config

//6
//B.git remote

//7
//B.Using the "mv" command, I move config to setup.

//8
//1.cd ..

//8
//2.cd ../../public
function confilct(){
	return "something else";
}





