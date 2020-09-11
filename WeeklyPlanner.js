class WeeklyPlanner{
    constructor(){
        this.Text=createElement("h2");
        //declare variables for day, time slot and activity
        this.Mon=createElement("h2");
        this.Tue=createElement("h2");
        this.Wed=createElement("h2");
        this.Thu=createElement("h2");
        this.Fri=createElement("h2");
        this.Sat=createElement("h2");
        this.Sun=createElement("h2");

        this.m1=createInput("");
        this.m2=createInput("");
        this.m3=createInput("");
        this.m4=createInput("");
        this.m5=createInput("");
        this.m6=createInput("");
        this.m7=createInput("");
        this.m8=createInput("");
        this.m9=createInput("");
        //this.m10=createInput("");
        
        this.t1=createInput("");
        this.t2=createInput("");
        this.t3=createInput("");
        this.t4=createInput("");
        this.t5=createInput("");
        this.t6=createInput("");
        this.t7=createInput("");
        this.t8=createInput("");
        this.t9=createInput("");
        //this.t10=createInput("");
 
        this.w1=createInput("");
        this.w2=createInput("");
        this.w3=createInput("");
        this.w4=createInput("");
        this.w5=createInput("");
        this.w6=createInput("");
        this.w7=createInput("");
        this.w8=createInput("");
        this.w9=createInput("");
        //this.w10=createInput("");
        
        
        
        

    }
    display(){
        this.Text.position(200,100);
        this.Text.html("YOUR WEEKLY PLANNER"+"</br>"+"Here you can get a totally empty table where you can give a time slot with assigned task, as you like it.")
   
        this.Mon.position(150,200);
        this.Tue.position(350,200);
        this.Wed.position(550,200);
        this.Thu.position(750,200);
        this.Fri.position(950,200);
        this.Sat.position(1150,200);
        this.Sun.position(1350,200);

        this.Mon.html("Monday");
        this.Tue.html("Tuesday");
        this.Wed.html("Wednesday");
        this.Thu.html("Thursday");
        this.Fri.html("Friday");
        this.Sat.html("Saturday");
        this.Sun.html("Sunday");

        this.m1.position(150,250);
        this.m2.position(150,310);
        this.m3.position(150,370);
        this.m4.position(150,430);
        this.m5.position(150,490);
        this.m6.position(150,550);
        this.m7.position(150,610);
        this.m8.position(150,670);
        this.m9.position(150,730);
        
    }
}