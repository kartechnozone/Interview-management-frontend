export interface PanelData{
  id:number;
  name:string;
  email:string;
  stream_id: number;
  stream_name:string;  
}
export interface panelStatus{
    id:number;
    Panel_member_id:number;
    Panel_member_name:string;
    Round_number:number;
    Round_name:string;
    Candidate_id:number;
    Candidate_name:string;
    project_id:number;
    project_name:string;
    stream_id:number;
    stream_name:string;
    status:string;
    rating:number;
    remarks:string;
}