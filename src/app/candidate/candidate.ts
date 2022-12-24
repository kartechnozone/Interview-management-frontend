export interface candidateData{
    id:number;
    name:string;
    email:string;
    mobile: number;
    entry_type:number;
    project_id:number;
    stream_id:number;

}

export interface candidateDetail{
    id:number;
    name:string;
    email:string;
    mobile: number;
    entry_type:number;
    project_id:number;
    project_name:string
    stream_id:number;
    stream_name:string;
    
}

export interface candidateStatus{
    id:number;
    Candidate_id:number;
    Candidate_name:number;
    Round_number:number;
    Round_name:string;
    Panel_id:number;
    Panel_member_name:string;
    project_id:number;
    project_name:string;
    stream_id:number;
    stream_name:string;
    status:string;
    rating:number;
    remarks:string;
}

export interface projectData{
    id:number;
    name:string;
    Description:string;
}

export interface projectCandidate{
    Candidate_id:number;
    Candidate_name:string;
    entry_type:string;
    project_id:number;
    project_name:string;
    status_name:string;
}