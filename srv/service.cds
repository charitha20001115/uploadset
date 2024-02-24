using upload as fileupload from '../db/schema';

service my {

    entity up_t as projection on fileupload.up;
    entity Files as projection on fileupload.Files;
    //entity sevice
    
}
