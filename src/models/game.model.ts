export class Game{
    id?: number;
    categoryID?:number;
    gameTitle?: string;
    gameDescription?:string;
    gameImage?:string;
    gameFile?:string;
    constructor(id,categoryID,gameTitle,gameDescription,gameImage,gameFile){
        if(id !=undefined) this.id =id;
        if(categoryID !=undefined) this.categoryID =categoryID;
        if(gameTitle !=undefined) this.gameTitle =gameTitle;
        if(gameDescription !=undefined) this.gameDescription =gameDescription;
        if(gameImage !=undefined) this.gameImage =gameImage;
        if(gameFile !=undefined) this.gameFile =gameFile;
    };
}