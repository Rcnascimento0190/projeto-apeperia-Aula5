var nomesDoArray = ['posicao0', 'posicao1', 'posicao2', 'posicao3', 'posicao4'];
var nomesAleatorios = nomesDoArray[Math.floor(Math.random() * nomesDoArray.length)];
var nomeDivididoComSplit = nomesAleatorios.split('');
var letra = nomeDivididoComSplit[Math.floor(Math.random() * nomeDivididoComSplit.length)];

// LOGs
console.log(nomesDoArray); // Valores dentro do Array
console.log('Qual foi pego? -> ' + nomesAleatorios); // Nome aleatório escolhido
console.log('Localização -> ' + nomeDivididoComSplit.indexOf('3')); // Se -1 ==> não encontrou
console.log('Split -> ' + nomeDivididoComSplit); // Separação do nome em um 'novo'0 Array
console.log('Quantas letras ↑ tem? -> ' + nomeDivididoComSplit.length); // 1, 2, 3...
console.log('Letra escolhida -> ' + letra); // Letra que foi escolhida aleatóriamente

for (let i = 0; i < nomeDivididoComSplit.length; i++) {
    if (nomeDivididoComSplit[i] == letra) {
        console.log('Achou ' + letra + ' no indice(posição): ' + i);
    }
}

/** =================================> Explicação <=================================
 * 
 *? Lembrando que na linguagem JavaScript, o índice(leia 'a numeração') começa em 0, e não em 1.
 * 
 *! IndexOf: retorna o indice do elemento na array
 *  Leia 'indice' como 'posição' ou 'localização'
 *  Caso valor não exista, retorna -1
 *  Caso valor exista, retorna o indice do elemento (é como se ele contasse até chegar o valor)
 *  Exemplo: 'posicao0' -> 0 ou 'posicao3' -> 3
 * 
 *! split: divide a string em um array
 *  Exemplo: 'posicao0' -> ['p', 'o', 's', 'i', 'c', 'a', 'o', '0']
 */