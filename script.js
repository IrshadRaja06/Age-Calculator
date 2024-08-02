function calculate(){
    let tdate= new Date();
    let tyear = tdate.getFullYear();
    let tmonth = tdate.getMonth()+1;
    let tday = tdate.getDate();
    
    let date = document.getElementById('date');
    if(date.value===''){
        document.getElementById('p').innerHTML=`<span class="text-danger">Fill the required birthday date</span>`;
        return}
    date.max= new Date().toISOString().split("T")[0];
    let gdate = new Date(date.value);
    let gyear = gdate.getFullYear();
    let gmonth = gdate.getMonth()+1;
    let gday = gdate.getDate();

    let year = tyear-gyear;
    let month,day;
    if(tmonth>=gmonth){
        month = tmonth-gmonth;
    }
    else{
        year--;
        month = 12+tmonth-gmonth;
    }
    if(tday>=gday){
        day = tday-gday;
    }
    else{
        month--;
        day = (new Date(gyear,gmonth,0).getDate())+tday-gday;
    }

    document.getElementById('p').innerHTML = `You are <span class="fw-bold">${year}</span> Year <span class="fw-bold">${month}</span> month and <br><span class="fw-bold">${day}</span> days Old`;

    document.getElementById('date').value='';

}