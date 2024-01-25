const main = document.querySelector('main');
const phaseBlock = document.getElementById('phaseblock');
const text = document.querySelector('span');
const phasesList = ["Tenha coragem em todas as circunstâncias da vida. Por piores que lhe pareça as dificuldades, tenha a certeza de que pode supera-las com a persistência e a força que provêm de seu íntimo. Deus está dentro de cada um de nós, pronto a dar-nós energia e vigor, ânimo e incentivo. Confe na bondade do Pai, que jamais desampara nenhum de seus filhos ", "Seja sempre nobre em sua expressão de trabalho, se quiser atrair para si a nobreza dos companheiros de luta. Demonstre sempre, inicialmente, a sua própria nobreza, para que is outros se mirem no seu exemplo e o imitem. seja bem educado, antes de exigir que os outros sejam. A força do exemplo é a mais convincente e eficaz que existe no mundo. Vale mais um exemplo que milhares de palavras. Dê você, em primeiro lugar, o bom exemplo em sua conduta", "Matenha seu bom humor em todas as circunstâncias. E procure manter vivo o bom humor de todos os que cercam na vida. A alegria é um medicamento divino. A tristeza, ao contrário, nos mergulha num oceano de lama, que salpica e suja aos que de nós se aproximam. Mesmo entre sofrimentos e dores, busque ser alegre,  porque a alegria é o melhor remédio para nos dar felicidade", "Sua irritação não solucionará problema algum! Medite na grande vantagem de não irritar-se, para nõ prejudicar sua saúde. Se você não se iiritar, seu interlocutor voltará aos poucos á serenidade, e todos poderão entender-se.Seja calmo. Pense bastante antes de falar. E não se irrite, porque a irritação não pode solucionar nenhum problema"];

function sizePhaseBlock(){
    phaseBlock.style.padding = '2rem';
    phaseBlock.style.backgroundColor = '#ffffff';
    phaseBlock.style.marginBottom = '2rem';
    phaseBlock.style.borderRadius = '10px'
    
}

function writePhase(){
    let num = parseInt(Math.random() * 4)
    console.log(num)
    text.innerText =`${phasesList[num]}`;
}

document.getElementById('buttonBox').addEventListener('click', ()=>{
    sizePhaseBlock()
    writePhase() 
})


