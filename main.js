var cargaHorariaSemanal = 44;
var cargaHorariaMensal = 176;

var saldoHoras = 0;
var Func = prompt('Insira o nome do Funcionário: ')
var horasTrabalhadas = prompt('Informe o total de horas trabalhadas do funcionário nessa semana:', 'Digite aqui');

saldoHoras = horasTrabalhadas - cargaHorariaSemanal;

if (saldoHoras > 0) {
    alert('O funcionário fez' + saldoHoras + ' hora(s) extra(s) nesta semana.');
} else if (saldoHoras < 0) {
    alert('O Funcionário está devendo' + (saldoHoras * -1) + ' horas(s) nesta semana.');
} else {
    alert('O Funcionário não possui hora extra essa semana');
}

saldoHorasMensal = horasTrabalhadas - cargaHorariaMensal;

if (saldoHorasMensal  > 0) {
    alert('O funcionário fez' + saldoHoras + ' hora(s) extra(s) neste Mês.');
} else if (saldoHoras < 0) {
    alert('O Funcionário está devendo' + (saldoHoras * -30) + ' horas(s) neste Mês.');
} else {
    alert('O Funcionário não possui hora extra esse Mês.');
}
