function modd(a,b) 
{ 
    return Number((a - (Math.floor(a / b) * b)).toPrecision(8)); 
};


function calculate()
{
    $("#myTable").hide();
    $("#resultBody").html("");

    
    var number=$("#input1").val();


    if(number=="")
    {

        $("#input1").val("");
        $("#input1-span").text("Give valid input");
        $("#input1-span").show();
        return;
    }
    var dec3=new Array(10);
    var pieces =[];
    var piecess =[];
    dec3[1]=1.001;
    var v = 0;

    for(var i=2;i<=9;i++)
    {
        dec3[i]=dec3[i-1]+0.001;
    }

    var firstPart,secondPart;
    
        var tokens=number.split(".");
        
        firstPart=tokens[0];
       // console.log(firstPart);
       // console.log(number.indexOf("."));
        if(number.indexOf(".")!= -1 ){
            secondPart=tokens[1];
           
            var secondlen = secondPart.length;
            if(secondlen>4)
            {
                $("#input1").val("");
                $("#input1-span").text("Decimal part can't exceed 4 places");
                $("#input1-span").show();
                return;
            }
        }
        else
        {
            secondPart= "";
            if(parseInt(firstPart)<25)
            {
                pieces.push(parseInt(firstPart));
                piecess.push("Series 3");
            }
        }
        
      
        var num = parseFloat(number);
        if(num>200 || num<=0)
        {
            $("#input1").val("");
            $("#input1-span").text("Number should be within range of 0.5 to 200");
            $("#input1-span").show();
            return;
        }
        console.log(num+"num1");
        
        console.log(secondPart);
        var secondlen = secondPart.length;
        console.log(secondlen);
        switch(secondlen)
        {
            case 4: num-=1.0005;
                    pieces.push(1.0005);
                    piecess.push("Series 5");
                    console.log(num+ " case 4");
                    //cout<<"case 4 "<<num<<endl;
                    

            case 3: if(secondPart[2]!='0'){
                    var dec3chosen = dec3[parseInt(secondPart[2])];
                    console.log(parseInt(secondPart[2]));
                    num-=dec3chosen;
                    console.log(num+ " case 3");
                    console.log(dec3chosen+ " case 3");
                     // cout<<"case 3 dec3chosen "<<dec3chosen<<endl;
                    pieces.push(Number((dec3chosen).toFixed(3)));
                    piecess.push("Series 1");
                    }

            case 2: if(secondPart[1]=='0')
                    {
                        
                    }
                    else if(parseInt(secondPart[0]) < 5)
                    {
                        var x = num-Math.floor(num);
                        num-= x+1;
                       // cout<<"(int)secondPart[0])"<<stoi(to_string(secondPart[0]))-48<<endl;
                         //cout<<"case 2 < 5 num  "<<num<<"x is"<<x<<endl;
                        pieces.push(Number((x+1).toFixed(2)));
                        piecess.push("Series 2");
                    }
                    else if(parseInt(secondPart[0]) >= 5)
                    {
                        var zzzz=parseInt(num);
                        var zxz=zzzz;
                        //cout<<"zzz"<<zxz<<endl;
                        var x = num-zxz;
                        var y = x - 0.50;
                        //cout<<"x=";
                        num -= y+1.0;
                         //cout<<"case 2 < 5 num and x "<<num<<" x is"<<x<<endl;
                        pieces.push(Number((y+1).toFixed(2)));
                        piecess.push("Series 2");
                    }

            case 1: if(secondPart[1]!='0')
                    {
                        for(var x = 24.5;x>=0.5;x=x-0.5)
                        {
                            if(modd((num-x),25) == 0)
                            {
                                v = (num-x);
                                pieces.push(Number((x).toFixed(1)));
                                piecess.push("Series 3");
                                break;
                            }
                        }
                    }
                    
        }
        if(parseInt(firstPart)<25)
        {

        }
        else
        {
            if(v==0){
                v=num;
            }
            while(v>0){
                    if(v>=100)
                    {
                        v-=100;
                        pieces.push(100);
                        piecess.push("Series 4");

                    }
                    else if(v>=75)
                    {
                        v-=75;
                        pieces.push(75);
                        piecess.push("Series 4");
                    }
                    else if(v>=50)
                    {
                        v-=50;
                        pieces.push(50);
                        piecess.push("Series 4");
                    }
                    else if(v>=25){
                        v-=25;
                            pieces.push(25);
                            piecess.push("Series 4");
                    }
                    else if(v>=0.5 && v<=24.5)
                    {
                        pieces.push(v);
                        piecess.push("Series 3");
                        v-=v;
                    }
            }
        }  
                   
                    

                                  
                   
                    var lennnn=pieces.length;
                    $("#myTable").show();
                    for(var i=0;i<lennnn;i++)
                    {
                        $("#resultBody").append("<tr><td></td><td>"+piecess[i]+"</td><td>"+pieces[i]+"</td><td></td></tr>");
                    }
        

        
    

}