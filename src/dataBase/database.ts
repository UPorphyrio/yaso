interface DataBaseConfig{
    port:number
    host:string
    table?:string
}
import mysql from "mysql";
import mongoose from "mongoose";
class database{
    connect:Object;
    static sql(config:DataBaseConfig):void{
        var {port=27017,host="127.0.0.1",table} = config;
    }
    static mongo(config:DataBaseConfig) {
        var {port=3306,host="127.0.0.1",table} = config;
    }
}
export {database}