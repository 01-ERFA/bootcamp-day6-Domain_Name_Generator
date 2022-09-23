
//   0   0     0
// thegreatjogger.com
//   0   0    1
// thegreatracoon.com
//  1    0    0
// ourgreatjogger.com
//   1   0    1
// ourgreatracoon.com


//   0  1   0 
// thebigjogger.com
//   0  1   1
// thebigracoon.com
//   1  1   0
// ourbigjogger.com
//  1   1   1
// ourbigracoon.com

let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let extenciones = [".com", ".net", ".us", ".io"]

for (let i = 0; i < pronoun.length; i++) {
    for(let j = 0; j < adj.length; j++) {
        for(let n = 0; n<noun.length; n++) {
            for(let u = 0; u<extenciones.length;u++)
            console.log(pronoun[i].concat(adj[j], noun[n], extenciones[u]))
        }
    }
}
