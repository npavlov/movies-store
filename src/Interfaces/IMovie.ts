enum Genre{
    Comedy,
    Horror,
    Action,
    Decetive,
    Fanastics
}

export interface IMovie{
    id: string;
    label: string;
    genre: Genre
}

export {Genre}