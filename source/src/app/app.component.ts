import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'smartcity';



  getStringFromCSV(file:File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  onChange($event:any){
    //console.log($event)
    let file = $event.target.files[0];
    this.getStringFromCSV(file).then((data)=>{
      let ctj = require('convert-csv-to-json');
      let jsonArray = ctj.fieldDelimiter(",").csvStringToJson(data);
      let bodyString = "";
      /*
      jsonArray.forEach((x:any)=>{
        let temp = x;
        let id = temp.id;
        let lat = parseInt(temp.lat);
        let lon = parseInt(temp.lon);
        let headerString = '{"index":{"_index":"'+this.category+'","_id":"'+id+'"}}\n';
        let geojson = {"properties":{},"geometry":{"coordinates":[lon,lat]}};

        console.log(x);
      });*/
    });
  }
}
