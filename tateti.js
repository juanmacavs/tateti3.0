var turno = 0;
const tateti = [];

const botPulsado = (e, pos) =>{
    if (tateti [pos]){
        alert('Error');
        return;
    }
    turno ++;
    const bot = e.target;
    const color = turno % 2 ? 'blue': 'red'
    bot.classList.add(turno % 2 ? 'player1': 'player2')
    tateti[pos] = color;
    if (ganaste())alert('Gano el color ' + color)
    if (Empate(turno))alert('Empate')
}
const ganaste = () =>{
    if (tateti[0] == tateti[1] && tateti[0] == tateti[2] && tateti[0]){
        return true;
    }
    else if (tateti[3] == tateti[4] && tateti[3] == tateti[5] && tateti[3]){
        return true;
    }
    else if (tateti[6] == tateti[7] && tateti[6] == tateti[8] && tateti[6]){
        return true;
    }
    else if (tateti[0] == tateti[3] && tateti[0] == tateti[6] && tateti[0]){
        return true;
    }
    else if (tateti[1] == tateti[4] && tateti[1] == tateti[7] && tateti[1]){
        return true;
    }
    else if (tateti[2] == tateti[5] && tateti[2] == tateti[8] && tateti[2]){
        return true;
    }
    else if (tateti[0] == tateti[4] && tateti[0] == tateti[8] && tateti[0]){
        return true;
    }
    else if (tateti[2] == tateti[4] && tateti[2] == tateti[6] && tateti[2]){
        return true;
    }
    return false;
        
    }
const Empate = (turno) =>{
    if (!ganaste() && turno >= 9){
    return true;
    }   
}

document.querySelectorAll('button').forEach((obj, i) =>
 obj.addEventListener('click' , (e) => botPulsado(e, i)));


