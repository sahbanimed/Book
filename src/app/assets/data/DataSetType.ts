export class Pdf{
    isAvailable:Boolean;
    acsTokenLink:String
    constructor(){
        this.isAvailable=false;
        this.acsTokenLink="";
    }
}

export class Epub{
    isAvailable:Boolean;
    acsTokenLink:String;
    constructor(){
        this.isAvailable=false;
        this.acsTokenLink="";
    }
}

export class ImagesLinks{
    smallThumbnail:String;
    thumbnail:String;
    constructor(){
        this.smallThumbnail="";
        this.thumbnail="";
    }
}

export class PanelizationSummary{
    containsEpubBubbles:Boolean;
    containsImageBubbles:Boolean;
    constructor(){
        this.containsEpubBubbles=false;
        this.containsImageBubbles=false;
    }
}

export class ReadingModes{
    text:Boolean;
    image:Boolean;
    constructor(){
        this.text=false;
        this.image=false;
    }
}

export class IndustryIdentifiers{
    type:String;
    identifier:String;
    constructor(){
        this.type="";
        this.identifier="";
    }
}

export class AccessInfo{
    country:String;
    viewability:String;
    embeddable:Boolean;
    publicDomain:Boolean;
    textToSpeechPermission:String;
    epub:Epub;
    pdf:Pdf;
    webReaderLink:String;
    accessViewStatus:String;
    quoteSharingAllowed:Boolean;
    constructor(){
        this.country="";
        this.viewability="";
        this.embeddable=false;
        this.publicDomain=false;
        this.textToSpeechPermission=""
        this.epub=new Epub();
        this.pdf=new Pdf();
        this.webReaderLink="";
        this.accessViewStatus="";
        this.quoteSharingAllowed=false;
    }

}

export class SaleInfo{
    country:String;
    saleability:String;
    isEbook:Boolean;
    constructor(){
        this.country="";
        this.saleability="";
        this.isEbook=false;
    }
}

export class VolumeInfo{
    title:String;
    subtitle:String;
    authors:String[];
    publisher:String;
    publishedDate:String;
    description:String;
    industryIdentifiers:IndustryIdentifiers[];
    readingModes:ReadingModes;
    pageCount:String;
    printType:String;
    categories:String[];
    maturityRating:String;
    allowAnonLogging:Boolean;
    contentVersion:String;
    panelizationSummary:PanelizationSummary;
    imageLinks:ImagesLinks;
    language:String;
    previewLink:String;
    infoLink:String;
    canonicalVolumeLink:String;
    constructor(){
        this.title="";
        this.publisher="";
        this.industryIdentifiers=[new IndustryIdentifiers()];
        this.readingModes=new ReadingModes();
        this.printType="";
        this.maturityRating="";
        this.allowAnonLogging=false;
        this.contentVersion="";
        this.panelizationSummary=new PanelizationSummary();
        this.imageLinks=new ImagesLinks();
        this.language="";
        this.previewLink="";
        this.infoLink="";
        this.canonicalVolumeLink="";
    }
}

export class Item{
    kind:String;
    id:String;
    etag:String;
    selfLink:String;
    volumeInfo:VolumeInfo;
    saleInfo:SaleInfo;
    accessInfo:AccessInfo;
    constructor(){
        this.kind="";
        this.id="";
        this.etag="";
        this.selfLink="";
        this.volumeInfo=new VolumeInfo();
        this.saleInfo=new SaleInfo();
        this.accessInfo=new AccessInfo();
    }
}

export class DataJSON {
    kind:String;
    totalItems:number;
    items: Item[];
    constructor(){
        
        this.items =[ new Item()];
    }
}