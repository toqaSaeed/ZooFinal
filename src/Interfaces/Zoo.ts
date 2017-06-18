export interface Zoo {
    _id:string;
    Title:string;
    Description:string;
    Link:string;
    OpeningTime:Date;
    ClosedTime:Date;
    OffDay:string;
    SeasonStartDate:Date;
    SeasonEndDate:Date;
    Location:{
        Longitude:number,
        Latitude:number
        
    };
    Image:string;

}

