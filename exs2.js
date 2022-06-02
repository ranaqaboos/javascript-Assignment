
const p1=[{id:1 ,Name:'mohammed',age:18,level:'intermadeate',taskscompleted:8},
{id:2 ,Name:'omer',age:22,level:'beginner',taskscompleted:2},
{id:3,Name:'Sarah',age:20,level:'beginner',tasksCompleted:4},
{id:4,Name:'Saleh',age:15,level:'intermediate',tasksCompleted:6},
{id:5,Name:'Saud',age:30,level:'advanced',tasksCompleted:10},
{id:6,Name:'Amani',age:25 ,level:'advanced',tasksCompleted:10},
{id:7,Name:'Lojain',age:23,level:'advanced',tasksCompleted:10}]
let tasks1; 
for(const row of p1){
 //const taskss = p1.filter((taskss, i) => i == tasks1)
 let tasks1 = p1.map( item =>( { age:item.age ,tasksCompleted: item.tasksCompleted === 10}))
 //const taskss = p1.filter((p1, i) => i == tasks1)
}
//  let tasks2 = p1.sort((a, b) => b.id - a.id)
//  const tasks3= p1.filter( person => person.age >=25)

//  for (let i = 0; i < p1.length; i++) {
//       p1[i].result = 'passed,'
//     let tasks11= p1.slice ()
//     }
  console.log(tasks1);
  