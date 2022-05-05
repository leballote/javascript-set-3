const notesList = [
    {
        "id": "note-1",
        "title": "First Note!",
        "body": "This is my very first note, and it is really important." 
    },
    {
        "id": "note-2",
        "title": "Remember",
        "body": "don't forget to feed the cat this Thursday."
    }, 
    {
        "id" : "note-3",
        "title": "Really, remember", 
        "body": "Seriously, don't forget it."
    },
    {
        "id" : "note-4",
        "title": "Another", 
        "body": "Seriously, don't forget it."
    },
    {
        "id" : "note-5",
        "title": "Yet, another note, this one is huge", 
        "body": `Hola

        Hi
        This
        Note
        Is
        Huge
        And
        I
        Think
        You
        Should
        Know
        It
        you 
        really
        really
        really
        really
        really
        really
        really
        have
        to
        scroll
        `

    }
]

const notes = document.getElementById("notes");
const noteTemplate = document.getElementById("note-template");
const blackBack = document.getElementById("black-back");
const newNoteBtn = document.getElementById("new-note-btn");
let currentSelected = null;

renderNotes();

notes.addEventListener("click", evt =>  {
    let note = evt.target.closest("li");
    if (note) {
        selectNote(note);
    }    
});

blackBack.addEventListener("click", evt => {
    unSelectNote(); 
});

newNoteBtn.addEventListener("click", evt => {
    newNote();
});

function renderNotes() {
    const notesElements = [];
    for (let noteData of notesList) {
        const note = noteTemplate.content.cloneNode(true);
        let title = note.querySelector(".note-title");
        title.textContent = noteData["title"];
        let noteBody =  note.querySelector(".note-body");
        for (let paragraph of noteData.body.split("\n")) {
            const p = document.createElement("p");
            p.textContent = paragraph;
            noteBody.appendChild(p);
        }
        notesElements.push(note);
    }

    for (let note of notesElements) {
        notes.appendChild(note);
    }
}

function selectNote(note) {
    if (note != currentSelected) {
        note = note.cloneNode(true);
        note.classList.add("selected");
        unSelectNote();
        currentSelected = note;
        blackBack.style.setProperty("display", "block");
        notes.appendChild(note);
    }
}

function unSelectNote() {
    if (currentSelected) {
        currentSelected.classList.remove("selected");
        currentSelected.remove();
        blackBack.style.display = "none";
        currentSelected = null;
    }
}

function newNote() {
    const note = noteTemplate.content.cloneNode(true).querySelector(".note");
    selectNote(note);
    notes.appendChild(note);
}
