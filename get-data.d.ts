interface DataEvents{
    type: string;
    title: string;
    source: string;
    time: string;
    description: string;
    icon: string;
    size:string;
    data?: { [key:string] : any } 
}
