// f(x) = ax2 + bx + x
// f(x) = ax + b

function sinal(nu) {
    if (nu.length != 2) {
        let vN = nu;
        return `+${vN}`
    } else {
        return nu
    }
}

let txt = "f(x) = 1x2 -4x -5"

const rP1 = /[0-9]x/i;
const rP2 = /[0-9]x2/i;
const rC = /[0-9]/i;

{ //Função polinominal de primeiro grau - Diz o tipo da função
    var g = '';
    if (rP2.exec(txt) != null) {
        var g = "segundo";
    } else { var g = "primeiro" };
    var r = `Função polinominal de ${g} grau`;
    //console.log(r);
}

if (rP2.exec(txt) != null) { //Segundo Grau = Possue Polinomio de segundo grau

    let p2 = rP2.exec(txt)[0]; //polinomio de segundo grau
    let p1 = rP1.exec(txt.replace(rP2, ''))[0]; //polinomio de primeiro grau
    let cc = rC.exec(txt.replace(rP2, '').replace(rP1, ''))[0]; //coeficiente

    let c1 = p2.replace(/x2/i, '')[0];
    let c2 = p1.replace(/x/i, '')[0];
    let c3 = cc;

    //let func = `f(x) = ${c1}x2 ${sinal(c2)}x ${sinal(c3)}`;
    //let zero = `${c1}x2 ${sinal(c2)}x ${sinal(c3)} = 0`;

    let a = 1, b = -4, c = -5;
    var delta = b**2 - 4 * a * c;
    

    let func = `f(x) = ${a}x2 ${b}x ${c}`;
    let zero = `${a}x2 ${b}x ${c} = 0`;

    { //Cavidade Crescente ou Decrescente
        var cavidade = '';
        if (a > 0) {
            var cavidade = "a > 0 : Crescente" ;
        } else { var cavidade = "a < 0 : Decrescente" };
    }

    { //Grafico corte do eixo X
        var corte = '';
        if (delta > 0) {
            var corte = "Delta > 0 : corta o eixo X em dois pontos(suas raízes)";
        }
        if (delta == 0) {
            var corte = "Delta = 0 : corta o eixo X em apenas um ponto(única raíz da função)";
        }
        if (delta < 0) {
            var corte = "Delta < 0 : não corta o eixo X pois não possui raízes reais";
        }
    }

    { //Saber se possue restrição
        var dominio = "Reta Real";
    }

    {

        

        let x1 = (-b + (delta**(1/2)))/2*a
        let x2 = (-b - (delta**(1/2)))/2*a

        txt = '';
        txt += "\n" + func;
        txt += "\n" + r;
        txt += "\n" + zero;
        txt += "\n" + `x1 = ${x1} \nx2 = ${x2}`;
        txt += "\n" + cavidade;
        txt += "\n" + corte;
        txt += "\n" + `Dominio: ${dominio}`;
        txt += "\n";

        console.log(txt);
    }
}


