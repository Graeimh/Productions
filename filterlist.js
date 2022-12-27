let count = 0;

const datas = [
    { id: 0, name: "Alan", jobs : ['dev junior', 'dev fullstack'], password : "tyeedsa00" },
    { id: 1, name: "Albert", jobs : ['doctor'], password : "tyeidii00" },
    { id: 2, name: "John" , jobs : ['mathematician', 'doctor'], password : "xyuuuoi00"},
    { id: 3, name: "Brice", jobs : ['dev fullstack'] , password : "xytoiab00"},
    { id: 4, name: "Alexandra", jobs : ['dentist'],  password : "aaaoiab33" },
    { id: 5, name: "Brad" },
    { id: 6, name: "Carl" , jobs : ['lead dev', 'dev fullstack']},
    { id: 7, name: "Dallas" , jobs : ['dev fullstack']},
    { id: 8, name: "Dennis", jobs : ['integrator', 'dev fullstack'] },
    { id: 9, name: "Edgar", jobs : ['mathematician'] },
    { id: 10, name: "Erika", jobs : ['computer scientist', 'mathematician'] },
    { id: 11, name: "Isaac", jobs : ['doctor'], password : "Axgkj22Kl" },
    { id: 12, name: "Ian", password : "Axgkj00Kl" },
];

// 1.  le nombre de "doctor"
function isDoctor(item){
    if (item.jobs){
        for (let i = 0; i < item.jobs.length; i++){    
            if (item.jobs[i] === "doctor"){
                count = count+1;
                return true;
            }
        }
    }
    return false;
}

console.log(datas.filter(isDoctor));
console.log(count);
console.log(datas.filter(isDoctor).length);

// 2. les noms des dev fullstack

let names = datas.map(function(element){
    return `${element.name}`;
})

console.log(names);

// 3. les noms de ceux qui n'ont pas de "jobs"

const jobless = datas.map(function(element){
    if (!element.jobs){
        return `${element.name}`
    } else {
        return null;
    }
});

console.log(jobless.filter((names => {
    return names !== null;
    })));
