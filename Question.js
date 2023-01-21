class Question {

  constructor() {
    this.title = createElement('h1');
    this.input1 = createInput("").attribute("placeholder", "Enter Your Name Here....");
    this.input2 = createInput("").attribute("placeholder", "Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2");
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(windowWidth/2-100, windowHeight/24);

    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.position(windowWidth/2-250, windowHeight/6);

    this.option1.html("1: Everyone " );
    this.option1.position(windowWidth/2-250,windowHeight/5+30);

    this.option2.html("2: Envelope" );
    this.option2.position(windowWidth/2-250,windowHeight/4+50);

    this.option3.html("3: Estimate " );
    this.option3.position(windowWidth/2-250,windowHeight/3+50);

    this.option4.html("4: Example" );
    this.option4.position(windowWidth/2-250,windowHeight/2);

    this.input1.position(windowWidth/2-250,windowHeight/2+100);
    this.input2.position(windowWidth/2+250,windowHeight/2+100);
    this.button.position(windowWidth/2+60,windowHeight-200);

    this.button.mousePressed(()=>{     
       this.message.html("Thank You, Your Answer Has Been Submitted");
       this.message.position(windowWidth/2-150,windowHeight-150);
       
    });
  }
}
