function somar(){
    var nome = document.querySelector('input#nome').value
    var salario = Number(document.querySelector('input#salario').value)
    var adiantamento = document.querySelector('input#adiant').value
    var venda_mes = Number(document.querySelector('input#vendas').value)
    var porc_comissao = Number(document.querySelector('input#porc_comissao').value)
    var desc_inss8_e_passagens6 = (salario * 14) / 100
    var sal_comdesc = salario - desc_inss8_e_passagens6
    var comissao = (venda_mes * porc_comissao) / 100
    
    if (adiantamento == 'sim'){
    sal_comadiant = ((salario * 40) / 100) - sal_comdesc
        res.innerHTML = `Seu salario com descondo do adiantamento é ${sal_comadiant}.` 
        res2.innerHTML = `Sua comissão e´de: ${comissao}.` 
    }else {
        res.innerHTML = `Olá <b>${nome}</b>, seu salario este mês é: R$${sal_comdesc}.</b>`
        res2.innerHTML = `Sua comissão é de: ${comissao}.` 
        
    }
}   