// =========================
// PAGE NAVIGATION
// =========================

function showPage(pageId){

    const pages=document.querySelectorAll(".page");

    pages.forEach(page=>{
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

}


// =========================
// IMAGE VIEWER
// =========================

function openMedia(src){

    document.getElementById("viewer").style.display="flex";

    document.getElementById("bigImg").src=src;

}

function closeMedia(){

    document.getElementById("viewer").style.display="none";

}


// =========================
// LETTER TYPING
// =========================

const letterText = `Happy Birthday, My Dear ❤️

Today is all about celebrating you.

Thank you for every smile, every laugh, and every beautiful memory we've shared.

I hope this year brings you endless happiness, success, peace, and all the love your heart deserves.

No matter what happens, I will always cherish every moment we've spent together.

Keep smiling, keep shining, and keep being the wonderful person you are.

Happy Birthday once again!

❤️ Forever wishing you the very best ❤️`;

let typedAlready = false;

function openLetter(){

    document.getElementById("letterCard").style.display="block";

    if(typedAlready) return;

    typedAlready = true;

    const target=document.getElementById("typed");

    target.innerHTML="";

    let i=0;

    function typing(){

        if(i<letterText.length){

            target.innerHTML+=letterText.charAt(i);

            i++;

            setTimeout(typing,35);

        }

    }

    typing();

}
