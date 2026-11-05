class ApiResponse {

    constructor(statusCode ,data ,message ="Success")
    {
        this.message =message
        this.data =data
        this.statusCode =statusCode
        this.sucess =statusCode<400 //status code are usually set 99 to 600 there are many status code but  we  usually prefer industries standard code many company likke amazon google are set status code like api response is between 99 to 199 and if client side error so we send 400 to 499 code there are many code for status code.



    }
}