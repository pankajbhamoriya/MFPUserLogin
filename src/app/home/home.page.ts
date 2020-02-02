import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usersList:any[]=[];
  nodeList:any[]=[];
  data:String;
  constructor(public http: HttpClient){
    console.log("Reading json data")
    this.http.get(
      "https://randomuser.me/api/?results=5").subscribe(data=>{
//process the json data
console.log(this.http.get("'http://mpradip.ntpc.co.in/mfp/api/adapters/SampleHttpAdapter/Alerts?params=['Severity=3','','']"))
console.log(data)
this.data=JSON.stringify(data)
this.usersList=data["results"]
})

this.http.get(
  "http://mpradip.ntpc.co.in/mfp/api/adapters/SampleHttpAdapter/Alerts?params=['Severity=3','','']").subscribe(data=>{
//process the json data
console.log(this.http.get("http://mpradip.ntpc.co.in/mfp/api/adapters/SampleHttpAdapter/Alerts?params=['Severity=3','','']"))
this.data=JSON.parse(<string>data);
this.nodeList=data["rows"]
console.log(this.nodeList)
})
}

}
