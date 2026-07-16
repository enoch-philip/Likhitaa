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

const letterText = `Happy Birthday, little kid❤️

Today is all about celebrating you🫶🏻.


All the love your heart deserves.

No matter what happens, I will always cherish every moment we've spent together.
Im really glad that i met such idiot😁.. you've become one of my favorite people to talk to. 
From playing badminton together to sharing random thoughts and conversations, 
every moment has been special.
ofcourse i might hurt u sometimes (im sorry 🤧),
edipinchify u sometimes(asa dosa i wont stop kelking u so don't expect👹hee)
we fight,we cry but in the end we CARE..i love the way u be with yourself and me ..
i really hope we do make lot more memories together and have lots of fun 😄
also i promise u [I'll always be the BEST for you] ..i wish u overcome all your fears,scars 
and my support always gonna be your side 💪🏻
Thank you for being such a wonderful friend. I hope this year brings you happiness, 
success, good health, and countless reasons to smile. Keep being the amazing person you are.
 Have a fantastic day—you truly deserve it. 🎂

Keep smiling, keep shining

A very Happy Birthday to the little one once again!🎀💗

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
