$(function(){
	//HOME 타이핑 애니메이션
	var type = document.getElementById("typing1");
	var type1 = document.getElementById("typing2");
	var type2 = document.getElementById("typing3");
	var typewriter = new Typewriter(type,{loop:false,cursor:""});
	var typewriter1 = new Typewriter(type1,{loop:true});
	var typewriter2 = new Typewriter(type2,{loop:true});
	var titleWriter = new Typewriter(document.getElementById("yo"),{loop:false,cursor:""});
	var titleWriter2 = new Typewriter(document.getElementById("yodream"),{loop:false,cursor:"",delay:2500});

	titleWriter.typeString('YO')
	.start();

	titleWriter2.typeString('DREAM!')
	.start();

	typewriter.typeString('Hello We are NCT DREAM')
    .pauseFor(2500)
    .start();

    typewriter1.typeString('Reload')
    .pauseFor(11000)
    .deleteAll()
    .typeString('THE DREAM SHOW')
    .pauseFor(9000)
    .deleteAll()
    .typeString('We Boom')
    .pauseFor(9500)
    .deleteAll()
    .start();

    typewriter2.typeString('2020년 4월 29일에 발매한 미니 4집 앨범')
    .pauseFor(7000)
    .deleteAll()
    .typeString('NCT DREAM의 첫번째 단독콘서트')
    .pauseFor(8000)
    .deleteAll()
    .typeString('2019년 7월 26일에 발매한 미니 3집 앨범')
    .pauseFor(4000)
    .deleteAll()
    .start();
})