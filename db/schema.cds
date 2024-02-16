namespace upload;

using{
    cuid,
    managed

}from '@sap/cds/common';

entity up{
    key id: String;
    fname: String;
}

entity Files: cuid, managed{
@Core.MediaType: mediaType
content: LargeBinary;
@Core.IsMediaType: true
mediaType: String;
fileName:String;
size: Integer;
url: String;
}