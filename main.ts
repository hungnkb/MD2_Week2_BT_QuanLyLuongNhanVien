import { Node } from "./Node";
import { LinkedList } from "./LinkedList";

let salaryManager = new LinkedList;

salaryManager.addNodeFirst(1, 20000);
salaryManager.addNodeFirst(2, 90000);
salaryManager.addNodeFirst(3, 70000);
salaryManager.addNodeFirst(4, 20000);
salaryManager.addNodeFirst(5, 90000);

console.log(salaryManager.showNodeList());
console.log(salaryManager.totalSalary());
console.log(salaryManager.findMaxSalaryMonth());

