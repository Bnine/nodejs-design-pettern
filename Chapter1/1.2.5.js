/*
const profiles = new Map();
profiles.set('twitter', 'bnine@twiter');
profiles.set('facebook', 'bnine@facebook');
profiles.set('google', 'bnine@gmail');

console.log(profiles.size);
console.log(profiles.has('twitter'));
console.log(profiles.has('facebook'));
console.log(profiles.has('google'));
console.log(profiles.has('youtube'));
console.log(profiles.delete('facebook'));
console.log(profiles.has('facebook'));
console.log(profiles.get('facebook'));
for(const profile of profiles) {
   console.log(profile); 
}
*/
/*
const tests = new Map();
tests.set(() => 2+2, 4);
tests.set(() => 2*2, 4);
tests.set(() => 2/2, 1);
tests.set(() => 2-2, 1);

for (const test of tests) {
    console.log((test[0]() === test[1]) ? 'pass' : 'fail');
}
*/

const s = new Set([0,1,2,3]);
console.log(s.add(3));
console.log(s.add(4));
console.log(s.size);
console.log(s.delete(0));
console.log(s.has(3));

for (const entry of s){
    console.log(entry);
}