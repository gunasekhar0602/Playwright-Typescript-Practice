import fs,{Utf8Stream} from 'fs';

import{parse} from'csv-parse/sync';
import { json } from 'stream/consumers';
import { tr } from '@faker-js/faker';


export class DataProvider
{
    static getDatafromJson(filepath:string)
    {
        let data:any=JSON.parse(fs.readFileSync(filepath,'utf-8'));
        return data;
    }


    static getTestDataFrpmCsv(filepath:string)
    {
        let data:any=parse(fs.readFileSync(filepath),{columns:true,skip_empty_lines:true});
        return data;
    }
}