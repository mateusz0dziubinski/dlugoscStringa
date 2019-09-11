function dlugoscStringa(text1, text2){
    var text1 = "Uwielbiam JavaScript";
    var text2 = "Jestem świetnym programistą";

    if (text1.length < text2.length){
        console.log(text2)

    }else{
        console.log("Text 1 nie jest dłuższy od textu2")
    }
}

console.log(dlugoscStringa());
