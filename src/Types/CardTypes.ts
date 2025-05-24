


export interface PartValuesGroup{
    quantity: number,
    platinum: number
}

export interface SetValuesGroup{
    sets: number,
    plat: number
    
}

export interface CardData{
     name: string,
      type: string,
      img:string,
       plat: number,
        sets: number,
         parts: PartValuesGroup[] };