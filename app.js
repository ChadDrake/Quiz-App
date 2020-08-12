/**
 * Example store structure
 */
/**
   * 
   * Technical requirements:
   * 
   * Your app should include a render() function, that regenerates the view each time the store is updated. 
   * See your course material, consult your instructor, and reference the slides for more details.
   *
   * NO additional HTML elements should be added to the index.html file.
   *
   * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
   *
   * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
   * 
   */
  
  /********** TEMPLATE GENERATION FUNCTIONS **********/
  
  // These functions return HTML templates
  
  /********** RENDER FUNCTION(S) **********/
  
  // This function conditionally replaces the contents of the <main> tag based on the state of the store
  
  /********** EVENT HANDLER FUNCTIONS **********/
  
  // These functions handle events (submit, click, etc)

  /*
on first render, load start page
on click start, load question 1,
initialize for loop to keep track of page number and return to display at question-index
on click submit, take input 
put input value in array
increase i by 1
go to page with index = i
when i = 4
on click submit, take input
put input value in array
take arr, parse into other arrays based on values (for loop?)
see which array.length is longest
load result page based on which array.length was longest
on click start over, goes to start page

  */
 
 function countIndex() {
   let count = results.length;
   return count;
 }

  function generateStart() {
     $('main').html( `<div class='page'>
     <button id="submit" class='btn'>Start Quiz</button>
   </div>`)
  }

function handlePageTurn() {
   // e.preventDefault();
   $('main').on('click', '.btn', function (event)  {
     generateNextQuestion();
  });
}

  function generateNextQuestion() {
     $('main').html(`<div class='page-instance'>
     <div class='question-index'>${countIndex()}/5</div>
     <div class="question-text">  </div>
     <div class="answers">
       <form id='answers-form'> 
         <input type='radio' id='erin' name='answer' value='e'>
         <label for="erin">Run and get Misaka</label><br>
         <input type="radio" id="misaka" name="answer" value="m">
         <label for="misaka">Herd the civilians to safety</label><br>
         <input type="radio" id="titan" name="answer" value="t">
         <label for="titan">I am the titan</label><br>
         <input type="radio" id="levi" name="answer" value="l">
         <label for="levi">Charge the titan horde</label><br>
         <button id="submit" class='submit-btn btn'>Submit</button>
       </form>
     </div>
   </div>`)
  }

  function main(){
      generateStart();
      handlePageTurn();
  }



  $(main());
