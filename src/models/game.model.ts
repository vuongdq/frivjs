export class Game{
    id?: number;
    categoryID?:number;
    gameTitle?: string;
    gameDescription?:string;
    gameImage?:string;
    gameFile?:string;
    constructor(id,categoryID,gameTitle,gameDescription,gameImage,gameFile){
        if(id !=null) this.id =id;
        if(categoryID !=null) this.categoryID =categoryID;
        if(gameTitle !=null) this.gameTitle =gameTitle;
        if(gameDescription !=null) this.gameDescription =gameDescription;
        if(gameImage !=null) this.gameImage =gameImage;
        if(gameFile !=null) this.gameFile =gameFile;
    };
}