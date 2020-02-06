import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usersList:any[]=[];
  data:String;
  constructor(public http: HttpClient){
    console.log("Reading json data")
    this.http.get("https://randomuser.me/api/?results=5").subscribe(data=>{
//process the json data
console.log(data)
this.data=JSON.stringify(data)
this.usersList=data["results"]})

var resourceRequest = new WLResourceRequest(
  "/adapters/SampleHttpAdapter/Alerts",
  WLResourceRequest.GET
);

resourceRequest.setQueryParameter("params", "['Severity=3','','']");

resourceRequest.send().then(
  function(response) {
      alert(JSON.stringify(response));
  },
  function(error) {
      alert(JSON.stringify(error));
  }
);
}

}
