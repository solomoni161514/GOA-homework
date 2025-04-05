function switchItUp(number){
    if (number === 0){
      return "Zero";
    }
    else if (number === 1){
      return "One";
    }
    else if (number === 2){
      return "Two";
    }
    else if (number === 3){
      return "Three";
    }
    else if (number === 4){
      return "Four";
    }
    else if (number === 5){
      return "Five";
    }
    else if (number === 6){
      return "Six";
    }
    else if (number === 7){
      return "Seven";
    }
    else if (number === 8){
      return "Eight";
    }
    else if (number === 9){
      return "Nine";
    }
  }



  function getGrade(s1, s2, s3) {
    let x = (s1 + s2 + s3) / 3;
    
    if (x >= 90) {
      return 'A';
    } else if (x >= 80) {
      return 'B';
    } else if (x >= 70) {
      return 'C';
    } else if (x >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  }