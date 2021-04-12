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
  pid: string;
  name: string;
  number: string;
}
