function intorsArray(arr) {
    let i= arr.length-1;
    while (i>=0){
      let j=arr[i].length-1;
      while (j>=0) {
        console.log(arr[i][j]);
        j--;
      }  
      i--;
    }
  }
  intorsArray([[1, 2, 3], [5, 7, 3], [10, 11, 6]]);