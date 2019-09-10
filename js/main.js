var text1 = "Uwielbiam JavaScript";
var text2 = "Jestem świetnym programistą";

var dlugoscTextu1 = text1;
var dlugoscTextu2 = text2;

var dlugoscTextu1 = text1.length;
var dlugoscTextu2 = text2.length;

function dlugoscStringa(dlugoscTextu1, dlugoscTextu2){
    if (text1.length < text2.length){
        console.log(text2)

    }else{
        console.log("Text 1 nie jest dłuższy od textu2")
    }
}

console.log(dlugoscStringa());
