export interface SearchInstitutions {
  pid: string;
  name: string;
}

export interface GetInstitutions {
  id: number;
  name: string;
  number: string;
  pid: string;
}

export interface CreateInstitution {
  pid: number;
  name: string;
  number: number;
}
