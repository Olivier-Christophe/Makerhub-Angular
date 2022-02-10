export interface Sample{
    auteur:string;
    titre:string;
    sampleId:number
    url:string
    categories : string[]
}

export interface Category{
    name : string[]
    results:Sample[]
    CategoryId:number;
}
