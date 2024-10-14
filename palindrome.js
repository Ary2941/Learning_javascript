function isPalindrome (word){
    let half = Math.floor(word.length/2);
    for (let letter=0;letter<half; letter++){
        if(word[letter] != word[word.length-letter-1]){
            return false;
        } 
    
    }
    return true;
}

console.log(isPalindrome("abobora"));
