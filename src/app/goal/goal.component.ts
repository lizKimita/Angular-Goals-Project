import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
  
export class GoalComponent implements OnInit {

  goals = [
    new Goal(1, 'Watch Finding Nemo', 'Cause I love animations', new Date(2019,3,6)),
    new Goal(2, 'Buying Cookies', 'I just love the damn things',new Date(2018,4,29)),
    new Goal(3, 'Get a New Phone Case', 'Mine is just old', new Date(2019,1,30)),
    new Goal(4, 'Buy New Shoes', 'What can I say, am a shoe-addict', new Date(2019,5,10)),
    new Goal(5, 'Call mom', 'Love that woman', new Date(2020,0,28)),
    new Goal(6, 'Visit Ngesh in Rongai','We have alot to catch up on',new Date(2019,7,4)),
  ]

  toggleDetails (i) {
    this.goals [i].showDescription = !this.goals[i].showDescription;
  }

  deleteGoal (isComplete, index) {
    if (isComplete) {
      let toDelete = confirm (`Are you sure you want to delete ${this.goals[index].name}`)
    
    if (toDelete) {
      this.goals.splice (index,1);
    }
  }
}

addNewGoal(goal){
  let goalLength = this.goals.length;
  goal.id = goalLength+1;
  goal.completeDate = new Date (goal.completeDate)
  this.goals.push(goal)
}
  constructor() { }

  ngOnInit() {
  }

}
