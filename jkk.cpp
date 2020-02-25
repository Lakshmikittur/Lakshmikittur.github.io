#include<iostream>
#include<string>
#include<sstream>
#include<vector>
#include<cmath>
using namespace std;
int main()
{
    string number;
    cin>>number;

    vector<float> dec3(10);
    dec3[1]=1.001;
    float v = 0;

    for(int i=2;i<=9;i++)
    {
        dec3[i]=dec3[i-1]+0.001;
    }
    vector<float> pieces;
    string firstPart,secondPart;
    {
        vector <string> tokens; 
        stringstream check1(number); 
        
        string intermediate; 
       
        
        // Tokenizing w.r.t. space '.' 
        while(getline(check1, intermediate, '.')) 
        { 
            tokens.push_back(intermediate); 
        } 
        
        firstPart=tokens[0];

        if(number.find('.')!=string::npos)
        secondPart=tokens[1];

        else
        {
            secondPart= "";
            if(stoi(firstPart)<25)
            {
                pieces.push_back(stoi(firstPart));
            }
        }
        
      }

        float num=stof(number);
        

        int secondlen = secondPart.length();
        cout<<secondlen<<"Secondlen"<<endl;
        switch(secondlen)
        {
            case 4: num-=1.0005;
                    pieces.push_back(1.0005);
                    cout<<"case 4 "<<num<<endl;
                    

            case 3: if(secondPart[2]!='0'){
                    float dec3chosen = dec3[stoi(to_string(secondPart[2]))-48];
                    
                    num-=dec3chosen;
                     cout<<"case 3 "<<num<<endl;
                     // cout<<"case 3 dec3chosen "<<dec3chosen<<endl;
                    pieces.push_back(dec3chosen);
                    }

            case 2: if(secondPart[1]=='0')
                    {
                        
                    }
                    else if(stoi(to_string(secondPart[0]))-48 < 5)
                    {
                        float x = num-floor(num);
                        num-= x+1;
                        cout<<"(int)secondPart[0])"<<stoi(to_string(secondPart[0]))-48<<endl;
                         //cout<<"case 2 < 5 num  "<<num<<"x is"<<x<<endl;
                        pieces.push_back(x+1);
                    }
                    else if(stoi(to_string(secondPart[0]))-48 >= 5)
                    {
                        int zzzz=(int)num;
                        float zxz=zzzz;
                        //cout<<"zzz"<<zxz<<endl;
                        float x = num-zxz;
                        float y = x - 0.50;
                        //cout<<"x=";
                        num -= y+1.0;
                         cout<<"case 2 < 5 num and x "<<num<<" x is"<<x<<endl;
                        pieces.push_back(y+1);
                    }

            case 1: if(secondPart[1]!='0')
                    {
                        cout<<"case1"<<endl;
                        for(float x = 24.5;x>=0.5;x=x-0.5)
                        {
                            if(fmod((num-x),25) == 0)
                            {
                                v = (num-x);
                                pieces.push_back(x);
                                break;
                            }
                        }
                    }
                    
        }       

        if(stoi(firstPart)<25)
        {
            
        }
        else
        {
            cout<<"Else Part"<<endl;

            if(v==0){
                v=num;
            }

            while(v!=0){
                    if(v>=100)
                    {
                        v-=100;
                        pieces.push_back(100);

                    }
                    else if(v>=75)
                    {
                        v-=75;
                        pieces.push_back(75);
                    }
                    else if(v>=50)
                    {
                        v-=50;
                        pieces.push_back(50);
                    }
                    else if(v>=25){
                        v-=25;
                            pieces.push_back(25);
                    }
                    else if(v>=0.5 && v<=24.5)
                    {
                        pieces.push_back(v);
                        v-=v;
                    }
            }
        }
        
        for(auto i=pieces.begin();i!=pieces.end();i++)
        {
            cout<<*i<<endl;
        }
      
     return 0;

}