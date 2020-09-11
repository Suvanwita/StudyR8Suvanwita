class MonthlyPlanner{
    constructor(){
        this.Text=createElement("h2");
        this.week1=createInput("");
        this.week2=createInput("");
        this.week3=createInput("");
        this.week4=createInput("");
        this.goal1=createInput("");
        this.goal2=createInput("");
        this.goal3=createInput("");
        this.goal4=createInput("");
    
    }
    display(){
        this.Text.position(200,100);
        this.Text.html("YEARLY PLANNER"+"</br>"+"Here you can make your monthly study plans."+"</br>"+"Make a list of dates to accomplish a task.");

        this.week1.position(250,300);
        this.week2.position(250,400);
        this.week3.position(250,500);
        this.week4.position(250,600);

        this.goal1.position(400,300);
        this.goal2.position(400,400);
        this.goal3.position(400,500);
        this.goal4.position(400,600);
        
    }
}