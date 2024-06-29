let dragCards=document.querySelectorAll(".draggables")
let containerCards=document.querySelectorAll(".container")
dragCards.forEach((dragCard)=>{
    dragCard.addEventListener("dragstart",(e)=>{
        //starts when drag happens
        e.dataTransfer.setData('text/plain',e.target.id)

        dragCard.classList.add("dragging")
        
    })
    dragCard.addEventListener("dragend",(e)=>{
        //starts when drag ends
        
        dragCard.classList.remove("dragging")
    })
})
containerCards.forEach((container)=>{
    // enable drop in
    container.addEventListener("dragover",(e)=>{
        e.preventDefault();
        let draggedCard=document.querySelector(".dragging")
        container.append(draggedCard)
    })
})