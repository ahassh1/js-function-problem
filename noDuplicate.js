const member = ['polash', 'shuba', 'polash', 'dalim', 'shuba', 'shuhashini', 'shinpatan'];
const number = [3, 4,5,6,3,56,,63,2,,3,5,6,7,8];

function uniqueArray(member){
    const unique =[];
   for(const items of member){
    if(unique.includes(items)===false){
        unique.push(items);
    }
   }
   return unique;
}
const unique = uniqueArray(member);
console.log(unique)