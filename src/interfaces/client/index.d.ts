export interface IClientCreate {
    client_name:           string;
    client_number:         string;
    next_procediment_date: Date;
    observations:          string;
}

export interface IClientUpdate {
    id:                    string;
    client_number:         string;
    next_procediment_date: string;
    observations:          string;
}