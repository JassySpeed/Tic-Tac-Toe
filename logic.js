// print ho in box
let turn="O";
let total_turn=0;
const img1=document.getElementById('p1');
const img2=document.getElementById('p2');
img1.style.scale=1.2;

let winner=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

let board_array=new Array(9).fill("E");

function checkwinner()
{
    for(let [index0,index1,index2] of winner)
    {
        if(board_array[index0]!="E" && board_array[index1]!="E" && board_array[index2]!="E" && board_array[index0]===board_array[index1] && board_array[index1]===board_array[index2])
            return 1;
    }

    return 0;
}

const printer=(event)=>{
    // console.log(event.target.id);

    const element=event.target;

    if(board_array[element.id]==="E")
    {
        total_turn++;
        if(turn==="O")
        {
            element.innerHTML="O";
            board_array[element.id]="O";
            turn="X";

            img2.style.scale=1.2;
            img1.style.scale=1;

    
            if(checkwinner())
            {
                document.getElementById("winningMessage").innerHTML="Winner is O";
                board.removeEventListener('click',printer);
                img2.style.scale=1;
                img1.style.scale=1;
                return ;
            }
        }
        else
        {
            element.innerHTML="X";
            board_array[element.id]="X";
            turn="O";

            img2.style.scale=1;
            img1.style.scale=1.2;
    
            if(checkwinner())
            {
                document.getElementById("winningMessage").innerHTML="Winner is X";
                board.removeEventListener('click',printer);
                img2.style.scale=1;
                img1.style.scale=1;
                return ;
            }
        }

        if(total_turn===9)
        {
            document.getElementById("winningMessage").innerHTML="Match is Draw";
            board.removeEventListener('click',printer);
            img2.style.scale=1;
            img1.style.scale=1;
            return ;
        }

    }

}

const board=document.getElementById('board');
board.addEventListener('click',printer);


const but=document.getElementById('restart');
but.addEventListener('click',(event)=>{
    const cell=document.getElementsByClassName('first');
    Array.from(cell).forEach((value)=>{
        value.innerHTML="";
    })

    img1.style.scale=1.2;
    img2.style.scale=1;
    turn="O";
    total_turn=0;
    board_array=new Array(9).fill("E");
    board.addEventListener('click',printer);
    document.getElementById("winningMessage").innerHTML="";
})
