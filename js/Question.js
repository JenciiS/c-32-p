class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
   this.greeting = createElement("h3")
    this.input7 = createInput('Enter Your Answer Here....')
    this.input2 = createElement('h3')
    this.input3 = createElement('h2')
    this.input4 = createElement('h2')
    this.input5 = createElement('h2')
    this.input6 = createElement('h2')
    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)




    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

 

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    var q1 = "I am an odd number and take away a letter from me, i become even? Who am I?"
    this.input2.html(q1);

    var o1 = "7"
    this.input3.html(o1);

    var o2 = "9"
    this.input4.html(o2);

    var o3 = "11"
    this.input5.html(o3);

    var o4 = "13"
    this.input6.html(o4);

    this.input7.position(550, 230);
    this.input3.position(150,90)
    this.input4.position(150,120)
    this.input5.position(150,150)
    this.input6.position(150,180)
    this.input2.position(140,50)
    this.input1.position(150, 230);
    this.button.position(290, 300);
    this.greeting.position(350,300)

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      var message = "Thank You, Your Answer Has Been Submitted"
      this.greeting.html(message);
    })


  }
}
